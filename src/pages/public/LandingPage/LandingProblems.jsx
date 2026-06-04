export default function LandingProblems() {
  const problems = [
    { icon: '⏰', title: 'Long Waiting Queues', desc: 'Average 45-minute waits just to schedule appointments through traditional systems' },
    { icon: '📭', title: 'Missed Appointments', desc: '23% no-show rate costs healthcare systems billions annually in lost productivity' },
    { icon: '📂', title: 'Lost Health Records', desc: 'Fragmented records across providers lead to redundant tests and misdiagnoses' },
    { icon: '🤷', title: 'Wrong Doctor Match', desc: 'Without AI guidance, 40% of patients consult the wrong specialist on their first visit' },
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-header">
        <div className="section-label">The Problem</div>
        <h2 className="section-title">Healthcare booking is broken</h2>
        <p className="section-desc">Patients waste hours navigating outdated systems, missing appointments, and losing critical health records.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        {problems.map(p => (
          <div key={p.title} className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{p.icon}</div>
            <h5 style={{ marginBottom: '8px' }}>{p.title}</h5>
            <p style={{ fontSize: 'var(--text-sm)' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
