export default function LandingFeatures() {
  const features = [
    { icon: '🧠', title: 'ML Recommendations', desc: 'BioBERT + collaborative filtering analyzes symptoms to match patients with the perfect doctor. 94.7% precision@5.' },
    { icon: '⚡', title: 'Real-Time Slots', desc: 'WebSocket-powered slot booking with live conflict detection. No more double-bookings or race conditions.' },
    { icon: '⛓️', title: 'Blockchain Records', desc: 'Hyperledger Fabric anchors all health records as immutable SHA-256 hashed transactions.' },
    { icon: '📱', title: 'Multi-Channel Alerts', desc: 'Automated SMS (Twilio), email (SendGrid), and push notifications keep patients and doctors in sync.' },
    { icon: '👥', title: 'Role Dashboards', desc: 'Tailored experiences for Patients, Doctors, and Admins with full RBAC granularity.' },
    { icon: '🛡️', title: 'AES-256 Security', desc: 'Military-grade encryption for all PHI. HIPAA-compliant. TLS 1.3. Zero-trust architecture.' },
  ];

  return (
    <section id="features" className="section">
      <div className="section-header">
        <div className="section-label">Platform Features</div>
        <h2 className="section-title">Everything your clinic needs</h2>
        <p className="section-desc">A comprehensive toolkit built for modern healthcare operations — from AI to blockchain.</p>
      </div>
      <div className="features-grid">
        {features.map(f => (
          <div key={f.title} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h4 className="feature-title">{f.title}</h4>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
