"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

type MenuItem = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  isVeg: boolean;
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-zinc-900/40 rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={item.image} 
          alt={item.name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur px-3 py-1 rounded-full border border-zinc-700 flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span className="text-xs font-semibold text-white tracking-wider">₹{item.price}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
          {item.name}
        </h3>
        <p className="text-zinc-400 text-sm line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
