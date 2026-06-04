import { useToast } from '../../context/ToastContext';

export default function OfflinePage() {
  const { showToast } = useToast();

  return (
    <div className="error-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <div style={{ fontSize: '6rem', marginBottom: '16px' }}>📡</div>
        <h2 className="error-title">You're Offline</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          No internet connection detected. Some features may be unavailable. Your locally cached data is accessible.
        </p>
        <div className="card mb-6" style={{ textAlign: 'left' }}>
          <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Available offline:</h6>
          {[
            '✅ View cached appointments',
            '✅ Read health records (cached)',
            '✅ View doctor profiles (cached)',
            '❌ Book new appointments (requires network)'
          ].map((f, i) => (
            <div key={i} style={{ fontSize: 'var(--text-sm)', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>{f}</div>
          ))}
        </div>
        <button className="btn btn-gradient" onClick={() => showToast('info', 'Reconnecting...', 'Trying to reconnect to OMABS servers.')}>
          🔄 Retry Connection
        </button>
      </div>
    </div>
  );
}
