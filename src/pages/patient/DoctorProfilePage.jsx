import { useNavigate } from 'react-router-dom';

export default function DoctorProfilePage() {
  const navigate = useNavigate();

  const specs = ['Cardiac Electrophysiology', 'Heart Failure', 'Arrhythmia', 'Preventive Cardiology', 'Echocardiography', 'Cardiac Catheterization'];
  const ratings = [
    ['Punctuality', 98],
    ['Bedside Manner', 96],
    ['Diagnosis Accuracy', 97],
    ['Communication', 94],
    ['Wait Time', 88]
  ];
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const availabilities = [85, 60, 90, 40, 75, 20, 0];

  const reviews = [
    { name: 'Ravi K.', rating: '★★★★★', text: 'Exceptional doctor. Diagnosed my arrhythmia that 3 others missed. Highly recommend!', time: '2 days ago' },
    { name: 'Meena S.', rating: '★★★★★', text: 'Very thorough and caring. Explained everything clearly. First appointment was on time!', time: '1 week ago' },
  ];

  return (
    <div style={{ maxWidth: '900px' }}>
      {/* Header */}
      <div className="card mb-6" style={{ background: 'linear-gradient(135deg,var(--primary-50),var(--teal-50))', borderColor: 'var(--primary-200)' }}>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div className="avatar avatar-2xl" style={{ background: 'linear-gradient(135deg,var(--primary-500),var(--teal-400))' }}>PM</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)' }}>Dr. Priya Mehta</h3>
              <span className="badge badge-success">● Available Today</span>
              <span className="badge badge-primary">Verified ✓</span>
            </div>
            <div style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: '12px' }}>Senior Cardiologist & Cardiac Electrophysiologist</div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
              <span>⭐ 4.9/5 (312 reviews)</span>
              <span>🏥 Apollo Hospital, Mumbai</span>
              <span>🎓 MBBS, MD, DM — AIIMS Delhi</span>
              <span>👥 12 years experience</span>
              <span>💰 ₹800 consultation</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              <button className="btn btn-gradient" onClick={() => navigate('/patient/slot-booking')}>📅 Book Appointment</button>
              <button className="btn btn-secondary">💬 Message</button>
              <button className="btn btn-ghost">🔖 Save</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2">
        {/* Bio & Qualifications */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="card">
            <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>About</h6>
            <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Dr. Priya Mehta is a highly respected cardiologist with 12 years of experience in treating complex cardiac conditions. She specializes in cardiac electrophysiology, heart failure management, and preventive cardiology. She has published 34 research papers in international journals.
            </p>
          </div>
          <div className="card">
            <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Specializations</h6>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {specs.map(s => <span key={s} className="badge badge-primary">{s}</span>)}
            </div>
          </div>
          <div className="card">
            <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Ratings Breakdown</h6>
            {ratings.map(([l, v]) => (
              <div key={l} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', marginBottom: '4px' }}>
                  <span>{l}</span><span>{v}%</span>
                </div>
                <div className="progress-bar" style={{ height: '6px' }}>
                  <div className="progress-bar-fill" style={{ width: `${v}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Availability Heatmap + Reviews */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="card">
            <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>📅 Availability This Week</h6>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '6px', marginBottom: '8px' }}>
              {weekDays.map(d => (
                <div key={d} style={{ textAlign: 'center', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-tertiary)' }}>{d}</div>
              ))}
              {availabilities.map((v, i) => (
                <div
                  key={i}
                  style={{
                    height: '56px', borderRadius: 'var(--radius-md)',
                    background: v === 0 ? 'var(--bg-muted)' : v > 70 ? 'rgba(20,184,166,0.3)' : v > 40 ? 'rgba(20,184,166,0.15)' : 'rgba(20,184,166,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 'var(--text-xs)', fontWeight: 600,
                    color: v === 0 ? 'var(--text-tertiary)' : 'var(--teal-700)'
                  }}
                >
                  {v === 0 ? '—' : `${v}%`}
                </div>
              ))}
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', textAlign: 'center' }}>Darker = more available slots</p>
            <button className="btn btn-gradient w-full mt-4" onClick={() => navigate('/patient/slot-booking')}>View Available Slots</button>
          </div>
          <div className="card">
            <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Patient Reviews</h6>
            {reviews.map((r, i) => (
              <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="avatar avatar-sm">{r.name.charAt(0)}</div>
                    <strong style={{ fontSize: 'var(--text-sm)' }}>{r.name}</strong>
                  </div>
                  <span style={{ color: '#f59e0b', fontSize: '0.8rem' }}>{r.rating}</span>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{r.text}</p>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{r.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
