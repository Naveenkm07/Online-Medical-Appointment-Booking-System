import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useToast } from '../../context/ToastContext';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    bloodGroup: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName) {
      showToast('error', 'Required Fields', 'Please enter your first and last name.');
      return;
    }
    
    // Save to AppContext
    dispatch({ type: 'SET_USER_PROFILE', payload: formData });
    dispatch({ type: 'SET_USER', payload: { name: `${formData.firstName} ${formData.lastName}` } });
    
    showToast('success', 'Profile Created', 'Welcome to OMABS! Your profile is set up.');
    navigate('/patient/home');
  };

  return (
    <div className="login-container">
      <div className="login-card" style={{ maxWidth: '600px', width: '100%', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ background: 'var(--primary-600)', color: 'white', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>O</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>OMABS</div>
          </div>
          <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: '8px' }}>Welcome to OMABS</h4>
          <p style={{ color: 'var(--text-secondary)' }}>Let's set up your patient profile</p>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-row" style={{ display: 'flex', gap: '16px' }}>
            <div className="input-group" style={{ flex: 1 }}>
              <label className="input-label">First Name *</label>
              <input className="input" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="e.g. Arjun" required />
            </div>
            <div className="input-group" style={{ flex: 1 }}>
              <label className="input-label">Last Name *</label>
              <input className="input" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="e.g. Sharma" required />
            </div>
          </div>
          
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="arjun.sharma@email.com" />
          </div>
          
          <div className="input-group">
            <label className="input-label">Phone Number</label>
            <input className="input" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
          </div>
          
          <div className="form-row" style={{ display: 'flex', gap: '16px' }}>
            <div className="input-group" style={{ flex: 1 }}>
              <label className="input-label">Date of Birth</label>
              <input className="input" type="date" name="dob" value={formData.dob} onChange={handleChange} />
            </div>
            <div className="input-group" style={{ flex: 1 }}>
              <label className="input-label">Blood Group</label>
              <select className="input" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
          
          <div className="input-group">
            <label className="input-label">Address</label>
            <input className="input" name="address" value={formData.address} onChange={handleChange} placeholder="42, MG Road, Bangalore — 560001" />
          </div>
          
          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '16px' }}>
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
}
