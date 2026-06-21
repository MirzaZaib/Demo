import { ShoppingCart, Check, Star, X, Cpu, Monitor, HardDrive, Scale, Battery, Plug } from 'lucide-react';
import Modal from './Modal';
import Badge from './Badge';
import { formatPrice } from '../data';

const ProductQuickView = ({ product, isOpen, onClose, inCompare, onToggleCompare, onAddToCart }) => {
  if (!product) return null;

  const savings = product.originalPrice ? product.originalPrice - product.price : 0;
  const badgeVariant =
    product.badge === 'Best Seller' ? 'blue' :
    product.badge === 'Flagship' ? 'purple' :
    product.badge === 'Creator Choice' ? 'green' :
    product.badge === 'Apple Silicon' ? 'purple' :
    product.badge === 'Workstation' ? 'gray' : 'orange';

  const specs = [
    { icon: Cpu, label: 'Processor', value: product.cpu },
    { icon: Monitor, label: 'Graphics', value: product.gpu },
    { icon: HardDrive, label: 'Memory & Storage', value: `${product.ram} · ${product.storage}` },
    { icon: Scale, label: 'Display', value: `${product.screenSize} ${product.panelType} @ ${product.refreshRate} · ${product.resolution}` },
    { icon: Battery, label: 'Battery', value: product.battery },
    { icon: Plug, label: 'Ports', value: product.ports },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Quick View" size="lg">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="aspect-square bg-gradient-to-b from-tech-bg to-tech-card rounded-xl p-8 flex items-center justify-center border border-tech-border">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="space-y-5">
          <div className="flex gap-2 flex-wrap">
            <Badge variant={badgeVariant}>{product.badge}</Badge>
            {product.inStock ? <Badge variant="green">In Stock</Badge> : <Badge variant="gray">Out of Stock</Badge>}
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading text-tech-text">{product.name}</h2>
            <p className="text-tech-muted mt-1">{product.tagline}</p>
          </div>

          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold">{product.rating}</span>
            <span className="text-tech-muted">({product.reviews} reviews)</span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-tech-text">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-tech-muted line-through">{formatPrice(product.originalPrice)}</span>
                <span className="text-sm font-semibold text-tech-green">Save {formatPrice(savings)}</span>
              </>
            )}
          </div>

          <div className="space-y-3">
            {specs.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 p-3 bg-tech-bg rounded-lg border border-tech-border">
                <Icon className="w-5 h-5 text-tech-blue mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-tech-muted uppercase tracking-wide">{label}</div>
                  <div className="text-sm font-mono text-tech-text mt-0.5">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="font-mono text-xs text-tech-muted">
            SKU: {product.partNumber}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => { onAddToCart(product); onClose(); }}
              disabled={!product.inStock}
              className="flex-1 px-6 py-3 bg-tech-blue hover:bg-tech-blue-hover disabled:bg-tech-card-hover disabled:text-tech-muted disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {product.inStock ? 'Add to Cart' : 'Notify Me'}
            </button>
            <button
              onClick={() => onToggleCompare(product.id)}
              className={`px-4 py-3 rounded-xl border transition-colors flex items-center gap-2 ${
                inCompare
                  ? 'bg-tech-blue/10 border-tech-blue text-tech-blue'
                  : 'bg-tech-card border-tech-border text-tech-text hover:border-tech-blue'
              }`}
            >
              {inCompare && <Check className="w-4 h-4" />}
              Compare
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductQuickView;
