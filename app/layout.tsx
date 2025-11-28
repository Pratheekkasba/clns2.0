import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ui/client-layout";

export const metadata: Metadata = {
  title: "CLNS | Centralised Legal Network Solutions",
  description: "The first unified legal-tech ecosystem connecting clients, students, and advocates through a single digital platform.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preload" as="image" href="/clns-logo.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/video-hero/image_for_supremcort.jpg" fetchPriority="high" />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

