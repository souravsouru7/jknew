import { DM_Serif_Display, Montserrat, Cormorant_Garamond, Manrope, Marcellus } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weights: [300, 400, 500, 600],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
});

export const metadata = {
  title: "JK Interiors - Luxury Interior Design",
  description: "Transform your space with award-winning interior design services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${montserrat.variable} ${cormorant.variable} ${manrope.variable} ${marcellus.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
