export default function ProgressBar({ value, height = 8 }) {
  return (
    <div className="progress-bar" style={{ height }}>
      <div className="progress-bar-fill" style={{ width: `${value}%` }} />
    </div>
  );
}
