export default function StatCard({ icon, label, value, change, up }) {
  return (
    <div className="stat-card">
      <div className="stat-card-accent">{icon}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {up !== null ? (
        <div className={`stat-change ${up ? 'up' : 'down'}`}>
          {up ? '↑' : '↓'} {change}
        </div>
      ) : (
        <div className="stat-change" style={{ color: 'var(--text-tertiary)' }}>{change}</div>
      )}
    </div>
  );
}
