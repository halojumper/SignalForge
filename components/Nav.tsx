'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/',              label: 'Home' },
  { href: '/services',      label: 'Services' },
  { href: '/how-it-works',  label: 'How It Works' },
  { href: '/results',       label: 'Results' },
  { href: '/insights',      label: 'Insights' },
  { href: '/contact',       label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className={`nav-inner ${open ? 'nav-mobile-open' : ''}`} style={{position:'relative'}}>
          <Link href="/" className="nav-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            Signal<span>Forge</span>
          </Link>
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-cta">
            <Link href="/services" className="btn btn-primary btn-sm">Get Started</Link>
          </div>
          <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span/><span/><span/>
          </button>
        </div>
      </div>
    </nav>
  );
}
