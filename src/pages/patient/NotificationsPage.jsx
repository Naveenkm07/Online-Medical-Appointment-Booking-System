import { useToast } from '../../context/ToastContext';
import { useState } from 'react';

export default function NotificationsPage() {
  const { showToast } = useToast();
  const [filter, setFilter] = useState('All');

  const notifications = [
    { icon: '📅', title: 'Appointment Confirmed', msg: 'Your appointment with Dr. Priya Mehta on Jun 5 at 10:00 AM is confirmed.', time: '2 hours ago', unread: true, type: 'success' },
    { icon: '🔔', title: 'Appointment Reminder', msg: 'Reminder: You have an appointment with Dr. Priya Mehta tomorrow at 10:00 AM.', time: '5 hours ago', unread: true, type: 'warning' },
    { icon: '📋', title: 'Lab Report Ready', msg: 'Your blood test report from Apollo Diagnostics is now available in your health vault.', time: 'Yesterday', unread: true, type: 'info' },
    { icon: '💊', title: 'Prescription Added', msg: 'Dr. Mehta added a new prescription to your health records.', time: '2 days ago', unread: false, type: 'primary' },
    { icon: '⭐', title: 'Rate Your Visit', msg: 'How was your appointment with Dr. Rajan Nair? Share your feedback.', time: '3 days ago', unread: false, type: '' },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div className="tabs">
          {['All (8)', 'Appointments', 'Reminders', 'System'].map(t => (
            <div key={t} className={`tab ${filter === t.split(' ')[0] ? 'active' : ''}`} onClick={() => setFilter(t.split(' ')[0])}>{t}</div>
          ))}
        </div>
        <button className="btn btn-ghost btn-sm" onClick={() => showToast('success', 'Done!', 'All notifications marked as read.')}>Mark all read ✓</button>
      </div>
      
      {notifications.map((n, i) => (
        <div
          key={i}
          style={{
            display: 'flex', gap: '16px', padding: '16px', borderRadius: 'var(--radius-lg)',
            background: n.unread ? 'var(--primary-50)' : 'var(--bg-base)',
            border: `1px solid ${n.unread ? 'var(--primary-200)' : 'var(--border-color)'}`,
            marginBottom: '12px', transition: 'all .2s'
          }}
        >
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
            {n.icon}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <strong style={{ fontSize: 'var(--text-sm)' }}>{n.title}</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{n.time}</span>
                {n.unread && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-600)' }}></div>}
              </div>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: '4px' }}>{n.msg}</p>
          </div>
        </div>
      ))}
    </>
  );
}
