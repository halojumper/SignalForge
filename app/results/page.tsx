import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
export const metadata: Metadata = { title: 'Client Results' };

const testimonials = [
  { initials:'LM', grad:'#e8552a,#f5a623', chips:['📧 41% open rate','↑ 2× revenue'], quote:'SignalForge set up our entire Constant Contact automation in a single week. Our open rates jumped from 18% to 41% and we\'ve never looked back. Truly a game changer for our salon franchise.', name:'Laura Mitchell', role:'Owner, Luxe Salon Group · Boston, MA' },
  { initials:'RK', grad:'#f5a623,#e07b3a', chips:['🎟️ 2 events sold out','⚡ 48 hours'], quote:'The SMS campaign for our grand reopening sold out two events in under 48 hours. I had no idea text marketing was this powerful. The setup was seamless and the ROI was immediate.', name:'Ryan Kowalski', role:'Director of Events, Harvest Brewing Co.' },
  { initials:'AT', grad:'#c9460f,#e8552a', chips:['🌐 3× online inquiries','📈 60-day turnaround'], quote:'Our website was embarrassing before SignalForge rebuilt it. Now it actually generates leads, integrates with our email list, and looks the part. Our online inquiries tripled within two months.', name:'Amanda Torres', role:'Principal, Torres Realty Partners' },
  { initials:'MR', grad:'#e8552a,#c9460f', chips:['📣 5× social reach','🎯 22% CTR'], quote:'We were posting randomly on social and getting zero traction. SignalForge built us a real content strategy and within 60 days our reach went up fivefold.', name:'Marcus Reed', role:'CEO, Reed Fitness Studios' },
  { initials:'SL', grad:'#fbbf47,#e8552a', chips:['💌 $40K revenue','🔁 Fully automated'], quote:'The abandoned cart automation alone generated $40K in recovered revenue in our first quarter. SignalForge built the whole thing in three days. Worth every penny.', name:'Sofia Larsson', role:'Founder, Nordic Home Goods' },
  { initials:'JP', grad:'#f5a623,#c9460f', chips:['📍 4 locations','🏆 35% more bookings'], quote:'Managing marketing across four restaurant locations was chaos. SignalForge unified our email and SMS under one automation system and bookings increased 35% within 90 days.', name:'James Park', role:'Owner, Savor Restaurant Group' },
];

const cases = [
  { industry:'Retail & eCommerce', title:'Nordic Home Goods — Email Automation Overhaul', metrics:[{val:'340%',label:'increase in email-attributed revenue within 90 days'},{val:'$40K',label:'recovered revenue from abandoned cart automation in Q1'},{val:'4.2×',label:'ROI on total SignalForge engagement cost'}] },
  { industry:'Food & Beverage', title:'Harvest Brewing Co. — SMS Event Campaign', metrics:[{val:'2',label:'sold-out events within 48 hours of SMS campaign launch'},{val:'94%',label:'SMS open rate on the grand reopening campaign'},{val:'22%',label:'click-through rate, 4× above industry average'}] },
  { industry:'Real Estate', title:'Torres Realty — Website + Email Integration', metrics:[{val:'3×',label:'increase in qualified online inquiries within 60 days'},{val:'68%',label:'of new leads now captured via automated email nurture'},{val:'41%',label:'email open rate on new nurture sequence'}] },
];

const aggStats = [
  {n:'200',s:'+',l:'Campaigns Delivered'},
  {n:'3.4',s:'×',l:'Avg. ROI Multiplier'},
  {n:'98',s:'%',l:'Client Retention Rate'},
  {n:'48',s:'h',l:'Average Time to Launch'},
];

