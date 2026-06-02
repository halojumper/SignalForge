import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" style={{fontFamily:'Syne,sans-serif',fontSize:'1.3rem',fontWeight:800,color:'var(--text)',display:'flex',alignItems:'center',gap:8}}>
              <div className="logo-icon">
                <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              Signal<span style={{color:'var(--coral)'}}>Forge</span>
            </Link>
            <p>Full-service marketing automation and digital campaign execution for small and mid-sized businesses across New England and beyond.</p>
            <div className="footer-socials">
              <div className="social-btn">f</div>
              <div className="social-btn">in</div>
              <div className="social-btn">ig</div>
              <div className="social-btn">x</div>
            </div>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/services#marketing-automation">Marketing Automation</Link></li>
              <li><Link href="/services#sms-marketing">SMS Marketing</Link></li>
              <li><Link href="/services#social-media">Social Media Campaigns</Link></li>
              <li><Link href="/services#ad-creative">Ad Creative Design</Link></li>
              <li><Link href="/services#website-design">Website Design & Build</Link></li>
              <li><Link href="/services#event-marketing">Event Marketing</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/results">Client Results</Link></li>
              <li><Link href="/insights">Insights & Tips</Link></li>
              <li><Link href="/constant-contact">Constant Contact</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Get Started</h5>
            <ul>
              <li><Link href="/contact">Book a Free Call</Link></li>
              <li><Link href="/contact">Request a Quote</Link></li>
              <li><Link href="/constant-contact">Become a Partner</Link></li>
              <li><Link href="/insights">Free Resources</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SignalForge. All rights reserved.</p>
          <div className="footer-badges">
            <div className="footer-badge">Constant Contact Partner</div>
            <div className="footer-badge">Greater Boston, MA</div>
          </div>
        </div>
      </div>
    </footer>
  );
}