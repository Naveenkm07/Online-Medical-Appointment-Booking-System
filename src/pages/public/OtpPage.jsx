import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useToast } from '../../context/ToastContext';

export default function OtpPage() {
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const { showToast } = useToast();
  
  const inputRefs = useRef([]);

  const handleInput = (i, e) => {
    if (e.target.value && i < 5) inputRefs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !e.target.value && i > 0)
      inputRefs.current[i - 1]?.focus();
  };

  const verifyOtp = () => {
    dispatch({ type: 'SET_ROLE', payload: 'patient' });
    dispatch({ type: 'SET_USER', payload: { name: 'New User' } });
    showToast('success', 'Verified!', 'Account created successfully.');
    setTimeout(() => navigate('/onboarding'), 800);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-surface)', padding: '32px' }}>
      <div style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '16px' }}>📲</div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '8px' }}>Verify your phone</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Enter the 6-digit code sent to <strong>+91 98765 43210</strong></p>
        <div className="otp-inputs">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              className="otp-box"
              maxLength={1}
              type="text"
              inputMode="numeric"
              onChange={e => handleInput(i, e)}
              onKeyDown={e => handleKeyDown(i, e)}
            />
          ))}
        </div>
        <button className="btn btn-gradient btn-lg w-full" style={{ marginBottom: '16px' }} onClick={verifyOtp}>Verify & Continue</button>
        <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Didn't receive code? <span className="auth-link">Resend in 45s</span></div>
        <div className="auth-footer mt-4"><span className="auth-link" onClick={() => navigate('/login')}>← Back</span></div>
      </div>
    </div>
  );
}
