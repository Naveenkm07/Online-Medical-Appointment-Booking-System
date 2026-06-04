import { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export default function ApptAnalyticsPage() {
  const { showToast } = useToast();

  const stats = [
    { label: 'Total Bookings', value: '54,847', change: '+23%' },
    { label: 'Completion Rate', value: '91.4%', change: '+3.2%' },
    { label: 'No-Show Rate', value: '6.1%', change: '-2.1%' },
    { label: 'Double-Bookings', value: '0.02%', change: '-0.01%' },
  ];

  const specs = [
    ['Cardiology', 88],
    ['General Medicine', 76],
    ['Dermatology', 64],
    ['Orthopedics', 58],
    ['Neurology', 52],
    ['Gynecology', 48],
  ];

  const [chartData] = useState(() => Array(30).fill(0).map(() => 40 + Math.floor(Math.random() * 60)));
  const [heatMapData] = useState(() => Array(12 * 7).fill(0).map(() => Math.random()));

  return (
    <>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
        {['7 Days', '30 Days', '90 Days', '1 Year'].map((d, i) => (
          <button key={d} className={`btn ${i === 1 ? 'btn-primary' : 'btn-secondary'} btn-sm`}>{d}</button>
        ))}
        <button
          className="btn btn-ghost btn-sm"
          style={{ marginLeft: 'auto' }}
          onClick={() => showToast('success', 'Exported!', 'Analytics report downloaded.')}
        >
          📥 Export Report
        </button>
      </div>
      
      <div className="grid-4 mb-6">
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-change up">↑ {s.change}</div>
          </div>
        ))}
      </div>
      
      <div className="grid-2 mb-6">
        <div className="chart-container">
          <div className="chart-header"><div className="chart-title">Daily Booking Volume</div></div>
          <div className="chart-body">
            {chartData.map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                <div className="bar-chart-bar" style={{ height: `${v}%` }}></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="chart-container">
          <div className="chart-header"><div className="chart-title">Peak Hours Heatmap</div></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: '3px', paddingTop: '8px' }}>
            {heatMapData.map((v, i) => (
              <div key={i} style={{ height: '18px', borderRadius: '3px', background: `rgba(79,70,229,${v.toFixed(2)})` }}></div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
            <span>8 AM</span><span>12 PM</span><span>4 PM</span><span>8 PM</span>
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        <div className="chart-header"><div className="chart-title">Top Specializations by Demand</div></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
          {specs.map(([s, v]) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ minWidth: '120px', fontSize: 'var(--text-sm)', fontWeight: 500 }}>{s}</div>
              <div className="progress-bar flex-1" style={{ height: '10px' }}>
                <div className="progress-bar-fill" style={{ width: `${v}%` }}></div>
              </div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, minWidth: '32px' }}>{v}%</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
