import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignupPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  
  const getStrengthLabel = () => {
    const val = password;
    if (!val) return { label: 'Enter a strong password', strength: 0 };
    let s = 0;
    if (val.length > 5) s++;
    if (val.length > 8) s++;
    if (/[A-Z]/.test(val)) s++;
    if (/[0-9!@#]/.test(val)) s++;
    const labels = ['Weak', 'Fair', 'Good', 'Strong'];
    return { label: labels[s - 1] || 'Weak', strength: s };
  };
  
  const { label, strength } = getStrengthLabel();

  return (
    <div className="auth-layout">
      <div className="auth-side">
        <div className="auth-side-content">
          <div className="auth-side-logo">
            <div className="auth-side-logo-mark">O</div>
            <div className="auth-side-logo-name">OMABS</div>
          </div>
          <h2 className="auth-side-title">Join 50,000+ patients.</h2>
          <p className="auth-side-desc">Create your free account and get AI-powered doctor recommendations in minutes.</p>
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {['✅ Free forever plan available', '🔒 HIPAA compliant & secure', '🤖 AI-powered recommendations', '📱 Works on all devices'].map((f, i) => (
              <div key={i} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>{f}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="auth-form-side">
        <div className="auth-form-wrap">
          <div className="auth-form-header">
            <h3 className="auth-form-title">Create account ✨</h3>
            <p className="auth-form-subtitle">Join OMABS in under 2 minutes</p>
          </div>
          <div className="stepper">
            {['Personal Info', 'Role Details', 'Verify'].map((s, i) => (
              <div key={s} className={`stepper-item ${i === 0 ? 'active' : ''}`}>
                <div style={{ textAlign: 'center' }}>
                  <div className="stepper-circle">{i + 1}</div>
                  <div className="stepper-label">{s}</div>
                </div>
                {i < 2 && <div className="stepper-line"></div>}
              </div>
            ))}
          </div>
          <div>
            <div className="auth-form">
              <div className="form-row">
                <div className="input-group"><label className="input-label">First Name</label><input className="input" placeholder="Arjun" /></div>
                <div className="input-group"><label className="input-label">Last Name</label><input className="input" placeholder="Sharma" /></div>
              </div>
              <div className="input-group"><label className="input-label">Email</label><input className="input" type="email" placeholder="arjun@example.com" /></div>
              <div className="input-group"><label className="input-label">Phone</label><input className="input" type="tel" placeholder="+91 98765 43210" /></div>
              <div className="input-group">
                <label className="input-label">Password</label>
                <input className="input" type="password" placeholder="Min. 8 characters" value={password} onChange={e => setPassword(e.target.value)} />
                <div className="password-strength">
                  <div className="strength-bars">
                    {[1, 2, 3, 4].map(num => (
                      <div
                        key={num}
                        className={`strength-bar ${strength >= num ? (strength < 2 ? 'weak' : strength < 3 ? 'fair' : strength < 4 ? 'good' : 'strong') : ''}`}
                      />
                    ))}
                  </div>
                  <div className="strength-label">{label}</div>
                </div>
              </div>
              <button className="btn btn-gradient btn-lg w-full" onClick={() => navigate('/otp')}>Continue →</button>
            </div>
          </div>
          <div className="auth-footer">Already have an account? <span className="auth-link" onClick={() => navigate('/login')}>Sign In</span></div>
        </div>
      </div>
    </div>
  );
}
