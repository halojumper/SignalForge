import Link from "next/link";

export const metadata = {
  title: "Does ChatGPT Recommend Your Business? AI Search for Small Business | SignalForge",
  description:
    "AI answers are where more people start researching. Here's what a small business can realistically do about it without buying an enterprise tool.",
};

const headingStyle = {
  fontFamily: "var(--font-head, 'Syne', sans-serif)",
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "var(--text)",
  margin: "2.5rem 0 1rem",
} as const;

const paraStyle = { marginBottom: "1.25rem" } as const;

const steps = [
  {
    num: "01",
    title: "Ask the questions your customers ask",
    color: "var(--coral)",
    body: (
      <p style={{ margin: 0 }}>
        Open ChatGPT, Gemini and Perplexity, and run a regular Google search too. Type in the kind of thing a customer would actually type, like &quot;best [what you do] in [your town]&quot; or &quot;who should I call for [the problem you solve].&quot; Write down whether you show up, who does, and what the answer says about them. Use a private window so your own history doesn&apos;t skew it.
      </p>
    ),
  },
  {
    num: "02",
    title: "Check your analytics for AI visitors",
    color: "#3B82F6",
    body: (
      <p style={{ margin: 0 }}>
        In Google Analytics, look at referral traffic and filter for sources containing chatgpt, perplexity, gemini or copilot. Most businesses have never looked. The number will probably be small, and that&apos;s fine. What you&apos;re after is a baseline, so you can see whether it grows.
      </p>
    ),
  },
  {
    num: "03",
    title: "Compare what AI says to what's true",
    color: "#10B981",
    body: (
      <p style={{ margin: 0 }}>
        Wrong hours, an old address, a service you stopped offering, a competitor listed for something you do better. AI answers are built from what&apos;s published about you around the web, so errors in the answer usually point back to errors somewhere else, and those are fixable.
      </p>
    ),
  },
];

const fixes = [
  {
    num: "01",
    title: "Get the basics right, everywhere",
    color: "var(--coral)",
    body: (
      <p style={{ margin: 0 }}>
        A complete, actively maintained Google Business Profile is the single most useful local asset a small business has, and it feeds more than Google. Then make sure your name, address, phone number, hours and services match across your website, directories and social profiles. AI tools pull from many places, and conflicting details make you harder to recommend.
      </p>
    ),
  },
  {
    num: "02",
    title: "Collect real reviews",
    color: "#3B82F6",
    body: (
      <p style={{ margin: 0 }}>
        Reviews are how both people and machines decide whether you&apos;re worth naming. Ask happy customers right after the job is done, when it&apos;s fresh, with a direct link so it takes them thirty seconds. A short text or follow-up email works well for this.
      </p>
    ),
  },
  {
    num: "03",
    title: "Make your website answer questions plainly",
    color: "#10B981",
    body: (
      <p style={{ margin: 0 }}>
        AI summaries lift clear answers. If a customer might ask &quot;how much does this cost,&quot; &quot;how long does it take,&quot; or &quot;do you serve my area,&quot; a page that says so in plain sentences beats a page of vague headlines. Clean page structure, descriptive headings and a real FAQ help both Google and AI tools understand what you do.
      </p>
    ),
  },
  {
    num: "04",
    title: "Show up where AI looks",
    color: "#8B5CF6",
    body: (
      <p style={{ margin: 0 }}>
        AI answers don&apos;t only quote business websites. Sources like LinkedIn, YouTube and community sites such as Reddit get cited a lot. You don&apos;t need to be everywhere. Pick one or two places where your customers already are, and be genuinely useful there: answer questions, share what you know, and keep your profile current.
      </p>
    ),
  },
];

function CardList({ items }: { items: typeof steps }) {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.num}
          style={{
            display: "flex",
            gap: "1.5rem",
            background: "var(--cream)",
            border: "1px solid var(--warm-gray)",
            borderRadius: 12,
            padding: "1.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-head, 'Syne', sans-serif)",
              fontSize: "2rem",
              fontWeight: 800,
              color: item.color,
              opacity: 0.4,
              minWidth: "2.5rem",
              lineHeight: 1,
              paddingTop: "0.2rem",
            }}
          >
            {item.num}
          </div>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: "var(--font-head, 'Syne', sans-serif)",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--text)",
                margin: "0 0 0.75rem",
              }}
            >
              {item.title}
            </h3>
            {item.body}
          </div>
        </div>
      ))}
    </>
  );
}

