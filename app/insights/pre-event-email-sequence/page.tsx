import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Pre-Event Email Sequence That Fills Seats Every Time | SignalForge',
  description: 'A 5-email sequence template with timing, subject lines, and copy formulas that consistently drive registrations.',
};

export default function PreEventEmailSequence() {
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

      <div style={{background:'linear-gradient(135deg,#fdf6ee,#e8552a)',padding:'56px 0 48px'}}>
        <div className="container" style={{maxWidth:760}}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/insights">Insights</Link><span>›</span>
            <span>Pre-Event Email Sequence</span>
          </div>
          <div style={{marginTop:20}}>
            <span className="section-label">Event Marketing</span>
            <h1 style={{fontSize:'clamp(1.6rem,3.5vw,2.4rem)',fontWeight:800,color:'var(--white)',lineHeight:1.2,margin:'12px 0 16px'}}>
              The Pre-Event Email Sequence That Fills Seats Every Time
            </h1>
            <div style={{display:'flex',gap:20,alignItems:'center',flexWrap:'wrap'}}>
              <span style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.75)'}}>March 28, 2026</span>
              <span style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.75)'}}>9 min read</span>
              <span style={{fontSize:'0.82rem',fontWeight:700,color:'var(--white)'}}>The SignalForge Team</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{background:'var(--cream)',padding:'56px 0 72px'}}>
        <div className="container article-body" style={{maxWidth:760}}>

          <p>Most event organizers send one email to promote their event and wonder why seats are empty. The businesses that consistently sell out their events — whether it is a webinar, a workshop, a grand opening, or a live show — use a structured pre-event email sequence that builds anticipation, handles objections, and creates urgency at exactly the right moments.</p>

          <p>Here is the exact 5-email sequence we use for our clients, including timing, subject line formulas, and what each email needs to accomplish.</p>

          <h2>Email 1 — The Announcement (3 to 4 Weeks Before)</h2>
          <p>This is your first impression. The goal is to generate initial excitement and get early registrations from your most engaged subscribers.</p>
          <ul>
            <li><span>→</span>Subject line formula: "You are invited: [Event Name] on [Date]"</li>
            <li><span>→</span>Lead with the biggest benefit of attending</li>
            <li><span>→</span>Include date, time, location or link, and a clear registration CTA</li>
            <li><span>→</span>Keep it short — excitement, not information overload</li>
          </ul>
          <div className="article-tip">
            <p>Send this to your full list. Early registrations create social proof that makes later emails more convincing.</p>
          </div>

          <h2>Email 2 — The Value Email (2 Weeks Before)</h2>
          <p>Now that you have made the announcement, it is time to go deeper on why this event is worth attending. This email is for the people who opened your first email but did not register yet.</p>
          <ul>
            <li><span>→</span>Subject line formula: "Here is exactly what you will learn at [Event Name]"</li>
            <li><span>→</span>Break down the agenda or key takeaways in bullet points</li>
            <li><span>→</span>Introduce any speakers, guests, or special features</li>
            <li><span>→</span>Include a registration CTA with the current attendee count if possible</li>
          </ul>

          <h2>Email 3 — Social Proof (1 Week Before)</h2>
          <p>By now you have registrations coming in. Use them as social proof. This email targets non-registrants and uses the momentum of early sign-ups to create FOMO.</p>
          <ul>
            <li><span>→</span>Subject line formula: "[Number] people have already registered for [Event Name]"</li>
            <li><span>→</span>Share early registrant testimonials or excitement if available</li>
            <li><span>→</span>Mention any capacity limit if applicable</li>
            <li><span>→</span>Strong CTA with urgency — seats are filling up</li>
          </ul>
          <div className="article-tip">
            <p>Even if you do not have a capacity limit, creating perceived scarcity drives registrations. "We are keeping this intimate — limited to 50 attendees" works even for free events.</p>
          </div>

          <h2>Email 4 — Last Chance (2 Days Before)</h2>
          <p>This is your urgency email. The goal is simple: get every fence-sitter to register before it is too late. Keep it short, direct, and focused on a single CTA.</p>
          <ul>
            <li><span>→</span>Subject line formula: "Last chance to register for [Event Name] - [Day]"</li>
            <li><span>→</span>One paragraph, one CTA, no distractions</li>
            <li><span>→</span>Remind them of the date and time</li>
            <li><span>→</span>Mention what they will miss if they do not attend</li>
          </ul>

          <h2>Email 5 — Day-Of Reminder (Morning of the Event)</h2>
          <p>This email goes to everyone who registered. Its job is to reduce no-shows by making it as easy as possible to show up.</p>
          <ul>
            <li><span>→</span>Subject line formula: "See you today at [Time] - here is your link"</li>
            <li><span>→</span>Include the event link, address, or access instructions prominently</li>
            <li><span>→</span>Remind them what they are about to experience</li>
            <li><span>→</span>Build excitement one more time</li>
          </ul>

          <h2>The Sequence Works — Here Is Why</h2>
          <p>Each email in this sequence serves a different psychological purpose: awareness, desire, social proof, urgency, and ease of action. Together they move a cold subscriber from "I might check this out" to "I am definitely going" over the course of three to four weeks.</p>
          <p>At SignalForge we build and automate event email sequences for clients across New England and beyond. If you have an event coming up and want to fill every seat, we can have your sequence live within 48 hours.</p>

          <div style={{marginTop:40,paddingTop:32,borderTop:'1px solid rgba(0,0,0,0.08)',display:'flex',gap:16,flexWrap:'wrap'}}>
            <Link href="/services#event-marketing" className="btn btn-primary">See Our Event Marketing Services</Link>
            <Link href="/contact" className="btn btn-outline">Book a Free Call</Link>
          </div>

          <div style={{marginTop:48,paddingTop:32,borderTop:'1px solid rgba(0,0,0,0.08)'}}>
            <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.8rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--mid-gray)',marginBottom:16}}>More Articles</div>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              <Link href="/insights/automation-workflows" style={{fontSize:'0.92rem',color:'var(--coral)',fontWeight:600}}>The 5 Automation Workflows Every Small Business Should Have Running Today →</Link>
              <Link href="/insights/sms-vs-email" style={{fontSize:'0.92rem',color:'var(--coral)',fontWeight:600}}>Why SMS Outperforms Email for Flash Sales →</Link>
              <Link href="/insights/constant-contact-vs-klaviyo" style={{fontSize:'0.92rem',color:'var(--coral)',fontWeight:600}}>Constant Contact vs. Klaviyo: Which Is Right for Your Business? →</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
Paste, Ctrl+S, then GitHub Desktop — summary: Add pre-event email sequence article → Commit to main → Push origin.