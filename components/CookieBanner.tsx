'use client';
import { useState } from 'react';

export default function CookieBanner() {
  const [hidden, setHidden] = useState(false);
  const [hiding, setHiding] = useState(false);

  function dismiss() {
    setHiding(true);
    setTimeout(() => setHidden(true), 320);
  }

  if (hidden) return null;

  return (
    <div className={`cookie-banner${hiding ? ' hiding' : ''}`} role="dialog" aria-label="Cookie consent">
      <div className="cookie-inner">
        <div className="cookie-icon">🍪</div>
        <div className="cookie-text">
          <strong>We use cookies</strong>
          <p>
            We use cookies to enhance your experience and analyze traffic.
            See our <a href="#">Cookie Policy</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="btn-cookie btn-cookie-deny" onClick={dismiss}>Deny</button>
          <button className="btn-cookie btn-cookie-accept" onClick={dismiss}>Accept</button>
        </div>
      </div>
    </div>
  );
}
