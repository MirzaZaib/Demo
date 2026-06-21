import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AuthModal from './AuthModal';
import MobileNav from './MobileNav';
import CartDrawer from './CartDrawer';
import ProductQuickView from './ProductQuickView';
import StickyCartBar from './StickyCartBar';
import ScrollToTop from './ScrollToTop';
import BackToTop from './BackToTop';
import { ToastContainer } from './Toast';
import { useApp } from '../context/AppContext';

const Layout = () => {
  const location = useLocation();
  const {
    cart,
    cartCount,
    compareIds,
    toasts,
    addToast,
    removeToast,
    authOpen,
    setAuthOpen,
    mobileNavOpen,
    setMobileNavOpen,
    cartOpen,
    setCartOpen,
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCompare,
  } = useApp();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    addToast(`Checkout initiated for ${cart.length} item(s) — demo only`, 'info');
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-tech-bg pb-24 flex flex-col">
      <ScrollToTop />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      <Header />

      <main className="flex-1" key={location.pathname}>
        <div className="animate-fade-in">
          <Outlet />
        </div>
      </main>

      <Footer />

      <StickyCartBar cart={cart} onCheckout={handleCheckout} />
      <BackToTop />

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onSuccess={(msg) => addToast(msg)}
      />

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <ProductQuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        inCompare={quickViewProduct ? compareIds.includes(quickViewProduct.id) : false}
        onToggleCompare={toggleCompare}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default Layout;
