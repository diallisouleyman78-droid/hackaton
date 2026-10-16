import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Droit Cameroun — Comprendre vos droits",
  description:
    "Un assistant qui vous aide à comprendre les textes camerounais et à trouver les sources officielles.",
  applicationName: "Droit.cm",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Droit.cm",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const themeBootstrap = `
  try {
    var preference = localStorage.getItem("droit-cm-theme");
    if (preference === "light" || preference === "dark") {
      document.documentElement.dataset.theme = preference;
      document.querySelectorAll('meta[name="theme-color"]').forEach(function (meta) {
        meta.content = preference === "dark" ? "#0b1117" : "#085081";
      });
    }
  } catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta
          id="theme-color-light"
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#085081"
        />
        <meta
          id="theme-color-dark"
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0b1117"
        />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
