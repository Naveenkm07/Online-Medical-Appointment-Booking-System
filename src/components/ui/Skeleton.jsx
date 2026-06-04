export default function Skeleton({ width = '100%', height = 16, style = {} }) {
  return (
    <div
      className="skeleton skeleton-text"
      style={{ width, height, ...style }}
    />
  );
}
