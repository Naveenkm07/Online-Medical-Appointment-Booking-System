import { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { useApp } from '../../context/AppContext';

export default function DoctorProfileEditPage() {
  const { showToast } = useToast();
  const { state, dispatch } = useApp();

  const profile = state.doctorProfile || {
    firstName: 'Priya',
    lastName: 'Mehta',
    spec: 'Cardiologist',
    subSpec: 'Cardiac Electrophysiologist',
    exp: '12',
    fee: '800',
    clinic: 'Apollo Hospital, Mumbai',
    bio: 'Dr. Priya Mehta is a highly respected cardiologist with 12 years of experience...'
  };

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch({ type: 'SET_DOCTOR_PROFILE', payload: formData });
    dispatch({ type: 'SET_USER', payload: { name: `Dr. ${formData.firstName} ${formData.lastName}` } });
    showToast('success', 'Saved!', 'Profile updated successfully.');
  };

  return (
    <div style={{ maxWidth: '700px' }}>
      <div className="card mb-5" style={{ textAlign: 'center', padding: '40px' }}>
        <div className="avatar avatar-2xl" style={{ margin: '0 auto 16px', background: 'linear-gradient(135deg,var(--primary-500),var(--teal-400))', overflow: 'hidden' }}>
          <img src={state.avatar} alt="Doctor avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h4 style={{ fontFamily: 'var(--font-heading)' }}>Dr. {formData.firstName} {formData.lastName}</h4>
        <button className="btn btn-secondary btn-sm mt-4" onClick={() => {
          dispatch({ type: 'SET_AVATAR', payload: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}` });
          showToast('info', 'Avatar Updated', 'Generated a new profile picture');
        }}>📷 Change Photo</button>
      </div>
      
      <div className="card mb-5">
        <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>Professional Details</h6>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-row">
            <div className="input-group"><label className="input-label">First Name</label><input className="input" name="firstName" value={formData.firstName} onChange={handleChange} /></div>
            <div className="input-group"><label className="input-label">Last Name</label><input className="input" name="lastName" value={formData.lastName} onChange={handleChange} /></div>
          </div>
          <div className="input-group"><label className="input-label">Primary Specialization</label><input className="input" name="spec" value={formData.spec} onChange={handleChange} /></div>
          <div className="input-group"><label className="input-label">Sub-Specialization</label><input className="input" name="subSpec" value={formData.subSpec} onChange={handleChange} /></div>
          <div className="input-group"><label className="input-label">Years of Experience</label><input className="input" type="number" name="exp" value={formData.exp} onChange={handleChange} /></div>
          <div className="input-group"><label className="input-label">Consultation Fee (₹)</label><input className="input" type="number" name="fee" value={formData.fee} onChange={handleChange} /></div>
          <div className="input-group"><label className="input-label">Hospital / Clinic</label><input className="input" name="clinic" value={formData.clinic} onChange={handleChange} /></div>
          <div className="input-group">
            <label className="input-label">Bio</label>
            <textarea className="input" rows="4" style={{ resize: 'vertical' }} name="bio" value={formData.bio} onChange={handleChange} />
          </div>
          <button className="btn btn-gradient btn-lg" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
