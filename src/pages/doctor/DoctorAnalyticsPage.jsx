import { useToast } from '../../context/ToastContext';

export default function DoctorAnalyticsPage() {
  const { showToast } = useToast();

  const stats = [
    { label: 'Total Appointments', value: '247', change: '+18%', up: true },
    { label: 'Avg Rating', value: '4.91', change: '+0.03', up: true },
    { label: 'No-Show Rate', value: '4.2%', change: '-2.1%', up: false },
    { label: 'Revenue', value: '₹2.4L', change: '+22%', up: true },
  ];

  const trendData = [5, 8, 6, 9, 11, 7, 8, 10, 12, 9, 8, 7, 11, 13, 9, 10, 8, 7, 9, 11, 10, 12, 14, 11, 9, 13, 12, 10, 8, 11];
  const revData = [42, 58, 51, 74, 68, 84, 79, 92, 88, 97, 84, 91];

  const demographics = [
    { label: '18-30', pct: 22, color: 'var(--primary-400)' },
    { label: '31-45', pct: 38, color: 'var(--teal-400)' },
    { label: '46-60', pct: 28, color: 'var(--warning-400)' },
    { label: '60+', pct: 12, color: 'var(--danger-400)' },
  ];

  return (
    <>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {['30 Days', '60 Days', '90 Days'].map((d, i) => (
          <button key={d} className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary'} btn-sm`}>{d}</button>
        ))}
        <button
          className="btn btn-ghost btn-sm"
          style={{ marginLeft: 'auto' }}
          onClick={() => showToast('success', 'Exported!', 'Report downloaded.')}
        >
          📥 Export Report
        </button>
      </div>
      
      <div className="grid-4 mb-6">
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className={`stat-change ${s.up ? 'up' : 'down'}`}>{s.up ? '↑' : '↓'} {s.change}</div>
          </div>
        ))}
      </div>
      
      <div className="grid-2 mb-6">
        <div className="chart-container">
          <div className="chart-header"><div className="chart-title">Appointment Trend (30 Days)</div></div>
          <div className="chart-body">
            {trendData.map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                <div className="bar-chart-bar" style={{ height: `${v * 7}%` }}></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="chart-container">
          <div className="chart-header"><div className="chart-title">Patient Demographics</div></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingTop: '16px' }}>
            {demographics.map(d => (
              <div key={d.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', marginBottom: '6px' }}>
                  <span>{d.label} yrs</span><span style={{ fontWeight: 700 }}>{d.pct}%</span>
                </div>
                <div className="progress-bar" style={{ height: '10px' }}>
                  <div className="progress-bar-fill" style={{ width: `${d.pct * 2.5}%`, background: d.color }}></div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '16px', padding: '16px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                ['Male', '52%'],
                ['Female', '48%']
              ].map(([g, p]) => (
                <div key={g} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800 }}>{p}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{g}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        <div className="chart-header"><div className="chart-title">Monthly Revenue Trend</div></div>
        <div className="chart-body">
          {revData.map((v, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%' }}>
              <div className="bar-chart-bar" style={{ height: `${v}%`, background: 'linear-gradient(to top,var(--teal-500),var(--primary-400))' }}></div>
              <span style={{ fontSize: '9px', color: 'var(--text-tertiary)' }}>{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
