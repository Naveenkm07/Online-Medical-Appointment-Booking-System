export default function LandingComparison() {
  const rows = [
    ['AI Doctor Matching', '❌', '❌', '✅'],
    ['Real-Time Slots', '❌', '⚠️ Partial', '✅'],
    ['Blockchain Records', '❌', '❌', '✅'],
    ['No-Show Prediction', '❌', '❌', '✅'],
    ['Multi-Channel Alerts', '❌', '📧 Email only', '✅'],
    ['RBAC Dashboard', '❌', '⚠️ Basic', '✅'],
    ['99.3% Uptime SLA', '❌', '❌', '✅'],
    ['HIPAA Compliance', '⚠️', '⚠️', '✅'],
  ];

  return (
    <section className="section">
      <div className="section-header">
        <div className="section-label">Why OMABS</div>
        <h2 className="section-title">See the difference</h2>
      </div>
      <div className="comparison-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Manual</th>
              <th>Basic Portal</th>
              <th className="highlight">OMABS ✨</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => <td key={j}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
