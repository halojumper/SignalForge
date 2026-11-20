import Link from "next/link";

export const metadata = {
  title: "Your Customers Can Tell When AI Wrote the Email | SignalForge",
  description:
    "Surveys this year show many customers notice AI-written marketing, and some say they've unsubscribed because of it. Here's how small businesses can use AI without losing trust.",
};

const headingStyle = {
  fontFamily: "var(--font-head, 'Syne', sans-serif)",
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "var(--text)",
  margin: "2.5rem 0 1rem",
} as const;

const paraStyle = { marginBottom: "1.25rem" } as const;

const linkStyle = { color: "var(--coral)", textDecoration: "underline" } as const;

const tips = [
  {
    num: "01",
    title: "Use AI behind the scenes",
    color: "var(--coral)",
    body: (
      <p style={{ margin: 0 }}>
        The safest, most useful jobs for AI are the ones your customers never see: sorting your list into segments, picking send times, testing subject lines, summarizing what customers keep asking about, and tidying a rough draft. These save real time and don&apos;t put an AI voice in front of anyone.
      </p>
    ),
  },
  {
    num: "02",
    title: "Start from your own words",
    color: "#3B82F6",
    body: (
      <p style={{ margin: 0 }}>
        Write the rough version yourself, even if it&apos;s messy bullet points of what you want to say and how you&apos;d say it. Then let AI tighten it. An email that starts from your thinking and your phrasing sounds like you. An email that starts from a blank prompt sounds like everyone who typed a similar prompt.
      </p>
    ),
  },
  {
    num: "03",
    title: "Add what AI can't know",
    color: "#10B981",
    body: (
      <p style={{ margin: 0 }}>
        Names, prices, local details, a real photo, something that happened in your shop this week. Specifics are what make an email read like it came from a person who runs a real business. If you could swap in any other company&apos;s name and the email would still work, it&apos;s too generic.
      </p>
    ),
  },
  {
    num: "04",
    title: "Let engagement set your schedule",
    color: "#8B5CF6",
    body: (
      <p style={{ margin: 0 }}>
        AI makes sending more cheap, which is exactly why it&apos;s tempting to do it. Watch your opens, clicks and unsubscribes when you increase frequency. If they fall, that&apos;s your answer. More email isn&apos;t better email, and a list that stops paying attention is worth less than a smaller list that does.
      </p>
    ),
  },
  {
    num: "05",
    title: "Read it out loud before you send",
    color: "#F59E0B",
    body: (
      <p style={{ margin: 0 }}>
        If you wouldn&apos;t say it to a customer standing at your counter, rewrite it. Stiff phrases, empty enthusiasm and sentences that sound important but say nothing tend to jump out when you hear them. It takes thirty seconds and catches most of what makes copy feel machine-made.
      </p>
    ),
  },
];

