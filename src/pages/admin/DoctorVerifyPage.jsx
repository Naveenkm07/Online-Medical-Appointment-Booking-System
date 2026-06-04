import { useToast } from '../../context/ToastContext';

export default function DoctorVerifyPage() {
  const { showToast } = useToast();

  const stats = [
    { label: 'Pending Review', value: '8', color: 'warning' },
    { label: 'Approved Today', value: '5', color: 'success' },
    { label: 'Rejected', value: '2', color: 'danger' },
  ];

  const pendingDoctors = [
    { name: 'Dr. Ravi Patel', spec: 'Neurologist', exp: '8 yrs', docs: ['MBBS Certificate', 'MCI Registration', 'ID Proof'], submitted: '2 days ago', status: 'pending' },
    { name: 'Dr. Anjali Verma', spec: 'Gynecologist', exp: '12 yrs', docs: ['MBBS Certificate', 'MD Certificate', 'ID Proof'], submitted: '1 day ago', status: 'pending' },
  ];

  return (
    <>
      <div className="grid-3 mb-6">
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value" style={{ color: `var(--${s.color}-600)` }}>{s.value}</div>
          </div>
        ))}
      </div>
      
      {pendingDoctors.map((d, i) => (
        <div key={i} className="card mb-5">
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div className="avatar avatar-xl">{d.name.charAt(3)}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
                <h5 style={{ fontFamily: 'var(--font-heading)' }}>{d.name}</h5>
                <span className="badge badge-warning">Pending Review</span>
              </div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                {d.spec} · {d.exp} experience · Submitted {d.submitted}
              </div>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                  Submitted Documents
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {d.docs.map(doc => (
                    <button key={doc} className="badge badge-primary" style={{ cursor: 'pointer', padding: '6px 12px' }} onClick={() => showToast('info', 'Preview', 'Document preview feature coming soon.')}>
                      📄 {doc}
                    </button>
                  ))}
                </div>
              </div>
              <div className="input-group mb-4">
                <label className="input-label">Review Notes (optional)</label>
                <textarea className="input" rows="2" placeholder="Add notes for the doctor..." />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn btn-success btn-sm" style={{ background: 'var(--success-500)', color: '#fff' }} onClick={() => showToast('success', 'Approved!', 'Doctor has been verified and notified.')}>✅ Approve</button>
                <button className="btn btn-danger btn-sm" onClick={() => showToast('error', 'Rejected', 'Doctor application rejected. Notification sent.')}>❌ Reject</button>
                <button className="btn btn-ghost btn-sm">📧 Request More Docs</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
