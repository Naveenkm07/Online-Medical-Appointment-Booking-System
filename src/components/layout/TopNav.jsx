import { useApp } from '../../context/AppContext';

export default function TopNav({ title, actions = null }) {
  const { state, dispatch, toggleTheme } = useApp();
  const userInitial = (state.user?.name || 'U').charAt(0);

  return (
    <div className="topnav">
      <button
        className="btn btn-ghost btn-sm"
        id="mobile-menu-btn"
        onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR_MOBILE' })}
        style={{ display: window.innerWidth <= 1024 ? 'flex' : 'none' }}
      >☰</button>

      <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, margin: 0 }}>
        {title}
      </h5>

      <div style={{ flex: 1 }} />

      <div className="topnav-right">
        {actions}
        <button className="theme-toggle" onClick={toggleTheme}>
          {state.theme === 'dark' ? '☀️' : '🌙'}
        </button>
        {state.role === 'patient' ? (
          <div className="avatar avatar-md" style={{ cursor: 'pointer', overflow: 'hidden' }}>
            <img 
              src={state.avatar} 
              alt="Profile" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        ) : (
          <div className="avatar avatar-md" style={{ cursor: 'pointer' }}>
            {userInitial}
          </div>
        )}
      </div>
    </div>
  );
}
