import { useNavigate } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';

export default function LandingNav() {
  const navigate = useNavigate();
  const { state, toggleTheme } = useApp();

  return (
    <div className="landing-nav">
      <div className="landing-nav-inner">
        <div className="nav-logo">
          <div className="nav-logo-mark">O</div>
          <div className="nav-brand">OMA<span>BS</span></div>
        </div>
        <div className="nav-links">
          <button className="nav-link">Features</button>
          <button className="nav-link">How It Works</button>
          <button className="nav-link">Pricing</button>
          <button className="nav-link" onClick={() => navigate('/design-system')}>Design System</button>
          <button className="nav-link" onClick={() => navigate('/ml-viz')}>ML Demo</button>
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {state.theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => navigate('/login')}>Sign In</button>
          <button className="btn btn-gradient btn-sm" onClick={() => navigate('/welcome')}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
