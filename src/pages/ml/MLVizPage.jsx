import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

export default function MLVizPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [symptom, setSymptom] = useState('I have chest pain, shortness of breath, and mild dizziness');
  const [results, setResults] = useState(null);
  
  const pipeline = [
    { icon: '📝', label: 'Symptom Text Input' },
    { arrow: true },
    { icon: '✂️', label: 'BioBERT Tokenizer' },
    { arrow: true },
    { icon: '🧠', label: 'Embedding Layer', highlight: true },
    { arrow: true },
    { icon: '📐', label: 'Cosine Similarity' },
    { arrow: true },
    { icon: '🤝', label: 'Collaborative Filter' },
    { arrow: true },
    { icon: '🏆', label: 'Top-K Ranking' },
    { arrow: true },
    { icon: '📊', label: 'Ranked Results' },
  ];

  const metrics = [
    { label: 'Precision@5', value: '0.88', desc: 'Top-5 recommendations correctness' },
    { label: 'Recall@5', value: '0.84', desc: 'Relevant doctors in top-5' },
    { label: 'Training Data', value: '50K', desc: 'Medical consultation records' },
    { label: 'Inference Time', value: '89ms', desc: 'Average per recommendation' },
  ];

  const mockResults = [
    { doctor: 'Dr. Priya Mehta', spec: 'Cardiologist', score: 0.95, tags: ['chest pain', 'shortness of breath', 'cardiac'] },
    { doctor: 'Dr. Arun Joshi', spec: 'Cardiologist', score: 0.89, tags: ['chest pain', 'dizziness', 'cardiac'] },
    { doctor: 'Dr. Sunita Rao', spec: 'Internal Medicine', score: 0.82, tags: ['shortness of breath', 'general'] },
  ];

  const runDemo = () => {
    showToast('info', 'Analyzing...', 'BioBERT processing your symptoms...');
    setTimeout(() => {
      setResults(mockResults);
      showToast('success', 'Done!', 'Top 3 doctors matched successfully.');
    }, 1500);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
      <div className="landing-nav">
        <div className="landing-nav-inner">
          <div className="nav-logo">
            <div className="nav-logo-mark">O</div>
            <div className="nav-brand">OMA<span>BS</span> — ML Demo</div>
          </div>
          <div className="nav-actions">
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/landing')}>← Back</button>
            <button className="btn btn-gradient btn-sm" onClick={() => navigate('/welcome')}>Get Started</button>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '100px 0 40px' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)' }}>🧠 ML Recommendation Engine</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)' }}>BioBERT + Collaborative Filtering Pipeline</p>
      </div>

      <div className="card mb-8">
        <h5 style={{ fontFamily: 'var(--font-heading)', marginBottom: '24px' }}>BioBERT Pipeline Architecture</h5>
        <div className="pipeline-flow">
          {pipeline.map((n, i) => n.arrow ? (
            <div key={i} className="pipeline-arrow">→</div>
          ) : (
            <div key={i} className={`pipeline-node ${n.highlight ? 'highlight' : ''}`}>
              <div className="pipeline-node-icon">{n.icon}</div>
              <div className="pipeline-node-label">{n.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-4 mb-8">
        {metrics.map(m => (
          <div key={m.label} className="metric-card text-center">
            <div className="metric-value">{m.value}</div>
            <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', marginTop: '4px' }}>{m.label}</div>
            <div className="metric-label">{m.desc}</div>
          </div>
        ))}
      </div>

      <div className="card mb-8">
        <h5 style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>🧪 Try the Recommendation Engine</h5>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <input className="input flex-1" value={symptom} onChange={e => setSymptom(e.target.value)} />
          <button className="btn btn-gradient" onClick={runDemo}>Analyze →</button>
        </div>
        
        {results && (
          <div>
            {results.map((r, i) => (
              <div key={i} className="confidence-card mb-4">
                <div className="confidence-header">
                  <div className="confidence-score-ring high">
                    <div className="confidence-score-inner">{Math.round(r.score * 100)}%</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>{r.doctor}</h6>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{r.spec}</div>
                  </div>
                  <button className="btn btn-gradient btn-sm" onClick={() => navigate('/patient/slot-booking')}>Book →</button>
                </div>
                <div className="explainability">
                  <div className="explainability-title">Why Recommended?</div>
                  <div className="symptom-map">
                    {r.tags.map((tag, j) => (
                      <span key={tag} className={`symptom-map-tag ${j === 0 ? 'strong' : j === 1 ? 'medium' : 'weak'}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
