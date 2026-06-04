import { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export default function UserManagementPage() {
  const { showToast } = useToast();
  
  const initialUsers = [
    { id: 1, name: 'Arjun Sharma', role: 'patient', email: 'arjun@email.com', date: 'Mar 12, 2024', active: true },
    { id: 2, name: 'Dr. Priya Mehta', role: 'doctor', email: 'priya@hospital.com', date: 'Jan 5, 2024', active: true },
    { id: 3, name: 'Meena Singh', role: 'patient', email: 'meena@email.com', date: 'Apr 22, 2024', active: true },
    { id: 4, name: 'Dr. Rajan Nair', role: 'doctor', email: 'rajan@clinic.com', date: 'Feb 18, 2024', active: false },
    { id: 5, name: 'Suresh Kumar', role: 'patient', email: 'suresh@email.com', date: 'May 1, 2024', active: true },
    { id: 6, name: 'Admin Ops', role: 'admin', email: 'ops@omabs.com', date: 'Dec 1, 2023', active: true },
  ];
  
  const [users, setUsers] = useState(initialUsers);

  const toggleStatus = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, active: !u.active } : u));
    showToast('info', 'Status Updated', 'User status changed.');
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div className="input-icon-wrap flex-1" style={{ maxWidth: '400px' }}>
          <span className="input-icon">🔍</span>
          <input className="input" placeholder="Search users by name, email, ID..." style={{ paddingLeft: '2.5rem' }} />
        </div>
        <select className="input" style={{ width: 'auto' }}>
          <option>All Roles</option>
          <option>Patients</option>
          <option>Doctors</option>
          <option>Admins</option>
        </select>
        <select className="input" style={{ width: 'auto' }}>
          <option>All Status</option>
          <option>Active</option>
          <option>Suspended</option>
        </select>
        <button className="btn btn-secondary btn-sm" onClick={() => showToast('success', 'Exported!', 'Users exported as CSV.')}>📥 Export CSV</button>
        <button className="btn btn-gradient btn-sm" onClick={() => showToast('info', 'Add User', 'Add user form coming soon.')}>+ Add User</button>
      </div>
      
      <div className="card" style={{ overflowX: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Email</th>
              <th>Registered</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div className="avatar avatar-sm">{u.name.charAt(0)}</div>
                    <div style={{ fontWeight: 600 }}>{u.name}</div>
                  </div>
                </td>
                <td>
                  <span className={`badge badge-${u.role === 'admin' ? 'danger' : u.role === 'doctor' ? 'primary' : 'teal'}`}>
                    {u.role}
                  </span>
                </td>
                <td style={{ color: 'var(--text-secondary)' }}>{u.email}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{u.date}</td>
                <td>
                  <div className="toggle-wrap" onClick={() => toggleStatus(u.id)}>
                    <div className={`toggle ${u.active ? 'on' : ''}`}></div>
                    <span style={{ fontSize: 'var(--text-xs)' }}>{u.active ? 'Active' : 'Suspended'}</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button className="btn btn-ghost btn-sm">✏️</button>
                    <button className="btn btn-ghost btn-sm" style={{ color: 'var(--danger-500)' }}>🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
          <span>Showing 1–6 of 50,247 users</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[1, 2, 3, '...', 2847].map((p, i) => (
              <button key={i} className={`btn btn-ghost btn-sm ${p === 1 ? 'btn-primary' : ''}`}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
