import { useNavigate } from 'react-router-dom';

export default function DoctorHomePage() {
  const navigate = useNavigate();

  const stats = [
    { label: "Today's Patients", value: '8', change: '2 pending', icon: '👥' },
    { label: 'Monthly Earnings', value: '₹84K', change: '+12% vs last mo', icon: '💰' },
    { label: 'Avg Rating', value: '4.9', change: 'From 312 reviews', icon: '⭐' },
    { label: 'No-Show Rate', value: '4.2%', change: '-2.1% vs last mo', icon: '📉' },
  ];

  const schedule = [
    { time: '9:00 AM', name: 'Ravi Kumar', issue: 'Follow-up: Hypertension', status: 'completed' },
    { time: '9:30 AM', name: 'Meena Singh', issue: 'New: Chest pain evaluation', status: 'in-progress' },
    { time: '10:00 AM', name: 'Amit Joshi', issue: 'Follow-up: ECG review', status: 'upcoming' },
    { time: '10:30 AM', name: 'Priya Nair', issue: 'New: Palpitations', status: 'upcoming' },
    { time: '11:00 AM', name: 'Suresh Patel', issue: 'Follow-up: Arrhythmia', status: 'upcoming' },
  ];

  return (
    <>
      <div className="greeting-card mb-6" style={{ background: 'linear-gradient(135deg,#1e3a5f,#0d4f3f)' }}>
        <div className="greeting-content">
          <div className="greeting-title">Good Evening, Dr. Mehta! 🩺</div>
          <div className="greeting-sub">You have 8 patients scheduled today · 2 pending queue</div>
          <div className="greeting-actions">
            <button className="greeting-quick-btn" onClick={() => navigate('/doctor/availability')}>📅 Set Availability</button>
            <button className="greeting-quick-btn" onClick={() => navigate('/doctor/queue')}>👥 Patient Queue</button>
            <button className="greeting-quick-btn" onClick={() => navigate('/doctor/analytics')}>📊 Analytics</button>
          </div>
        </div>
      </div>
      
      <div className="grid-4 mb-6">
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-card-accent">{s.icon}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-change up">{s.change}</div>
          </div>
        ))}
      </div>
      
      <div className="grid-2">
        <div className="card">
          <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>📅 Today's Schedule</h6>
          <div className="schedule-timeline">
            {schedule.map((s, i) => (
              <div key={i} className="schedule-item">
                <div className="schedule-time">{s.time}</div>
                <div className="schedule-patient">
                  <div className="schedule-patient-name">{s.name}</div>
                  <div className="schedule-patient-issue">{s.issue}</div>
                </div>
                <span className={`badge badge-${s.status === 'completed' ? 'success' : s.status === 'in-progress' ? 'warning' : 'gray'}`}>
                  {s.status}
                </span>
                <button className="btn btn-ghost btn-sm" onClick={() => navigate('/doctor/queue')}>View</button>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="chart-container">
            <div className="chart-header">
              <div className="chart-title">This Week's Appointments</div>
            </div>
            <div className="chart-body">
              {[4, 8, 6, 9, 7, 3, 0].map((v, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%' }}>
                  <div className="bar-chart-bar" style={{ height: `${v * 11}%` }}></div>
                  <span style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ background: 'linear-gradient(135deg,var(--primary-50),var(--teal-50))' }}>
            <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>📊 Quick Stats</h6>
            {[
              ['Total Patients (All Time)', '1,247'],
              ['5-Star Reviews', '287'],
              ['Avg Consultation Time', '24 min'],
            ].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-color)', fontSize: 'var(--text-sm)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>{l}</span>
                <strong>{v}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
