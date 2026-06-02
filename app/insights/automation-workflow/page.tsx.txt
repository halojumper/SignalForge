import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The 5 Automation Workflows Every Small Business Should Have | SignalForge',
  description: 'From welcome sequences to abandoned cart recovery, these five triggered automations do the work so you don\'t have to.',
};

export default function AutomationWorkflows() {
  return (
    <>
      <style>{`
        .article-body p { font-size:0.97rem; line-height:1.85; color:var(--text); margin-bottom:20px; }
        .article-body h2 { font-family:Syne,sans-serif; font-size:1.3rem; font-weight:700; color:var(--text); margin:36px 0 14px; }
        .article-body ul { margin:0 0 20px 0; padding:0; list-style:none; }
        .article-body ul li { font-size:0.95rem; line-height:1.7; color:var(--text); padding:5px 0; display:flex; gap:10px; }
        .article-body ul li span { color:var(--coral); font-weight:700; flex-shrink:0; }
        .article-tip { background:rgba(232,85,42,0.06); border-left:3px solid var(--coral); border-radius:0 12px 12px 0; padding:16px 20px; margin:24px 0; }
        .article-tip p { margin:0 !important; font-size:0.92rem !important; }
      `}</style>

      <div style={{background:'linear-gradient(135deg,#fdf0e0,#f5a623)',padding:'56px 0 48px'}}>
        <div className="container" style={{maxWidth:760}}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/insights">Insights</Link><span>›</span>
            <span>Automation Workflows</span>
          </div>
          <div style={{marginTop:20}}>
            <span className="section-label">Email Marketing</span>
            <h1 style={{fontSize:'clamp(1.6rem,3.5vw,2.4rem)',fontWeight:800,color:'var(--text)',lineHeight:1.2,margin:'12px 0 16px'}}>
              The 5 Automation Workflows Every Small Business Should Have Running Today
            </h1>
            <div style={{display:'flex',gap:20,alignItems:'center',flexWrap:'wrap'}}>
              <span style={{fontSize:'0.82rem',color:'var(--warm-gray)'}}>May 18, 2026</span>
              <span style={{fontSize:'0.82rem',color:'var(--warm-gray)'}}>8 min read</span>
              <span style={{fontSize:'0.82rem',fontWeight:700,color:'var(--coral)'}}>The SignalForge Team</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{background:'var(--cream)',padding:'56px 0 72px'}}>
        <div className="container article-body" style={{maxWidth:760}}>

          <p>If you are still sending one-off email blasts and manually following up with every new lead, you are leaving serious money on the table. Marketing automation is not just for enterprise companies with massive budgets - it is one of the most accessible and high-return investments a small business can make today.</p>

          <p>The good news is you do not need to automate everything at once. Start with these five workflows and you will have a system that works around the clock, even when you are not.</p>

          <h2>1. The Welcome Sequence</h2>
          <p>The moment someone joins your email list is the moment they are most interested in you. A welcome sequence capitalizes on that attention with a series of 3 to 5 emails sent over the first two weeks.</p>
          <ul>
            <li><span>→</span>Email 1: Warm welcome and what to expect from you</li>
            <li><span>→</span>Email 2: Your story and why you do what you do</li>
            <li><span>→</span>Email 3: Your best content, offer, or product</li>
            <li><span>→</span>Email 4: Social proof - testimonials or case studies</li>
            <li><span>→</span>Email 5: A clear call to action to book, buy, or connect</li>
          </ul>
          <div className="article-tip">
            <p>Pro tip: Welcome emails generate 4x more opens and 5x more clicks than standard campaigns. Do not skip this one.</p>
          </div>

          <h2>2. The Abandoned Cart Recovery</h2>
          <p>For any business selling online, abandoned cart automation is the single highest ROI workflow you can build. On average, 70% of shoppers leave without buying. A well-timed series of reminder emails recovers a significant portion of that lost revenue.</p>
          <ul>
            <li><span>→</span>Email 1 (1 hour after): Friendly reminder with product image</li>
            <li><span>→</span>Email 2 (24 hours after): Address common objections</li>
            <li><span>→</span>Email 3 (72 hours after): Last chance with optional incentive</li>
          </ul>

          <h2>3. The Re-Engagement Campaign</h2>
          <p>Every list has subscribers who have gone quiet. A re-engagement workflow targets anyone who has not opened an email in 90 days with a short sequence designed to either win them back or clean them off your list - both outcomes improve your deliverability.</p>
          <div className="article-tip">
            <p>A clean, engaged list will always outperform a large, unresponsive one. Do not be afraid to remove people who never come back.</p>
          </div>

          <h2>4. The Post-Purchase Follow-Up</h2>
          <p>The sale is not the end of the relationship - it is the beginning. A post-purchase sequence builds loyalty, drives reviews, and sets up your next upsell or cross-sell opportunity.</p>
          <ul>
            <li><span>→</span>Email 1: Thank you and order confirmation</li>
            <li><span>→</span>Email 2 (3 days later): Tips for getting the most out of their purchase</li>
            <li><span>→</span>Email 3 (2 weeks later): Request for a review or testimonial</li>
            <li><span>→</span>Email 4 (30 days later): Related product or service recommendation</li>
          </ul>

          <h2>5. The Lead Nurture Drip</h2>
          <p>Not every lead is ready to buy on day one. A nurture drip keeps your business top of mind over weeks or months with educational content, case studies, and soft calls to action - so when they are ready, you are the first call they make.</p>
          <p>This workflow is especially powerful for service businesses with longer sales cycles like real estate, consulting, home services, and B2B.</p>

          <h2>Ready to Build Yours?</h2>
          <p>These five workflows cover the full customer lifecycle from first touch to loyal repeat buyer. You do not need to launch all five at once - pick the one that addresses your biggest gap right now and build from there.</p>
          <p>If you want help designing and deploying any of these workflows on Constant Contact, Klaviyo, or another platform, we are here for it.</p>

          <div style={{marginTop:40,paddingTop:32,borderTop:'1px solid rgba(0,0,0,0.08)',display:'flex',gap:16,flexWrap:'wrap'}}>
            <Link href="/services#marketing-automation" className="btn btn-primary">See Our Automation Services</Link>
            <Link href="/contact" className="btn btn-outline">Book a Free Call</Link>
          </div>

          <div style={{marginTop:48,paddingTop:32,borderTop:'1px solid rgba(0,0,0,0.08)'}}>
            <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.8rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--mid-gray)',marginBottom:16}}>More Articles</div>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              <Link href="/insights/sms-vs-email" style={{fontSize:'0.92rem',color:'var(--coral)',fontWeight:600}}>Why SMS Outperforms Email for Flash Sales →</Link>
              <Link href="/insights/meta-ads-creative" style={{fontSize:'0.92rem',color:'var(--coral)',fontWeight:600}}>Creative Formats Driving the Highest CTR on Meta Ads in 2026 →</Link>
              <Link href="/insights/social-content-calendar" style={{fontSize:'0.92rem',color:'var(--coral)',fontWeight:600}}>How to Build a 90-Day Social Content Calendar in One Afternoon →</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}