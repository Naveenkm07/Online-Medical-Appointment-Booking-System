import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function DesignSystemPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useApp();

  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', payload: newTheme });
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
      <div className="landing-nav">
        <div className="landing-nav-inner">
          <div className="nav-logo">
            <div className="nav-logo-mark">O</div>
            <div className="nav-brand">OMA<span>BS</span> — Design System</div>
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme}>{state.theme === 'dark' ? '☀️' : '🌙'}</button>
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/landing')}>← Back</button>
          </div>
        </div>
      </div>

      <div style={{ padding: '100px 0 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)' }}>OMABS Design System</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Design tokens, components, and patterns</p>
      </div>

      {/* Colors */}
      <div className="ds-section">
        <div className="ds-section-title">Color Palette</div>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, marginBottom: '12px', color: 'var(--text-secondary)' }}>Primary (Indigo)</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(n => (
              <div key={`primary-${n}`} style={{ textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-lg)', background: `var(--primary-${n})`, boxShadow: 'var(--shadow-sm)' }}></div>
                <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', marginTop: '4px' }}>{n}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, marginBottom: '12px', color: 'var(--text-secondary)' }}>Teal Accent</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[50, 100, 400, 500, 600, 700].map(n => (
              <div key={`teal-${n}`} style={{ textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-lg)', background: `var(--teal-${n})`, boxShadow: 'var(--shadow-sm)' }}></div>
                <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', marginTop: '4px' }}>{n}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {[
            { name: 'Success', colors: ['success-50', 'success-400', 'success-500', 'success-600'] },
            { name: 'Warning', colors: ['warning-50', 'warning-400', 'warning-500', 'warning-600'] },
            { name: 'Danger', colors: ['danger-50', 'danger-400', 'danger-500', 'danger-600'] },
          ].map(g => (
            <div key={g.name}>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, marginBottom: '8px', color: 'var(--text-secondary)' }}>{g.name}</div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {g.colors.map(c => (
                  <div key={c} style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: `var(--${c})`, boxShadow: 'var(--shadow-sm)' }}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="ds-section">
        <div className="ds-section-title">Typography</div>
        {[
          { el: 'h1', sample: 'Heading 1 — Poppins 900', size: '3.75rem', cls: '' },
          { el: 'h2', sample: 'Heading 2 — Poppins 700', size: '3rem', cls: '' },
          { el: 'h3', sample: 'Heading 3 — Poppins 700', size: '1.875rem', cls: '' },
          { el: 'h4', sample: 'Heading 4 — Poppins 600', size: '1.5rem', cls: '' },
          { el: 'h5', sample: 'Heading 5 — Poppins 600', size: '1.25rem', cls: '' },
          { el: 'p', sample: 'Body text — Inter 400 — The quick brown fox jumps over the lazy dog', size: '1rem', cls: '' },
        ].map(t => {
          const Tag = t.el;
          return (
            <div key={t.el} style={{ padding: '16px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', minWidth: '80px' }}>{t.el} · {t.size}</span>
              <Tag style={{ margin: 0 }}>{t.sample}</Tag>
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="ds-section">
        <div className="ds-section-title">Buttons</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="ds-row">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-teal">Teal</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-gradient">Gradient</button>
            <button className="btn btn-primary" disabled>Disabled</button>
          </div>
          <div className="ds-row">
            <button className="btn btn-primary btn-sm">Small</button>
            <button className="btn btn-primary">Medium</button>
            <button className="btn btn-primary btn-lg">Large</button>
            <button className="btn btn-primary btn-xl">XLarge</button>
          </div>
          <div className="ds-row">
            <button className="btn btn-primary">🚀 With Icon</button>
            <button className="btn btn-secondary">📅 Calendar</button>
            <button className="btn btn-teal">⚡ Real-time</button>
          </div>
        </div>
      </div>
      
      {/* Badges */}
      <div className="ds-section">
        <div className="ds-section-title">Badges & Chips</div>
        <div className="ds-row">
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-teal">Teal</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-danger">Danger</span>
          <span className="badge badge-gray">Neutral</span>
          <span className="badge badge-success badge-dot">Active</span>
          <span className="badge badge-danger badge-dot">Offline</span>
        </div>
      </div>
      
      {/* Form Elements */}
      <div className="ds-section">
        <div className="ds-section-title">Form Elements</div>
        <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="input-group">
            <label className="input-label">Default Input</label>
            <input className="input" placeholder="Enter text here..." />
            <span className="input-hint">This is a helper text</span>
          </div>
          <div className="input-group">
            <label className="input-label">Error State</label>
            <input className="input error" defaultValue="invalid@" />
            <span className="input-error-msg">Please enter a valid email address</span>
          </div>
          <div className="input-group">
            <label className="input-label">Success State</label>
            <input className="input success" defaultValue="correct@email.com" />
          </div>
          <div className="input-group">
            <label className="input-label">With Icon</label>
            <div className="input-icon-wrap">
              <span className="input-icon">🔍</span>
              <input className="input" placeholder="Search..." />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {['Option A', 'Option B', 'Option C'].map((opt, i) => (
              <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: 'var(--text-sm)' }}>
                <input type="radio" name="radio-demo" defaultChecked={i === 0} style={{ accentColor: 'var(--primary-600)' }} /> {opt}
              </label>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {['Opt 1', 'Opt 2', 'Opt 3'].map(opt => (
              <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: 'var(--text-sm)' }}>
                <input type="checkbox" defaultChecked style={{ accentColor: 'var(--primary-600)' }} /> {opt}
              </label>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Email Notifications', 'SMS Reminders', 'Push Alerts'].map((label, i) => (
              <div key={label} className="toggle-wrap" onClick={(e) => e.currentTarget.querySelector('.toggle').classList.toggle('on')}>
                <div className={`toggle ${i < 2 ? 'on' : ''}`}></div>
                <span style={{ fontSize: 'var(--text-sm)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
