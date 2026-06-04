export default function LandingHowItWorks() {
  const steps = [
    { n: '1', icon: '✍️', title: 'Enter Symptoms', desc: 'Describe how you feel using our intelligent symptom input with autocomplete tags' },
    { n: '2', icon: '🤖', title: 'Get AI-Matched', desc: 'BioBERT analyzes your symptoms and ranks doctors by specialty fit and availability' },
    { n: '3', icon: '📅', title: 'Book a Slot', desc: 'Pick a real-time available slot with live calendar and instant WebSocket confirmation' },
    { n: '4', icon: '🔔', title: 'Get Notified', desc: 'Receive SMS + email reminders 24h and 1h before your appointment, automatically' },
  ];

  return (
    <section className="section steps-section">
      <div className="section-header">
        <div className="section-label">How It Works</div>
        <h2 className="section-title">From symptoms to appointment in 4 steps</h2>
      </div>
      <div className="steps-wrap">
        {steps.map(s => (
          <div key={s.n} className="step">
            <div className="step-num">{s.n}</div>
            <div className="step-icon">{s.icon}</div>
            <h5 className="step-title">{s.title}</h5>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
