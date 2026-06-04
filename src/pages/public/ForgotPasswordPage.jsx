import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  return (
    <div className="auth-layout">
      <div className="auth-side">
        <div className="auth-side-content">
          <div className="auth-side-logo">
            <div className="auth-side-logo-mark">O</div>
            <div className="auth-side-logo-name">OMABS</div>
          </div>
          <h2 className="auth-side-title">Reset your password.</h2>
          <p className="auth-side-desc">No worries! Enter your email and we'll send a secure reset link within seconds.</p>
        </div>
      </div>
      <div className="auth-form-side">
        <div className="auth-form-wrap">
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔑</div>
          <h3 className="auth-form-title">Forgot Password?</h3>
          <p className="auth-form-subtitle" style={{ marginBottom: '32px' }}>Enter your registered email to receive a reset link.</p>
          <div className="auth-form">
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input className="input" type="email" placeholder="your@email.com" />
            </div>
            <button className="btn btn-gradient btn-lg w-full" onClick={() => showToast('success', 'Reset link sent!', 'Check your email inbox (and spam folder).')}>Send Reset Link 📧</button>
          </div>
          <div className="auth-footer mt-4">
            <span className="auth-link" onClick={() => navigate('/login')}>← Back to Sign In</span>
          </div>
        </div>
      </div>
    </div>
  );
}
