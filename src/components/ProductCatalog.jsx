import { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import ComparisonTool from './ComparisonTool';
import { FILTER_OPTIONS } from '../data';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'name', label: 'Name A-Z' },
];

const ProductCatalog = ({ products, title, subtitle, showFilters = true }) => {
  const { compareIds, addToCart, toggleCompare, setQuickViewProduct, searchQuery, setSearchQuery } = useApp();
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState(
    Object.fromEntries(Object.keys(FILTER_OPTIONS).map((k) => [k, []]))
  );

  const query = searchQuery;
  const setQuery = setSearchQuery;

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const q = query.toLowerCase();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        (product.cpu && product.cpu.toLowerCase().includes(q)) ||
        (product.gpu && product.gpu.toLowerCase().includes(q)) ||
        (product.badge && product.badge.toLowerCase().includes(q));

      if (!matchesSearch) return false;

      if (!showFilters) return true;

      return Object.entries(filters).every(([category, selected]) => {
        if (selected.length === 0) return true;
        if (category === 'weight') {
          const weightKg = parseFloat(product.weight);
          return selected.some((range) => {
            if (range === 'Under 2.5kg') return weightKg < 2.5;
            if (range === '2.5kg and above') return weightKg >= 2.5;
            return false;
          });
        }
        return selected.includes(product[category]);
      });
    });

    switch (sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [products, query, filters, sortBy, showFilters]);

  const activeFilterCount = Object.values(filters).flat().length;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {(title || subtitle) && (
        <div className="mb-8">
          {title && <h2 className="text-3xl font-bold font-heading text-tech-text">{title}</h2>}
          {subtitle && <p className="text-tech-muted mt-2">{subtitle}</p>}
        </div>
      )}

      {showFilters && (
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-tech-card border border-tech-border rounded-lg text-tech-text font-medium"
          >
            <Filter className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 bg-tech-blue text-white text-xs rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      )}

      <div className="flex gap-8">
        {showFilters && (
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isOpen={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}
          />
        )}

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-xl font-bold font-heading">
              Products <span className="text-tech-muted font-normal">({filteredProducts.length})</span>
            </h3>

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

          {query && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-tech-muted">
                Showing results for "<span className="text-tech-text">{query}</span>"
              </span>
              <button
                onClick={() => setQuery('')}
                className="text-xs text-tech-blue hover:underline"
              >
                Clear search
              </button>
            </div>
          )}

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  inCompare={compareIds.includes(product.id)}
                  onToggleCompare={toggleCompare}
                  onAddToCart={addToCart}
                  onQuickView={setQuickViewProduct}
                  delay={`stagger-${(idx % 6) + 1}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-tech-card border border-tech-border rounded-2xl">
              <Search className="w-12 h-12 text-tech-muted mx-auto mb-4" />
              <h3 className="text-lg font-bold font-heading text-tech-text">No products found</h3>
              <p className="text-tech-muted mt-2">Try adjusting your search or filters.</p>
              <button
                onClick={() => { setQuery(''); setFilters(Object.fromEntries(Object.keys(FILTER_OPTIONS).map((k) => [k, []]))); }}
                className="mt-4 px-6 py-2 bg-tech-card-hover border border-tech-border rounded-lg text-tech-text hover:border-tech-blue transition-colors"
              >
                Clear All
              </button>
            </div>
          )}

          <ComparisonTool compareIds={compareIds} onRemove={toggleCompare} />
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
