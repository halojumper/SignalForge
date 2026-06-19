'use client';

export default function ServiceAreaMap() {
  return (
    <section className="service-area">
      <style jsx>{`
        .service-area {
          background: var(--sand);
          padding: 64px 0;
        }
        .service-area-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .service-area-label {
          font-family: var(--font-head);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--coral);
          margin-bottom: 0.6rem;
          display: block;
        }
        .service-area h2 {
          font-family: var(--font-head);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text);
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .service-area h2 em { font-style: italic; color: var(--coral); }
        .service-area p {
          color: var(--text-light);
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .service-area-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 1.25rem;
        }
        .service-area-badge {
          font-size: 0.78rem;
          font-weight: 600;
          background: var(--white);
          border: 1px solid rgba(0,0,0,0.08);
          color: var(--text);
          padding: 6px 14px;
          border-radius: 50px;
        }
        .map-frame-wrap {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          aspect-ratio: 4 / 3;
        }
        .map-frame-wrap iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
        @media (max-width: 820px) {
          .service-area-inner { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="service-area-inner">
          <div>
            <span className="service-area-label">Where we work</span>
            <h2>Proudly serving <em>Greater Boston</em> &amp; New England</h2>
            <p>
              SignalForge works with small and mid-sized businesses across the Greater Boston area
              and throughout New England — in person when it helps, remote when it&apos;s faster.
              Wherever your business is, we bring the same enterprise-grade strategy to the table.
            </p>
            <div className="service-area-badges">
              <span className="service-area-badge">Boston</span>
              <span className="service-area-badge">Cambridge</span>
              <span className="service-area-badge">North Shore</span>
              <span className="service-area-badge">South Shore</span>
              <span className="service-area-badge">MetroWest</span>
              <span className="service-area-badge">Remote-friendly</span>
            </div>
          </div>

          <div className="map-frame-wrap">
            <iframe
  title="SignalForge Service Area Map - Greater Boston"
  src="https://www.google.com/maps?q=42.42,-71.10&z=9&output=embed"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </div>
      </div>
    </section>
  );
}
