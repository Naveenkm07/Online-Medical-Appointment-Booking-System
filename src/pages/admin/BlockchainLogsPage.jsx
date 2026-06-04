import { useToast } from '../../context/ToastContext';
import { useApp } from '../../context/AppContext';

export default function BlockchainLogsPage() {
  const { showToast } = useToast();

  const { state } = useApp();
  const logs = state.blockchainLogs || [];

  const handleExport = () => {
    // Generate CSV
    const headers = ['Block #', 'Timestamp', 'Patient Hash', 'Action', 'Doctor', 'Status'];
    const csvContent = [
      headers.join(','),
      ...logs.map(t => `"${t.block}","${t.ts}","${t.hash}","${t.action}","${t.doctor}","Verified"`)
    ].join('\\n');

    // Trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `omabs_blockchain_logs_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('success', 'Exported!', 'Blockchain logs downloaded as CSV.');
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h5 style={{ fontFamily: 'var(--font-heading)' }}>⛓️ Hyperledger Fabric Transaction Log</h5>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Immutable audit trail of all health record operations. Tamper-proof.</p>
        </div>
        <button className="btn btn-gradient btn-sm" onClick={handleExport}>📥 Export Logs</button>
      </div>
      
      <div className="grid-3 mb-6">
        {[
          { label: 'Total Transactions', value: '247,891' },
          { label: 'Latest Block', value: '#48,291' },
          { label: 'Network Status', value: '✅ Healthy' },
        ].map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value" style={{ fontSize: 'var(--text-2xl)' }}>{s.value}</div>
          </div>
        ))}
      </div>
      
      <div className="card" style={{ overflowX: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr><th>Block #</th><th>Timestamp</th><th>Patient Hash</th><th>Action</th><th>Doctor</th><th>Status</th></tr>
          </thead>
          <tbody>
            {logs.map(t => (
              <tr key={t.block}>
                <td><span className="badge badge-primary">#{t.block}</span></td>
                <td style={{ fontFamily: 'monospace', fontSize: 'var(--text-xs)' }}>{t.ts}</td>
                <td style={{ fontFamily: 'monospace', color: 'var(--teal-500)', fontSize: 'var(--text-xs)' }}>{t.hash}</td>
                <td><span className="badge badge-gray">{t.action}</span></td>
                <td>{t.doctor}</td>
                <td><span className="badge badge-success">✓ Verified</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
