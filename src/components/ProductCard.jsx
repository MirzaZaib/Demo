import { ShoppingCart, Check, Star, Cpu, Monitor, HardDrive, Scale, Eye } from 'lucide-react';
import Badge from './Badge';
import { formatPrice } from '../data';

const ProductCard = ({ product, inCompare, onToggleCompare, onAddToCart, onQuickView, delay }) => {
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;
  const badgeVariant =
    product.badge === 'Best Seller' ? 'blue' :
    product.badge === 'Flagship' ? 'purple' :
    product.badge === 'Creator Choice' ? 'green' :
    product.badge === 'Apple Silicon' ? 'purple' :
    product.badge === 'Workstation' ? 'gray' : 'orange';

  return (
    <div className={`product-card group bg-tech-card border border-tech-border rounded-2xl overflow-hidden opacity-0 animate-fade-in-up ${delay}`}>
      {/* Image */}
      <div className="product-image-wrapper relative aspect-[4/3] bg-gradient-to-b from-tech-bg to-tech-card p-6">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-contain"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant={badgeVariant}>{product.badge}</Badge>
          {product.inStock ? (
            <Badge variant="green">In Stock</Badge>
          ) : (
            <Badge variant="gray">Out of Stock</Badge>
          )}
        </div>
        <button
          onClick={() => onQuickView(product)}
          className="absolute top-4 right-4 p-2 bg-tech-card/90 hover:bg-tech-blue text-tech-muted hover:text-white rounded-lg border border-tech-border hover:border-tech-blue transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          title="Quick view"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold font-heading text-tech-text leading-tight">{product.name}</h3>
          <p className="text-sm text-tech-muted mt-1">{product.tagline}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold">{product.rating}</span>
          </div>
          <span className="text-sm text-tech-muted">({product.reviews} reviews)</span>
        </div>

        {/* Specs Grid — Roboto Mono for technical precision */}
        <div className="grid grid-cols-2 gap-2 font-mono text-xs">
          <div className="flex items-center gap-1.5 text-tech-muted">
            <Cpu className="w-3.5 h-3.5 text-tech-blue" />
            <span className="truncate">{product.cpu}</span>
          </div>
          <div className="flex items-center gap-1.5 text-tech-muted">
            <Monitor className="w-3.5 h-3.5 text-tech-blue" />
            <span>{product.gpu}</span>
          </div>
          <div className="flex items-center gap-1.5 text-tech-muted">
            <HardDrive className="w-3.5 h-3.5 text-tech-blue" />
            <span>{product.ram} · {product.storage}</span>
          </div>
          <div className="flex items-center gap-1.5 text-tech-muted">
            <Scale className="w-3.5 h-3.5 text-tech-blue" />
            <span>{product.screenSize} {product.panelType} · {product.refreshRate}</span>
          </div>
        </div>

        {/* Part Number */}
        <div className="font-mono text-xs text-tech-muted/70">
          SKU: {product.partNumber}
        </div>

        {/* Price & Actions */}
        <div className="pt-4 border-t border-tech-border">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-tech-text">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-tech-muted line-through">{formatPrice(product.originalPrice)}</span>
                <span className="text-sm font-semibold text-tech-green">Save {formatPrice(savings)}</span>
              </>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="flex-1 px-4 py-2.5 bg-tech-blue hover:bg-tech-blue-hover disabled:bg-tech-card-hover disabled:text-tech-muted disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              {product.inStock ? 'Add to Cart' : 'Notify Me'}
            </button>
            <label className="flex items-center justify-center px-3 py-2.5 bg-tech-card-hover border border-tech-border rounded-lg cursor-pointer hover:border-tech-blue transition-colors">
              <input
                type="checkbox"
                className="sr-only"
                checked={inCompare}
                onChange={() => onToggleCompare(product.id)}
              />
              <div className={`
                w-4 h-4 rounded border flex items-center justify-center transition-all
                ${inCompare ? 'bg-tech-blue border-tech-blue' : 'border-tech-muted'}
              `}>
                {inCompare && <Check className="w-3 h-3 text-white" />}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
