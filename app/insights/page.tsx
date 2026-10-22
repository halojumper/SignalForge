import Link from "next/link";

export const metadata = {
  title: "Don't Wait Until Black Friday to Talk to Your Customers: A Six-Week Holiday Plan | SignalForge",
  description:
    "Black Friday is November 27. Here's a week-by-week plan for small businesses to build an email and SMS list now, so the sale has someone to reach.",
};

const headingStyle = {
  fontFamily: "var(--font-head, 'Syne', sans-serif)",
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "var(--text)",
  margin: "2.5rem 0 1rem",
} as const;

const paraStyle = { marginBottom: "1.25rem" } as const;

const weeks = [
  {
    num: "01",
    label: "Oct 19 to 25",
    title: "Clean up and open the doors",
    color: "var(--coral)",
    body: (
      <p style={{ margin: 0 }}>
        Check that your signup form actually works, then put it where people will see it: your website, your checkout, your social profiles, and the counter if you have a physical location. Add a phone number field with a clear text-message consent checkbox so you can start building an SMS list alongside your email list. This is also a good week to remove addresses that keep bouncing, so your sends reach real people.
      </p>
    ),
  },
  {
    num: "02",
    label: "Oct 26 to Nov 1",
    title: "Give people a reason to join early",
    color: "#3B82F6",
    body: (
      <p style={{ margin: 0 }}>
        &quot;Subscribe for updates&quot; isn&apos;t much of a reason. &quot;Get first access to our Black Friday deals&quot; is. Put that offer on a popup or banner on your busiest pages and on a sign at the register. A short giveaway or contest can also pull in signups while telling you what your customers care about. Send every new subscriber a quick welcome message so the first thing they hear from you isn&apos;t a sales blast.
      </p>
    ),
  },
  {
    num: "03",
    label: "Nov 2 to 8",
    title: "Decide the offer and build everything now",
    color: "#10B981",
    body: (
      <p style={{ margin: 0 }}>
        Pick your offer and your real end date, then write and schedule the emails and texts before the busy week starts. You&apos;ll want a teaser, an early-access message, the sale announcement, a Small Business Saturday message, and a last-chance reminder. Doing this early means the sale weekend is about watching results, not writing copy under pressure.
      </p>
    ),
  },
  {
    num: "04",
    label: "Nov 9 to 15",
    title: "Tease what's coming",
    color: "#8B5CF6",
    body: (
      <p style={{ margin: 0 }}>
        Roughly two weeks before Black Friday is a common time for retailers to start referencing the sale in their emails. Send a first note with the dates and what&apos;s coming, and use it to invite people to get early access by joining your text list. You don&apos;t need to reveal the deal yet. You&apos;re telling people when to pay attention.
      </p>
    ),
  },
  {
    num: "05",
    label: "Nov 16 to 22",
    title: "Reward the people who signed up early",
    color: "#F59E0B",
    body: (
      <p style={{ margin: 0 }}>
        Send your early-access group their first look. This is the payoff for asking them to sign up weeks ago, and it&apos;s the group most likely to buy. If you have repeat customers, treat them as VIPs with the same early look. Keep one reminder in reserve for the final days.
      </p>
    ),
  },
  {
    num: "06",
    label: "Nov 23 to 30",
    title: "Run it, then stop talking",
    color: "#EF4444",
    body: (
      <p style={{ margin: 0 }}>
        Thanksgiving is November 26, Black Friday is the 27th, Small Business Saturday is the 28th, and Cyber Monday is the 30th. Send the announcement email the morning the sale opens, and a short text when it goes live. Then resist the urge to message every day. A few well-timed messages across the weekend beat a flood that gets you unsubscribed.
      </p>
    ),
  },
];

function WeekList({ items }: { items: typeof weeks }) {
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
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-light)",
                marginBottom: "0.35rem",
              }}
            >
              {item.label}
            </div>
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

