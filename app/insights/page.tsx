import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
export const metadata: Metadata = { title: 'Insights' };

const articles = [
  { large:true, bg:'linear-gradient(135deg,#fdf0e0,#f5a623)', icon:'📧', cat:'Email Marketing', title:'The 5 Automation Workflows Every Small Business Should Have Running Today', desc:'From welcome sequences to abandoned cart recovery, these five triggered automations do the work so you don\'t have to — 24 hours a day, 7 days a week.', date:'May 18, 2026', read:'8 min read' },
  { bg:'linear-gradient(135deg,#ffe8d6,#e8552a)', icon:'📱', cat:'SMS Marketing', title:'Why SMS Outperforms Email for Flash Sales', desc:'Open rates above 90% make SMS a category of its own. Here\'s how to use it without spamming your list.', date:'May 5, 2026', read:'5 min read' },
  { bg:'linear-gradient(135deg,#fff3d6,#fbbf47)', icon:'🎨', cat:'Ad Creative', title:'Creative Formats Driving the Highest CTR on Meta Ads in 2026', desc:'Static images aren\'t dead — but they\'re not enough on their own. The winning formula for paid social today.', date:'April 22, 2026', read:'6 min read' },
  { bg:'linear-gradient(135deg,#fde8d8,#e07b3a)', icon:'📣', cat:'Social Media', title:'How to Build a 90-Day Social Content Calendar in One Afternoon', desc:'A simple framework that takes the guesswork out of what to post and when.', date:'April 10, 2026', read:'7 min read' },
  { bg:'linear-gradient(135deg,#fdf6ee,#e8552a)', icon:'🎟️', cat:'Event Marketing', title:'The Pre-Event Email Sequence That Fills Seats Every Time', desc:'A 5-email sequence template with timing, subject lines, and copy formulas that consistently drive registrations.', date:'March 28, 2026', read:'9 min read' },
  { bg:'linear-gradient(135deg,#fff8e8,#fbbf47)', icon:'⚡', cat:'Automation', title:'Constant Contact vs. Klaviyo: Which Is Right for Your Business?', desc:'An honest, side-by-side breakdown of two leading platforms from a team that uses both every day.', date:'March 14, 2026', read:'10 min read' },
];

export default function Insights() {
  return (
    <>
      <div className="page-hero"><div className="container page-hero-inner">
        <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Insights</span></div>
        <span className="section-label">Insights &amp; Tips</span>
        <h1>Marketing Intelligence, <em>Delivered Free</em></h1>
        <p>Practical guides, data-backed tips, and honest takes on email marketing, SMS, ad creative, and automation — straight from our team.</p>
      </div></div>

      <section style={{padding:'80px 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1.6fr 1fr 1fr',gap:24,marginBottom:24}}>
            {articles.slice(0,3).map(a=>(
              <div key={a.title} style={{borderRadius:18,overflow:'hidden',border:'1px solid rgba(0,0,0,0.07)',background:'var(--white)'}}>
                <div style={{height:a.large?240:190,background:a.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:a.large?'4rem':'3rem'}}>{a.icon}</div>
                <div style={{padding:'24px 22px'}}>
                  <div style={{fontSize:'0.72rem',fontFamily:'Syne,sans-serif',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--coral)',marginBottom:8}}>{a.cat}</div>
                  <div style={{fontFamily:'Syne,sans-serif',fontSize:a.large?'1.3rem':'1.05rem',fontWeight:700,color:'var(--text)',marginBottom:10,lineHeight:1.3}}>{a.title}</div>
                  <p style={{fontSize:'0.88rem',color:'var(--warm-gray)',lineHeight:1.65,marginBottom:16}}>{a.desc}</p>
                  <div style={{display:'flex',gap:16,alignItems:'center'}}>
                    <span style={{fontSize:'0.78rem',color:'var(--mid-gray)'}}>{a.date}</span>
                    <span style={{fontSize:'0.78rem',fontWeight:600,color:'var(--coral)'}}>{a.read}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
            {articles.slice(3).map(a=>(
              <div key={a.title} style={{borderRadius:18,overflow:'hidden',border:'1px solid rgba(0,0,0,0.07)',background:'var(--white)'}}>
                <div style={{height:190,background:a.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'3rem'}}>{a.icon}</div>
                <div style={{padding:'24px 22px'}}>
                  <div style={{fontSize:'0.72rem',fontFamily:'Syne,sans-serif',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--coral)',marginBottom:8}}>{a.cat}</div>
                  <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.05rem',fontWeight:700,color:'var(--text)',marginBottom:10,lineHeight:1.3}}>{a.title}</div>
                  <p style={{fontSize:'0.88rem',color:'var(--warm-gray)',lineHeight:1.65,marginBottom:16}}>{a.desc}</p>
                  <div style={{display:'flex',gap:16}}>
                    <span style={{fontSize:'0.78rem',color:'var(--mid-gray)'}}>{a.date}</span>
                    <span style={{fontSize:'0.78rem',fontWeight:600,color:'var(--coral)'}}>{a.read}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{background:'var(--sand-mid)',padding:'72px 0'}}>
        <div className="container" style={{maxWidth:560,textAlign:'center'}}>
          <span className="section-label">Stay Sharp</span>
          <h2 className="section-title">Get Insights in Your Inbox</h2>
          <p className="section-sub" style={{margin:'0 auto 28px'}}>One email per week. Practical marketing tips, platform updates, and campaign ideas — no fluff.</p>
          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
            <input type="email" placeholder="your@email.com" style={{flex:1,minWidth:200,padding:'12px 18px',border:'1.5px solid rgba(0,0,0,0.12)',borderRadius:50,fontSize:'0.92rem',fontFamily:'DM Sans,sans-serif',outline:'none',background:'var(--white)'}} />
            <button className="btn btn-primary">Subscribe Free</button>
          </div>
        </div>
      </div>

      <CtaBand heading="Ready to Put These Ideas to Work?" sub="Book a free strategy call and we'll build a custom plan around what you've been reading about." primaryLabel="Schedule a Free Call" secondaryLabel="View Services" secondaryHref="/services" />
    </>
  );
}