export default function Results() {
  return (
    <>
      <style>{`
        .testimonials-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .cases-grid        { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .agg-stats-grid    { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:900px) {
          .testimonials-grid { grid-template-columns:1fr 1fr; }
          .cases-grid        { grid-template-columns:1fr; }
          .agg-stats-grid    { grid-template-columns:1fr 1fr; }
        }
        @media(max-width:560px) {
          .testimonials-grid { grid-template-columns:1fr; }
          .agg-stats-grid    { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <div className="page-hero"><div className="container page-hero-inner">
        <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Results</span></div>
        <span className="section-label">Client Results</span>
        <h1>Real Businesses. <em>Real Growth.</em></h1>
        <p>From solo operators to multi-location franchises — here is what our clients have achieved with SignalForge marketing automation and campaign services.</p>
      </div></div>

      <section style={{padding:'56px 0 64px',background:'var(--cream)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:36}}>
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t=>(
              <div key={t.name} style={{background:'var(--white)',borderRadius:18,padding:'28px 24px',border:'1px solid rgba(0,0,0,0.06)'}}>
                <div style={{color:'var(--amber)',fontSize:'1rem',marginBottom:12,letterSpacing:2}}>★★★★★</div>
                <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:14}}>
                  {t.chips.map(c=><span key={c} style={{background:'rgba(232,85,42,0.08)',color:'var(--coral)',border:'1px solid rgba(232,85,42,0.18)',borderRadius:50,padding:'4px 10px',fontSize:'0.72rem',fontWeight:700,fontFamily:'Syne,sans-serif'}}>{c}</span>)}
                </div>
                <p style={{fontSize:'0.92rem',lineHeight:1.75,color:'var(--text)',marginBottom:20,fontStyle:'italic'}}>"{t.quote}"</p>
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <div style={{width:42,height:42,borderRadius:'50%',background:`linear-gradient(135deg,${t.grad})`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'0.85rem',color:'var(--white)',flexShrink:0}}>{t.initials}</div>
                  <div>
                    <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.88rem',fontWeight:700,color:'var(--text)'}}>{t.name}</div>
                    <div style={{fontSize:'0.75rem',color:'var(--warm-gray)'}}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'56px 0 64px',background:'var(--sand)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:36}}>
            <span className="section-label">Case Studies</span>
            <h2 className="section-title">Results by the Numbers</h2>
          </div>
          <div className="cases-grid">
            {cases.map(c=>(
              <div key={c.title} style={{background:'var(--white)',borderRadius:18,overflow:'hidden',border:'1px solid rgba(0,0,0,0.07)'}}>
                <div style={{padding:'24px 24px 16px',background:'linear-gradient(135deg,var(--sand),var(--sand-mid))'}}>
                  <div style={{fontSize:'0.72rem',fontFamily:'Syne,sans-serif',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--coral)',marginBottom:8}}>{c.industry}</div>
                  <div style={{fontFamily:'Syne,sans-serif',fontSize:'1rem',fontWeight:700,color:'var(--text)'}}>{c.title}</div>
                </div>
                <div style={{padding:'20px 24px 28px'}}>
                  {c.metrics.map(m=>(
                    <div key={m.label} style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
                      <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.5rem',fontWeight:800,color:'var(--coral)',minWidth:60}}>{m.val}</div>
                      <div style={{fontSize:'0.85rem',color:'var(--warm-gray)',lineHeight:1.4}}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{background:'var(--amber)',padding:'56px 0'}}>
        <div className="container">
          <div className="agg-stats-grid">
            {aggStats.map((s,i)=>(
              <div key={s.l} style={{textAlign:'center',padding:'20px 16px',borderRight:(i+1)%2!==0?'1px solid rgba(255,255,255,0.3)':undefined}}>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(2rem,4vw,2.8rem)',fontWeight:800,color:'var(--white)',lineHeight:1,marginBottom:6}}>{s.n}<span style={{color:'rgba(255,255,255,0.7)'}}>{s.s}</span></div>
                <div style={{fontSize:'0.85rem',color:'rgba(255,255,255,0.85)'}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBand heading="Ready to Write Your Success Story?" sub="Book a free strategy call and let's figure out exactly what results are possible for your business." primaryLabel="Book a Free Call" secondaryLabel="View Services" secondaryHref="/services" />
    </>
  );
}