import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy | SignalForge',
  description: 'How SignalForge collects, uses, and protects your information.',
};

export default function PrivacyPolicy() {
  const lastUpdated = 'October 2026';

  return (
    <>
      <style>{`
        .privacy-hero {
          background: linear-gradient(135deg, #1a1a1a 0%, #7a2e0a 50%, #e8521a 100%);
          padding: 64px 0 52px;
        }
        .privacy-body {
          max-width: 780px;
          margin: 0 auto;
          padding: 56px 24px 80px;
          color: #333;
          font-size: 1rem;
          line-height: 1.75;
        }
        .privacy-body h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 40px 0 10px;
          padding-bottom: 6px;
          border-bottom: 2px solid #e8521a;
          display: inline-block;
        }
        .privacy-body h2:first-of-type { margin-top: 0; }
        .privacy-body p { margin: 0 0 14px; }
        .privacy-body ul {
          margin: 0 0 14px;
          padding-left: 22px;
        }
        .privacy-body ul li { margin-bottom: 6px; }
        .privacy-body a { color: #e8521a; text-decoration: underline; }
        .privacy-body a:hover { color: #c94415; }
        .privacy-meta {
          font-size: 0.85rem;
          color: #888;
          margin-bottom: 36px;
        }
        .privacy-toc {
          background: #f8f5f2;
          border-left: 3px solid #e8521a;
          border-radius: 0 8px 8px 0;
          padding: 20px 24px;
          margin-bottom: 40px;
        }
        .privacy-toc p {
          font-weight: 700;
          font-size: 0.9rem;
          margin: 0 0 10px;
          color: #1a1a1a;
        }
        .privacy-toc ol {
          margin: 0;
          padding-left: 20px;
        }
        .privacy-toc ol li {
          font-size: 0.9rem;
          margin-bottom: 4px;
        }
        .privacy-toc ol li a {
          color: #e8521a;
          text-decoration: none;
        }
        .privacy-toc ol li a:hover { text-decoration: underline; }
      `}</style>

      {/* Hero */}
      <div className="privacy-hero">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 12 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Privacy & Cookie Policy</span>
          </div>
          <span className="section-label" style={{ color: 'var(--amber)' }}>Legal</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginTop: 8, marginBottom: 0 }}>
            Privacy &amp; Cookie Policy
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="privacy-body">
        <p className="privacy-meta">Last updated: {lastUpdated}</p>

        {/* Table of contents */}
        <div className="privacy-toc">
          <p>Contents</p>
          <ol>
            <li><a href="#who-we-are">Who we are</a></li>
            <li><a href="#what-we-collect">What information we collect</a></li>
            <li><a href="#how-we-use">How we use your information</a></li>
            <li><a href="#cookies">Cookies &amp; tracking</a></li>
            <li><a href="#third-parties">Third-party services</a></li>
            <li><a href="#data-retention">Data retention</a></li>
            <li><a href="#your-rights">Your rights</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ol>
        </div>

        <h2 id="who-we-are">1. Who we are</h2>
        <p>
          SignalForge is a marketing automation consultancy based in Greater Boston, MA. We help small and mid-size businesses grow through email marketing, SMS campaigns, social media, ad creative, website design, and event marketing. Our website is <strong>signalforge.marketing</strong>.
        </p>
        <p>
          If you have any questions about this policy, you can reach us at <a href="mailto:hello@signalforge.marketing">hello@signalforge.marketing</a>.
        </p>

        <h2 id="what-we-collect">2. What information we collect</h2>
        <p>We collect information in two ways — information you give us directly, and information collected automatically when you visit our site.</p>

        <p><strong>Information you provide directly:</strong></p>
        <ul>
          <li>Name, email address, phone number, and company name when you submit a contact form or request a callback</li>
          <li>Your mailing address if you provide it through the contact form</li>
          <li>Messages you send through our Aria chat assistant, including any conversation transcripts</li>
          <li>Service preferences you select when filling out a form</li>
        </ul>

        <p><strong>Information collected automatically:</strong></p>
        <ul>
          <li>Pages you visit, how long you spend on them, and how you navigate the site (via Google Analytics)</li>
          <li>Your approximate location (city/region level only — we do not collect your precise location)</li>
          <li>Device type, browser, and operating system</li>
          <li>Referring website (how you found us)</li>
        </ul>

        <h2 id="how-we-use">3. How we use your information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and contact form submissions</li>
          <li>Follow up on callback requests made through the Aria chat assistant</li>
          <li>Understand how visitors use our site so we can improve it</li>
          <li>Send you information about our services if you've asked us to</li>
        </ul>
        <p>We do not sell your personal information to third parties. We do not use your information for automated decision-making or profiling.</p>

        <h2 id="cookies">4. Cookies &amp; tracking</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. We use a minimal set of cookies to make the site work and to understand how it's being used.
        </p>

        <p><strong>Cookies we use:</strong></p>
        <ul>
          <li>
            <strong>sf_cookie_consent</strong> — stores your Accept or Deny choice so we don't show the cookie banner on every visit. This is a first-party cookie stored in your browser's local storage.
          </li>
          <li>
            <strong>sfChatDismissed</strong> — remembers if you've closed the Aria chat widget during your current session. This is stored in session storage and cleared when you close your browser tab.
          </li>
          <li>
            <strong>Google Analytics (_ga, _ga_*)</strong> — analytics cookies set by Google that help us understand traffic patterns. These cookies collect anonymized data only. See Google's privacy policy at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
          </li>
        </ul>

        <p>
          If you click <strong>Deny</strong> on our cookie banner, Google Analytics will still load (it is part of our site infrastructure) but we encourage you to use a browser extension such as the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a> if you wish to prevent analytics tracking entirely.
        </p>

        <h2 id="third-parties">5. Third-party services</h2>
        <p>We use the following third-party services to operate this website:</p>
        <ul>
          <li>
            <strong>Google Analytics</strong> — website traffic analysis. Data is processed by Google LLC. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
          </li>
          <li>
            <strong>EmailJS</strong> — used to deliver contact form and callback request submissions to our team. Form data is transmitted through EmailJS servers. <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">EmailJS Privacy Policy</a>
          </li>
          <li>
            <strong>Anthropic / Claude API</strong> — powers the Aria AI chat assistant. Messages you type into the chat are sent to Anthropic's API to generate responses. Chat transcripts may be stored by SignalForge when a callback is requested. <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">Anthropic Privacy Policy</a>
          </li>
          <li>
            <strong>Vercel</strong> — our website hosting provider. Vercel may log basic request data (IP address, timestamp) as part of standard server operation. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>
          </li>
        </ul>

        <h2 id="data-retention">6. Data retention</h2>
        <p>
          Contact form submissions and callback requests are retained in our email inbox for as long as they are relevant to our business relationship with you. If you would like us to delete your information, contact us at <a href="mailto:hello@signalforge.marketing">hello@signalforge.marketing</a> and we will remove it promptly.
        </p>
        <p>
          Google Analytics data is retained for 26 months by default, per Google's standard retention settings.
        </p>

        <h2 id="your-rights">7. Your rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Ask what personal information we hold about you</li>
          <li>Request that we correct or delete your information</li>
          <li>Opt out of analytics tracking using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out tool</a></li>
          <li>Withdraw consent at any time by contacting us</li>
        </ul>
        <p>
          To exercise any of these rights, email us at <a href="mailto:hello@signalforge.marketing">hello@signalforge.marketing</a>. We will respond within 5 business days.
        </p>

        <h2 id="contact">8. Contact us</h2>
        <p>
          If you have questions about this policy or how we handle your data, please reach out:
        </p>
        <ul>
          <li>Email: <a href="mailto:hello@signalforge.marketing">hello@signalforge.marketing</a></li>
          <li>Location: Greater Boston, MA</li>
        </ul>
        <p>
          We may update this policy from time to time. The "Last updated" date at the top of this page will always reflect the most recent version.
        </p>
      </div>
    </>
  );
}
