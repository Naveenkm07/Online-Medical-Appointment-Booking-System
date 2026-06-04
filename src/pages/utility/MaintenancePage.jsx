import { useNavigate } from 'react-router-dom';

export default function MaintenancePage() {
  const navigate = useNavigate();

  return (
    <div className="error-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <div style={{ fontSize: '6rem', marginBottom: '16px' }}>🔧</div>
        <h2 className="error-title">Under Maintenance</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          We're making OMABS better for you. Estimated downtime: 15 minutes.
        </p>
        <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-xl)', padding: '24px', marginBottom: '32px' }}>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '12px' }}>Maintenance Progress</div>
          <div className="progress-bar" style={{ height: '10px' }}><div className="progress-bar-fill" style={{ width: '73%' }}></div></div>
          <div style={{ fontSize: 'var(--text-sm)', marginTop: '8px', fontWeight: 700 }}>73% Complete</div>
        </div>
        <button className="btn btn-gradient" onClick={() => navigate('/landing')}>🔄 Check Status</button>
      </div>
    </div>
  );
}
