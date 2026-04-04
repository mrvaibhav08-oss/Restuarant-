import { MapPin, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Royal Midnight Nagpur',
  description: 'Get in touch with Royal Midnight. Book a table or visit us in Sitabuldi, Nagpur.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-24 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
          Get in <span className="text-amber-500">Touch</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-playfair font-semibold mb-6">Book a Table</h2>
          <form className="flex flex-col gap-5">
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Name</label>
              <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Your Full Name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-zinc-400 mb-2 block">Date</label>
                <input type="date" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors [&::-webkit-calendar-picker-indicator]:filter-[invert(1)]" />
              </div>
              <div>
                <label className="text-sm text-zinc-400 mb-2 block">Guests</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors">
                  <option>2 People</option>
                  <option>4 People</option>
                  <option>6+ People</option>
                </select>
              </div>
            </div>
            <button type="button" className="mt-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 w-full py-4 rounded-xl font-bold transition-all">
              Request Reservation
            </button>
          </form>
        </div>

        {/* Info & Map */}
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-4 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/50 transition-colors group">
              <Phone className="text-amber-500 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-zinc-400">Call Us</p>
                <p className="font-semibold">+91 98765 43210</p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <Mail className="text-amber-500" />
              <div>
                <p className="text-sm text-zinc-400">Email</p>
                <p className="font-semibold">dine@royalmidnight.in</p>
              </div>
            </div>
          </div>
          
          <div className="h-64 sm:h-full min-h-[300px] bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden relative">
            {/* Replace src with an actual embed link from Google Maps for Nagpur */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230402!2d79.0021405!3d21.1610282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
            }
