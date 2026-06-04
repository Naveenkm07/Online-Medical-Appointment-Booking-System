export default function Badge({ variant = 'primary', children }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
