import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { formatPrice } from '../data';

const CartDrawer = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove, onCheckout }) => {
  // Group cart items by product id with quantity
  const items = useMemo(() => {
    const grouped = cart.reduce((acc, product) => {
      const existing = acc.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ ...product, quantity: 1 });
      }
      return acc;
    }, []);
    return grouped;
  }, [cart]);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const shipping = subtotal > 0 ? (subtotal > 3000 ? 0 : 49) : 0;
  const total = subtotal + shipping;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
            onClick={onClose}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-tech-card border-l border-tech-border z-[100] flex flex-col animate-fade-in-up">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-tech-border">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-tech-blue" />
                <h2 className="text-xl font-bold font-heading">Your Cart</h2>
                <span className="px-2 py-0.5 bg-tech-blue text-white text-xs rounded-full">{cart.length}</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-tech-card-hover rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-tech-muted" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-tech-bg rounded-full flex items-center justify-center mb-4">
                    <ShoppingCart className="w-8 h-8 text-tech-muted" />
                  </div>
                  <h3 className="text-lg font-semibold text-tech-text">Your cart is empty</h3>
                  <p className="text-sm text-tech-muted mt-2">Add a laptop to get started.</p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2.5 bg-tech-blue hover:bg-tech-blue-hover text-white font-medium rounded-lg transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-tech-bg rounded-xl border border-tech-border">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-contain bg-tech-card rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-tech-text truncate">{item.name}</h4>
                        <p className="text-xs text-tech-muted mt-1 font-mono">{item.cpu}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 bg-tech-card rounded-lg">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1.5 hover:bg-tech-card-hover rounded-l-lg transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5 text-tech-muted" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1.5 hover:bg-tech-card-hover rounded-r-lg transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5 text-tech-muted" />
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold text-tech-text">{formatPrice(item.price * item.quantity)}</div>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="self-start p-2 hover:bg-red-500/10 rounded-lg transition-colors group"
                      >
                        <Trash2 className="w-4 h-4 text-tech-muted group-hover:text-red-400" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-tech-border bg-tech-bg/50">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-tech-muted">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-tech-muted">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-tech-text pt-2 border-t border-tech-border">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <button
                  onClick={onCheckout}
                  className="w-full px-4 py-3 bg-tech-blue hover:bg-tech-blue-hover text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CartDrawer;
