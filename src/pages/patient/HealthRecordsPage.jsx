import { useToast } from '../../context/ToastContext';

export default function HealthRecordsPage() {
  const { showToast } = useToast();

  const stats = [
    { label: 'Total Records', value: '12', icon: '📋' },
    { label: 'Verified On-Chain', value: '12/12', icon: '⛓️' },
    { label: 'Last Updated', value: 'Jun 3', icon: '🕐' },
    { label: 'Storage Used', value: '2.4 GB', icon: '💾' },
  ];

  const records = [
    { icon: '🩺', title: 'Cardiac Consultation Report', date: 'Jun 3, 2025 — Dr. Priya Mehta', desc: 'Echocardiogram results, medications prescribed, follow-up in 3 months.', hash: '0x7a3f...c291' },
    { icon: '💊', title: 'Prescription — Amlodipine 5mg', date: 'May 28, 2025 — Dr. Priya Mehta', desc: 'For hypertension management. Take once daily with or without food.', hash: '0x4b2e...a778' },
    { icon: '🩸', title: 'Blood Test Report — Lipid Profile', date: 'May 20, 2025 — Apollo Diagnostics', desc: 'Total cholesterol 182, LDL 110, HDL 52, Triglycerides 98. Within normal range.', hash: '0x9d1c...f045' },
    { icon: '📷', title: 'Chest X-Ray', date: 'Apr 15, 2025 — Apollo Radiology', desc: 'No abnormalities detected. Heart size normal. Lung fields clear.', hash: '0x2f8a...b331' },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h5 style={{ fontFamily: 'var(--font-heading)' }}>🔗 Blockchain-Secured Health Vault</h5>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>All records are anchored on Hyperledger Fabric with SHA-256 hashing</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-secondary btn-sm" onClick={() => showToast('info', 'Coming Soon', 'Document upload in progress.')}>📤 Upload Document</button>
          <button className="btn btn-primary btn-sm" onClick={() => showToast('success', 'Exported!', 'Records exported as PDF.')}>📄 Export PDF</button>
        </div>
      </div>
      
      <div className="grid-2 mb-6">
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-card-accent">{s.icon}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
          </div>
        ))}
      </div>
      
      <div className="record-timeline">
        {records.map((r, i) => (
          <div key={i} className="record-item">
            <div className="record-dot">{r.icon}</div>
            <div className="record-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                <div className="record-title">{r.title}</div>
                <div className="blockchain-badge">⛓️ Verified {r.hash}</div>
              </div>
              <div className="record-date">{r.date}</div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: '6px' }}>{r.desc}</p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                <button className="btn btn-ghost btn-sm">👁️ View</button>
                <button className="btn btn-ghost btn-sm">📥 Download</button>
                <button className="btn btn-ghost btn-sm">🔗 Share</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
