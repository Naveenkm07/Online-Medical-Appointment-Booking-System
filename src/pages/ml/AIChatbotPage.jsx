import { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export default function AIChatbotPage() {
  const { showToast } = useToast();
  const [input, setInput] = useState('');
  
  const initialMessages = [
    { type: 'bot', msg: '👋 Hello! I\'m the OMABS AI Assistant. I can help you:\n• Book appointments using natural language\n• Find doctors by symptom or specialty\n• Check your upcoming appointments\n• Get health information\n\nTry: "Book a cardiologist for tomorrow at 3pm"' },
    { type: 'user', msg: 'Book a cardiologist for tomorrow at 3pm' },
    { type: 'bot', msg: '🩺 I found 3 available cardiologists for tomorrow at 3:00 PM:\n\n1. Dr. Priya Mehta — ★4.9 — 3:00 PM ✓\n2. Dr. Arun Joshi — ★4.7 — 3:30 PM ✓\n3. Dr. Sunita Rao — ★4.8 — 3:15 PM ✓\n\nShall I book Dr. Priya Mehta for tomorrow at 3:00 PM?' },
    { type: 'user', msg: 'Yes, book Dr. Priya Mehta' },
    { type: 'bot', msg: '✅ Appointment booked!\n\n📅 Dr. Priya Mehta\n⏰ Tomorrow, June 4 at 3:00 PM\n🏥 Apollo Hospital, Mumbai\n💰 ₹800 (payable at clinic)\n🆔 APT-20240604-PM\n\nYou\'ll receive an SMS & email confirmation shortly. Shall I add this to your calendar?' },
  ];
  
  const [messages, setMessages] = useState(initialMessages);

  const sendAIMsg = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { type: 'user', msg: input.trim() }]);
      setInput('');
      showToast('info', 'Processing...', 'AI is analyzing your request...');
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', msg: 'I understand your request. This is a mockup response from the AI assistant.' }]);
      }, 1000);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto 0' }}>
      <div className="card" style={{ border: 'none', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', padding: 0 }}>
        <div style={{ background: 'linear-gradient(135deg,var(--primary-600),var(--teal-600))', padding: '20px', display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🤖</div>
          <div>
            <div style={{ fontWeight: 700, fontFamily: 'var(--font-heading)' }}>OMABS AI Assistant</div>
            <div style={{ fontSize: 'var(--text-xs)', opacity: 0.75 }}>● Online · Powered by BioBERT · Natural Language Booking</div>
          </div>
        </div>
        
        <div style={{ padding: '20px', minHeight: '400px', display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-surface)' }}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.type}`}>
              {m.type === 'bot' && (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div className="avatar avatar-sm" style={{ background: 'linear-gradient(135deg,var(--primary-500),var(--teal-500))', flexShrink: 0 }}>🤖</div>
                  <div className="chat-bubble" style={{ whiteSpace: 'pre-line' }}>{m.msg}</div>
                </div>
              )}
              {m.type === 'user' && (
                <div>
                  <div className="chat-bubble" style={{ whiteSpace: 'pre-line' }}>{m.msg}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div style={{ padding: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '10px', background: 'var(--bg-base)' }}>
          <input
            className="input flex-1"
            placeholder="Ask anything... 'Book', 'Find doctor', 'My appointments'"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendAIMsg()}
          />
          <button className="btn btn-gradient" onClick={sendAIMsg}>Send ➤</button>
        </div>
      </div>
    </div>
  );
}
