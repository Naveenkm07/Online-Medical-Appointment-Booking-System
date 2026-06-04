import { useNavigate } from 'react-router-dom';

export default function LandingHero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Now with BioBERT-powered recommendations
        </div>
        <h1 className="hero-title">Book Smarter.<br /><span className="gradient-text">Heal Faster.</span></h1>
        <p className="hero-subtitle">The intelligent healthcare platform that matches patients with the right doctors using ML, real-time slot booking, and blockchain-secured health records.</p>
        <div className="hero-actions">
          <button className="btn btn-gradient btn-xl" onClick={() => navigate('/welcome')}>🚀 Get Started Free</button>
          <button className="btn btn-secondary btn-xl" onClick={() => navigate('/login')}>Watch Demo ▶</button>
        </div>
        <div className="trust-badges">
          {[
            { icon: '🎯', val: '94.7%', label: 'ML Accuracy' },
            { icon: '⚡', val: '99.3%', label: 'Uptime SLA' },
            { icon: '📉', val: '38%', label: 'Fewer No-Shows' },
            { icon: '🏥', val: '12K+', label: 'Doctors' }
          ].map(b => (
            <div key={b.label} className="trust-badge">
              <span style={{ fontSize: '1.5rem' }}>{b.icon}</span>
              <div>
                <div className="trust-badge-value">{b.val}</div>
                <div className="trust-badge-label">{b.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="browser-mockup">
        <div className="browser-bar">
          <div className="browser-dots">
            <div className="browser-dot"></div>
            <div className="browser-dot"></div>
            <div className="browser-dot"></div>
          </div>
          <div className="browser-url">🔒 app.omabs.health/dashboard</div>
        </div>
        <div className="browser-content">
          <div className="dashboard-preview">
            <div className="preview-sidebar">
              {['Dashboard', 'Find Doctors', 'Appointments', 'Records', 'Profile'].map((l, i) => (
                <div key={l} className={`preview-sidebar-item ${i === 0 ? 'active' : ''}`}></div>
              ))}
            </div>
            <div className="preview-main">
              <div className="preview-stats">
                {['Total Appts', 'Doctors Seen', 'Records'].map(s => (
                  <div key={s} className="preview-stat">
                    <div className="skeleton skeleton-text" style={{ width: '60%', height: '10px', marginBottom: '6px' }}></div>
                    <div className="skeleton skeleton-text" style={{ width: '40%', height: '20px', marginBottom: '0' }}></div>
                  </div>
                ))}
              </div>
              <div className="preview-chart">
                {[45, 65, 80, 55, 90, 75, 85, 60, 70, 95, 88, 72].map((h, i) => (
                  <div key={i} className="preview-bar" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
