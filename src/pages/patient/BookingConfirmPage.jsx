import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

export default function BookingConfirmPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const details = [
    ['👨‍⚕️ Doctor', 'Dr. Priya Mehta'],
    ['🏥 Hospital', 'Apollo Hospital, Mumbai'],
    ['📅 Date', 'Wednesday, June 5, 2025'],
    ['⏰ Time', '10:00 AM — 10:30 AM'],
    ['💰 Fee Paid', '₹800'],
    ['📍 Location', 'Room 301, Cardiac Wing'],
  ];

  return (
    <div className="booking-success">
      <div className="success-animation">🎉</div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', marginBottom: '8px' }}>Appointment Booked!</h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Your appointment has been confirmed and a confirmation SMS + email has been sent.</p>
      
      <div className="booking-id">OMABS-2024-06050800-PM</div>
      
      <div className="card mb-6" style={{ textAlign: 'left' }}>
        {details.map(([l, v]) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border-color)', fontSize: 'var(--text-sm)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>{l}</span>
            <span style={{ fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>
      
      <div className="qr-placeholder">📱</div>
      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginBottom: '24px' }}>Show this QR code at reception</p>
      
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="btn btn-primary" onClick={() => showToast('success', 'Added!', 'Appointment added to calendar.')}>📆 Add to Calendar</button>
        <button className="btn btn-secondary" onClick={() => showToast('info', 'Shared!', 'Appointment details shared.')}>📤 Share</button>
        <button className="btn btn-ghost" onClick={() => navigate('/patient/home')}>Go to Dashboard</button>
      </div>
    </div>
  );
}
