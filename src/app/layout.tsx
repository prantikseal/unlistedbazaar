import type { Metadata } from "next";
import "./globals.css";
import {
  dmSans,
  mangoFont,
  playfairDisplay,
  playfairDisplayRegular,
  spaceGrotesk,
} from "./fonts";

export const metadata: Metadata = {
  title: "Thriveletter",
  description: "Creating a one thriving newsletter at a time",
  icons: [
    {
      rel: "icon",
      sizes: "16x16",
      href: "/favicon.ico",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "android-chrome-192x192",
      sizes: "192x192",
      href: "/android-chrome-192x192.png",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "android-chrome-512x512",
      sizes: "512x512",
      href: "/android-chrome-512x512.png",
      url: "/android-chrome-512x512.png",
    },
    {
      rel: "favicon-16x16",
      sizes: "16x16",
      href: "/favicon-16x16.png",
      url: "/favicon-16x16.png",
    },
    {
      rel: "favicon-32x32",
      sizes: "32x32",
      href: "/favicon-32x32.png",
      url: "/favicon-32x32.png",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thriveletter.com",
    description: "Creating a one thriving newsletter at a time",
    images: [
      {
        url: "/hero-image.png",
        href: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Thriveletter",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mangoFont.variable} ${dmSans.className} ${playfairDisplay.variable} ${playfairDisplayRegular.variable} ${spaceGrotesk.variable}  inset-0 bg-white-lines`}
      >
        {children}
      </body>
    </html>
  );
}
