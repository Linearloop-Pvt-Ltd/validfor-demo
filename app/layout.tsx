import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Validfor Demo',
  description: 'Validfor Demo Site',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
  other: {
    googlebot: 'noindex, nofollow',
    bingbot: 'noindex, nofollow',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="robots"
          content="noindex, nofollow, noarchive, nosnippet, noimageindex"
        />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="bingbot" content="noindex, nofollow" />
        <script src="https://cdn.betterbugs.io/scripts/v0.0.37/logs-capture.js"></script>
        <script src="https://cdn.betterbugs.io/scripts/v0.0.37/recorder.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.__BetterbugsRecordingLinkConfig = {
  styles: {
    theme: 'dark',
    primaryColor: '#30D7BA',
    primaryTextColor: '#000000',
  },
  brandLogoUrl:
    'https://validfor.com/wp-content/uploads/2025/11/validfor-logo.png',
  brandUrl: 'https://validfor.com',
};
        `,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
