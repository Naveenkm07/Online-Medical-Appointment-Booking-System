import { useToast } from '../../../context/ToastContext';

export default function LandingContact() {
  const { showToast } = useToast();

  return (
    <section className="section">
      <div className="section-header">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Get in touch</h2>
        <p className="section-desc">Have questions? Our team is ready to help you set up OMABS for your clinic.</p>
      </div>
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        <div className="card">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="form-row">
              <div className="input-group"><label className="input-label">Full Name</label><input className="input" placeholder="Dr. Rajesh Kumar" /></div>
              <div className="input-group"><label className="input-label">Email</label><input className="input" type="email" placeholder="rajesh@hospital.com" /></div>
            </div>
            <div className="input-group"><label className="input-label">Organization</label><input className="input" placeholder="Apollo Hospitals" /></div>
            <div className="input-group"><label className="input-label">Message</label><textarea className="input" rows="4" style={{ resize: 'vertical' }} placeholder="Tell us about your requirements..."></textarea></div>
            <button
              className="btn btn-gradient btn-lg w-full"
              onClick={() => showToast('success', 'Message Sent!', 'Our team will reach out within 24 hours.')}
            >
              Send Message 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
