import { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { upcomingAppointments, pastAppointments } from '../../data/mockAppointments';

export default function MyAppointmentsPage() {
  const { showToast } = useToast();
  const [filter, setFilter] = useState('upcoming');
  const [search, setSearch] = useState('');
  
  // Reschedule Modal State
  const [showReschedule, setShowReschedule] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState(null);

  // Combine and format data based on filter
  let baseAppointments;
  if (filter === 'upcoming') {
    baseAppointments = upcomingAppointments.map((a, i) => ({ ...a, id: `APT-100${i+1}` }));
  } else if (filter === 'past') {
    baseAppointments = pastAppointments.map((a, i) => ({ ...a, id: `APT-200${i+1}` }));
  } else {
    // Fake cancelled data
    baseAppointments = [
      { doctor: 'Dr. Meera Agarwal', spec: 'Psychiatrist', date: 'May 10', time: '11:00 AM', status: 'cancelled', id: 'APT-3001' }
    ];
  }

  // Apply search filter
  const appointments = baseAppointments.filter(a => 
    a.doctor.toLowerCase().includes(search.toLowerCase()) || 
    a.spec.toLowerCase().includes(search.toLowerCase())
  );

  const handleRescheduleClick = (appt) => {
    setSelectedAppt(appt);
    setShowReschedule(true);
  };

  const submitReschedule = () => {
    showToast('success', 'Rescheduled Successfully', `Your appointment with ${selectedAppt.doctor} has been moved.`);
    setShowReschedule(false);
    setSelectedAppt(null);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
        <div className="tabs" id="appt-tabs" style={{ marginBottom: 0 }}>
          <div className={`tab ${filter === 'upcoming' ? 'active' : ''}`} onClick={() => setFilter('upcoming')}>Upcoming ({upcomingAppointments.length})</div>
          <div className={`tab ${filter === 'past' ? 'active' : ''}`} onClick={() => setFilter('past')}>Past ({pastAppointments.length})</div>
          <div className={`tab ${filter === 'cancelled' ? 'active' : ''}`} onClick={() => setFilter('cancelled')}>Cancelled (1)</div>
        </div>
        
        <div className="input-group" style={{ margin: 0, minWidth: '250px' }}>
          <input 
            type="text" 
            className="input" 
            placeholder="🔍 Search doctor or specialty..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ borderRadius: '20px' }}
          />
        </div>
      </div>

      {appointments.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📭</div>
          <h5 style={{ fontFamily: 'var(--font-heading)' }}>No appointments found</h5>
          <p style={{ color: 'var(--text-secondary)' }}>Try adjusting your search or filters.</p>
        </div>
      ) : (
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
                <span className={`badge badge-${a.status === 'confirmed' || a.status === 'completed' ? 'success' : a.status === 'cancelled' ? 'danger' : 'warning'}`}>{a.status}</span>
                
                {a.status === 'confirmed' || a.status === 'pending' ? (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="btn btn-ghost btn-sm" onClick={() => showToast('info', 'Chat Started', 'Opening secure chat...')}>💬 Message</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => handleRescheduleClick(a)}>Reschedule</button>
                    <button className="btn btn-danger btn-sm" onClick={() => showToast('warning', 'Appointment Cancelled', 'Cancellation confirmed. Refund in 3-5 days.')}>Cancel</button>
                  </div>
                ) : a.status === 'completed' ? (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => showToast('success', 'Downloaded', 'Prescription has been downloaded.')}>📥 Prescription</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => showToast('info', 'Booking', 'Redirecting to re-book...')}>Re-book</button>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reschedule Modal */}
      {showReschedule && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px', animation: 'scaleIn 0.2s ease-out' }}>
            <h5 style={{ fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>Reschedule Appointment</h5>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: '20px' }}>Select a new time for {selectedAppt?.doctor}</p>
            
            <div className="input-group mb-4">
              <label className="input-label">Select Date</label>
              <input type="date" className="input" defaultValue="2026-06-10" />
            </div>
            
            <div className="input-group mb-5">
              <label className="input-label">Select Time</label>
              <select className="input">
                <option>09:00 AM</option>
                <option>11:30 AM</option>
                <option>02:00 PM</option>
                <option>04:30 PM</option>
              </select>
            </div>
            
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button className="btn btn-ghost" onClick={() => setShowReschedule(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={submitReschedule}>Confirm Reschedule</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
