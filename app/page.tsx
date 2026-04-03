import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Fine Dining in Sitabuldi, Nagpur" 
            fill 
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950" />
        </div>
        
        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
            A Taste of <span className="text-amber-500">Royalty</span> in Nagpur
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-xl">
            Experience the finest culinary journey from authentic Saoji delicacies to global gourmet creations in the heart of Sitabuldi.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/menu" className="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Explore Menu
            </Link>
            <Link href="/contact" className="border border-amber-500 text-amber-500 hover:bg-amber-500/10 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center text-center gap-3">
            <MapPin className="text-amber-500 w-8 h-8" />
            <h3 className="text-xl font-playfair font-semibold">Sitabuldi, Nagpur</h3>
            <p className="text-zinc-400 text-sm">Heart of the Orange City</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3 border-y md:border-y-0 md:border-x border-zinc-800 py-6 md:py-0">
            <Clock className="text-amber-500 w-8 h-8" />
            <h3 className="text-xl font-playfair font-semibold">Opening Hours</h3>
            <p className="text-zinc-400 text-sm">Everyday: 12:00 PM - 11:30 PM</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Star className="text-amber-500 w-8 h-8" />
            <h3 className="text-xl font-playfair font-semibold">Top Rated</h3>
            <p className="text-zinc-400 text-sm">4.9/5 on Google Reviews</p>
          </div>
        </div>
      </section>
    </div>
  );
}
