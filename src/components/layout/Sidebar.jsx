import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

const navItems = {
  patient: [
    { icon: '🏠', label: 'Dashboard',       path: '/patient/home' },
    { icon: '🔍', label: 'Find Doctors',    path: '/patient/symptom-input' },
    { icon: '📅', label: 'My Appointments', path: '/patient/appointments' },
    { icon: '🔗', label: 'Health Records',  path: '/patient/health-records' },
    { icon: '🔔', label: 'Notifications',   path: '/patient/notifications' },
    { icon: '👤', label: 'Profile',         path: '/patient/profile' },
  ],
  doctor: [
    { icon: '🏠', label: 'Dashboard',    path: '/doctor/home' },
    { icon: '📆', label: 'Availability', path: '/doctor/availability' },
    { icon: '👥', label: 'Patient Queue',path: '/doctor/queue' },
    { icon: '📊', label: 'Analytics',   path: '/doctor/analytics' },
    { icon: '✏️', label: 'Edit Profile', path: '/doctor/profile-edit' },
  ],
  admin: [
    { icon: '🏠', label: 'Overview',       path: '/admin/home' },
    { icon: '👥', label: 'User Mgmt',      path: '/admin/users' },
    { icon: '✅', label: 'Doctor Verify',  path: '/admin/doctor-verify' },
    { icon: '📊', label: 'Analytics',      path: '/admin/analytics' },
    { icon: '🤖', label: 'ML Models',      path: '/admin/ml' },
    { icon: '⛓️', label: 'Blockchain Logs',path: '/admin/blockchain' },
    { icon: '💻', label: 'System Health',  path: '/admin/system-health' },
    { icon: '🛡️', label: 'Security',      path: '/admin/security' },
  ],
};

export default function Sidebar({ role, activeItem }) {
  const navigate = useNavigate();
  const { state, dispatch } = useApp();
  const items = navItems[role] || [];

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/welcome');
  };

  return (
    <aside className={`sidebar ${state.sidebarCollapsed ? 'collapsed' : ''} ${state.sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">O</div>
        <div className="sidebar-brand">OMABS</div>
        <button
          style={{ marginLeft:'auto', background:'none', border:'none', cursor:'pointer', color:'var(--text-secondary)', fontSize:'1.2rem' }}
          onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR_COLLAPSE' })}
        >⟨</button>
      </div>

      <nav className="sidebar-nav">
        {items.map(item => (
          <div
            key={item.path}
            className={`sidebar-item ${activeItem === item.path ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-item" onClick={handleLogout}>
          <span className="sidebar-icon">🚪</span>
          <span className="sidebar-label">Logout</span>
        </div>
      </div>
    </aside>
  );
}
