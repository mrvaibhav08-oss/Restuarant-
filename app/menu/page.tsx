import { menuData } from '@/data/menuData';
import MenuCard from '@/components/MenuCard';

export const metadata = {
  title: 'Menu | Royal Midnight Nagpur',
  description: 'Explore our exquisite menu featuring Nagpur Specials like Tarri Poha, Saoji cuisines, and premium international dishes.',
};

export default function MenuPage() {
  const categories = Array.from(new Set(menuData.map(item => item.category)));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
          Our <span className="text-amber-500">Menu</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Crafted with passion, our menu is a blend of local Nagpur heritage and global gastronomy.
        </p>
      </div>

      <div className="flex flex-col gap-20">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="font-playfair text-3xl font-semibold text-amber-500 border-b border-zinc-800 pb-4 mb-8">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData
                .filter((item) => item.category === category)
                .map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
            }
