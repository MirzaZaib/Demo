import { Gamepad2, Zap, Trophy } from 'lucide-react';
import ProductCatalog from '../components/ProductCatalog';
import PageTitle from '../components/PageTitle';
import { GAMING_PRODUCTS } from '../data';

const GamingLaptops = () => {
  return (
    <div>
      <PageTitle title="Gaming Laptops" />
      <section className="relative overflow-hidden border-b border-tech-border">
        <div className="absolute inset-0 bg-tech-bg">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Gamepad2 className="w-8 h-8 text-tech-blue" />
            <span className="text-sm font-semibold text-tech-blue uppercase tracking-wide">Gaming</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-tech-text">Gaming Laptops</h1>
          <p className="text-lg text-tech-muted mt-4 max-w-2xl">
            Dominate every frame with RTX 4090 power, high-refresh displays, and desktop-class cooling.
          </p>
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-tech-muted">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-tech-green" />
              <span>Up to 240Hz displays</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-tech-green" />
              <span>Esports-ready latency</span>
            </div>
          </div>
        </div>
      </section>

      <ProductCatalog
        products={GAMING_PRODUCTS}
        title=""
        subtitle=""
        showFilters={false}
      />
    </div>
  );
};

export default GamingLaptops;
