import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { state } = useApp();
  
  const role = state.role || 'patient';
  
  const tasks = {
    patient: [
      { done: true, title: 'Create your account', desc: 'Sign up and verify your email' },
      { done: false, title: 'Complete your profile', desc: 'Add personal info and medical history' },
      { done: false, title: 'Find your first doctor', desc: 'Use AI matching to find the right specialist' },
      { done: false, title: 'Book your first appointment', desc: 'Select a slot and confirm booking' },
      { done: false, title: 'Upload health records', desc: 'Securely add your medical documents' },
    ],
    doctor: [
      { done: true, title: 'Create doctor account', desc: 'Register and verify credentials' },
      { done: false, title: 'Complete profile', desc: 'Add qualifications and specializations' },
      { done: false, title: 'Submit verification docs', desc: 'Upload MBBS certificate and MCI registration' },
      { done: false, title: 'Set availability', desc: 'Configure your weekly schedule' },
      { done: false, title: 'Accept first patient', desc: 'Approve and consult your first appointment' },
    ],
  };
  
  const steps = tasks[role] || tasks.patient;
  const doneCount = steps.filter(s => s.done).length;
  const pct = Math.round((doneCount / steps.length) * 100);

  const handleOnboardingStep = (i) => {
    if (role === 'patient') {
      const routes = ['/patient/profile', '/patient/profile', '/patient/symptom-input', '/patient/slot-booking', '/patient/health-records'];
      navigate(routes[i] || '/patient/home');
    } else {
      const routes = ['/doctor/profile-edit', '/doctor/profile-edit', '/doctor/home', '/doctor/availability', '/doctor/queue'];
      navigate(routes[i] || '/doctor/home');
    }
  };

  const routeToPortal = () => {
    if (role === 'doctor') navigate('/doctor/home');
    else if (role === 'admin') navigate('/admin/home');
    else navigate('/patient/home');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '12px' }}>🚀</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>Welcome to OMABS!</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Complete these steps to get the most out of your account</p>
        </div>
        
        <div className="card mb-6">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <strong style={{ fontFamily: 'var(--font-heading)' }}>Setup Progress</strong>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{doneCount}/{steps.length} complete</span>
          </div>
          <div className="progress-bar" style={{ height: '10px' }}><div className="progress-bar-fill" style={{ width: `${pct}%` }}></div></div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: '6px' }}>{pct}% complete</div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="card card-sm"
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                borderColor: step.done ? 'var(--success-400)' : 'var(--border-color)',
                background: step.done ? 'var(--success-50)' : 'var(--bg-base)',
                cursor: step.done ? 'default' : 'pointer'
              }}
              onClick={() => !step.done && handleOnboardingStep(i)}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                background: step.done ? 'var(--success-500)' : 'var(--bg-subtle)',
                color: step.done ? '#fff' : 'var(--text-tertiary)'
              }}>
                {step.done ? '✓' : (i + 1)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>{step.title}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{step.desc}</div>
              </div>
              {!step.done ? (
                <button className="btn btn-primary btn-sm" onClick={(e) => { e.stopPropagation(); handleOnboardingStep(i); }}>Start →</button>
              ) : (
                <span style={{ color: 'var(--success-500)', fontSize: '1.2rem' }}>✓</span>
              )}
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button className="btn btn-ghost" onClick={routeToPortal}>Skip for now →</button>
        </div>
      </div>
    </div>
  );
}
