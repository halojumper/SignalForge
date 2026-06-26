import Link from "next/link";

export const metadata = {
  title: "The Small Business Marketing Stack: What You Actually Need (And What You Can Skip) | SignalForge",
  description:
    "A plain-English guide to the 5 tools every small business needs to run an effective marketing function — what they do, what they cost, and what you can skip.",
};

export default function SmallBusinessMarketingStack() {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "3rem 1.5rem 6rem", color: "var(--text)", fontFamily: "var(--font-body, sans-serif)" }}>

      {/* Header */}
      <header style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--warm-gray)" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--coral)", background: "rgba(232,85,42,0.1)", padding: "0.25rem 0.75rem", borderRadius: 999 }}>
            Marketing Strategy
          </span>
          <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>June 2026</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-head, 'Syne', sans-serif)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, color: "var(--text)", marginBottom: "1rem" }}>
          The Small Business Marketing Stack: What You Actually Need (And What You Can Skip)
        </h1>
        <p style={{ fontSize: "1.15rem", color: "var(--text-light)", lineHeight: 1.6, margin: 0 }}>
          You don't need a marketing department — or 12 platforms. Here's the short list that actually moves the needle.
        </p>
      </header>

      {/* Hero Image */}
      <div style={{ marginBottom: "2.5rem", borderRadius: 16, overflow: "hidden" }}>
        <img
          src="/images/marketing-stack-cover.png"
          alt="The Small Business Marketing Stack"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* Body */}
      <div style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>

        <p style={{ marginBottom: "1.25rem" }}>Most small business owners we talk to are doing their marketing in one of two ways.</p>
        <p style={{ marginBottom: "1.25rem" }}>Either they're doing everything manually — posting when they remember, sending one-off emails, hoping word of mouth carries them — or they've signed up for too many tools, none of which are actually connected, and the whole thing feels like more work than it's worth.</p>
        <p style={{ marginBottom: "1.25rem" }}>Sound familiar? You're not alone.</p>
        <p style={{ marginBottom: "1.25rem" }}>Here's the good news: an effective marketing setup for a small business doesn't need to be complicated or expensive. You don't need 12 platforms. You don't need a full-time marketing person. You need a small stack of tools that work well together — and a basic system for using them consistently.</p>
        <p style={{ marginBottom: "2rem" }}>This guide breaks down exactly what that looks like and how to get started.</p>

        {/* Section 1 */}
        <h2 style={{ fontFamily: "var(--font-head, 'Syne', sans-serif)", fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", margin: "2.5rem 0 1rem" }}>
          Start Here: What Does "Effective Marketing" Actually Mean?
        </h2>
        <p style={{ marginBottom: "1rem" }}>Before we talk tools, let's get clear on what you're trying to accomplish. For most small businesses, effective marketing comes down to three things:</p>
        <ul style={{ margin: "0 0 1.5rem 1.25rem", padding: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>Getting found by people who don't know you yet <strong>(awareness)</strong></li>
          <li style={{ marginBottom: "0.5rem" }}>Staying top of mind with people who do know you <strong>(engagement)</strong></li>
          <li style={{ marginBottom: "0.5rem" }}>Turning interested people into paying customers <strong>(conversion)</strong></li>
        </ul>
        <p style={{ marginBottom: "2rem" }}>Every tool in your stack should serve at least one of those three goals. If it doesn't, you probably don't need it.</p>

        {/* Section 2 */}
        <h2 style={{ fontFamily: "var(--font-head, 'Syne', sans-serif)", fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", margin: "2.5rem 0 1.5rem" }}>
          The Core Stack: 5 Tools That Cover Everything
        </h2>

        {[
          {
            num: "01",
            title: "Email Marketing Platform",
            color: "var(--coral)",
            content: (
              <>
                <p style={{ marginBottom: "1rem" }}>If you're only going to invest in one marketing tool, make it this one. Email is still the highest-ROI marketing channel available — research consistently shows $36 to $42 returned for every $1 spent when done well.</p>
                <p style={{ marginBottom: "1rem" }}><strong>What it does:</strong> Lets you build a list of customers and prospects, send regular updates, promotions, and newsletters, and automate follow-up sequences so you're not doing everything manually.</p>
                <p style={{ marginBottom: "1rem" }}><strong>What to look for:</strong> Easy drag-and-drop email builder, basic automation (welcome sequences, follow-ups), list management, and reporting on opens and clicks. Bonus if it also handles SMS and social posting so you're managing fewer tools overall.</p>
                <div style={{ background: "rgba(232,85,42,0.08)", borderLeft: "3px solid var(--coral)", borderRadius: "0 8px 8px 0", padding: "1rem 1.25rem", margin: "1rem 0" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--coral)" }}>What we use at SignalForge</span>
                  <p style={{ margin: "0.5rem 0 0", fontSize: "0.97rem" }}>Constant Contact. It's what we run our own campaigns on and what we set up for our clients. It handles email, SMS, and social posting from one dashboard, which keeps things simple.</p>
                </div>
                <p style={{ marginBottom: "0" }}><strong>Other options:</strong> Mailchimp (free up to 500 contacts, good for getting started), Klaviyo (excellent for ecommerce), Brevo (strong automation at a lower price point).</p>
              </>
            ),
          },
          {
            num: "02",
            title: "Social Media Scheduling Tool",
            color: "#3B82F6",
            content: (
              <>
                <p style={{ marginBottom: "1rem" }}>Posting consistently on social media is one of the biggest challenges small businesses face — not because the content is hard, but because life gets in the way. A scheduling tool lets you batch your content in one sitting and have it go out automatically throughout the week.</p>
                <p style={{ marginBottom: "1rem" }}><strong>What it does:</strong> Lets you write and schedule posts across Facebook, Instagram, LinkedIn, and other platforms from one place, often with a content calendar view so you can see what's going out when.</p>
                <p style={{ marginBottom: "1rem" }}><strong>Quick note on Constant Contact:</strong> If you're already using it for email, social scheduling for Facebook, Instagram, and LinkedIn is built in. For most small businesses that's all you need — and it keeps your tool count down.</p>
                <p style={{ marginBottom: "0" }}><strong>If you need more:</strong> Buffer is our go-to recommendation for dedicated social scheduling. It's clean, simple, and connects to all the major platforms.</p>
              </>
            ),
          },
          {
            num: "03",
            title: "A Simple CRM",
            color: "#10B981",
            content: (
              <>
                <p style={{ marginBottom: "1rem" }}>You don't need Salesforce. You don't need anything that requires a week of training to set up. But you do need somewhere to keep track of your leads, customers, and follow-ups — because if that's all living in your head or scattered across your inbox, you're losing business without knowing it.</p>
                <p style={{ marginBottom: "1rem" }}><strong>What it does:</strong> Keeps a running record of every contact you're working with, where they are in the buying process, and what your next action is. The simple act of having this written down somewhere you actually check will close more deals.</p>
                <p style={{ marginBottom: "0" }}><strong>Good options to consider:</strong> HubSpot CRM (genuinely free for the basics, no time limit), Zoho CRM (free up to 3 users), or Pipedrive (very clean and sales-focused).</p>
              </>
            ),
          },
          {
            num: "04",
            title: "A Landing Page or Lead Capture Tool",
            color: "#F59E0B",
            content: (
              <>
                <p style={{ marginBottom: "1rem" }}>Most small business websites are not set up to convert visitors into contacts — there's no clear offer, no easy way to sign up, no reason to leave an email address. A landing page tool fixes this.</p>
                <p style={{ marginBottom: "1rem" }}><strong>What it does:</strong> Creates a focused single page with one clear call to action — a free consultation, a discount, an event registration — connected directly to your email list so new signups go straight into your marketing.</p>
                <p style={{ marginBottom: "0" }}><strong>What works well:</strong> Constant Contact includes landing pages. If you need something more flexible, Carrd is excellent for simple, clean pages.</p>
              </>
            ),
          },
          {
            num: "05",
            title: "Analytics: Know What's Actually Working",
            color: "#8B5CF6",
            content: (
              <>
                <p style={{ marginBottom: "1rem" }}>You don't need to become a data analyst. But you do need to look at your numbers once a week — even for 10 minutes — so you're making decisions based on what's actually working rather than what feels right.</p>
                <p style={{ marginBottom: "0" }}><strong>What to use:</strong> Google Analytics 4 is free and connects to your website in about 10 minutes. Your email platform shows open rates, click rates, and unsubscribes after every send. Your social tool shows engagement by post. Between those three you have everything you need.</p>
              </>
            ),
          },
        ].map((tool) => (
          <div key={tool.num} style={{ display: "flex", gap: "1.5rem", background: "var(--cream)", border: "1px solid var(--warm-gray)", borderRadius: 12, padding: "1.75rem", marginBottom: "1.5rem" }}>
            <div style={{ fontFamily: "var(--font-head, 'Syne', sans-serif)", fontSize: "2rem", fontWeight: 800, color: tool.color, opacity: 0.4, minWidth: "2.5rem", lineHeight: 1, paddingTop: "0.2rem" }}>{tool.num}</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: "var(--font-head, 'Syne', sans-serif)", fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", margin: "0 0 0.75rem" }}>{tool.title}</h3>
              {tool.content}
            </div>
          </div>
        ))}

        {/* Cost Table */}
        <h2 style={{ fontFamily: "var(--font-head, 'Syne', sans-serif)", fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", margin: "2.5rem 0 1rem" }}>
          Putting It All Together: What This Actually Costs
        </h2>
        <p style={{ marginBottom: "1.25rem" }}>These are the vendors' own published prices — what you'd pay going directly to each tool. No markups, no surprises.</p>
        <div style={{ border: "1px solid var(--warm-gray)", borderRadius: 12, overflow: "hidden", margin: "1.5rem 0" }}>
          {[
            ["Constant Contact (email + SMS + social)", "$12–35/month"],
            ["Buffer for additional social channels (optional)", "$12–18/month"],
            ["HubSpot CRM (free tier)", "$0/month"],
            ["Landing pages (Constant Contact or Carrd)", "$0–2/month"],
            ["Google Analytics", "$0/month"],
          ].map(([label, cost], i, arr) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.85rem 1.25rem", fontSize: "0.97rem", borderBottom: i < arr.length - 1 ? "1px solid var(--warm-gray)" : "none", gap: "1rem" }}>
              <span>{label}</span>
              <span style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{cost}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.85rem 1.25rem", fontSize: "1rem", background: "var(--cream)", fontWeight: 800, borderTop: "2px solid var(--warm-gray)" }}>
            <span>Total</span>
            <span>~$25–55/month</span>
          </div>
        </div>
        <p style={{ marginBottom: "2rem" }}>That's less than a single boosted Facebook post — and it runs your entire marketing operation.</p>

        {/* Skip Section */}
        <h2 style={{ fontFamily: "var(--font-head, 'Syne', sans-serif)", fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", margin: "2.5rem 0 1rem" }}>
          What You Can Skip (For Now)
        </h2>
        <p style={{ marginBottom: "1rem" }}>A few things small businesses often feel pressure to invest in early that can wait:</p>
        <ul style={{ margin: "0 0 1.5rem 1.25rem", padding: 0 }}>
          <li style={{ marginBottom: "0.75rem" }}><strong>Expensive all-in-one platforms</strong> like HubSpot paid tiers or Pardot — built for companies with dedicated marketing teams, overkill at this stage.</li>
          <li style={{ marginBottom: "0.75rem" }}><strong>SEO tools</strong> — useful eventually, but get your email list and social presence working first.</li>
          <li style={{ marginBottom: "0.75rem" }}><strong>A new website</strong> — if your current site is functional and loads on mobile, that's enough to start.</li>
          <li style={{ marginBottom: "0.75rem" }}><strong>Professional video production</strong> — short authentic videos shot on your phone outperform polished productions on social media right now. Don't let "I don't have a real camera" stop you.</li>
        </ul>

        {/* Honest Truth */}
        <h2 style={{ fontFamily: "var(--font-head, 'Syne', sans-serif)", fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", margin: "2.5rem 0 1rem" }}>
          The Honest Truth About Marketing Tools
        </h2>
        <p style={{ marginBottom: "1.25rem" }}>The best stack in the world doesn't do anything sitting idle. The businesses that see results are the ones that use these tools consistently — sending emails on a regular schedule, posting to social two or three times a week, following up with leads in their CRM.</p>
        <p style={{ marginBottom: "2rem" }}>The tools make it easier to be consistent. But they don't replace the habit of showing up.</p>

        {/* CTA */}
        <div style={{ background: "var(--coral)", color: "var(--white)", borderRadius: 16, padding: "2.5rem", marginTop: "3rem", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-head, 'Syne', sans-serif)", fontSize: "1.4rem", fontWeight: 800, color: "var(--white)", marginBottom: "0.75rem" }}>Not sure where to start?</h3>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            If you'd like help setting this up properly the first time — practical, affordable, and built around tools you'll actually use — that's exactly what we do at SignalForge.
          </p>
          <Link href="/contact" style={{ display: "inline-block", padding: "0.85rem 2rem", borderRadius: 999, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", background: "var(--white)", color: "var(--coral)" }}>
            Book a free 30-minute strategy call
          </Link>
        </div>

      </div>
    </article>
  );
}
