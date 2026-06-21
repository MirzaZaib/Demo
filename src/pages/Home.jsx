import { useRef } from 'react';
import {
  Zap,
  Check,
  Star,
  ArrowRight,
  Laptop,
  Shield,
  Truck,
  RefreshCw,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProductCatalog from '../components/ProductCatalog';
import PageTitle from '../components/PageTitle';
import { PRODUCTS } from '../data';

const Home = () => {
  const { addToast } = useApp();
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <PageTitle title="Home" />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-bg">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-green/10 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-tech-blue/10 border border-tech-blue/20 rounded-full">
                <Zap className="w-3.5 h-3.5 text-tech-blue" />
                <span className="text-xs font-semibold text-tech-blue tracking-wide uppercase">New 2024 Flagships</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight">
                Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-cyan-400">Performance</span><br />
                Built for Creators
              </h1>

              <p className="text-lg text-tech-muted max-w-xl leading-relaxed">
                Discover premium gaming and creator laptops engineered for uncompromising power.
                From RTX 4090 rigs to Apple Silicon workstations — find your perfect machine.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToProducts}
                  className="group px-8 py-4 bg-tech-blue hover:bg-tech-blue-hover text-white font-semibold rounded-xl shadow-glow-blue transition-all flex items-center gap-2"
                >
                  Shop Laptops
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => addToast('Build Your Setup coming soon — demo', 'info')}
                  className="px-8 py-4 bg-tech-card hover:bg-tech-card-hover border border-tech-border text-tech-text font-semibold rounded-xl transition-all"
                >
                  Build Your Setup
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-tech-muted">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-tech-green" />
                  <span>2-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-tech-green" />
                  <span>Free Express Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-tech-green" />
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up stagger-2">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-tech-card to-tech-bg border border-tech-border rounded-2xl p-6 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center">
                  <Laptop className="w-32 h-32 sm:w-48 sm:h-48 text-tech-blue mb-4" strokeWidth={1} />
                  <h3 className="text-2xl font-bold font-heading text-tech-text">ROG Zephyrus G16</h3>
                  <p className="text-tech-muted mt-2">Intel Core i9 · RTX 4090 · 240Hz OLED</p>
                  <div className="mt-4 text-3xl font-bold text-tech-blue">$2,499</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-tech-card border border-tech-border rounded-xl p-3 shadow-xl hidden sm:block">
                <div className="flex items-center gap-2 text-tech-green">
                  <Check className="w-4 h-4" />
                  <span className="text-sm font-semibold">In Stock</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-tech-card border border-tech-border rounded-xl p-3 shadow-xl hidden sm:block">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold">4.8 (127)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={productsRef}>
        <ProductCatalog
          products={PRODUCTS}
          title="Featured Laptops"
          subtitle="Hand-picked gaming and creator machines with deep spec filtering."
          showFilters={true}
        />
      </div>
    </div>
  );
};

export default Home;
