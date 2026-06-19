import type { Metadata } from 'next';
import './globals.css';
import Topbar from '@/components/Topbar';
import ScrollToTop from '../components/ScrollToTop';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import Script from 'next/script';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: { default: 'SignalForge | Marketing Automation & Digital Growth', template: '%s | SignalForge' },
  description: 'Full-service marketing automation, SMS, social media, ad creative, and website building. Authorized Constant Contact Partner based in Greater Boston, MA.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-HV010K0XKE"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-HV010K0XKE');
  `}
</Script>
        <Nav />
        <ScrollToTop />
        <main>{children}</main>
        <Footer />
        <CookieBanner /><ChatWidget />
      </body>
    </html>
  );
}
