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
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
              alt="Profile" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              id="topnav-avatar"
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