function TipList({ items }: { items: typeof tips }) {
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

export default function AITrustArticle() {
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
            AI &amp; Marketing
          </span>
          <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>November 2026</span>
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
          Your Customers Can Tell When AI Wrote the Email
        </h1>
        <p style={{ fontSize: "1.15rem", color: "var(--text-light)", lineHeight: 1.6, margin: 0 }}>
          What this year&apos;s surveys say about AI and trust, and how a small business can use AI without sounding like everyone else.
        </p>
      </header>

      {/* Hero Image: fixed landscape frame so tall photos get cropped, not stretched */}
      <div style={{ marginBottom: "2.5rem", borderRadius: 16, overflow: "hidden", aspectRatio: "16 / 9" }}>
        <img
          src="/images/ai-trust-cover.jpg"
          alt="Person reading an email on a laptop, representing customer trust in AI-written marketing"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Body */}
      <div style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
        <p style={paraStyle}>
          Almost every email platform now offers to write your marketing for you. It&apos;s fast, it&apos;s cheap, and the results are often perfectly fine. But a run of consumer surveys this year all point in the same direction: customers are noticing, and a meaningful share of them don&apos;t like it.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          That doesn&apos;t mean you should stop using AI. It means how you use it matters more than whether you do.
        </p>

        <h2 style={headingStyle}>What the Surveys Are Saying</h2>
        <p style={paraStyle}>
          In an Adobe Express survey of 1,007 US consumers, reported in April, 18% said they had unsubscribed from a marketing email because they suspected AI wrote it. Another 46% said they would be more likely to unsubscribe if an email was clearly AI-written. And 72% believed they had already received AI-generated emails.
        </p>
        <p style={paraStyle}>
          A Bynder survey of 2,000 consumers in the US and UK found something more interesting. When people read two unlabeled articles, one by ChatGPT and one by a professional copywriter, 56% of those with a preference picked the AI version as more engaging. But when content was labeled as AI-generated, 52% said they felt less engaged with it. People weren&apos;t reacting to the quality. They were reacting to the label.
        </p>
        <p style={paraStyle}>
          Optimizely surveyed 1,000 UK consumers in September. 62% said AI use has made them less confident in brand marketing content, and 72% said they&apos;re more likely to engage with content that feels human rather than automated. As Optimizely&apos;s SVP of Marketing put it, &quot;Consumers aren&apos;t looking for more marketing, they&apos;re after marketing that&apos;s worth their time.&quot;
        </p>
        <p style={{ marginBottom: "2rem" }}>
          A fair caution: these are self-reported surveys, several from companies that sell marketing software, and what people say they&apos;d do isn&apos;t always what they do. Treat the exact percentages as a rough guide. The direction, though, is consistent across all of them.
        </p>

        <h2 style={headingStyle}>The Problem Is Sameness, Not the Tool</h2>
        <p style={paraStyle}>
          Notice what the Bynder result implies: AI copy can read well. The trouble starts when every business uses the same tools in the same way and the inbox fills up with messages that sound alike. That&apos;s also where volume comes in. When writing an email costs nothing, it&apos;s easy to send more of them, and customers feel it.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          Small businesses actually have an advantage here. A large company runs everything through approval layers and brand guidelines that sand off personality. You can sound like a specific person who knows your customers, and that&apos;s exactly what these surveys say people want.
        </p>

        <h2 style={headingStyle}>What About the Spam Folder?</h2>
        <p style={paraStyle}>
          You&apos;ll often hear that AI-written emails get sent straight to spam. Be careful with that claim. One 2026 deliverability guide traced the most-repeated statistics back and found that many have no named study behind them, just blogs citing each other. The better-sourced research it reviewed found that mailbox providers judge your sender setup and how recipients behave, not who wrote the email.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          The real risk, according to that guide, is volume. When AI makes extra sends nearly free, relevance drops, people stop opening, and some start marking messages as spam. That behavior is what damages delivery. It&apos;s one source, so hold it loosely, but it points the same way as everything above: send fewer, better emails.
        </p>

        <h2 style={headingStyle}>How to Use AI Without Losing the Room</h2>
        <p style={{ marginBottom: "2rem" }}>
          Here&apos;s the approach we&apos;d suggest. None of it requires giving up the time savings.
        </p>
        <TipList items={tips} />

        <h2 style={headingStyle}>Should You Tell People You Used AI?</h2>
        <p style={paraStyle}>
          The surveys don&apos;t give a tidy answer. In the Adobe Express survey, 70% said they would trust a brand more if it disclosed that AI helped write its emails, yet 50% said their trust would drop if they found out AI was used at all. And in the Bynder test, labeling cut engagement.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          We wouldn&apos;t pretend those fit one rule. The safe reading is simple: never deny it, never try to hide it, and make the human parts obvious. Sign emails as a real person, send them from a real address, and make sure replies reach someone who actually answers.
        </p>

        <h2 style={headingStyle}>One Quick Test Before You Hit Send</h2>
        <p style={{ marginBottom: "2rem" }}>
          Ask three questions. Could any business in your category have sent this exact email? Is there at least one detail in it that only you would know? And is there a reason this email exists besides the fact that it&apos;s time to send something? If the answers are yes, no, and no, it&apos;s worth another pass.
        </p>

        <h2 style={headingStyle}>Where the Numbers Come From</h2>
        <p style={paraStyle}>
          We&apos;ve linked every source so you can read the details yourself.
        </p>
        <ul style={{ margin: "0 0 2rem", paddingLeft: "1.25rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            Adobe Express survey of 1,007 US consumers, as reported by{" "}
            <a href="https://www.contentgrip.com/ai-email-trust-crisis/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              ContentGrip
            </a>{" "}
            (April 2026)
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            Bynder survey of 2,000 US and UK consumers, as reported by{" "}
            <a href="https://martech.org/consumers-like-ai-content-until-they-know-its-ai/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              MarTech
            </a>{" "}
            (June 2026)
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            Optimizely survey of 1,000 UK consumers and 100 UK marketers, in its{" "}
            <a href="https://www.optimizely.com/company/press/ai-trustworthiness-uk/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              press release
            </a>{" "}
            (September 2026)
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            Email deliverability guide on AI-written email, from{" "}
            <a href="https://www.digitalapplied.com/blog/email-deliverability-ai-slop-era-2026-guide" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Digital Applied
            </a>{" "}
            (August 2026)
          </li>
        </ul>

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
            Want a second set of eyes on your email and automation?
          </h3>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            We can look at a few of your recent campaigns, point out where they sound generic, and help you decide which parts are worth automating and which are worth keeping personal.
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
