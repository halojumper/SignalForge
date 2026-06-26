import Link from "next/link";

export const metadata = {
  title: "The Small Business Marketing Stack: What You Actually Need (And What You Can Skip) | SignalForge",
  description:
    "A plain-English guide to the 5 tools every small business needs to run an effective marketing function — what they do, what they cost, and what you can skip.",
};

export default function SmallBusinessMarketingStack() {
  return (
    <article className="sf-article">
      {/* ── Hero ── */}
      <header className="sf-article-header">
        <div className="sf-article-meta">
          <span className="sf-article-category">Marketing Strategy</span>
          <span className="sf-article-date">June 2026</span>
        </div>
        <h1 className="sf-article-title">
          The Small Business Marketing Stack: What You Actually Need (And What
          You Can Skip)
        </h1>
        <p className="sf-article-subtitle">
          You don't need a marketing department — or 12 platforms. Here's the
          short list that actually moves the needle.
        </p>
      </header>

      {/* ── Body ── */}
      <div className="sf-article-body">

        <p>
          Most small business owners we talk to are doing their marketing in one
          of two ways.
        </p>
        <p>
          Either they're doing everything manually — posting when they remember,
          sending one-off emails, hoping word of mouth carries them — or they've
          signed up for too many tools, none of which are actually connected, and
          the whole thing feels like more work than it's worth.
        </p>
        <p>
          Sound familiar? You're not alone.
        </p>
        <p>
          Here's the good news: an effective marketing setup for a small business
          doesn't need to be complicated or expensive. You don't need 12
          platforms. You don't need a full-time marketing person. You need a
          small stack of tools that work well together — and a basic system for
          using them consistently.
        </p>
        <p>
          This guide breaks down exactly what that looks like, what it costs, and
          how to get started.
        </p>

        {/* ── Section 1 ── */}
        <h2>Start Here: What Does "Effective Marketing" Actually Mean?</h2>
        <p>
          Before we talk tools, let's get clear on what you're trying to
          accomplish. For most small businesses, effective marketing comes down
          to three things:
        </p>
        <ul>
          <li>
            Getting found by people who don't know you yet{" "}
            <strong>(awareness)</strong>
          </li>
          <li>
            Staying top of mind with people who do know you{" "}
            <strong>(engagement)</strong>
          </li>
          <li>
            Turning interested people into paying customers{" "}
            <strong>(conversion)</strong>
          </li>
        </ul>
        <p>
          Every tool in your stack should serve at least one of those three
          goals. If it doesn't, you probably don't need it.
        </p>

        {/* ── Section 2 ── */}
        <h2>The Core Stack: 5 Tools That Cover Everything</h2>

        {/* Tool 1 */}
        <div className="sf-tool-card">
          <div className="sf-tool-number">01</div>
          <div className="sf-tool-content">
            <h3>Email Marketing Platform</h3>
            <p>
              If you're only going to invest in one marketing tool, make it this
              one. Email is still the highest-ROI marketing channel available —
              research consistently shows $36 to $42 returned for every $1 spent
              when done well.
            </p>
            <p>
              <strong>What it does:</strong> Lets you build a list of customers
              and prospects, send regular updates, promotions, and newsletters,
              and automate follow-up sequences so you're not doing everything
              manually.
            </p>
            <p>
              <strong>What to look for:</strong> Easy drag-and-drop email
              builder, basic automation (welcome sequences, follow-ups), list
              management, and reporting on opens and clicks. Bonus if it also
              handles SMS and social posting so you're managing fewer tools
              overall.
            </p>
            <div className="sf-tool-recommendation">
              <span className="sf-tool-badge">What we use at SignalForge</span>
              <p>
                Constant Contact. It's what we run our own campaigns on and what
                we set up for our clients. It handles email, SMS, and social
                posting from one dashboard, which keeps things simple. Plans
                start around $12–35/month depending on your list size.
              </p>
            </div>
            <p>
              <strong>Other options:</strong> Mailchimp (free up to 500
              contacts, good for getting started), Klaviyo (excellent for
              ecommerce), Brevo (strong automation at a lower price point).
            </p>
            <div className="sf-tool-budget">
              <span>💰 Budget: $12–45/month</span>
            </div>
          </div>
        </div>

        {/* Tool 2 */}
        <div className="sf-tool-card">
          <div className="sf-tool-number">02</div>
          <div className="sf-tool-content">
            <h3>Social Media Scheduling Tool</h3>
            <p>
              Posting consistently on social media is one of the biggest
              challenges small businesses face — not because the content is hard,
              but because life gets in the way. A scheduling tool lets you batch
              your content in one sitting and have it go out automatically
              throughout the week.
            </p>
            <p>
              <strong>What it does:</strong> Lets you write and schedule posts
              across Facebook, Instagram, LinkedIn, and other platforms from one
              place, often with a content calendar view so you can see what's
              going out when.
            </p>
            <p>
              <strong>Quick note on Constant Contact:</strong> If you're already
              using it for email, social scheduling for Facebook, Instagram, and
              LinkedIn is built in. For most small businesses that's all you
              need — and it keeps your tool count down.
            </p>
            <p>
              <strong>If you need more:</strong> Buffer is our go-to
              recommendation for dedicated social scheduling. It's clean, simple,
              and starts at $6/month per social channel.
            </p>
            <div className="sf-tool-budget">
              <span>💰 Budget: $0 (included in Constant Contact) to $18/month</span>
            </div>
          </div>
        </div>

        {/* Tool 3 */}
        <div className="sf-tool-card">
          <div className="sf-tool-number">03</div>
          <div className="sf-tool-content">
            <h3>A Simple CRM</h3>
            <p>
              You don't need Salesforce. You don't need anything that requires a
              week of training to set up. But you do need somewhere to keep track
              of your leads, customers, and follow-ups — because if that's all
              living in your head or scattered across your inbox, you're losing
              business without knowing it.
            </p>
            <p>
              <strong>What it does:</strong> Keeps a running record of every
              contact you're working with, where they are in the buying process,
              and what your next action is. The simple act of having this written
              down somewhere you actually check will close more deals.
            </p>
            <p>
              <strong>Good options at this budget:</strong> HubSpot CRM
              (genuinely free for the basics, no time limit), Zoho CRM (free up
              to 3 users), or Pipedrive ($14/month, very clean and
              sales-focused).
            </p>
            <div className="sf-tool-budget">
              <span>💰 Budget: $0–20/month</span>
            </div>
          </div>
        </div>

        {/* Tool 4 */}
        <div className="sf-tool-card">
          <div className="sf-tool-number">04</div>
          <div className="sf-tool-content">
            <h3>A Landing Page or Lead Capture Tool</h3>
            <p>
              Most small business websites are not set up to convert visitors
              into contacts — there's no clear offer, no easy way to sign up, no
              reason to leave an email address. A landing page tool fixes this.
            </p>
            <p>
              <strong>What it does:</strong> Creates a focused single page with
              one clear call to action — a free consultation, a discount, an
              event registration — connected directly to your email list so new
              signups go straight into your marketing.
            </p>
            <p>
              <strong>What works well:</strong> Constant Contact includes landing
              pages. If you need something more flexible, Carrd ($19/year — not a
              typo) is excellent for simple pages.
            </p>
            <div className="sf-tool-budget">
              <span>💰 Budget: $0 (included in existing tools) to $19/year</span>
            </div>
          </div>
        </div>

        {/* Tool 5 */}
        <div className="sf-tool-card">
          <div className="sf-tool-number">05</div>
          <div className="sf-tool-content">
            <h3>Analytics: Know What's Actually Working</h3>
            <p>
              You don't need to become a data analyst. But you do need to look at
              your numbers once a week — even for 10 minutes — so you're making
              decisions based on what's actually working rather than what feels
              right.
            </p>
            <p>
              <strong>What to use:</strong> Google Analytics 4 is free and
              connects to your website in about 10 minutes. Your email platform
              shows open rates, click rates, and unsubscribes after every send.
              Your social tool shows engagement by post. Between those three you
              have everything you need.
            </p>
            <div className="sf-tool-budget">
              <span>💰 Budget: $0</span>
            </div>
          </div>
        </div>

        {/* ── Cost Summary ── */}
        <h2>Putting It All Together: What This Actually Costs</h2>
        <div className="sf-cost-table">
          <div className="sf-cost-row">
            <span>Constant Contact (email + SMS + social)</span>
            <span>$12–35/month</span>
          </div>
          <div className="sf-cost-row">
            <span>Buffer for additional social channels (optional)</span>
            <span>$12–18/month</span>
          </div>
          <div className="sf-cost-row">
            <span>HubSpot CRM (free tier)</span>
            <span>$0/month</span>
          </div>
          <div className="sf-cost-row">
            <span>Landing pages (Constant Contact or Carrd)</span>
            <span>$0–2/month</span>
          </div>
          <div className="sf-cost-row">
            <span>Google Analytics</span>
            <span>$0/month</span>
          </div>
          <div className="sf-cost-row sf-cost-total">
            <span>Total</span>
            <span>~$25–55/month</span>
          </div>
        </div>
        <p>
          That's less than a single boosted Facebook post — and it runs your
          entire marketing operation.
        </p>

        {/* ── Skip Section ── */}
        <h2>What You Can Skip (For Now)</h2>
        <p>
          A few things small businesses often feel pressure to invest in early
          that can wait:
        </p>
        <ul>
          <li>
            <strong>Expensive all-in-one platforms</strong> like HubSpot paid
            tiers or Pardot — built for companies with dedicated marketing teams,
            overkill at this stage.
          </li>
          <li>
            <strong>SEO tools</strong> — useful eventually, but get your email
            list and social presence working first.
          </li>
          <li>
            <strong>A new website</strong> — if your current site is functional
            and loads on mobile, that's enough to start.
          </li>
          <li>
            <strong>Professional video production</strong> — short authentic
            videos shot on your phone outperform polished productions on social
            media right now. Don't let "I don't have a real camera" stop you.
          </li>
        </ul>

        {/* ── Honest Truth ── */}
        <h2>The Honest Truth About Marketing Tools</h2>
        <p>
          The best stack in the world doesn't do anything sitting idle. The
          businesses that see results are the ones that use these tools
          consistently — sending emails on a regular schedule, posting to social
          two or three times a week, following up with leads in their CRM.
        </p>
        <p>
          The tools make it easier to be consistent. But they don't replace the
          habit of showing up.
        </p>

        {/* ── CTA ── */}
        <div className="sf-article-cta">
          <h3>Not sure where to start?</h3>
          <p>
            If you'd like help setting this up properly the first time —
            practical, affordable, and built around tools you'll actually use —
            that's exactly what we do at SignalForge.
          </p>
          <Link href="/contact" className="sf-btn sf-btn-primary">
            Book a free 30-minute strategy call
          </Link>
        </div>

      </div>

      {/* ── Styles ── */}
      <style jsx>{`
        .sf-article {
          max-width: 760px;
          margin: 0 auto;
          padding: 3rem 1.5rem 6rem;
          color: var(--text);
          font-family: var(--font-body, sans-serif);
        }

        /* Header */
        .sf-article-header {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--warm-gray);
        }
        .sf-article-meta {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1rem;
        }
        .sf-article-category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--coral);
          background: color-mix(in srgb, var(--coral) 12%, transparent);
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
        }
        .sf-article-date {
          font-size: 0.85rem;
          color: var(--text-light);
        }
        .sf-article-title {
          font-family: var(--font-head, "Syne", sans-serif);
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--text);
          margin-bottom: 1rem;
        }
        .sf-article-subtitle {
          font-size: 1.15rem;
          color: var(--text-light);
          line-height: 1.6;
          margin: 0;
        }

        /* Body */
        .sf-article-body p {
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.25rem;
          color: var(--text);
        }
        .sf-article-body h2 {
          font-family: var(--font-head, "Syne", sans-serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
          margin: 2.5rem 0 1rem;
        }
        .sf-article-body h3 {
          font-family: var(--font-head, "Syne", sans-serif);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 0.75rem;
        }
        .sf-article-body ul {
          margin: 0 0 1.25rem 1.25rem;
          padding: 0;
        }
        .sf-article-body ul li {
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 0.5rem;
          color: var(--text);
        }

        /* Tool Cards */
        .sf-tool-card {
          display: flex;
          gap: 1.5rem;
          background: var(--cream);
          border: 1px solid var(--warm-gray);
          border-radius: 12px;
          padding: 1.75rem;
          margin-bottom: 1.5rem;
        }
        .sf-tool-number {
          font-family: var(--font-head, "Syne", sans-serif);
          font-size: 2rem;
          font-weight: 800;
          color: var(--coral);
          opacity: 0.4;
          min-width: 2.5rem;
          line-height: 1;
          padding-top: 0.2rem;
        }
        .sf-tool-content {
          flex: 1;
        }
        .sf-tool-content p {
          margin-bottom: 0.9rem;
        }
        .sf-tool-recommendation {
          background: color-mix(in srgb, var(--coral) 8%, transparent);
          border-left: 3px solid var(--coral);
          border-radius: 0 8px 8px 0;
          padding: 1rem 1.25rem;
          margin: 1rem 0;
        }
        .sf-tool-recommendation p {
          margin: 0.5rem 0 0;
          font-size: 0.97rem;
        }
        .sf-tool-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--coral);
        }
        .sf-tool-budget {
          margin-top: 1rem;
          padding: 0.5rem 0.9rem;
          background: var(--sand);
          border-radius: 8px;
          display: inline-block;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text);
        }

        /* Cost Table */
        .sf-cost-table {
          border: 1px solid var(--warm-gray);
          border-radius: 12px;
          overflow: hidden;
          margin: 1.5rem 0;
        }
        .sf-cost-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.85rem 1.25rem;
          font-size: 0.97rem;
          border-bottom: 1px solid var(--warm-gray);
          gap: 1rem;
        }
        .sf-cost-row:last-child {
          border-bottom: none;
        }
        .sf-cost-row span:last-child {
          font-weight: 600;
          white-space: nowrap;
          color: var(--text);
        }
        .sf-cost-total {
          background: var(--cream);
          font-weight: 700;
        }
        .sf-cost-total span {
          font-weight: 800 !important;
          font-size: 1rem;
        }

        /* CTA block */
        .sf-article-cta {
          background: var(--coral);
          color: var(--white);
          border-radius: 16px;
          padding: 2.5rem;
          margin-top: 3rem;
          text-align: center;
        }
        .sf-article-cta h3 {
          font-family: var(--font-head, "Syne", sans-serif);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 0.75rem;
        }
        .sf-article-cta p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.88);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .sf-btn {
          display: inline-block;
          padding: 0.85rem 2rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .sf-btn:hover {
          opacity: 0.88;
        }
        .sf-btn-primary {
          background: var(--white);
          color: var(--coral);
        }

        /* Responsive */
        @media (max-width: 600px) {
          .sf-tool-card {
            flex-direction: column;
            gap: 0.5rem;
          }
          .sf-tool-number {
            font-size: 1.5rem;
          }
          .sf-cost-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
        }
      `}</style>
    </article>
  );
}
