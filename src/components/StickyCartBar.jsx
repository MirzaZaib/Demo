import { ShoppingCart, ChevronRight } from 'lucide-react';
import { formatPrice } from '../data';

const StickyCartBar = ({ cart, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const itemCount = cart.length;

  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-tech-card/95 backdrop-blur-xl border-t border-tech-border shadow-2xl animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-tech-blue/10 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-tech-blue" />
            </div>
            <div>
              <div className="font-bold font-heading text-tech-text">
                {itemCount} {itemCount === 1 ? 'item' : 'items'} in cart
              </div>
              <div className="text-sm text-tech-muted">
                {cart.slice(0, 2).map((item) => item.name.split(' ').slice(0, 3).join(' ')).join(', ')}
                {cart.length > 2 && ` +${cart.length - 2} more`}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-sm text-tech-muted">Subtotal</div>
              <div className="text-2xl font-bold text-tech-text">{formatPrice(total)}</div>
            </div>
            <button
              onClick={onCheckout}
              className="px-8 py-3 bg-tech-blue hover:bg-tech-blue-hover text-white font-semibold rounded-xl shadow-glow-blue transition-all flex items-center gap-2"
            >
              Checkout
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCartBar;
