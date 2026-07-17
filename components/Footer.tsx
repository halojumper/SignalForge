'use client';
import Link from 'next/link';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <defs>
      <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F58529"/>
        <stop offset="50%" stopColor="#DD2A7B"/>
        <stop offset="100%" stopColor="#8134AF"/>
      </linearGradient>
    </defs>
    <path fill="url(#igGrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#000000">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

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
             <span>Signal<span style={{color:'var(--coral)'}}>Forge</span></span>
            </Link>
            <p>Full-service marketing automation and digital campaign execution for small and mid-sized businesses across New England and beyond.</p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/signalforge.marketing" target="_blank" rel="noopener noreferrer" className="social-btn" style={{background:'transparent',border:'none',padding:4}}><FacebookIcon /></a>
              <a href="https://www.linkedin.com/company/signalforgemarketing/" target="_blank" rel="noopener noreferrer" className="social-btn" style={{background:'transparent',border:'none',padding:4}}><LinkedInIcon /></a>
              <a href="#" className="social-btn" style={{background:'transparent',border:'none',padding:4}}><InstagramIcon /></a>
              <a href="#" className="social-btn" style={{background:'transparent',border:'none',padding:4}}><XIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="/services#marketing-automation">Marketing Automation</a></li>
              <li><a href="/services#sms-marketing">SMS Marketing</a></li>
              <li><a href="/services#social-media">Social Media Campaigns</a></li>
              <li><a href="/services#ad-creative">Ad Creative Design</a></li>
              <li><a href="/services#website-design">Website Design & Build</a></li>
              <li><a href="/services#event-marketing">Event Marketing</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/how-it-works">How It Works</a></li>
              <li><a href="/results">Client Results</a></li>
              <li><a href="/insights">Insights & Tips</a></li>
              <li><a href="/constant-contact">Constant Contact</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

         <div className="footer-col">
            <h5>Get Started</h5>
            <ul>
              <li><a href="https://calendly.com/signalforge-marketing" target="_blank" rel="noopener noreferrer">Book a Free Call</a></li>
              <li><a href="/contact#contact-form">Request a Quote</a></li>
              <li><a href="/insights">Free Resources</a></li>
              <li><a href="/referral">Refer a Client — Earn 10%</a></li>
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
