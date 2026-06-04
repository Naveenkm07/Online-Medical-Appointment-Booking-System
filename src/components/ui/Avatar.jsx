export default function Avatar({ initials, size = 'md', color = null }) {
  return (
    <div
      className={`avatar avatar-${size}`}
      style={color ? { background: color } : undefined}
    >
      {initials}
    </div>
  );
}
