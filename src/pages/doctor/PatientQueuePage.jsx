import { useToast } from '../../context/ToastContext';

export default function PatientQueuePage() {
  const { showToast } = useToast();

  const patients = [
    { name: 'Ravi Kumar', age: 45, issue: 'Follow-up: Hypertension management and medication review', time: '9:00 AM', status: 'completed', id: 'P-1001' },
    { name: 'Meena Singh', age: 38, issue: 'New: Persistent chest pain for 2 weeks, shortness of breath', time: '9:30 AM', status: 'in-progress', id: 'P-1002' },
    { name: 'Amit Joshi', age: 52, issue: 'Follow-up: ECG review after pacemaker checkup', time: '10:00 AM', status: 'upcoming', id: 'P-1003' },
    { name: 'Priya Nair', age: 29, issue: 'New: Heart palpitations during exercise', time: '10:30 AM', status: 'upcoming', id: 'P-1004' },
  ];

  return (
    <>
      <div className="tabs mb-6">
        <div className="tab active">Today (8)</div>
        <div className="tab">All Confirmed</div>
        <div className="tab">No-Shows</div>
      </div>
      
      {patients.map(p => (
        <div key={p.id} className="card mb-4">
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div className="avatar avatar-lg">{p.name.charAt(0)}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <strong style={{ fontSize: 'var(--text-lg)' }}>{p.name}</strong>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Age: {p.age}</span>
                <span className="badge badge-gray">{p.id}</span>
                <span className={`badge badge-${p.status === 'completed' ? 'success' : p.status === 'in-progress' ? 'warning' : 'gray'}`}>
                  {p.status}
                </span>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '12px' }}>📋 {p.issue}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button className="btn btn-secondary btn-sm">📋 View Records</button>
                <button className="btn btn-primary btn-sm" onClick={() => showToast('success', 'Completed', 'Marked as completed.')}>✅ Mark Complete</button>
                <button className="btn btn-ghost btn-sm" onClick={() => showToast('warning', 'No-Show', 'Patient marked as no-show.')}>⚠️ No-Show</button>
                <button className="btn btn-ghost btn-sm">📝 Add Notes</button>
              </div>
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>⏰ {p.time}</div>
          </div>
        </div>
      ))}
    </>
  );
}
