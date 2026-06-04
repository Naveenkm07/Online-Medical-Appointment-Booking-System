export default function SystemHealthPage() {
  const stats = [
    { label: 'API Uptime', value: '99.3%', color: 'success' },
    { label: 'Avg Response', value: '142ms', color: 'success' },
    { label: 'Active WS Conns', value: '2,847', color: 'warning' },
    { label: 'Error Rate', value: '0.8%', color: 'success' },
  ];

  const gauges = [
    { label: 'CPU Usage', val: 42, cls: 'healthy' },
    { label: 'RAM Usage', val: 67, cls: 'warning' },
    { label: 'Disk I/O', val: 28, cls: 'healthy' },
  ];

  const services = [
    { service: 'API Gateway', status: 'operational', latency: '42ms' },
    { service: 'MongoDB Cluster', status: 'operational', latency: '8ms' },
    { service: 'Hyperledger Fabric', status: 'operational', latency: '124ms' },
    { service: 'WebSocket Server', status: 'operational', latency: '12ms' },
    { service: 'Twilio SMS', status: 'operational', latency: '187ms' },
    { service: 'SendGrid Email', status: 'degraded', latency: '342ms' },
    { service: 'ML Inference API', status: 'operational', latency: '89ms' },
    { service: 'CDN', status: 'operational', latency: '24ms' },
  ];

  return (
    <>
      <div className="grid-4 mb-6">
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value" style={{ color: `var(--${s.color}-600)` }}>{s.value}</div>
          </div>
        ))}
      </div>
      
      <div className="grid-2 mb-6">
        <div className="card">
          <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>Server Gauges</h6>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            {gauges.map(g => (
              <div key={g.label} className="gauge-wrap">
                <div className={`gauge ${g.cls}`}>
                  <div className="gauge-inner" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1rem' }}>{g.val}%</div>
                </div>
                <div className="gauge-label">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="chart-container">
          <div className="chart-header"><div className="chart-title">API Response Latency (Last 30 min)</div></div>
          <div className="chart-body">
            {Array(30).fill(0).map((_, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                <div style={{ width: '100%', borderRadius: '2px 2px 0 0', background: 'linear-gradient(to top,var(--teal-400),var(--primary-400))', height: `${20 + Math.floor(Math.random() * 80)}%` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="card">
        <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>Service Status</h6>
        {services.map(s => (
          <div key={s.service} className="security-item">
            <div className="security-icon">{s.status === 'operational' ? '✅' : '⚠️'}</div>
            <div style={{ flex: 1 }}>
              <div className="security-label">{s.service}</div>
              <div className="security-value">Latency: {s.latency}</div>
            </div>
            <span className={`badge badge-${s.status === 'operational' ? 'success' : 'warning'}`}>{s.status}</span>
          </div>
        ))}
      </div>
    </>
  );
}
