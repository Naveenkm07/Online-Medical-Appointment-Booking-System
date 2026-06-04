import { useNavigate } from 'react-router-dom';

export default function LandingPricing() {
  const navigate = useNavigate();

  const plans = [
    { name: 'Free', price: '0', desc: 'For individual patients', features: ['5 appointments/month', 'Basic doctor search', 'Email notifications', '1GB health records', 'Standard support'], featured: false },
    { name: 'Clinic', price: '4,999', desc: 'For small to mid clinics', features: ['Unlimited appointments', 'AI matching engine', 'SMS + Email alerts', 'Blockchain records', 'Analytics dashboard', 'Priority support'], featured: true, badge: 'Most Popular' },
    { name: 'Enterprise', price: 'Custom', desc: 'For large hospital chains', features: ['Everything in Clinic', 'White-label solution', 'Custom ML models', 'Dedicated infrastructure', 'HIPAA/ISO compliance', '24/7 SLA support'], featured: false },
  ];

  return (
    <section className="section">
      <div className="section-header">
        <div className="section-label">Pricing</div>
        <h2 className="section-title">Simple, transparent pricing</h2>
        <p className="section-desc">Start free, scale as you grow. No hidden fees.</p>
      </div>
      <div className="pricing-grid">
        {plans.map(p => (
          <div key={p.name} className={`pricing-card ${p.featured ? 'featured' : ''}`}>
            {p.badge && <div className="pricing-badge">{p.badge}</div>}
            <div className="pricing-name">{p.name}</div>
            <div className="pricing-price">
              {p.price === 'Custom' ? 'Custom' : <><sup>₹</sup>{p.price}<sub>/mo</sub></>}
            </div>
            <div className="pricing-desc">{p.desc}</div>
            <ul className="pricing-features">
              {p.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button
              className={`btn w-full ${p.featured ? 'btn-secondary' : 'btn-gradient'}`}
              style={p.featured ? { background: '#fff', color: 'var(--primary-700)' } : undefined}
              onClick={() => navigate('/welcome')}
            >
              {p.price === '0' ? 'Get Started Free' : p.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
