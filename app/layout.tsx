import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Schema from '@/components/SEO/Schema';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Royal Midnight | Best Restaurant in Nagpur | Fine Dining in Sitabuldi',
  description: 'Experience luxury fine dining at Royal Midnight in Nagpur. Enjoy top veg treats, authentic Saoji, and exquisite global cuisine.',
  keywords: 'Best Restaurant in Nagpur, Fine Dining in Sitabuldi, Top Veg Treat, Saoji Food Nagpur, Luxury Dinner',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Schema />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-zinc-950 text-zinc-100 antialiased selection:bg-amber-500 selection:text-zinc-950`}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}}
