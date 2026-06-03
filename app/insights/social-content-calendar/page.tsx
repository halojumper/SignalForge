import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build a 90-Day Social Content Calendar in One Afternoon | SignalForge',
  description: 'A simple framework that takes the guesswork out of what to post and when.',
};

export default function SocialContentCalendar() {
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

      <div style={{background:'linear-gradient(135deg,#fde8d8,#e07b3a)',padding:'56px 0 48px'}}>
        <div className="container" style={{maxWidth:760}}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/insights">Insights</Link><span>›</span>
            <span>Social Content Calendar</span>
          </div>
          <div style={{marginTop:20}}>
            <span className="section-label">Social Media</span>
            <h1 style={{fontSize:'clamp(1.6rem,3.5vw,2.4rem)',fontWeight:800,color:'var(--white)',lineHeight:1.2,margin:'12px 0 16px'}}>
              How to Build a 90-Day Social Content Calendar in One Afternoon
            </h1>
            <div style={{display:'flex',gap:20,alignItems:'center',flexWrap:'wrap'}}>
              <span style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.75)'}}>April 10, 2026</span>
              <span style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.75)'}}>7 min read</span>
              <span style={{fontSize:'0.82rem',fontWeight:700,color:'var(--white)'}}>The SignalForge Team</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{background:'var(--cream)',padding:'56px 0 72px'}}>
        <div className="container article-body" style={{maxWidth:760}}>

          <p>Most small businesses post on social media reactively — when they have time, when they remember, or when someone on the team comes up with an idea. The result is inconsistent posting, inconsistent branding, and inconsistent results.</p>

          <p>A 90-day content calendar fixes all of that. And the good news is you do not need a marketing agency or a full-time social media manager to build one. You just need a clear framework and one focused afternoon.</p>

          <h2>Step 1 — Define Your Content Pillars</h2>
          <p>Content pillars are the 3 to 5 recurring themes your brand posts about consistently. They give your audience a reason to follow you and give your team a clear guide for what to create.</p>
          <ul>
            <li><span>→</span>Pillar 1: Educational content — tips, how-tos, and industry insights</li>
            <li><span>→</span>Pillar 2: Behind the scenes — your team, your process, your story</li>
            <li><span>→</span>Pillar 3: Social proof — testimonials, case studies, and results</li>
            <li><span>→</span>Pillar 4: Promotional — offers, announcements, and CTAs</li>
            <li><span>→</span>Pillar 5: Community — reposts, local events, and conversations</li>
          </ul>
          <div className="article-tip">
            <p>A good rule of thumb: 60 percent educational or entertaining, 20 percent behind the scenes, and 20 percent promotional. If every post is selling, people stop following.</p>
          </div>

          <h2>Step 2 — Set Your Posting Frequency</h2>
          <p>Consistency beats frequency every time. It is better to post 3 times per week reliably than 7 times one week and nothing for two weeks. Pick a frequency you can actually sustain and stick to it.</p>
          <ul>
            <li><span>→</span>Instagram: 3 to 5 times per week including Reels</li>
            <li><span>→</span>Facebook: 3 to 4 times per week</li>
            <li><span>→</span>LinkedIn: 2 to 3 times per week</li>
            <li><span>→</span>X: 3 to 5 times per week</li>
          </ul>

          <h2>Step 3 — Map Out Your 90 Days</h2>
          <p>Open a spreadsheet or a simple calendar tool. Block out any known dates first — holidays, promotions, product launches, local events. Then fill in your content pillars across the remaining days in a rotating pattern.</p>
          <div className="article-tip">
            <p>You do not need to write the actual posts yet. Just note the pillar and the topic for each day. The writing comes later and goes much faster when you already know what you are writing about.</p>
          </div>

          <h2>Step 4 — Batch Create Your Content</h2>
          <p>Once your calendar is mapped, set aside time to batch create content in blocks. Write all your educational posts in one session. Shoot all your behind-the-scenes photos in another. Batch creation is significantly more efficient than creating one post at a time.</p>
          <ul>
            <li><span>→</span>Write captions in batches of 10 to 15 at a time</li>
            <li><span>→</span>Design graphics in one session using templates</li>
            <li><span>→</span>Film multiple Reels or videos on the same day</li>
            <li><span>→</span>Schedule everything in advance using a scheduling tool</li>
          </ul>

          <h2>Step 5 — Schedule and Automate</h2>
          <p>Tools like Meta Business Suite, Later, or Buffer let you schedule posts weeks in advance. Once your content is batched and scheduled, your social media runs on autopilot for weeks at a time — freeing you to focus on running your business.</p>
          <p>At SignalForge we build and manage complete social content calendars for our clients, including content creation, scheduling, and monthly performance reporting. If you want the system without the work, we can help.</p>

          <div style={{marginTop:40,paddingTop:32,borderTop:'1px solid rgba(0,0,0,0.08)',display:'flex',gap:16,flexWrap:'wrap'}}>
            <Link href="/services#social-media" className="btn btn-primary">See Our Social Media Services</Link>
            <Link href="/contact" className="btn btn-outline">Book a Free Call</Link>
          </div>

          <div style={{marginTop:48,paddingTop:32,borderTop:'1px solid rgba(0,0,0,0.08)'}}>
            <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.8rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--mid-gray)',marginBottom:16}}>More Articles</div>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              <Link href="/insights/automation-workflows" style={{fontSize:'0.92rem',color:'var(--coral)',fontWeight:600}}>The 5 Automation Workflows Every Small Business Should Have Running Today →</Link>
              <Link href="/insights/sms-vs-email" style={{fontSize:'0.92rem',color:'var(--coral)',fontWeight:600}}>Why SMS Outperforms Email for Flash Sales →</Link>
              <Link href="/insights/pre-event-email-sequence" style={{fontSize:'0.92rem',color:'var(--coral)',fontWeight:600}}>The Pre-Event Email Sequence That Fills Seats Every Time →</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}