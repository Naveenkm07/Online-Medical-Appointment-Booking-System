import { useState } from 'react';

export default function LandingFaq() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: 'How does the AI matching work?', a: 'OMABS uses BioBERT, a biomedical language model, to encode patient symptoms into semantic vectors. These are then matched against a doctor specialty embedding matrix using cosine similarity + collaborative filtering to rank doctors by compatibility score.' },
    { q: 'Is my health data secure?', a: 'Absolutely. All PHI is encrypted with AES-256 at rest and TLS 1.3 in transit. Health records are anchored on Hyperledger Fabric blockchain, making them tamper-proof and auditable.' },
    { q: 'Can doctors manage their own availability?', a: 'Yes! Doctors get a full availability manager with a drag-to-set weekly calendar, slot duration controls, bulk date range management, and real-time conflict detection.' },
    { q: 'What notifications does OMABS send?', a: 'OMABS sends automated SMS (via Twilio) and email (via SendGrid) reminders at 24 hours and 1 hour before appointments, plus booking confirmations and cancellation alerts.' },
    { q: 'Is OMABS HIPAA compliant?', a: 'Yes, OMABS is HIPAA-compliant on the Clinic and Enterprise plans. We sign Business Associate Agreements (BAA) and maintain complete audit logs for all PHI access.' },
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-header">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Frequently asked questions</h2>
      </div>
      <div className="faq-wrap">
        {faqs.map((f, i) => (
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
            <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              <span>{f.q}</span>
              <span className="chevron">▼</span>
            </div>
            <div className="faq-a">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
