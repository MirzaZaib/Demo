import { Headphones, ChevronDown } from 'lucide-react';
import { useState, useMemo } from 'react';
import AccessoryCard from '../components/AccessoryCard';
import PageTitle from '../components/PageTitle';
import { ACCESSORIES } from '../data';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'name', label: 'Name A-Z' },
];

const Accessories = () => {
  const [sortBy, setSortBy] = useState('featured');

  const sortedProducts = useMemo(() => {
    let result = [...ACCESSORIES];
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return result;
  }, [sortBy]);

  return (
    <div>
      <PageTitle title="Accessories" />
      <section className="relative overflow-hidden border-b border-tech-border">
        <div className="absolute inset-0 bg-tech-bg">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="w-8 h-8 text-orange-400" />
            <span className="text-sm font-semibold text-orange-400 uppercase tracking-wide">Accessories</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-tech-text">Gear Up</h1>
          <p className="text-lg text-tech-muted mt-4 max-w-2xl">
            Mice, keyboards, docks, bags, and everything else to complete your premium setup.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold font-heading">
            Accessories <span className="text-tech-muted font-normal">({sortedProducts.length})</span>
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-tech-muted hidden sm:inline">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-tech-card border border-tech-border rounded-lg pl-4 pr-10 py-2 text-sm text-tech-text focus:outline-none focus:border-tech-blue cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tech-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product, idx) => (
            <AccessoryCard key={product.id} product={product} delay={`stagger-${(idx % 6) + 1}`} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accessories;
