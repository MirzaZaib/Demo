import { ShoppingCart, Star } from 'lucide-react';
import Badge from './Badge';
import { formatPrice } from '../data';
import { useApp } from '../context/AppContext';

const AccessoryCard = ({ product, delay }) => {
  const { addToCart } = useApp();
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;
  const badgeVariant =
    product.badge === 'Best Seller' ? 'blue' :
    product.badge === 'Creator Choice' ? 'green' :
    product.badge === 'Workstation' ? 'gray' :
    product.badge === 'Eco' ? 'green' : 'orange';

  return (
    <div className={`product-card group bg-tech-card border border-tech-border rounded-2xl overflow-hidden opacity-0 animate-fade-in-up ${delay}`}>
      <div className="product-image-wrapper relative aspect-[4/3] bg-gradient-to-b from-tech-bg to-tech-card p-6">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-contain"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={badgeVariant}>{product.badge}</Badge>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold font-heading text-tech-text leading-tight">{product.name}</h3>
          <p className="text-sm text-tech-muted mt-1">{product.tagline}</p>
        </div>

        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-semibold">{product.rating}</span>
          <span className="text-sm text-tech-muted">({product.reviews} reviews)</span>
        </div>

        <div className="font-mono text-xs text-tech-muted/70">
          Category: {product.category}
        </div>

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

          <button
            onClick={() => addToCart && addToCart(product)}
            disabled={!product.inStock}
            className="w-full px-4 py-2.5 bg-tech-blue hover:bg-tech-blue-hover disabled:bg-tech-card-hover disabled:text-tech-muted disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            {product.inStock ? 'Add to Cart' : 'Notify Me'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessoryCard;
