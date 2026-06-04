import { useToast } from '../../context/ToastContext';

export default function AdminHomePage() {
  const { showToast } = useToast();

  const stats = [
    { label: 'Total Users', value: '50,247', change: '+127 today', icon: '👥', up: true },
    { label: 'Active Doctors', value: '12,834', change: '+23 verified', icon: '👨‍⚕️', up: true },
    { label: "Today's Bookings", value: '1,847', change: '+8.4% vs yesterday', icon: '📅', up: true },
    { label: 'Monthly Revenue', value: '₹24.7L', change: '+22.3%', icon: '💰', up: true },
  ];

  const alerts = [
    { type: 'danger', title: 'High error rate detected', desc: 'API endpoint /auth/login: 4.2% error rate' },
    { type: 'warning', title: '3 doctors pending verification', desc: 'Awaiting document review for 48+ hours' },
    { type: 'info', title: 'ML model retrain ready', desc: 'New dataset of 2,400 records available' },
    { type: 'success', title: 'Backup completed', desc: 'All databases backed up at 3:00 AM' },
  ];

  const feed = [
    { icon: '📅', msg: 'New booking: Patient #12847 with Dr. Mehta at 4 PM', time: '2 min ago' },
    { icon: '👤', msg: 'New doctor registration: Dr. Ravi Patel (Neurologist) pending verification', time: '5 min ago' },
    { icon: '🔔', msg: "50 SMS reminders sent for tomorrow's appointments", time: '12 min ago' },
    { icon: '⛓️', msg: 'Health record #HR-9847 anchored to Hyperledger Fabric', time: '18 min ago' },
    { icon: '🤖', msg: 'ML recommendation engine served 347 queries in last hour', time: '25 min ago' },
  ];

  return (
    <>
      <div className="grid-4 mb-6">
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-card-accent">{s.icon}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-change up">↑ {s.change}</div>
          </div>
        ))}
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '24px' }}>
        <div className="chart-container">
          <div className="chart-header"><div className="chart-title">Platform Booking Volume (30 Days)</div></div>
          <div className="chart-body">
            {Array(30).fill(0).map((_, i) => {
              const v = 30 + Math.floor(Math.random() * 70); // Just mock random logic similar to original
              return (
                <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                  <div className="bar-chart-bar" style={{ height: `${v}%` }}></div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h6 style={{ fontFamily: 'var(--font-heading)' }}>⚠️ Alerts</h6>
          {alerts.map((a, i) => (
            <div key={i} className={`alert-card ${a.type}`}>
              <div className="alert-title">{a.title}</div>
              <div className="alert-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card">
        <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>🔴 Live Activity Feed</h6>
        {feed.map((a, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {a.icon}
            </div>
            <div style={{ flex: 1, fontSize: 'var(--text-sm)' }}>{a.msg}</div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>{a.time}</div>
          </div>
        ))}
      </div>
    </>
  );
}
