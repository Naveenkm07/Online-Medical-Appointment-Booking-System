import { useToast } from '../../context/ToastContext';

export default function BlockchainLogsPage() {
  const { showToast } = useToast();

  const logs = [
    { block: '48291', ts: '2025-06-03 21:14:32', hash: '0x7a3f...c291', action: 'Record Created', doctor: 'Dr. Mehta' },
    { block: '48290', ts: '2025-06-03 20:58:11', hash: '0x4b2e...a778', action: 'Record Updated', doctor: 'Dr. Nair' },
    { block: '48289', ts: '2025-06-03 20:41:05', hash: '0x9d1c...f045', action: 'Record Accessed', doctor: 'Dr. Mehta' },
    { block: '48288', ts: '2025-06-03 19:32:47', hash: '0x2f8a...b331', action: 'Record Created', doctor: 'Dr. Rao' },
    { block: '48287', ts: '2025-06-03 18:15:22', hash: '0x8c4d...e912', action: 'Prescription Added', doctor: 'Dr. Nair' },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h5 style={{ fontFamily: 'var(--font-heading)' }}>⛓️ Hyperledger Fabric Transaction Log</h5>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Immutable audit trail of all health record operations. Tamper-proof.</p>
        </div>
        <button className="btn btn-gradient btn-sm" onClick={() => showToast('success', 'Exported!', 'Blockchain logs exported.')}>📥 Export Logs</button>
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
