import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "ProByt — Protein, Counted.",
  description:
    "1 poppable byte = 1g protein. No math. No guessing. Just count. Join the waitlist for India's first precision-protein snack.",
  openGraph: {
    title: "ProByt — Protein, Counted.",
    description: "1 poppable byte = 1g protein. No math. No guessing. Just count.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-cream text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
