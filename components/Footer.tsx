import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
        
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Link href="/" className="font-playfair text-2xl font-bold text-white">
            ROYAL<span className="text-amber-500">MIDNIGHT</span>
          </Link>
          <p className="text-zinc-400 text-sm max-w-xs">
            Elevating the culinary landscape of Nagpur with unparalleled taste, luxury ambiance, and unforgettable memories.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-all"><Twitter size={18} /></a>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center md:items-start">
          <h4 className="font-playfair text-xl font-semibold text-white">Links</h4>
          <Link href="/menu" className="text-zinc-400 hover:text-amber-500 transition-colors">Our Menu</Link>
          <Link href="/contact" className="text-zinc-400 hover:text-amber-500 transition-colors">Reservations</Link>
          <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Privacy Policy</Link>
        </div>

        <div className="flex flex-col gap-4 items-center md:items-start">
          <h4 className="font-playfair text-xl font-semibold text-white">Visit Us</h4>
          <p className="text-zinc-400">123, VIP Road, Near Sitabuldi Fort,<br/>Nagpur, Maharashtra 440001</p>
          <p className="text-amber-500 font-semibold mt-2">Mon - Sun: 12 PM - 11:30 PM</p>
        </div>

      </div>
      
      <div className="text-center pt-8 border-t border-zinc-900 text-sm text-zinc-500 flex flex-col gap-1">
        <p>&copy; {new Date().getFullYear()} Royal Midnight Restaurant. All Rights Reserved.</p>
        <p className="text-zinc-600 flex items-center justify-center gap-1">
          Proudly Made in <span className="text-amber-600/50">Nagpur</span>
        </p>
      </div>
    </footer>
  );
}
