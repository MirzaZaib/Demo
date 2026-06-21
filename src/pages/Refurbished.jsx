import { RefreshCw, ShieldCheck, Leaf } from 'lucide-react';
import ProductCatalog from '../components/ProductCatalog';
import PageTitle from '../components/PageTitle';
import { REFURBISHED } from '../data';

const Refurbished = () => {
  return (
    <div>
      <PageTitle title="Certified Refurbished" />
      <section className="relative overflow-hidden border-b border-tech-border">
        <div className="absolute inset-0 bg-tech-bg">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-tech-green/20 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="w-8 h-8 text-tech-green" />
            <span className="text-sm font-semibold text-tech-green uppercase tracking-wide">Refurbished</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-tech-text">Certified Refurbished</h1>
          <p className="text-lg text-tech-muted mt-4 max-w-2xl">
            Premium machines restored to like-new condition. Same performance, smaller price tag, lower environmental impact.
          </p>
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-tech-muted">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-tech-green" />
              <span>1-year warranty included</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-tech-green" />
              <span>Sustainable choice</span>
            </div>
          </div>
        </div>
      </section>

      <ProductCatalog
        products={REFURBISHED}
        title=""
        subtitle=""
        showFilters={false}
      />
    </div>
  );
};

export default Refurbished;
