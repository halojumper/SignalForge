import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              Signal<span>Forge</span>
            </Link>
            <p>Your full-service marketing automation partner. We help small and mid-sized businesses compete at an enterprise level.</p>
            <div className="footer-socials">
              <div className="social-btn">in</div>
              <div className="social-btn">𝕏</div>
              <div className="social-btn">📸</div>
              <div className="social-btn">f</div>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/services">Marketing Automation</Link></li>
              <li><Link href="/services">SMS Campaigns</Link></li>
              <li><Link href="/services">Social Media</Link></li>
              <li><Link href="/services">Ad Creative</Link></li>
              <li><Link href="/services">Website Design</Link></li>
              <li><Link href="/services">Event Marketing</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/results">Client Results</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><Link href="mailto:hello@signalforge.com">hello@signalforge.com</Link></li>
              <li><Link href="tel:6175550190">(617) 555-0190</Link></li>
              <li><Link href="#">Greater Boston, MA</Link></li>
              <li><Link href="/contact">Schedule a Call</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 SignalForge Marketing. All rights reserved. Authorized Constant Contact Partner.</p>
          <div className="footer-badges">
            <div className="footer-badge">SOC 2 Compliant</div>
            <div className="footer-badge">CAN-SPAM Certified</div>
            <div className="footer-badge">TCPA Compliant</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
