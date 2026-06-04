import { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export default function SecurityDashPage() {
  const { showToast } = useToast();

  const stats = [
    { label: 'Failed Logins (24h)', value: '247', color: 'warning' },
    { label: 'Active Sessions', value: '8,241', color: 'success' },
    { label: 'RBAC Violations', value: '3', color: 'danger' },
    { label: 'TLS Cert Expiry', value: '89 days', color: 'success' },
  ];

  const securityStatus = [
    { icon: '🔒', label: 'AES-256 Encryption', value: 'Enabled — All PHI encrypted', ok: true },
    { icon: '🔐', label: 'TLS 1.3', value: 'Active — Certificate expires Dec 2025', ok: true },
    { icon: '🔑', label: 'JWT Auth', value: 'RS256 — Rotating keys every 24h', ok: true },
    { icon: '⛓️', label: 'Blockchain Audit', value: 'All transactions logged immutably', ok: true },
    { icon: '👁️', label: 'Intrusion Detection', value: '3 suspicious IPs flagged today', ok: false },
  ];

  const sessions = [
    { user: 'Arjun Sharma', role: 'patient', ip: '122.45.78.12', start: '2h ago', suspicious: false },
    { user: 'Dr. Priya Mehta', role: 'doctor', ip: '103.21.44.89', start: '45min ago', suspicious: false },
    { user: 'Unknown', role: '—', ip: '194.165.0.1', start: '12min ago', suspicious: true },
  ];

  const [chartData] = useState(() => Array(30).fill(0).map(() => 10 + Math.floor(Math.random() * 90)));

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
          <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>🛡️ Security Status</h6>
          {securityStatus.map(s => (
            <div key={s.label} className="security-item">
              <div className="security-icon">{s.icon}</div>
              <div style={{ flex: 1 }}>
                <div className="security-label">{s.label}</div>
                <div className="security-value">{s.value}</div>
              </div>
              <span className={`badge badge-${s.ok ? 'success' : 'warning'}`}>{s.ok ? '✓ OK' : '⚠️ Alert'}</span>
            </div>
          ))}
        </div>
        
        <div className="chart-container">
          <div className="chart-header"><div className="chart-title">Failed Login Attempts (30 Days)</div></div>
          <div className="chart-body">
            {chartData.map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                <div style={{ width: '100%', borderRadius: '2px 2px 0 0', background: 'linear-gradient(to top,var(--danger-400),var(--warning-400))', height: `${v}%` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h6 style={{ fontFamily: 'var(--font-heading)' }}>Active Sessions</h6>
          <button className="btn btn-danger btn-sm" onClick={() => showToast('warning', 'Sessions Revoked', 'All suspicious sessions have been revoked.')}>Revoke All Suspicious</button>
        </div>
        <table className="data-table">
          <thead><tr><th>User</th><th>Role</th><th>IP Address</th><th>Started</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            {sessions.map((s, i) => (
              <tr key={i} style={s.suspicious ? { background: 'var(--danger-50)' } : {}}>
                <td>{s.user}</td>
                <td><span className={`badge badge-${s.role === 'patient' ? 'teal' : s.role === 'doctor' ? 'primary' : 'danger'}`}>{s.role}</span></td>
                <td style={{ fontFamily: 'monospace' }}>{s.ip}</td>
                <td>{s.start}</td>
                <td><span className={`badge badge-${s.suspicious ? 'danger' : 'success'}`}>{s.suspicious ? '⚠️ Suspicious' : '✓ Normal'}</span></td>
                <td><button className="btn btn-danger btn-sm" onClick={() => showToast('warning', 'Revoked', 'Session revoked.')}>Revoke</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
