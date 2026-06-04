import { useNavigate } from 'react-router-dom';

const items = [
  { icon: '🏠', label: 'Home',    path: '/patient/home' },
  { icon: '🔍', label: 'Search',  path: '/patient/symptom-input' },
  { icon: '📅', label: 'Book',    path: '/patient/slot-booking' },
  { icon: '🔗', label: 'Records', path: '/patient/health-records' },
  { icon: '👤', label: 'Profile', path: '/patient/profile' },
];

export default function BottomNav({ activeScreen }) {
  const navigate = useNavigate();
  return (
    <nav className="bottom-nav">
      {items.map(item => (
        <div
          key={item.path}
          className={`bottom-nav-item ${activeScreen === item.path ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
}
