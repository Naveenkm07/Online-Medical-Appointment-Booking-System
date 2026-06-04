import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="error-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <div className="error-code">404</div>
        <h2 className="error-title">Page not found</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button className="btn btn-gradient btn-lg" onClick={() => navigate('/landing')}>🏠 Go Home</button>
          <button className="btn btn-secondary btn-lg" onClick={() => navigate(-1)}>← Go Back</button>
        </div>
      </div>
    </div>
  );
}
