import { Palette, Monitor, Layers } from 'lucide-react';
import ProductCatalog from '../components/ProductCatalog';
import PageTitle from '../components/PageTitle';
import { CREATOR_PRODUCTS } from '../data';

const CreatorWorkstations = () => {
  return (
    <div>
      <PageTitle title="Creator Workstations" />
      <section className="relative overflow-hidden border-b border-tech-border">
        <div className="absolute inset-0 bg-tech-bg">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-8 h-8 text-purple-400" />
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wide">Creator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-tech-text">Creator Workstations</h1>
          <p className="text-lg text-tech-muted mt-4 max-w-2xl">
            Color-accurate displays, massive memory, and pro-grade GPUs for video, 3D, and design workflows.
          </p>
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-tech-muted">
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-tech-green" />
              <span>Factory-calibrated panels</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-tech-green" />
              <span>Up to 128GB RAM</span>
            </div>
          </div>
        </div>
      </section>

      <ProductCatalog
        products={CREATOR_PRODUCTS}
        title=""
        subtitle=""
        showFilters={false}
      />
    </div>
  );
};

export default CreatorWorkstations;
