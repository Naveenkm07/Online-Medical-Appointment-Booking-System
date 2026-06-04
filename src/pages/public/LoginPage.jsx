import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useToast } from '../../context/ToastContext';
import { routeToPortal } from '../../utils/routeToPortal';

export default function LoginPage() {
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    const role = email.includes('admin') ? 'admin'
      : email.includes('doctor') ? 'doctor' : 'patient';
    const name = role === 'admin' ? 'Admin User'
      : role === 'doctor' ? 'Dr. Priya Mehta' : 'Arjun Sharma';

    dispatch({ type: 'SET_ROLE', payload: role });
    dispatch({ type: 'SET_USER', payload: { name } });
    showToast('success', 'Welcome back!', `Signed in as ${name}`);

    setTimeout(() => navigate(routeToPortal(role)), 800);
  };

  const handleGoogleSignIn = () => {
    showToast('info', 'Google Sign-In', 'Redirecting to Google OAuth...');
    setTimeout(() => {
      dispatch({ type: 'SET_ROLE', payload: 'patient' });
      dispatch({ type: 'SET_USER', payload: { name: 'Google User' } });
      navigate(routeToPortal('patient'));
    }, 1500);
  };

  return (
    <div className="auth-layout">
      <div className="auth-side">
        <div className="auth-side-content">
          <div className="auth-side-logo">
            <div className="auth-side-logo-mark">O</div>
            <div className="auth-side-logo-name">OMABS</div>
          </div>
          <h2 className="auth-side-title">Healthcare, reimagined.</h2>
          <p className="auth-side-desc">Sign in to access AI-powered doctor recommendations, real-time slot booking, and your blockchain-secured health records.</p>
          <div className="auth-stats">
            <div className="auth-stat"><div className="auth-stat-val">50K+</div><div className="auth-stat-lbl">Patients</div></div>
            <div className="auth-stat"><div className="auth-stat-val">12K+</div><div className="auth-stat-lbl">Doctors</div></div>
            <div className="auth-stat"><div className="auth-stat-val">99.3%</div><div className="auth-stat-lbl">Uptime</div></div>
          </div>
        </div>
      </div>
      <div className="auth-form-side">
        <div className="auth-form-wrap">
          <div className="auth-form-header">
            <h3 className="auth-form-title">Welcome back 👋</h3>
            <p className="auth-form-subtitle">Sign in to your OMABS account</p>
          </div>
          <button className="oauth-btn" onClick={handleGoogleSignIn}>
            <span style={{ fontSize: '1.2rem' }}>🔵</span> Continue with Google
          </button>
          <div className="auth-divider" style={{ margin: '20px 0' }}>or sign in with email</div>
          <div className="auth-form">
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div className="input-icon-wrap">
                <span className="input-icon">📧</span>
                <input
                  className="input"
                  type="email"
                  placeholder="doctor@hospital.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                Password <span className="auth-link" onClick={() => navigate('/forgot-password')} style={{ fontWeight: 500, fontSize: '0.8rem' }}>Forgot password?</span>
              </label>
              <div className="input-icon-wrap">
                <span className="input-icon">🔒</span>
                <input className="input" type="password" placeholder="••••••••" />
              </div>
            </div>
            <button className="btn btn-gradient btn-lg w-full" onClick={handleLogin}>
              Sign In
            </button>
          </div>
          <div className="auth-footer">
            Don't have an account? <span className="auth-link" onClick={() => navigate('/signup')}>Create account</span>
          </div>
          <div className="auth-footer" style={{ marginTop: '8px' }}>
            <span className="auth-link" onClick={() => navigate('/landing')}>← Back to home</span>
          </div>
          <div style={{ marginTop: '24px', padding: '16px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-lg)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
            <strong>Demo accounts:</strong><br/>
            Patient: patient@omabs.com | Doctor: doctor@omabs.com | Admin: admin@omabs.com<br/>
            Password: any
          </div>
        </div>
      </div>
    </div>
  );
}
