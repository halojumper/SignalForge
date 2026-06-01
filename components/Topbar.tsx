import Link from 'next/link';

export default function Topbar() {
  return (
    <div className="topbar">
      🎯 <strong>New:</strong> Constant Contact Reseller Programs — Enterprise-grade automation at small-business prices.
      <Link href="/constant-contact" target="_blank" rel="noopener noreferrer">Learn more →</Link>
    </div>
  );
}
