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
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const toggleStatus = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, active: !u.active } : u));
    showToast('info', 'Status Updated', 'User status changed.');
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(prev => prev.filter(u => u.id !== id));
      showToast('success', 'User Deleted', 'The user has been successfully removed.');
    }
  };

  const filteredUsers = users.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || 
                        u.email.toLowerCase().includes(search.toLowerCase()) || 
                        u.id.toString().includes(search);
    
    let matchRole = true;
    if (roleFilter === 'Patients') matchRole = u.role === 'patient';
    else if (roleFilter === 'Doctors') matchRole = u.role === 'doctor';
    else if (roleFilter === 'Admins') matchRole = u.role === 'admin';

    let matchStatus = true;
    if (statusFilter === 'Active') matchStatus = u.active === true;
    else if (statusFilter === 'Suspended') matchStatus = u.active === false;

    return matchSearch && matchRole && matchStatus;
  });

  const handleExport = () => {
    const headers = ['ID', 'Name', 'Role', 'Email', 'Registered', 'Status'];
    const csvContent = [
      headers.join(','),
      ...filteredUsers.map(u => `"${u.id}","${u.name}","${u.role}","${u.email}","${u.date}","${u.active ? 'Active' : 'Suspended'}"`)
    ].join('\\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `omabs_users_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('success', 'Exported!', 'Users exported as CSV.');
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div className="input-icon-wrap flex-1" style={{ maxWidth: '400px' }}>
          <span className="input-icon">🔍</span>
          <input className="input" placeholder="Search users by name, email, ID..." style={{ paddingLeft: '2.5rem' }} value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <select className="input" style={{ width: 'auto' }} value={roleFilter} onChange={e => setRoleFilter(e.target.value)}>
          <option>All Roles</option>
          <option>Patients</option>
          <option>Doctors</option>
          <option>Admins</option>
        </select>
        <select className="input" style={{ width: 'auto' }} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option>All Status</option>
          <option>Active</option>
          <option>Suspended</option>
        </select>
        <button className="btn btn-secondary btn-sm" onClick={handleExport}>📥 Export CSV</button>
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
            {filteredUsers.length > 0 ? filteredUsers.map(u => (
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
                    <button className="btn btn-ghost btn-sm" onClick={() => showToast('info', 'Edit', 'Edit feature coming soon.')}>✏️</button>
                    <button className="btn btn-ghost btn-sm" style={{ color: 'var(--danger-500)' }} onClick={() => handleDelete(u.id)}>🗑️</button>
                  </div>
                </td>
              </tr>
            )) : <tr><td colSpan="6" style={{ textAlign: 'center', padding: '24px', color: 'var(--text-secondary)' }}>No users found matching your criteria.</td></tr>}
          </tbody>
        </table>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
          <span>Showing {filteredUsers.length} users</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-ghost btn-sm btn-primary">1</button>
          </div>
        </div>
      </div>
    </>
  );
}
