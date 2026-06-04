import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/landing'), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash">
      <div className="splash-logo">O</div>
      <div className="splash-name">OMABS</div>
      <div className="splash-tag">Online Medical Appointment Booking System</div>
      <div className="splash-loader">
        <div className="splash-dot" />
        <div className="splash-dot" />
        <div className="splash-dot" />
      </div>
    </div>
  );
}
