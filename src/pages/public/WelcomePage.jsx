import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function WelcomePage() {
  const navigate = useNavigate();
  const { state, dispatch } = useApp();

  const handleSelectRole = (role) => {
    dispatch({ type: 'SET_ROLE', payload: role });
  };

  const roles = [
    { icon: '🧑‍⚕️', name: 'Patient', desc: 'Book appointments & manage health records', role: 'patient' },
    { icon: '👨‍⚕️', name: 'Doctor', desc: 'Manage schedule, patients & analytics', role: 'doctor' },
    { icon: '🛡️', name: 'Admin', desc: 'Platform oversight & system management', role: 'admin' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px', background: 'var(--bg-surface)' }}>
      <div style={{ textAlign: 'center', maxWidth: '560px', width: '100%' }}>
        <div className="nav-logo-mark" style={{ width: '64px', height: '64px', margin: '0 auto 20px', fontSize: '22px', boxShadow: '0 12px 32px rgba(79,70,229,0.4)' }}>O</div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, marginBottom: '8px' }}>Welcome to OMABS</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Select your role to continue</p>
        <div className="role-grid">
          {roles.map(r => (
            <div
              key={r.role}
              className={`role-card ${state.role === r.role ? 'selected' : ''}`}
              onClick={() => handleSelectRole(r.role)}
            >
              <div className="role-icon">{r.icon}</div>
              <div className="role-name">{r.name}</div>
              <div className="role-desc">{r.desc}</div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-gradient btn-lg w-full mt-6"
          disabled={!state.role}
          onClick={() => navigate('/login')}
        >
          Continue →
        </button>
        <div className="auth-footer">
          Already have an account? <span className="auth-link" onClick={() => navigate('/login')}>Sign In</span>
        </div>
      </div>
    </div>
  );
}
