'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('sf_cookie_consent')) {
      setVisible(true);
    }
  }, []);

  function dismiss(choice: string) {
    setHiding(true);
    setTimeout(() => {
      localStorage.setItem('sf_cookie_consent', choice);
      setVisible(false);
      setHiding(false);
    }, 320);
  }

  if (!visible) return null;

  return (
    <div className={`cookie-banner${hiding ? ' hiding' : ''}`} role="dialog" aria-label="Cookie consent">
      <div className="cookie-inner">
        <div className="cookie-icon">🍪</div>
        <div className="cookie-text">
          <strong>We use cookies</strong>
          <p>
            We use cookies to enhance your experience and analyze traffic.
            See our <Link href="/privacy-policy">Privacy &amp; Cookie Policy</Link>.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="btn-cookie btn-cookie-deny" onClick={() => dismiss('deny')}>Deny</button>
          <button className="btn-cookie btn-cookie-accept" onClick={() => dismiss('accept')}>Accept</button>
        </div>
      </div>
    </div>
  );
}
