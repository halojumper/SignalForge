import type { Metadata } from 'next';
import './globals.css';
import Topbar from '@/components/Topbar';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: { default: 'SignalForge | Marketing Automation & Digital Growth', template: '%s | SignalForge' },
  description: 'Full-service marketing automation, SMS, social media, ad creative, and website building. Authorized Constant Contact Partner based in Greater Boston, MA.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
