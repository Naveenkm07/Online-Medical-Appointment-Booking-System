import { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { useApp } from '../../context/AppContext';

export default function PatientProfilePage() {
  const { showToast } = useToast();
  const { state, dispatch } = useApp();

  const [toggles, setToggles] = useState({
    'Appointment Reminders': true,
    'Booking Confirmations': true,
    'Promotional Offers': false,
    'Health Tips': true,
  });

  const toggle = (key) => setToggles(p => ({ ...p, [key]: !p[key] }));

  const preferences = [
    ['Appointment Reminders', 'SMS + Email'],
    ['Booking Confirmations', 'Email'],
    ['Promotional Offers', 'None'],
    ['Health Tips', 'Email'],
  ];

  const profile = state.userProfile || {
    firstName: 'Arjun',
    lastName: 'Sharma',
    email: 'arjun.sharma@email.com',
    phone: '+91 98765 43210',
    dob: '1990-06-15',
    bloodGroup: 'O+',
    address: '42, MG Road, Bangalore — 560001'
  };

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const saveProfile = () => {
    dispatch({ type: 'SET_USER_PROFILE', payload: formData });
    // Also update TopNav name
    dispatch({ type: 'SET_USER', payload: { name: `${formData.firstName} ${formData.lastName}` } });
    showToast('success', 'Saved!', 'Profile updated successfully.');
  };

  return (
    <div style={{ maxWidth: '700px' }}>
      <div className="card mb-6" style={{ textAlign: 'center', padding: '40px' }}>
        <div className="avatar avatar-2xl" style={{ margin: '0 auto 16px', overflow: 'hidden' }}>
          <img 
            src={state.avatar} 
            alt={formData.firstName} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
        <h4 style={{ fontFamily: 'var(--font-heading)' }}>{formData.firstName} {formData.lastName}</h4>
        <p style={{ color: 'var(--text-secondary)' }}>{formData.email}</p>
        <span className="badge badge-primary mt-4">Patient</span>
        <div style={{ marginTop: '16px' }}>
          <input 
            type="file" 
            id="avatar-upload" 
            style={{ display: 'none' }} 
            accept="image/*" 
            onChange={() => {
              const newUrl = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80";
              dispatch({ type: 'SET_AVATAR', payload: newUrl });
              showToast('success', 'Photo Updated', 'Your profile picture has been changed.');
            }}
          />
          <button className="btn btn-secondary btn-sm" onClick={() => document.getElementById('avatar-upload').click()}>
            📷 Change Photo
          </button>
        </div>
      </div>
      
      <div className="card mb-5">
        <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>Personal Information</h6>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-row">
            <div className="input-group"><label className="input-label">First Name</label><input className="input" name="firstName" value={formData.firstName} onChange={handleChange} /></div>
            <div className="input-group"><label className="input-label">Last Name</label><input className="input" name="lastName" value={formData.lastName} onChange={handleChange} /></div>
          </div>
          <div className="input-group"><label className="input-label">Email</label><input className="input" type="email" name="email" value={formData.email} onChange={handleChange} /></div>
          <div className="input-group"><label className="input-label">Phone</label><input className="input" name="phone" value={formData.phone} onChange={handleChange} /></div>
          <div className="form-row">
            <div className="input-group"><label className="input-label">Date of Birth</label><input className="input" type="date" name="dob" value={formData.dob} onChange={handleChange} /></div>
            <div className="input-group"><label className="input-label">Blood Group</label><input className="input" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} /></div>
          </div>
          <div className="input-group"><label className="input-label">Address</label><input className="input" name="address" value={formData.address} onChange={handleChange} /></div>
          <button className="btn btn-gradient btn-lg" onClick={saveProfile}>Save Changes</button>
        </div>
      </div>
      
      <div className="card mb-5">
        <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>Notification Preferences</h6>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {preferences.map(([label, channel]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{label}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{channel}</div>
              </div>
              <div className="toggle-wrap" onClick={() => toggle(label)}>
                <div className={`toggle ${toggles[label] ? 'on' : ''}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card" style={{ borderColor: 'var(--danger-200)', background: 'var(--danger-50)' }}>
        <h6 style={{ fontFamily: 'var(--font-heading)', color: 'var(--danger-600)', marginBottom: '8px' }}>Danger Zone</h6>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '16px' }}>Permanently delete your account and all health records. This action cannot be undone.</p>
        <button className="btn btn-danger btn-sm" onClick={() => showToast('error', 'Action Required', 'Please contact support to delete your account.')}>🗑️ Delete Account</button>
      </div>
    </div>
  );
}
