const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };

export default function Toast({ type, title, msg, onClose }) {
  return (
    <div className={`toast ${type}`}>
      <span className="toast-icon">{icons[type] || '💬'}</span>
      <div className="toast-body">
        <div className="toast-title">{title}</div>
        <div className="toast-msg">{msg}</div>
      </div>
      <button className="toast-close" onClick={onClose}>×</button>
    </div>
  );
}
