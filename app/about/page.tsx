'use client';

export default function AboutPage() {
  const timeline = [
    { years: '2024–Now',  role: 'Founder',             company: 'SignalForge · Marketing Automation & Constant Contact Reseller' },
    { years: '2021–2026', role: 'Solutions Consultant', company: 'Dun & Bradstreet' },
    { years: '2019–2021', role: 'Solutions Consultant', company: 'Conversica' },
    { years: '2017–2019', role: 'Solutions Consultant', company: 'Leadspace' },
    { years: '2015–2017', role: 'Solutions Consultant', company: 'Oracle' },
    { years: 'Earlier',   role: 'Account Executive',    company: 'HP/Autonomy' },
  ];

  
  const toolkit = [
    { icon: 'ti-mail',        title: 'Email marketing & automation',   desc: 'Constant Contact setup and strategy, drip sequences, welcome journeys, re-engagement campaigns, deliverability, and list hygiene.' },
    { icon: 'ti-chart-bar',   title: 'Marketing strategy & GTM',       desc: 'ICP & TAM definition, campaign planning, value proposition messaging, ROI modeling, and go-to-market frameworks drawn from enterprise sales methodology.' },
    { icon: 'ti-robot',       title: 'AI-powered marketing',           desc: 'AI content workflows, agentic marketing tools, Model Context Protocol integrations, and automation strategies that scale without adding headcount.' },
    { icon: 'ti-link',        title: 'CRM & data integration',         desc: 'Salesforce, HubSpot, API connectors, ETL/ELT pipelines, contact enrichment, data quality frameworks, and CRM-to-email sync architecture.' },
    { icon: 'ti-speakerphone', title: 'Digital advertising',           desc: 'Social advertising (Meta, LinkedIn), search (Google Ads, Microsoft Ads), programmatic strategy, DSP/SSP advisory, and attribution modeling.' },
    { icon: 'ti-world',       title: 'Web presence for small business', desc: 'Professional websites for small businesses and entrepreneurs — design, deployment, and content strategy. No technical knowledge required.' },
  ];

  const pillars = [
    { heading: 'Enterprise-caliber thinking, SMB-friendly delivery', body: 'The same strategic frameworks used at Fortune 500 companies, applied with a timeline and budget that makes sense for your business.' },
    { heading: 'One partner, not a vendor',                          body: "You work directly with me — not a junior account manager. Every engagement is personal, and every recommendation is earned." },
    { heading: 'Authorized Constant Contact reseller',               body: "Hands-on setup, personalized onboarding, and ongoing support — not a self-serve link and a knowledge base article." },
    { heading: 'Grounded in data and ROI',                           body: "With a background in financial analysis, I always bring the business case so you can see exactly what you're getting back." },
  ];

  return (
    <>
      <style>{`
        .about-hero { background: var(--white); padding: 72px 0 60px; } 
        .about-hero-inner { display: grid; grid-template-columns: 1fr 300px; gap: 56px; align-items: center; }
        .about-eyebrow { display: inline-block; font-family: var(--font-head); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--coral); margin-bottom: 1rem; }
        .about-h1 { font-family: var(--font-head); font-size: clamp(2rem,4.5vw,3.2rem); font-weight: 800; color: var(--text); line-height: 1.1; margin-bottom: 1.25rem; }
        .about-h1 em { font-style: italic; color: var(--coral); }
        .about-lead { font-size: 1.05rem; color: var(--text-light); line-height: 1.75; max-width: 540px; margin-bottom: 2rem; }
        .about-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .about-headshot-wrap { border-radius: 16px; overflow: hidden; position: relative; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
        .about-headshot-wrap img { width: 100%; display: block; }
        .about-headshot-badge { position: absolute; bottom: 1rem; left: 1rem; right: 1rem; background: rgba(255,255,255,0.95); backdrop-filter: blur(6px); border: 1px solid rgba(0,0,0,0.09); border-radius: 10px; padding: 0.6rem 0.9rem; }
        .about-badge-name { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text); }
        .about-badge-title { font-size: 0.75rem; color: var(--warm-gray); margin-top: 1px; }

        .about-stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; }
        .about-stat-cell { background: transparent; padding: 1.5rem 0; text-align: center; }
        .about-stat-number { font-family: var(--font-head); font-size: 2.4rem; font-weight: 800; color: var(--coral); display: block; }
        .about-stat-number span { color: var(--coral); }
        .about-stat-label { font-size: 0.9rem; color: var(--warm-gray); margin-top: 6px; display: block; }

        .about-story { background: var(--cream); padding: 80px 0; border-bottom: 1px solid rgba(0,0,0,0.07); }
        .about-story-inner { display: grid; grid-template-columns: 220px 1fr; gap: 60px; align-items: start; }
        .about-story-sidebar { position: sticky; top: 88px; }
        .about-section-label { display: block; font-family: var(--font-head); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--coral); margin-bottom: 0.6rem; }
        .about-sidebar-heading { font-family: var(--font-head); font-size: 1.5rem; font-weight: 800; color: var(--text); line-height: 1.2; }
        .about-sidebar-heading em { font-style: italic; color: var(--coral); }
        .about-story-links { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 2px; }
        .about-story-links a { font-size: 0.82rem; color: var(--warm-gray); text-decoration: none; padding: 6px 10px 6px 14px; border-left: 2px solid rgba(0,0,0,0.1); transition: color 0.2s, border-color 0.2s; display: block; }
        .about-story-links a:hover { color: var(--coral); border-color: var(--coral); }
        .about-story-body { display: flex; flex-direction: column; gap: 2.5rem; }
        .about-pullquote { border-left: 3px solid var(--coral); padding: 0.25rem 0 0.25rem 1.25rem; font-family: var(--font-head); font-size: 1.15rem; font-weight: 600; font-style: italic; color: var(--text); line-height: 1.5; }
        .about-h2 { font-family: var(--font-head); font-size: 1.45rem; font-weight: 800; color: var(--text); margin-bottom: 0.75rem; line-height: 1.2; }
        .about-h2 em { font-style: italic; color: var(--coral); }
        .about-h3 { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
        .about-p { color: var(--text-light); line-height: 1.75; margin-bottom: 0.75rem; }
        .about-p:last-child { margin-bottom: 0; }
        .about-p strong { color: var(--text); font-weight: 600; }
        .about-timeline { display: flex; flex-direction: column; margin-top: 0.5rem; }
        .about-tl-item { display: grid; grid-template-columns: 100px 1fr; gap: 1.25rem; padding: 1.1rem 0; border-bottom: 1px solid rgba(0,0,0,0.07); }
        .about-tl-item:last-child { border-bottom: none; }
        .about-tl-year { font-family: var(--font-head); font-size: 0.78rem; font-weight: 700; color: var(--coral); letter-spacing: 0.03em; padding-top: 2px; }
        .about-tl-role { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text); }
        .about-tl-company { font-size: 0.82rem; color: var(--warm-gray); margin-top: 2px; }

        .about-toolkit { background: var(--white); padding: 80px 0; border-bottom: 1px solid rgba(0,0,0,0.07); }
        .about-toolkit-header { margin-bottom: 2.5rem; }
        .about-toolkit-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; }
        .about-toolkit-card { background: var(--sand); border: 1px solid rgba(0,0,0,0.07); border-radius: 14px; padding: 1.5rem; transition: box-shadow 0.2s, transform 0.2s; }
        .about-toolkit-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .about-toolkit-icon { width: 40px; height: 40px; background: rgba(232,85,42,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; font-size: 1.1rem; color: var(--coral); }
        .about-toolkit-card h3 { font-family: var(--font-head); font-size: 0.875rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
        .about-toolkit-card p { font-size: 0.82rem; color: var(--warm-gray); line-height: 1.65; }
        .about-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 2rem; }
        .about-tag { font-size: 0.75rem; background: var(--sand-mid); border: 1px solid rgba(0,0,0,0.1); color: var(--warm-gray); padding: 5px 14px; border-radius: 50px; }
        .about-tag-accent { background: rgba(232,85,42,0.09); border-color: rgba(232,85,42,0.25); color: var(--coral); font-weight: 600; }

        .about-why { background: var(--sand); padding: 80px 0; border-bottom: 1px solid rgba(0,0,0,0.07); }
        .about-why-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
        .about-why-lead { font-size: 1rem; color: var(--text-light); line-height: 1.8; margin-top: 0.75rem; }
        .about-pillars { display: flex; flex-direction: column; gap: 1rem; }
        .about-pillar { display: flex; gap: 1rem; align-items: flex-start; background: var(--white); border: 1px solid rgba(0,0,0,0.07); border-radius: 12px; padding: 1.1rem 1.25rem; }
        .about-pillar-dot { width: 8px; height: 8px; background: var(--coral); border-radius: 50%; margin-top: 7px; flex-shrink: 0; }
        .about-pillar-heading { font-family: var(--font-head); font-size: 0.875rem; font-weight: 700; color: var(--text); margin-bottom: 3px; }
        .about-pillar-body { font-size: 0.82rem; color: var(--warm-gray); line-height: 1.65; }

        .about-cta { background: var(--coral); padding: 72px 0; text-align: center; }
        .about-cta h2 { font-family: var(--font-head); font-size: clamp(1.8rem,4vw,2.75rem); font-weight: 800; color: #fff; margin-bottom: 1rem; }
        .about-cta h2 em { font-style: italic; }
        .about-cta p { font-size: 1rem; color: rgba(255,255,255,0.85); max-width: 500px; margin: 0 auto 2rem; line-height: 1.7; }
        .about-cta-row { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

        @media (max-width: 860px) {
          .about-hero-inner { grid-template-columns: 1fr; }
          .about-headshot-wrap { max-width: 280px; }
          .about-stats-grid { grid-template-columns: repeat(2,1fr); }
          .about-story-inner { grid-template-columns: 1fr; gap: 2rem; }
          .about-story-sidebar { position: static; }
          .about-story-links { display: none; }
          .about-toolkit-grid { grid-template-columns: repeat(2,1fr); }
          .about-why-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 540px) {
          .about-toolkit-grid { grid-template-columns: 1fr; }
          .about-stats-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-inner">
            <div>
              <span className="about-eyebrow">About SignalForge</span>
              <h1 className="about-h1">Marketing that <em>converts</em><br />powered by strategy</h1>
              <p className="about-lead">
                SignalForge is a marketing automation consultancy and Constant Contact Authorized Reseller
                founded by Jakub Malobecki — an enterprise marketing and revenue technology veteran with many
                years of experience turning complex tech stacks into measurable growth.
              </p>
              <div className="about-btns">
                <a href="https://calendly.com/signalforge-marketing" target="_blank" rel="noreferrer" className="btn btn-primary">
                  Book a discovery call
                </a>
                <a href="/services" className="btn btn-outline">Explore services</a>
              </div>
            </div>
            <div className="about-headshot-wrap">
              <img src="/images/headshot.png" alt="Jakub Malobecki, founder of SignalForge" />
              <div className="about-headshot-badge">
                <div className="about-badge-name">Jakub Malobecki</div>
                <div className="about-badge-title">Founder · SignalForge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="container">
          <div className="about-stats-grid">
            {[
              { num: '15', suffix: '+',  label: 'Years in enterprise B2B' },
              { num: '$50', suffix: 'M+', label: 'Revenue pipeline influenced' },
              { num: '6',   suffix: '',   label: 'Industry-leading platforms' },
              { num: '2',   suffix: '',   label: 'Languages spoken fluently' },
            ].map(s => (
              <div key={s.label} className="about-stat-cell">
                <span className="about-stat-number">{s.num}<span>{s.suffix}</span></span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story" id="story">
        <div className="container">
          <div className="about-story-inner">
            <div className="about-story-sidebar">
              <span className="about-section-label">My story</span>
              <h2 className="about-sidebar-heading">The strategist<br />behind <em>the signal</em></h2>
              <nav className="about-story-links">
                <a href="#background">Background</a>
                <a href="#marketing-depth">Marketing depth</a>
                <a href="#why-email">Why email automation</a>
                <a href="#foundation">Foundation</a>
                <a href="#timeline">Career timeline</a>
              </nav>
            </div>

            <div className="about-story-body">
              <div className="about-pullquote" id="background">
                &ldquo;My edge is seeing what enterprise teams overlook — then building the campaigns and systems to act on it.&rdquo;
              </div>

              <div>
                <h3 className="about-h3">Marketing automation consultant &amp; Constant Contact authorized reseller</h3>
                <p className="about-p">
                  I&apos;m Jakub Malobecki — a bilingual (English &amp; Polish) marketing and revenue technology
                  professional with many years of experience in enterprise B2B SaaS. I founded SignalForge to
                  bring a consulting-grade perspective to small and mid-sized businesses that deserve the same
                  caliber of marketing strategy and execution that Fortune 500 companies buy from agencies at
                  ten times the price.
                </p>
                <p className="about-p">
                  SignalForge is built around a simple belief: <strong>email marketing works when it&apos;s done right.</strong>{' '}
                  As a Constant Contact Authorized Reseller, I help businesses set up, run, and optimize email
                  programs that actually drive revenue — not just open rates.
                </p>
              </div>

              <div id="marketing-depth">
                <h2 className="about-h2">Deep roots in <em>marketing technology</em></h2>
                <p className="about-p">
                  My career spans some of the most influential platforms in B2B marketing and revenue technology —
                  Dun &amp; Bradstreet, Conversica, Leadspace, and Oracle — where I led complex, consultative
                  engagements with Fortune 500 and enterprise-tier buyers across North America.
                </p>
                <p className="about-p">
                  That experience translates directly into what SignalForge delivers:{' '}
                  <strong>strategic clarity on where to invest, what to automate, and how to measure what matters.</strong>{' '}
                  Whether you&apos;re sending your first welcome series or rethinking a fragmented multi-channel stack,
                  I bring the same analytical rigor I applied to enterprise pipeline development.
                </p>
                <p className="about-p">
                  I&apos;ve also spent years at the intersection of data intelligence and demand generation — working with
                  intent signals, ICP targeting, CRM enrichment, and marketing attribution — so I understand not just
                  the tools, but the <strong>systems and strategies that make those tools pay off.</strong>
                </p>
              </div>

              <div id="why-email">
                <h2 className="about-h2">Why email automation <em>matters</em></h2>
                <p className="about-p">
                  Email remains the highest-ROI channel in marketing — consistently outperforming paid social,
                  display, and even organic search when it comes to converting contacts into customers. The problem
                  isn&apos;t the channel. It&apos;s the execution.
                </p>
                <p className="about-p">
                  Most small businesses under-invest in list hygiene, segmentation, and automated journeys because
                  they don&apos;t have the time or technical background to set it up properly.{' '}
                  <strong>That&apos;s exactly the gap SignalForge fills.</strong> I handle the strategy, the setup,
                  and the ongoing optimization — so you get a professional email program without hiring a full-time
                  marketing team.
                </p>
                <p className="about-p">
                  As a Constant Contact Authorized Reseller, I also offer my clients access to one of the most
                  trusted and easy-to-use email platforms on the market — along with personalized onboarding and
                  hands-on support that you won&apos;t get from a self-serve signup.
                </p>
              </div>

              <div id="foundation">
                <h2 className="about-h2">A foundation built on <em>trust and numbers</em></h2>
                <p className="about-p">
                  Before moving into marketing technology, I built a foundation in bank auditing and financial
                  analysis — a background that still informs how I frame ROI, model campaign impact, and earn
                  trust with owners and operators who want to see the math, not just the pitch.
                </p>
                <p className="about-p">
                  I hold a B.S. in Accountancy from Merrimack College and bring MEDDIC/MEDDPICC discovery
                  frameworks, executive-level storytelling, and deep technical fluency — from email deliverability
                  and automation logic to API integrations and CRM ecosystems — to every client engagement.
                </p>
                <p className="about-p">
                  I&apos;m also bilingual in English and Polish, and work with businesses across the greater Boston
                  area and beyond.
                </p>
              </div>

              <div id="timeline">
                <h2 className="about-h2">Career <em>timeline</em></h2>
                <div className="about-timeline">
                  {timeline.map(t => (
                    <div key={t.years} className="about-tl-item">
                      <div className="about-tl-year">{t.years}</div>
                      <div>
                        <div className="about-tl-role">{t.role}</div>
                        <div className="about-tl-company">{t.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="about-toolkit">
        <div className="container">
          <div className="about-toolkit-header">
            <span className="about-section-label">Expertise &amp; toolkit</span>
            <h2 className="about-h2" style={{ fontSize: '2rem' }}>A <em>full-spectrum</em> marketing toolkit</h2>
            <p style={{ color: 'var(--warm-gray)', maxWidth: 540, marginTop: 8 }}>
              Platforms, frameworks, and disciplines built over many years of enterprise and SMB marketing work.
            </p>
          </div>
          <div className="about-toolkit-grid">
            {toolkit.map(t => (
              <div key={t.title} className="about-toolkit-card">
                <div className="about-toolkit-icon">
                  <i className={`ti ${t.icon}`} aria-hidden="true" />
                </div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="about-tags">
            {['Constant Contact', 'Email Automation', 'Authorized Reseller'].map(t => (
              <span key={t} className="about-tag about-tag-accent">{t}</span>
            ))}
            {['Salesforce', 'HubSpot', 'MEDDIC / MEDDPICC', 'D&B · Dun & Bradstreet', 'Conversica',
              'Leadspace', 'REST / SOAP APIs', 'ETL / ELT', 'ROI Modeling',
              'Programmatic · DSP · SSP', 'Agentic AI', 'MCP', 'English & Polish'].map(t => (
              <span key={t} className="about-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SIGNALFORGE */}
      <section className="about-why">
        <div className="container">
          <div className="about-why-inner">
            <div>
              <span className="about-section-label">Why SignalForge</span>
              <h2 className="about-h2">Strategy-first.<br /><em>Results-driven.</em></h2>
              <p className="about-why-lead">
                Most marketing automation vendors sell you a platform and leave you to figure out the rest.
                SignalForge is different — you get a strategic partner who has sat on the consulting side of
                enterprise technology for many years and understands what separates campaigns that perform
                from campaigns that just go out the door.
              </p>
              <p className="about-why-lead">
                Whether you&apos;re a local business sending your first newsletter or a growing company ready to
                build automated journeys, I meet you where you are — and move you toward where you want to be.
              </p>
            </div>
            <div className="about-pillars">
              {pillars.map(p => (
                <div key={p.heading} className="about-pillar">
                  <div className="about-pillar-dot" />
                  <div>
                    <div className="about-pillar-heading">{p.heading}</div>
                    <div className="about-pillar-body">{p.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to <em>forge better signals</em>?</h2>
          <p>
            Whether you need a Constant Contact setup, a full email automation strategy, or a marketing
            partner who speaks both business and technology — let&apos;s talk.
          </p>
          <div className="about-cta-row">
            <a href="https://calendly.com/signalforge-marketing" target="_blank" rel="noreferrer" className="btn btn-outline-white">
              Book a discovery call
            </a>
            <a href="/contact" className="btn btn-outline-white">Send a message</a>
          </div>
        </div>
      </section>
    </>
  );
}
