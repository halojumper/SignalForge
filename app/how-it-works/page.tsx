import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
export const metadata: Metadata = { title: 'How It Works' };

const steps = [
  { num:'1', title:'Discovery Call', color:'var(--coral)', desc:'A focused 45-minute session where we learn everything we need to build the right strategy.', details:['Current tools, platforms, and stack','Business goals and KPIs','Target audience and ICP','Budget and timeline expectations'] },
  { num:'2', title:'Strategy Blueprint', color:'var(--amber)', desc:'A customized marketing strategy doc delivered within 48 hours, mapping every channel to your goals.', details:['Channel and platform recommendations','Automation flow diagrams','Campaign calendar outline','ROI projections and benchmarks'] },
  { num:'3', title:'Platform Setup & Build', color:'#e07b3a', desc:'We configure your tools, build templates, create automation workflows, and integrate with your stack.', details:['Account setup and domain authentication','Branded email and SMS templates','Automation workflow build-out','CRM and list import/segmentation'] },
  { num:'4', title:'Launch & Optimize', color:'var(--terra)', desc:'We go live together, monitor performance in real time, and continuously refine based on data.', details:['Supervised campaign launch','Weekly performance reporting','A/B testing and iteration','Monthly strategy review calls'] },
];

const timeline = [
  {icon:'📞',label:'Discovery Call',time:'Day 1'},
  {icon:'📋',label:'Strategy Blueprint',time:'Day 2–3'},
  {icon:'⚙️',label:'Setup & Build',time:'Day 3–5'},
  {icon:'🚀',label:'Launch',time:'Day 5–7'},
];

const stats = [
  {num:'200',suf:'+',label:'Campaigns Delivered'},
  {num:'3.4',suf:'×',label:'Avg. ROI Multiplier'},
  {num:'98',suf:'%',label:'Client Retention Rate'},
  {num:'48',suf:'h',label:'Average Time to Launch'},
];

export default function HowItWorks() {
  return (
    <>
      <div className="page-hero"><div className="container page-hero-inner">
        <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>How It Works</span></div>
        <span className="section-label">The Process</span>
        <h1>From Discovery to Launch <em>in Four Simple Steps</em></h1>
        <p>No guesswork. No lengthy onboarding. We move fast and get your campaigns live within days — with full transparency at every step.</p>
      </div></div>

      <section style={{padding:'80px 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32}}>
            {steps.map(s=>(
              <div key={s.num} style={{background:'var(--white)',border:'1px solid rgba(0,0,0,0.07)',borderRadius:20,padding:'36px 32px',display:'flex',gap:24,alignItems:'flex-start'}}>
                <div style={{width:56,height:56,flexShrink:0,borderRadius:'50%',background:'var(--white)',border:`2px solid ${s.color}`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1.2rem',color:s.color}}>{s.num}</div>
                <div>
                  <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.15rem',fontWeight:700,color:'var(--text)',marginBottom:10}}>{s.title}</div>
                  <p style={{fontSize:'0.92rem',color:'var(--warm-gray)',lineHeight:1.7,marginBottom:14}}>{s.desc}</p>
                  <ul style={{listStyle:'none'}}>
                    {s.details.map(d=><li key={d} style={{fontSize:'0.86rem',color:'var(--warm-gray)',padding:'3px 0',display:'flex',gap:8}}><span style={{color:'var(--coral)',fontWeight:700}}>→</span>{d}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{background:'var(--sand-mid)',padding:'72px 0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:48}}>
            <span className="section-label">Typical Timeline</span>
            <h2 className="section-title">Live in as Little as 48 Hours</h2>
          </div>
          <div style={{display:'flex',gap:0,position:'relative'}}>
            <div style={{position:'absolute',top:28,left:'12.5%',right:'12.5%',height:2,background:'linear-gradient(90deg,var(--coral),var(--amber))'}}/>
            {timeline.map((t,i)=>(
              <div key={t.label} style={{flex:1,textAlign:'center',padding:'0 16px',position:'relative',zIndex:1}}>
                <div style={{width:56,height:56,borderRadius:'50%',background:'var(--white)',border:`2px solid ${['var(--coral)','var(--amber)','#e07b3a','var(--terra)'][i]}`,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:'1.4rem',boxShadow:'0 4px 16px rgba(232,85,42,0.15)'}}>{t.icon}</div>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.85rem',fontWeight:700,color:'var(--text)',marginBottom:6}}>{t.label}</div>
                <div style={{fontSize:'0.78rem',color:'var(--coral)',fontWeight:600,fontFamily:'Syne,sans-serif'}}>{t.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{background:'var(--amber)',padding:'80px 0'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
            {stats.map((s,i)=>(
              <div key={s.label} style={{textAlign:'center',padding:'32px 20px',borderRight:i<3?'1px solid rgba(255,255,255,0.3)':undefined}}>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'3rem',fontWeight:800,color:'var(--white)',lineHeight:1,marginBottom:8}}>{s.num}<span style={{color:'rgba(255,255,255,0.7)'}}>{s.suf}</span></div>
                <div style={{fontSize:'0.9rem',color:'rgba(255,255,255,0.85)',fontWeight:500}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBand heading="Ready to Start Step One?" sub="Book your free discovery call and we'll have a strategy in your hands within 48 hours." primaryLabel="Book the Discovery Call" secondaryLabel="Browse Services First" secondaryHref="/services" />
    </>
  );
}