export default function AISearchVisibilityArticle() {
  return (
    <article
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "3rem 1.5rem 6rem",
        color: "var(--text)",
        fontFamily: "var(--font-body, sans-serif)",
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--warm-gray)" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--coral)",
              background: "rgba(232,85,42,0.1)",
              padding: "0.25rem 0.75rem",
              borderRadius: 999,
            }}
          >
            AI &amp; Search
          </span>
          <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>October 2026</span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-head, 'Syne', sans-serif)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            color: "var(--text)",
            marginBottom: "1rem",
          }}
        >
          Does ChatGPT Recommend Your Business? What Small Businesses Can Actually Do About AI Search
        </h1>
        <p style={{ fontSize: "1.15rem", color: "var(--text-light)", lineHeight: 1.6, margin: 0 }}>
          More people are asking AI for recommendations before they ever visit a website. You don&apos;t need an enterprise tool to find out where you stand.
        </p>
      </header>

      {/* Hero Image: fixed landscape frame so tall photos get cropped, not stretched */}
      <div style={{ marginBottom: "2.5rem", borderRadius: 16, overflow: "hidden", aspectRatio: "16 / 9" }}>
        <img
          src="/images/ai-search-visibility-cover.jpg"
          alt="Person searching on a phone, representing customers finding local businesses through AI search"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Body */}
      <div style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
        <p style={paraStyle}>
          Picture someone who needs a caterer, an accountant or a landscaper. A few years ago they typed a search into Google and scrolled through ten blue links. Now a growing number of them ask a chatbot and get back a short list of names. You&apos;re either on that list or you aren&apos;t, and most small business owners have never checked which.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          This isn&apos;t a reason to panic or to buy new software. It&apos;s a reason to spend fifteen minutes finding out where you stand, then fix a few things you probably should have fixed anyway.
        </p>

        <h2 style={headingStyle}>What&apos;s Actually Changing</h2>
        <p style={paraStyle}>
          Google now puts an AI-written summary above the regular results on roughly one in five searches, and that share keeps growing. Separately, ChatGPT has hundreds of millions of weekly users, plus Perplexity and Gemini on top of that. Most recent counts also show that a majority of Google searches end without anyone clicking through to a website at all, because the answer is already on the page.
        </p>
        <p style={paraStyle}>
          Here&apos;s the honest part, though. Traffic that arrives from AI tools is still small, usually somewhere around one to two percent of visits to a typical site, and some months it dips instead of climbing. Some reports claim those visitors convert at several times the rate of regular search traffic. Treat that number with caution, because it&apos;s early and the figures vary a lot by source. What does seem consistent is that people who arrive from an AI recommendation tend to show up already leaning toward you.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          So the case for paying attention isn&apos;t the traffic you&apos;re getting today. It&apos;s that the first impression of your business is increasingly formed before anyone reaches your site.
        </p>

        <h2 style={headingStyle}>Ranking Well Isn&apos;t the Same as Being Mentioned</h2>
        <p style={paraStyle}>
          Plenty of businesses sit on page one of Google and still don&apos;t appear when someone asks an AI tool for a recommendation. In some studies, only a fraction of the pages ranking in Google&apos;s top ten showed up in AI answers for the same question. The two systems look at different signals.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          AI tools build their answers from a wide spread of sources: your website, but also your Google listing, review sites, directories, social profiles and community discussions. If those sources are thin, outdated or contradict each other, you&apos;re harder to recommend. That&apos;s good news for a small business, because most of it is housekeeping rather than technology.
        </p>

        <h2 style={headingStyle}>Check Where You Stand in Fifteen Minutes</h2>
        <p style={{ marginBottom: "2rem" }}>You don&apos;t need a paid tool for this. Three steps will tell you most of what you need to know.</p>
        <CardList items={steps} />

        <h2 style={headingStyle}>What Actually Helps</h2>
        <p style={{ marginBottom: "2rem" }}>
          Once you know what AI says about you, these are the fixes that tend to matter most. None of them require a big budget, and every one of them also helps you in regular Google search.
        </p>
        <CardList items={fixes} />

        <h2 style={headingStyle}>What You Can Skip</h2>
        <p style={paraStyle}>
          There&apos;s a whole new category of paid tools that track your AI visibility across a dozen platforms. Some are good, but most are built for enterprise teams, and for a small business they&apos;re usually more cost and complexity than the job needs. The free check above gets you most of the way.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          And don&apos;t abandon regular search to chase this. Google is still where most of your discovery happens, and almost everything that helps with AI visibility helps there too. Treat AI search as a new place your basics get tested, not a separate project.
        </p>

        {/* CTA */}
        <div
          style={{
            background: "var(--coral)",
            color: "var(--white)",
            borderRadius: 16,
            padding: "2.5rem",
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-head, 'Syne', sans-serif)",
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "var(--white)",
              marginBottom: "0.75rem",
            }}
          >
            Not sure how your business shows up?
          </h3>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            We can look at your website, listings and analytics together and tell you what&apos;s worth fixing first. No pitch deck, just a straight answer.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "0.85rem 2rem",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              background: "var(--white)",
              color: "var(--coral)",
            }}
          >
            Book a free 30-minute strategy call
          </Link>
        </div>
      </div>
    </article>
  );
}