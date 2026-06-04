import { useNavigate } from 'react-router-dom';
import { upcomingAppointments } from '../../data/mockAppointments';

export default function PatientHomePage() {
  const navigate = useNavigate();

  const kpiStats = [
    { label: 'Total Appointments', value: '24', change: '+3 this month', up: true, icon: '📅' },
    { label: 'Doctors Consulted', value: '7', change: 'Last: Dr. Mehta', up: null, icon: '👨‍⚕️' },
    { label: 'Health Records', value: '12', change: 'All verified ✓', up: true, icon: '🔗' },
    { label: 'Health Score', value: '87', change: '+5 from last month', up: true, icon: '❤️' },
  ];

  const quickActions = [
    { icon: '🔍', label: 'Find Doctors', path: '/patient/symptom-input' },
    { icon: '📅', label: 'Book Slot', path: '/patient/slot-booking' },
    { icon: '🔗', label: 'Health Vault', path: '/patient/health-records' },
    { icon: '🤖', label: 'AI Chatbot', path: '/ai-chatbot' },
  ];

  const activityFeed = [
    { icon: '✅', msg: 'Appointment with Dr. Mehta confirmed', time: '2 hours ago', color: 'success' },
    { icon: '📄', msg: 'Lab report uploaded to health vault', time: 'Yesterday', color: 'primary' },
    { icon: '💊', msg: 'Prescription from Dr. Nair added to records', time: '2 days ago', color: 'teal' },
    { icon: '🔔', msg: 'Reminder: Appointment tomorrow at 10 AM', time: '3 days ago', color: 'warning' },
  ];

  return (
    <>
      {/* Greeting Card */}
      <div className="greeting-card mb-6">
        <div className="greeting-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="greeting-title">Good Evening, Arjun! 👋</div>
              <div className="greeting-sub">You have 2 upcoming appointments this week.</div>
              <div className="greeting-actions">
                <button className="greeting-quick-btn" onClick={() => navigate('/patient/symptom-input')}>🔍 Find a Doctor</button>
                <button className="greeting-quick-btn" onClick={() => navigate('/patient/appointments')}>📅 My Appointments</button>
                <button className="greeting-quick-btn" onClick={() => navigate('/patient/health-records')}>🔗 Health Records</button>
              </div>
            </div>
            <div style={{ fontSize: '4rem', opacity: 0.15, position: 'absolute', right: '32px', top: '16px' }}>🏥</div>
          </div>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid-4 mb-6">
        {kpiStats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-card-accent">{s.icon}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            {s.up !== null ? (
              <div className={`stat-change ${s.up ? 'up' : 'down'}`}>{s.up ? '↑' : '↓'} {s.change}</div>
            ) : (
              <div className="stat-change" style={{ color: 'var(--text-tertiary)' }}>{s.change}</div>
            )}
          </div>
        ))}
      </div>

      <div className="grid-2 mb-6">
        {/* Upcoming Appointments */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h5 style={{ fontFamily: 'var(--font-heading)' }}>Upcoming Appointments</h5>
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/patient/appointments')}>View all →</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {upcomingAppointments.map((a, i) => (
              <div key={i} className="appt-card">
                <div className="appt-time-block">
                  <div className="appt-time">{a.time}</div>
                  <div className="appt-date">{a.date}</div>
                </div>
                <div className="appt-info">
                  <div className="appt-doctor">{a.doctor}</div>
                  <div className="appt-spec">{a.spec}</div>
                </div>
                <span className={`badge badge-${a.status === 'confirmed' ? 'success' : 'warning'}`}>{a.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions + Health Tips */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="card">
            <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>🩺 Quick Actions</h6>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {quickActions.map(a => (
                <button
                  key={a.label}
                  className="card card-sm"
                  style={{ cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '16px 8px' }}
                  onClick={() => navigate(a.path)}
                >
                  <span style={{ fontSize: '1.5rem' }}>{a.icon}</span>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600 }}>{a.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="card" style={{ background: 'linear-gradient(135deg,var(--teal-50),var(--primary-50))', borderColor: 'var(--teal-200)' }}>
            <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>💡 Health Tip Today</h6>
            <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>Drink 8-10 glasses of water daily. Staying hydrated improves cognitive function by up to 14% and reduces headache frequency.</p>
            <div style={{ marginTop: '12px', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Source: WHO Health Guidelines 2024</div>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="card">
        <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>📋 Recent Activity</h6>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {activityFeed.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 0', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `var(--${a.color}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>{a.icon}</div>
              <div style={{ flex: 1, fontSize: 'var(--text-sm)' }}>{a.msg}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>{a.time}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
