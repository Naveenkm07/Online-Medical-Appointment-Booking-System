import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

export default function HelpCenterPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const categories = [
    { icon: '📅', title: 'Appointments', articles: 12 },
    { icon: '🤖', title: 'AI Matching', articles: 8 },
    { icon: '🔗', title: 'Health Records', articles: 10 },
    { icon: '💳', title: 'Billing & Plans', articles: 9 },
    { icon: '🛡️', title: 'Security', articles: 7 },
    { icon: '👤', title: 'Account & Profile', articles: 11 },
  ];

  const popular = [
    'How does the AI doctor matching work?',
    'How to book an appointment',
    'Understanding your blockchain health records',
    'How to reschedule or cancel an appointment',
    'What is the BioBERT recommendation engine?',
    'HIPAA compliance and your data privacy',
  ];

  return (
    <>
      <div style={{ background: 'linear-gradient(135deg,var(--primary-900),var(--teal-700))', padding: '60px 32px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>How can we help?</h2>
        <p style={{ opacity: 0.8, marginBottom: '24px' }}>Search 200+ articles or browse by topic</p>
        <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem' }}>🔍</span>
          <input
            style={{ width: '100%', padding: '16px 16px 16px 48px', borderRadius: 'var(--radius-xl)', border: 'none', fontSize: 'var(--text-base)', fontFamily: 'var(--font-body)', outline: 'none' }}
            placeholder="Search articles..."
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <button className="btn btn-ghost btn-sm" style={{ color: 'rgba(255,255,255,0.7)' }} onClick={() => navigate('/landing')}>← Back to OMABS</button>
        </div>
      </div>
      
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 32px' }}>
        <div className="grid-3">
          {categories.map(c => (
            <div key={c.title} className="card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => showToast('info', 'Category', `${c.title} articles loading...`)}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{c.icon}</div>
              <h6 style={{ fontFamily: 'var(--font-heading)' }}>{c.title}</h6>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>{c.articles} articles</div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '48px' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '24px' }}>Popular Articles</h4>
          {popular.map((a, i) => (
            <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => showToast('info', 'Article', 'Opening article...')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>📄</span>
                <span style={{ fontWeight: 500 }}>{a}</span>
              </div>
              <span style={{ color: 'var(--text-tertiary)' }}>→</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