export default function HolidayCountdownArticle() {
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
            Holiday Marketing
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
          Don&apos;t Wait Until Black Friday to Talk to Your Customers
        </h1>
        <p style={{ fontSize: "1.15rem", color: "var(--text-light)", lineHeight: 1.6, margin: 0 }}>
          A six-week plan for small businesses that want the holiday rush to run through a list they already own.
        </p>
      </header>

      {/* Hero Image: fixed landscape frame so tall photos get cropped, not stretched */}
      <div style={{ marginBottom: "2.5rem", borderRadius: 16, overflow: "hidden", aspectRatio: "16 / 9" }}>
        <img
          src="/images/holiday-countdown-cover.jpg"
          alt="Gift boxes and a phone on a table, representing holiday marketing for small businesses"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Body */}
      <div style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
        <p style={paraStyle}>
          Black Friday is November 27, and Small Business Saturday is the day after. That&apos;s about five weeks from now. For a lot of small businesses, the plan is simple: write one sale email, send it that morning, and see what happens.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          The trouble with that plan is timing. Everyone else&apos;s sale email lands in the same inbox at the same moment. The businesses that tend to do better aren&apos;t necessarily offering bigger discounts. They started the conversation weeks earlier, so when the sale opens there&apos;s a list of people who already asked to hear about it.
        </p>

        <h2 style={headingStyle}>Why Starting on the Day Is the Hard Way</h2>
        <p style={paraStyle}>
          On Black Friday itself, your customer&apos;s inbox and phone are full. Your message competes with dozens of others, and a stranger who signed up that morning has no reason to pick yours out of the pile.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          Compare that with someone who joined your list three weeks ago because you offered them first access. They&apos;re expecting your message. They know who you are. That difference doesn&apos;t cost any money to create. It just takes starting early, and early is right now.
        </p>

        <h2 style={headingStyle}>Email and Text Do Different Jobs</h2>
        <p style={paraStyle}>
          Email is where you tell the full story: the offer, the details, what&apos;s included, when it ends. Text is for the short, time-sensitive nudge: &quot;doors are open,&quot; &quot;last day,&quot; &quot;back in stock.&quot; Sending the same message on both channels at the same time mostly just annoys people.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          It also helps to know that some customers simply prefer text. If you can split your list into people who respond better to email and people who respond better to text, each group gets the channel they actually pay attention to.
        </p>

        <h2 style={headingStyle}>The Six-Week Plan</h2>
        <p style={{ marginBottom: "2rem" }}>
          Here&apos;s the order we&apos;d tackle it in if you&apos;re starting this week. If you&apos;re reading this later in the month, don&apos;t skip the early steps. Compress them. Fewer days of list-building is still better than none.
        </p>
        <WeekList items={weeks} />

        <h2 style={headingStyle}>Small Business Saturday Deserves Its Own Message</h2>
        <p style={paraStyle}>
          Small Business Saturday is November 28, and it&apos;s a different moment from Black Friday. Shoppers that day are thinking about supporting local businesses, not hunting for the lowest price online. Resending your Black Friday email doesn&apos;t fit.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          If you have a storefront or serve a local area, give that day a local offer: in-store pickup, a same-day delivery option, a small thank-you gift with purchase, or an event. Send it only to the people near you, and keep the tone warmer than your sale announcement.
        </p>

        <h2 style={headingStyle}>Text Message Ground Rules</h2>
        <p style={paraStyle}>
          Texting works well because people read texts, which is also why the rules matter. In the United States, marketing texts are covered by the Telephone Consumer Protection Act, known as the TCPA. In plain terms, it generally requires that you have a person&apos;s clear, written permission before you send them marketing texts, and that the permission is easy to prove if anyone ever asks.
        </p>
        <p style={paraStyle}>
          In practice, that means a few habits. Use plain language at signup that says what they&apos;re agreeing to receive and roughly how often. Don&apos;t pre-check the consent box, and don&apos;t bury it in fine print. Keep a record of when and how each person opted in. Make it easy to opt out, and honor it right away when someone replies STOP. Send during reasonable daytime hours in the recipient&apos;s time zone, and keep your frequency low.
        </p>
        <p style={paraStyle}>
          This matters because TCPA violations are counted per message, so a single mistake on a big list can get expensive quickly. Some states also add their own rules on top of the federal law, and your email platform may have its own requirements too.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          Rules on this vary and can change, so it&apos;s worth having your platform or an attorney confirm that your signup language and sending practices are compliant. This isn&apos;t legal advice.
        </p>

        <h2 style={headingStyle}>Keep It Honest</h2>
        <p style={paraStyle}>
          A countdown only works if the deadline is real. If your &quot;last chance&quot; sale quietly runs another week, people notice, and they stop believing your next one. Pick an end date and stick to it. And you don&apos;t have to discount everything. A strong offer on a few things people actually want usually works better than a small discount on all of it.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          After the weekend, don&apos;t go quiet. Send a thank-you to everyone who bought, follow up with the people who clicked but didn&apos;t, and give your new subscribers a proper welcome. Those people showed up during the loudest week of the year, and December is the best time to keep the conversation going.
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
            Want help getting your holiday plan set up?
          </h3>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            We can set up your signup forms, early-access list, and scheduled emails and texts so everything is ready before the busy week starts.
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
