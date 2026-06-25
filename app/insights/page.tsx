import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
export const metadata: Metadata = { title: 'Insights' };

const articles = [
  { large:true, img:'/images/sms_2026.jpg', cat:'SMS Marketing', title:'SMS Marketing in 2026: The Channel That Stopped Being a Tactic and Started Being a Strategy', desc:'RCS, AI-driven personalization, and the shift from broadcast to lifecycle messaging — here is what the 2026 data says and what SMBs need to do right now.', date:'June 24, 2026', read:'10 min read', href:'/insights/sms-marketing-trends-2026' },
  { large:true, bg:'linear-gradient(135deg,#ffe8d6,#e8552a)', icon:'📱', img:'/images/sms-marketing-hero.jpg', cat:'SMS Marketing', title:'Is SMS Marketing Dead in 2026? Here\'s What the Data Actually Says', desc:'Everyone says SMS marketing is dead. The open rates, click-throughs, and revenue numbers we see every week tell a very different story.', date:'June 12, 2026', read:'6 min read', href:'/insights/sms-marketing-2026' },
  { large:true, img:'/images/automation-workflows.jpg', cat:'Email Marketing', title:'The 5 Automation Workflows Every Small Business Should Have Running Today', desc:'From welcome sequences to abandoned cart recovery, these five triggered automations do the work so you don\'t have to - 24 hours a day, 7 days a week.', date:'May 18, 2026', read:'8 min read', href:'/insights/automation-workflows' },
  { img:'/images/sms-marketing.jpg', cat:'SMS Marketing', title:'Why SMS Outperforms Email for Flash Sales', desc:'Open rates above 90% make SMS a category of its own. Here\'s how to use it without spamming your list.', date:'May 5, 2026', read:'5 min read', href:'/insights/sms-vs-email' },
  { img:'/images/meta-ads-creative.jpg', cat:'Ad Creative', title:'Creative Formats Driving the Highest CTR on Meta Ads in 2026', desc:'Static images aren\'t dead - but they\'re not enough on their own. The winning formula for paid social today.', date:'April 22, 2026', read:'6 min read', href:'/insights/meta-ads-creative' },
  { img:'/images/social-content-calendar.jpg', cat:'Social Media', title:'How to Build a 90-Day Social Content Calendar in One Afternoon', desc:'A simple framework that takes the guesswork out of what to post and when.', date:'April 10, 2026', read:'7 min read', href:'/insights/social-content-calendar' },
  { img:'/images/pre-event-email.jpg', cat:'Event Marketing', title:'The Pre-Event Email Sequence That Fills Seats Every Time', desc:'A 5-email sequence template with timing, subject lines, and copy formulas that consistently drive registrations.', date:'March 28, 2026', read:'9 min read', href:'/insights/pre-event-email-sequence' },
  { img:'/images/constant-contact-vs-klaviyo.jpg', cat:'Automation', title:'Constant Contact vs. Klaviyo: Which Is Right for Your Business?', desc:'An honest, side-by-side breakdown of two leading platforms from a team that uses both every day.', date:'March 14, 2026', read:'10 min read', href:'/insights/constant-contact-vs-klaviyo' },
];

export default function Insights() {
  return (
    <>
      <style>{`
        .insights-top  { display:grid; grid-template-columns:1.6fr 1fr 1fr; gap:24px; margin-bottom:24px; }
        .insights-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .article-img { width:100%; object-fit:cover; display:block; }
        @media(max-width:900px) {
          .insights-top  { grid-template-columns:1fr 1fr; }
          .insights-grid { grid-template-columns:1fr 1fr; }
        }
        @media(max-width:560px) {
          .insights-top  { grid-template-columns:1fr; }
          .insights-grid { grid-template-columns:1fr; }
        }
      `}</style>

      <div className="page-hero"><div className="container page-hero-inner">
        <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Insights</span></div>
        <span className="section-label">Insights &amp; Tips</span>
        <h1>Marketing Intelligence <em>Delivered Free</em></h1>
        <p>Practical guides, data-backed tips, and honest takes on email marketing, SMS, ad creative, and automation - straight from our team.</p>
      </div></div>

      <section style={{padding:'56px 0 64px',background:'var(--cream)'}}>
        <div className="container">
          <div className="insights-top">
            {articles.slice(0,3).map(a=>(
              <Link key={a.title} href={a.href} style={{textDecoration:'none'}}>
                <div style={{borderRadius:18,overflow:'hidden',border:'1px solid rgba(0,0,0,0.07)',background:'var(--white)',cursor:'pointer'}}>
                  <img src={a.img} alt={a.title} className="article-img" style={{height:a.large?220:180}} />
                  <div style={{padding:'22px 20px'}}>
                    <div style={{fontSize:'0.72rem',fontFamily:'Syne,sans-serif',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--coral)',marginBottom:8}}>{a.cat}</div>
                    <div style={{fontFamily:'Syne,sans-serif',fontSize:a.large?'1.2rem':'1rem',fontWeight:700,color:'var(--text)',marginBottom:10,lineHeight:1.3}}>{a.title}</div>
                    <p style={{fontSize:'0.88rem',color:'var(--warm-gray)',lineHeight:1.65,marginBottom:14}}>{a.desc}</p>
                    <div style={{display:'flex',gap:14,alignItems:'center'}}>
                      <span style={{fontSize:'0.78rem',color:'var(--mid-gray)'}}>{a.date}</span>
                      <span style={{fontSize:'0.78rem',fontWeight:600,color:'var(--coral)'}}>{a.read}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="insights-grid">
            {articles.slice(3).map(a=>(
              <Link key={a.title} href={a.href} style={{textDecoration:'none'}}>
                <div style={{borderRadius:18,overflow:'hidden',border:'1px solid rgba(0,0,0,0.07)',background:'var(--white)',cursor:'pointer'}}>
                  <img src={a.img} alt={a.title} className="article-img" style={{height:180}} />
                  <div style={{padding:'22px 20px'}}>
                    <div style={{fontSize:'0.72rem',fontFamily:'Syne,sans-serif',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--coral)',marginBottom:8}}>{a.cat}</div>
                    <div style={{fontFamily:'Syne,sans-serif',fontSize:'1rem',fontWeight:700,color:'var(--text)',marginBottom:10,lineHeight:1.3}}>{a.title}</div>
                    <p style={{fontSize:'0.88rem',color:'var(--warm-gray)',lineHeight:1.65,marginBottom:14}}>{a.desc}</p>
                    <div style={{display:'flex',gap:14}}>
                      <span style={{fontSize:'0.78rem',color:'var(--mid-gray)'}}>{a.date}</span>
                      <span style={{fontSize:'0.78rem',fontWeight:600,color:'var(--coral)'}}>{a.read}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Want Tips Like These In Your Inbox?" sub="Join hundreds of small business owners who get our best marketing insights delivered weekly." primaryLabel="Subscribe Free" secondaryLabel="Browse All Articles" secondaryHref="/insights" />
    </>
  );
}
