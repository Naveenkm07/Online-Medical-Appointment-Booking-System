import { useState } from 'react';
import { useApp } from '../../context/AppContext';

const initialMessages = [
  { type: 'bot', msg: '👋 Hi! I\'m OMABS AI. How can I help you today?', time: 'Just now' },
];

export default function ChatbotPanel() {
  const { state, dispatch } = useApp();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  if (!state.role) return null;

  const sendMsg = () => {
    if (!input.trim()) return;
    const val = input.trim();
    setMessages(prev => [...prev, { type: 'user', msg: val, time: 'Now' }]);
    setInput('');

    setTimeout(() => {
      const replies = {
        cardiologist: '🩺 Found 3 available cardiologists! Dr. Mehta (95% match) has a slot tomorrow at 3:15 PM. Shall I book it?',
        appointment: '📅 You have 2 upcoming appointments:\n• Dr. Sharma — June 5, 10:00 AM\n• Dr. Rao — June 8, 3:30 PM',
        default: '🤔 I understand! Let me analyze your request using BioBERT...',
      };
      const key = val.toLowerCase().includes('cardiolog') ? 'cardiologist'
        : val.toLowerCase().includes('appoint') ? 'appointment' : 'default';
      setMessages(prev => [...prev, { type: 'bot', msg: replies[key], time: 'Just now' }]);
    }, 800);
  };

  return (
    <>
      <div
        className="chatbot-bubble"
        onClick={() => dispatch({ type: 'TOGGLE_CHATBOT' })}
      >🤖</div>

      <div className={`chatbot-panel ${state.chatbotOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-avatar">🤖</div>
          <div>
            <div className="chatbot-name">OMABS AI</div>
            <div className="chatbot-status">● Online — Powered by BioBERT</div>
          </div>
          <button
            className="chatbot-close"
            onClick={() => dispatch({ type: 'SET_CHATBOT', payload: false })}
          >×</button>
        </div>

        <div className="chatbot-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.type}`}>
              <div className="chat-bubble">{m.msg}</div>
              <div className="chat-time">{m.time}</div>
            </div>
          ))}
        </div>

        <div className="chatbot-input-area">
          <input
            className="chatbot-input"
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMsg()}
          />
          <button className="chatbot-send" onClick={sendMsg}>➤</button>
        </div>
      </div>
    </>
  );
}
