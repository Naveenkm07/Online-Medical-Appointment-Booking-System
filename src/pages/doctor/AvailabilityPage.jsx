import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export default function AvailabilityPage() {
  const { showToast } = useToast();

  const days = ['Mon 3', 'Tue 4', 'Wed 5', 'Thu 6', 'Fri 7', 'Sat 8', 'Sun 9'];
  const times = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00'];
  
  const initialStates = [
    ['booked', 'free', 'booked', 'free', 'booked', 'free', 'blocked'],
    ['free', 'booked', 'free', 'booked', 'free', 'blocked', 'blocked'],
    ['booked', 'booked', 'free', 'free', 'booked', 'free', 'blocked'],
    ['free', 'free', 'booked', 'booked', 'free', 'free', 'blocked'],
    ['booked', 'free', 'free', 'booked', 'booked', 'free', 'blocked'],
    ['free', 'booked', 'booked', 'free', 'free', 'free', 'blocked'],
    ['blocked', 'blocked', 'free', 'booked', 'free', 'free', 'blocked'],
    ['free', 'free', 'booked', 'free', 'booked', 'free', 'blocked'],
    ['booked', 'booked', 'free', 'free', 'free', 'blocked', 'blocked'],
    ['free', 'free', 'free', 'booked', 'booked', 'free', 'blocked'],
    ['booked', 'free', 'booked', 'free', 'free', 'free', 'blocked'],
    ['free', 'booked', 'free', 'booked', 'free', 'free', 'blocked'],
    ['booked', 'free', 'free', 'free', 'booked', 'blocked', 'blocked'],
    ['free', 'free', 'booked', 'booked', 'free', 'free', 'blocked'],
    ['booked', 'booked', 'free', 'free', 'booked', 'free', 'blocked'],
    ['free', 'free', 'free', 'booked', 'free', 'free', 'blocked'],
    ['booked', 'free', 'booked', 'free', 'free', 'blocked', 'blocked'],
  ];

  const [grid, setGrid] = useState(initialStates);

  const toggleSlot = (ti, di) => {
    setGrid(prev => {
      const next = [...prev];
      const nextRow = [...next[ti]];
      if (nextRow[di] === 'booked') return prev; // Cannot unbook confirmed
      nextRow[di] = nextRow[di] === 'blocked' ? 'free' : 'blocked';
      next[ti] = nextRow;
      return next;
    });
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h5 style={{ fontFamily: 'var(--font-heading)' }}>Manage Your Availability</h5>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Set your available hours. Real-time conflicts detected automatically.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-secondary btn-sm">Slot Duration: 30min ▼</button>
          <button className="btn btn-gradient btn-sm" onClick={() => showToast('success', 'Published!', 'Availability saved and visible to patients.')}>Save & Publish</button>
        </div>
      </div>
      
      <div className="card">
        <div className="availability-grid">
          <div></div>
          {days.map(d => <div key={d} className="avail-header">{d}</div>)}
          
          {times.map((time, ti) => (
            <React.Fragment key={time}>
              <div className="avail-time">{time}</div>
              {grid[ti].map((s, di) => (
                <div
                  key={di}
                  className={`avail-slot ${s}`}
                  title={s === 'booked' ? 'Booked' : s === 'blocked' ? 'Blocked' : 'Free'}
                  onClick={() => toggleSlot(ti, di)}
                ></div>
              ))}
            </React.Fragment>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
          {[
            ['#22c55e', 'Booked by Patient'],
            ['var(--bg-subtle)', 'Available (Free)'],
            ['var(--danger-200)', 'Blocked']
          ].map(([c, l]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--text-xs)' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: 'var(--radius-sm)', background: c, border: '1px solid var(--border-color)' }}></div>
              {l}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
