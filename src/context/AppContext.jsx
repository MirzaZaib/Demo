import { createContext, useContext, useState, useCallback } from 'react';
import { PRODUCTS, ACCESSORIES } from '../data';

const AppContext = createContext(null);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [compareIds, setCompareIds] = useState([]);
  const [toasts, setToasts] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToCart = useCallback((product) => {
    if (!product.inStock) {
      addToast('This item is currently out of stock.', 'info');
      return;
    }
    setCart((prev) => [...prev, product]);
    addToast(`${product.name.split(' ').slice(0, 3).join(' ')} added to cart`);
  }, [addToast]);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index === -1) return prev;
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
    addToast('Item removed from cart', 'info');
  }, [addToast]);

  const updateQuantity = useCallback((id, delta) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index === -1) return prev;

      if (delta < 0) {
        const updated = [...prev];
        updated.splice(index, 1);
        return updated;
      }

      const product = [...PRODUCTS, ...ACCESSORIES].find((p) => p.id === id);
      return product ? [...prev, product] : prev;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    addToast('Cart cleared', 'info');
  }, [addToast]);

  const toggleCompare = useCallback((id) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        addToast('Removed from comparison', 'info');
        return prev.filter((itemId) => itemId !== id);
      }
      if (prev.length >= 4) {
        addToast('You can compare up to 4 devices', 'error');
        return prev;
      }
      const product = PRODUCTS.find((p) => p.id === id);
      addToast(`${product.name.split(' ').slice(0, 3).join(' ')} added to comparison`);
      return [...prev, id];
    });
  }, [addToast]);

  const cartCount = cart.length;
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const value = {
    cart,
    setCart,
    cartCount,
    cartTotal,
    compareIds,
    setCompareIds,
    toasts,
    addToast,
    removeToast,
    cartOpen,
    setCartOpen,
    authOpen,
    setAuthOpen,
    mobileNavOpen,
    setMobileNavOpen,
    quickViewProduct,
    setQuickViewProduct,
    searchQuery,
    setSearchQuery,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCompare,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
