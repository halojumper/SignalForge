import Link from 'next/link';

interface CtaBandProps {
  label?: string;
  heading: string;
  sub: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function CtaBand({
  label = 'Ready to Grow?',
  heading,
  sub,
  primaryHref = 'https://calendly.com/_signalforge-marketing',
  primaryLabel = 'Schedule a Free Call',
  secondaryHref = '/services',
  secondaryLabel = 'Explore Services',
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-inner">
          <span className="section-label">{label}</span>
          <h2>{heading}</h2>
          <p>{sub}</p>
          <div className="cta-buttons">
            <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="btn btn-amber">{primaryLabel}</a>
            <Link href={secondaryHref} className="btn btn-outline-white">{secondaryLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
