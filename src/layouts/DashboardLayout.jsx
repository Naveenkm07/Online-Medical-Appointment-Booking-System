import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import TopNav from '../components/layout/TopNav';
import BottomNav from '../components/layout/BottomNav';
import { useApp } from '../context/AppContext';

const titles = {
  '/patient/home': 'Patient Dashboard',
  '/patient/symptom-input': 'Find Doctors — AI Matching',
  '/patient/appointments': 'My Appointments',
  '/patient/health-records': 'Health Vault',
  '/patient/notifications': 'Notifications',
  '/patient/profile': 'My Profile',
  '/doctor/home': 'Doctor Dashboard',
  '/doctor/availability': 'Manage Availability',
  '/doctor/queue': 'Patient Queue',
  '/doctor/analytics': 'Analytics',
  '/admin/home': 'Admin Overview',
};

export default function DashboardLayout({ role }) {
  const { state } = useApp();
  const location = useLocation();
  const title = titles[location.pathname] || 'OMABS';

  return (
    <div className="dashboard-layout">
      <Sidebar role={role} activeItem={location.pathname} />
      <div className={`main-content ${state.sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <TopNav title={title} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
      {role === 'patient' && <BottomNav activeScreen={location.pathname} />}
    </div>
  );
}
