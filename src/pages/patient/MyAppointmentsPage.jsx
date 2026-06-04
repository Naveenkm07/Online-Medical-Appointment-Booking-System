import { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export default function MyAppointmentsPage() {
  const { showToast } = useToast();
  const [filter, setFilter] = useState('upcoming');

  const appointments = [
    { doctor: 'Dr. Priya Mehta', spec: 'Cardiologist', date: 'Jun 5, 2025', time: '10:00 AM', status: 'confirmed', id: 'APT-001' },
    { doctor: 'Dr. Rajan Nair', spec: 'Dermatologist', date: 'Jun 8, 2025', time: '3:30 PM', status: 'confirmed', id: 'APT-002' },
    { doctor: 'Dr. S. Rao', spec: 'Neurologist', date: 'Jun 15, 2025', time: '11:00 AM', status: 'pending', id: 'APT-003' },
  ];

  return (
    <>
      <div className="tabs mb-6" id="appt-tabs">
        <div className={`tab ${filter === 'upcoming' ? 'active' : ''}`} onClick={() => setFilter('upcoming')}>Upcoming (3)</div>
        <div className={`tab ${filter === 'past' ? 'active' : ''}`} onClick={() => setFilter('past')}>Past (21)</div>
        <div className={`tab ${filter === 'cancelled' ? 'active' : ''}`} onClick={() => setFilter('cancelled')}>Cancelled (2)</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {appointments.map(a => (
          <div key={a.id} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="avatar avatar-lg">{a.doctor.split(' ').map(w => w[0]).join('')}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 'var(--text-lg)' }}>{a.doctor}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{a.spec}</div>
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                <span>📅 {a.date}</span>
                <span>⏰ {a.time}</span>
                <span>🆔 {a.id}</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
              <span className={`badge badge-${a.status === 'confirmed' ? 'success' : 'warning'}`}>{a.status}</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-ghost btn-sm">💬 Message</button>
                <button className="btn btn-secondary btn-sm">Reschedule</button>
                <button className="btn btn-danger btn-sm" onClick={() => showToast('warning', 'Appointment Cancelled', 'Cancellation confirmed. Refund in 3-5 days.')}>Cancel</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
