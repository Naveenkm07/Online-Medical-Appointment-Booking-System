import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SymptomInputPage() {
  const navigate = useNavigate();
  const [symptomText, setSymptomText] = useState('');
  const [status, setStatus] = useState('input'); // input, loading, results

  const tags = ['Chest pain', 'Shortness of breath', 'Dizziness', 'Fever', 'Headache', 'Fatigue', 'Nausea'];

  const addSymptomTag = (tag) => {
    setSymptomText(prev => prev ? `${prev}, ${tag}` : tag);
  };

  const runMLSearch = () => {
    setStatus('loading');
    setTimeout(() => {
      setStatus('results');
    }, 3000);
  };

  const doctorMatches = [
    { name: 'Dr. Priya Mehta', spec: 'Cardiologist', match: 95, rating: 4.9, reviews: 312, nextSlot: 'Today 4 PM', exp: '12 yrs', fee: '₹800', img: 'PM' },
    { name: 'Dr. Arun Joshi', spec: 'Cardiologist', match: 89, rating: 4.7, reviews: 218, nextSlot: 'Tomorrow 10 AM', exp: '8 yrs', fee: '₹650', img: 'AJ' },
    { name: 'Dr. Sunita Rao', spec: 'Internal Medicine', match: 82, rating: 4.8, reviews: 445, nextSlot: 'Jun 6, 2 PM', exp: '15 yrs', fee: '₹700', img: 'SR' },
    { name: 'Dr. Kiran Patel', spec: 'Pulmonologist', match: 74, rating: 4.6, reviews: 187, nextSlot: 'Jun 7, 11 AM', exp: '10 yrs', fee: '₹750', img: 'KP' },
  ];

  return (
    <>
      <div className="card mb-6" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg,var(--primary-500),var(--teal-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>🧠</div>
          <div>
            <h5 style={{ fontFamily: 'var(--font-heading)' }}>Describe Your Symptoms</h5>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Our BioBERT model will match you with the most suitable doctors</p>
          </div>
        </div>
        <div className="symptom-input-area">
          <textarea
            className="symptom-textarea"
            placeholder="e.g. I have been experiencing persistent chest pain, shortness of breath, and mild dizziness for the past 3 days..."
            value={symptomText}
            onChange={(e) => setSymptomText(e.target.value)}
          />
          <div className="symptom-tags">
            {tags.map(t => (
              <div key={t} className="symptom-tag" onClick={() => addSymptomTag(t)}>{t} +</div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <button className="btn btn-gradient btn-lg flex-1" onClick={runMLSearch}>🧠 Analyze Symptoms & Find Doctors</button>
          <button className="btn btn-secondary btn-lg" onClick={() => setSymptomText('')}>Clear</button>
        </div>
      </div>

      {status === 'loading' && (
        <div className="card text-center" style={{ maxWidth: '800px', padding: '48px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px', animation: 'pulse 1.5s infinite' }}>🧠</div>
          <h5 style={{ fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>Analyzing your symptoms...</h5>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>BioBERT is tokenizing and embedding your symptom text for matching</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px', margin: '0 auto' }}>
            {['Tokenizing text...', 'Generating BioBERT embeddings...', 'Computing cosine similarity...', 'Applying collaborative filtering...', 'Ranking top matches...'].map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-sm)' }}>
                <div className="loading-spinner" style={{ width: '14px', height: '14px', opacity: 0.4 }}></div>
                <span style={{ color: 'var(--text-secondary)' }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {status === 'results' && (
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <h5 style={{ fontFamily: 'var(--font-heading)' }}>🎯 Top Doctor Matches</h5>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Ranked by BioBERT symptom-specialty similarity + collaborative filtering</p>
            </div>
            <span className="badge badge-success">4 matches found</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {doctorMatches.map((d, i) => (
              <div key={i} className="doctor-rec-card">
                <div className="avatar avatar-lg" style={i === 0 ? { background: 'linear-gradient(135deg,var(--primary-500),var(--teal-400))' } : {}}>{d.img}</div>
                <div className="doctor-rec-info">
                  <div className="doctor-rec-name">{d.name}</div>
                  <div className="doctor-rec-spec">{d.spec}</div>
                  <div className="doctor-rec-meta">
                    <span>⭐ {d.rating} ({d.reviews})</span>
                    <span>🕐 {d.exp}</span>
                    <span>💰 {d.fee}</span>
                    <span>📅 Next: {d.nextSlot}</span>
                  </div>
                  <div className="match-score-wrap">
                    <span className="match-score-label">AI Match</span>
                    <div className="match-score-bar"><div className="match-score-fill" style={{ width: `${d.match}%` }}></div></div>
                    <span className="match-score-pct">{d.match}%</span>
                  </div>
                </div>
                <div className="doctor-rec-actions">
                  {i === 0 && <span className="badge badge-success">Best Match</span>}
                  <button className="btn btn-ghost btn-sm" onClick={() => navigate('/patient/doctor-profile')}>View Profile</button>
                  <button className="btn btn-primary btn-sm" onClick={() => navigate('/patient/slot-booking')}>Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
