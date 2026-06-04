import { useToast } from '../../context/ToastContext';
import { useState } from 'react';

export default function NotificationsPage() {
  const { showToast } = useToast();
  const [filter, setFilter] = useState('All');

  const notifications = [
    { 
      icon: '🩺', 
      title: 'Urgent Message Regarding Test', 
      msg: 'Please ensure you fast for exactly 12 hours before your lipid profile test tomorrow morning. Do not drink anything except water.', 
      time: '1 hour ago', 
      unread: true, 
      senderRole: 'doctor',
      sender: 'Dr. Priya Mehta'
    },
    { 
      icon: '🛡️', 
      title: 'Account Migration Notice', 
      msg: 'Your health records have been successfully migrated to the new blockchain-secured vault. No action is required from you.', 
      time: '3 hours ago', 
      unread: true, 
      senderRole: 'admin',
      sender: 'System Admin'
    },
    { 
      icon: '📅', 
      title: 'Appointment Confirmed', 
      msg: 'Your appointment with Dr. Vikram Malhotra on Oct 15 at 3:30 PM is confirmed.', 
      time: '5 hours ago', 
      unread: false, 
      senderRole: 'system',
      sender: 'Automated System'
    },
    { 
      icon: '🩺', 
      title: 'Follow-up Instructions', 
      msg: 'Your recent skin allergy test results are completely normal. Keep applying the prescribed ointment for one more week.', 
      time: 'Yesterday', 
      unread: false, 
      senderRole: 'doctor',
      sender: 'Dr. Rajan Nair'
    },
    { 
      icon: '🛡️', 
      title: 'Security Alert: New Login', 
      msg: 'New login detected from Chrome on Windows (Bangalore). If this was you, you can safely ignore this message.', 
      time: '2 days ago', 
      unread: false, 
      senderRole: 'admin',
      sender: 'Security Team'
    }
  ];

  const filtered = notifications.filter(n => {
    if (filter === 'All') return true;
    if (filter === 'Doctors' && n.senderRole === 'doctor') return true;
    if (filter === 'Admins' && n.senderRole === 'admin') return true;
    if (filter === 'System' && n.senderRole === 'system') return true;
    return false;
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
        <div className="tabs" style={{ marginBottom: 0 }}>
          {['All', 'Doctors', 'Admins', 'System'].map(t => (
            <div key={t} className={`tab ${filter === t ? 'active' : ''}`} onClick={() => setFilter(t)}>{t}</div>
          ))}
        </div>
        <button className="btn btn-ghost btn-sm" onClick={() => showToast('success', 'Done!', 'All notifications marked as read.')}>Mark all read ✓</button>
      </div>
      
      {filtered.length === 0 && (
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📭</div>
          <p style={{ color: 'var(--text-secondary)' }}>No notifications found in this category.</p>
        </div>
      )}

      {filtered.map((n, i) => (
        <div
          key={i}
          style={{
            display: 'flex', gap: '16px', padding: '16px', borderRadius: 'var(--radius-lg)',
            background: n.unread ? 'var(--primary-50)' : 'var(--bg-base)',
            border: `1px solid ${n.unread ? 'var(--primary-200)' : 'var(--border-color)'}`,
            marginBottom: '12px', transition: 'all .2s'
          }}
        >
          <div style={{ 
            width: '44px', height: '44px', borderRadius: '50%', 
            background: n.senderRole === 'admin' ? 'var(--danger-50)' : n.senderRole === 'doctor' ? 'var(--success-50)' : 'var(--bg-subtle)', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 
          }}>
            {n.icon}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
              <strong style={{ fontSize: 'var(--text-lg)', color: n.unread ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                {n.title}
              </strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{n.time}</span>
                {n.unread && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-600)' }}></div>}
              </div>
            </div>
            
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginBottom: '12px', marginTop: '6px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span className={`badge badge-${n.senderRole === 'admin' ? 'danger' : n.senderRole === 'doctor' ? 'success' : 'gray'}`} style={{ padding: '2px 6px', fontSize: '0.65rem' }}>
                {n.senderRole.toUpperCase()}
              </span>
              Sent by {n.sender}
            </div>

            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginTop: '4px', lineHeight: 1.6 }}>
              {n.msg}
            </p>
            
            {n.senderRole === 'doctor' && (
              <div style={{ marginTop: '16px' }}>
                <button className="btn btn-secondary btn-sm" onClick={() => showToast('info', 'Chat Started', `Replying to ${n.sender}`)}>💬 Reply to Doctor</button>
              </div>
            )}
            
            {n.senderRole === 'admin' && (
              <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button className="btn btn-secondary btn-sm" onClick={() => showToast('info', 'Security Settings', 'Opening security dashboard...')}>Review Security</button>
                <button className="btn btn-ghost btn-sm" onClick={() => showToast('success', 'Dismissed', 'Alert dismissed.')}>Dismiss Alert</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
