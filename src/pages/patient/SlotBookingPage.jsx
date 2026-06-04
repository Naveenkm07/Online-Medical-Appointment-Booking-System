import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SlotBookingPage() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(2); // Wednesday selected by default
  const [selectedSlot, setSelectedSlot] = useState(null);

  const days = ['Mon 3', 'Tue 4', 'Wed 5', 'Thu 6', 'Fri 7', 'Sat 8', 'Sun 9'];
  const legend = [
    { cls: 'available', c: '#22c55e', l: 'Available' },
    { cls: 'reserved', c: '#f59e0b', l: 'Reserved' },
    { cls: 'confirmed', c: '#ef4444', l: 'Booked' },
    { cls: 'selected', c: '#4f46e5', l: 'Selected' },
  ];

  const slots = [
    'available', 'available', 'reserved', 'available', 'confirmed', 'available',
    'available', 'reserved', 'available', 'available', 'confirmed', 'available',
    'available', 'available', 'available', 'reserved', 'available', 'available',
  ];
  const times = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30'];

  const handleSlotSelect = (status, time) => {
    if (status !== 'reserved' && status !== 'confirmed') {
      setSelectedSlot(time);
    }
  };

  return (
    <div style={{ maxWidth: '900px' }}>
      <div className="grid-2">
        <div>
          <div className="card mb-5">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="avatar avatar-md">PM</div>
              <div>
                <div style={{ fontWeight: 700 }}>Dr. Priya Mehta</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Cardiologist · ₹800</div>
              </div>
            </div>
            
            <div className="tabs mb-4">
              <div className="tab active">Week View</div>
              <div className="tab">Month View</div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '6px', marginBottom: '16px' }}>
              {days.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDay(i)}
                  style={{
                    padding: '10px 4px', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-color)',
                    background: i === selectedDay ? 'var(--primary-600)' : 'var(--bg-subtle)',
                    color: i === selectedDay ? '#fff' : 'var(--text-secondary)',
                    cursor: 'pointer', fontSize: 'var(--text-xs)', fontWeight: 600, transition: 'all .2s'
                  }}
                >
                  {d}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '12px', fontSize: 'var(--text-xs)' }}>
              {legend.map((lg) => (
                <div key={lg.l} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: lg.c }}></div>
                  <span>{lg.l}</span>
                </div>
              ))}
            </div>

            <div className="slot-grid">
              {slots.map((s, i) => (
                <div
                  key={i}
                  className={`slot ${selectedSlot === times[i] ? 'selected' : s}`}
                  onClick={() => handleSlotSelect(s, times[i])}
                >
                  {times[i]}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="card" style={{ position: 'sticky', top: '80px' }}>
            <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>Booking Summary</h6>
            
            {!selectedSlot ? (
              <div style={{ textAlign: 'center', padding: '32px', color: 'var(--text-tertiary)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📅</div>
                <div style={{ fontSize: 'var(--text-sm)' }}>Select a slot from the calendar</div>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                  {[
                    ['Doctor', 'Dr. Priya Mehta'],
                    ['Specialty', 'Cardiologist'],
                    ['Date', 'Wednesday, June 5'],
                    ['Time', `${selectedSlot} AM`],
                    ['Fee', '₹800'],
                    ['Mode', 'In-Person'],
                  ].map(([l, v]) => (
                    <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>{l}</span>
                      <span style={{ fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                    <span>Total</span><span>₹800</span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                    <span className="badge badge-success">🔒</span> Secured by AES-256 encryption
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                    <span className="badge badge-primary">⚡</span> Real-time slot lock via WebSocket
                  </div>
                </div>
                
                <button className="btn btn-gradient btn-lg w-full" onClick={() => navigate('/patient/booking-confirm')}>
                  Confirm Booking →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
