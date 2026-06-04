export default function LandingTestimonials() {
  const testimonials = [
    { stars: '★★★★★', text: '"OMABS reduced our no-show rate by 41% in the first month. The AI matching is genuinely impressive."', name: 'Dr. Priya Mehta', role: 'Senior Cardiologist, Apollo' },
    { stars: '★★★★★', text: '"I described my symptoms and got matched with exactly the right specialist in seconds. Booked in under 2 minutes!"', name: 'Arjun Sharma', role: 'Patient, Bangalore' },
    { stars: '★★★★☆', text: '"The blockchain health records give our patients peace of mind. Data is verifiable and tamper-proof."', name: 'Dr. Rohan Nair', role: 'CTO, MediCare Clinic Chain' },
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-header">
        <div className="section-label">Testimonials</div>
        <h2 className="section-title">Loved by patients & clinics</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map(t => (
          <div key={t.name} className="testimonial-card">
            <div className="testimonial-stars">{t.stars}</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="avatar avatar-md">{t.name.charAt(0)}</div>
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
