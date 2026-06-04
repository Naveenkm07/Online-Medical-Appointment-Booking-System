export default function LandingFooter() {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">OMA<span>BS</span></div>
          <p className="footer-tagline">The AI-powered healthcare appointment platform built for the modern world. Secure, intelligent, and seamlessly connected.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            {['🐦', '💼', '📘', '📸'].map(s => (
              <a key={s} href="#" style={{ color: 'var(--gray-400)', fontSize: '1.3rem' }}>{s}</a>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-col-title">Product</div>
          <div className="footer-links">
            <a href="#">Features</a><a href="#">Pricing</a><a href="#">Changelog</a><a href="#">Roadmap</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <div className="footer-links">
            <a href="#">About</a><a href="#">Blog</a><a href="#">Careers</a><a href="#">Press</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Legal</div>
          <div className="footer-links">
            <a href="#">Privacy</a><a href="#">Terms</a><a href="#">HIPAA</a><a href="#">Security</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 OMABS Health Pvt. Ltd. All rights reserved.</span>
        <span>Made with ❤️ for better healthcare</span>
      </div>
    </div>
  );
}
