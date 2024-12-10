import localFont from "next/font/local";
import { DM_Sans, Playfair_Display, Space_Grotesk } from "next/font/google";

export const mangoFont = localFont({
  src: [
    {
      path: "../fonts/Mango-Web-TT/MangoGrotesque-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Mango-Web-TT/MangoGrotesque-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Mango-Web-TT/MangoGrotesque-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-mango",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-playfair-display",
});

export const playfairDisplayRegular = Playfair_Display({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-playfair-display-regular",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
