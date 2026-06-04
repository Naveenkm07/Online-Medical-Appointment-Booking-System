import { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export default function MLManagementPage() {
  const { showToast } = useToast();
  const [retraining, setRetraining] = useState(false);
  const [retrainPct, setRetrainPct] = useState(0);

  const models = [
    { name: 'BioBERT-OMABS', ver: 'v3.2.1', p5: 0.88, r5: 0.84, trained: 'Jun 1, 2025', status: 'production' },
    { name: 'BioBERT-OMABS', ver: 'v3.1.0', p5: 0.85, r5: 0.81, trained: 'May 1, 2025', status: 'archived' },
    { name: 'CF-Collab', ver: 'v2.0.4', p5: 0.79, r5: 0.76, trained: 'May 15, 2025', status: 'staging' },
  ];

  const triggerRetrain = () => {
    setRetraining(true);
    setRetrainPct(0);
    const interval = setInterval(() => {
      setRetrainPct(p => {
        if (p >= 100) {
          clearInterval(interval);
          showToast('success', 'Training Complete!', 'BioBERT v3.3.0 trained with Precision@5: 0.91');
          return 100;
        }
        return p + 5;
      });
    }, 200);
  };

  const steps = [
    'Loading dataset (50K records)',
    'Tokenizing with BioBERT tokenizer',
    'Training embedding layer',
    'Evaluating on validation set',
    'Saving model checkpoints'
  ];

  return (
    <>
      <div className="grid-3 mb-6">
        <div className="metric-card">
          <div className="metric-value">0.88</div>
          <div className="metric-label">Precision@5 (BioBERT)</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">0.84</div>
          <div className="metric-label">Recall@5 (BioBERT)</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">50K</div>
          <div className="metric-label">Training Records</div>
        </div>
      </div>
      
      <div className="card mb-6">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h6 style={{ fontFamily: 'var(--font-heading)' }}>Model Versions</h6>
          <button className="btn btn-gradient btn-sm" onClick={triggerRetrain}>🔄 Trigger Retrain</button>
        </div>
        <table className="data-table">
          <thead>
            <tr><th>Model Name</th><th>Version</th><th>Precision@5</th><th>Recall@5</th><th>Last Trained</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody>
            {models.map((m, i) => (
              <tr key={i}>
                <td><strong>{m.name}</strong></td>
                <td><span className="badge badge-gray">{m.ver}</span></td>
                <td><strong style={{ color: 'var(--success-600)' }}>{m.p5}</strong></td>
                <td><strong style={{ color: 'var(--teal-600)' }}>{m.r5}</strong></td>
                <td style={{ color: 'var(--text-secondary)' }}>{m.trained}</td>
                <td><span className={`badge badge-${m.status === 'production' ? 'success' : m.status === 'staging' ? 'warning' : 'gray'}`}>{m.status}</span></td>
                <td><button className="btn btn-ghost btn-sm" onClick={() => showToast('success', 'Deployed!', 'Model set as production.')}>Deploy</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {retraining && (
        <div className="card" style={{ borderColor: 'var(--primary-200)', background: 'var(--primary-50)' }}>
          <h6 style={{ fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>🔄 Model Retraining In Progress</h6>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)', marginBottom: '8px' }}>
              <span>Training Progress</span><span>{retrainPct}%</span>
            </div>
            <div className="progress-bar" style={{ height: '12px' }}>
              <div className="progress-bar-fill" style={{ width: `${retrainPct}%` }}></div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {steps.map((s, i) => {
              const stepThresh = (i + 1) * 20; // 20, 40, 60, 80, 100
              const isDone = retrainPct >= stepThresh;
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-sm)' }}>
                  <span>{isDone ? '✅' : '⏳'}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{s}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
