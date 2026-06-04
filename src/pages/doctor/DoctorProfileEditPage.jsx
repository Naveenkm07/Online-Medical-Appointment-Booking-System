import { useToast } from '../../context/ToastContext';

export default function DoctorProfileEditPage() {
  const { showToast } = useToast();

  return (
    <div style={{ maxWidth: '700px' }}>
      <div className="card mb-5" style={{ textAlign: 'center', padding: '40px' }}>
        <div className="avatar avatar-2xl" style={{ margin: '0 auto 16px', background: 'linear-gradient(135deg,var(--primary-500),var(--teal-400))' }}>PM</div>
        <h4 style={{ fontFamily: 'var(--font-heading)' }}>Dr. Priya Mehta</h4>
        <button className="btn btn-secondary btn-sm mt-4" onClick={() => showToast('info', 'Upload', 'Choose profile photo')}>📷 Change Photo</button>
      </div>
      
      <div className="card mb-5">
        <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>Professional Details</h6>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-row">
            <div className="input-group"><label className="input-label">First Name</label><input className="input" defaultValue="Priya" /></div>
            <div className="input-group"><label className="input-label">Last Name</label><input className="input" defaultValue="Mehta" /></div>
          </div>
          <div className="input-group"><label className="input-label">Primary Specialization</label><input className="input" defaultValue="Cardiologist" /></div>
          <div className="input-group"><label className="input-label">Sub-Specialization</label><input className="input" defaultValue="Cardiac Electrophysiologist" /></div>
          <div className="input-group"><label className="input-label">Years of Experience</label><input className="input" type="number" defaultValue="12" /></div>
          <div className="input-group"><label className="input-label">Consultation Fee (₹)</label><input className="input" type="number" defaultValue="800" /></div>
          <div className="input-group"><label className="input-label">Hospital / Clinic</label><input className="input" defaultValue="Apollo Hospital, Mumbai" /></div>
          <div className="input-group">
            <label className="input-label">Bio</label>
            <textarea className="input" rows="4" style={{ resize: 'vertical' }} defaultValue="Dr. Priya Mehta is a highly respected cardiologist with 12 years of experience..." />
          </div>
          <button className="btn btn-gradient btn-lg" onClick={() => showToast('success', 'Saved!', 'Profile updated successfully.')}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
