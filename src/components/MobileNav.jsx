import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Layers, ShoppingCart, User, Heart, HelpCircle, Package, Gamepad2, Palette, RefreshCw, Headphones } from 'lucide-react';
import { useApp } from '../context/AppContext';

const MobileNav = ({ isOpen, onClose }) => {
  const { cartCount, setAuthOpen, setCartOpen } = useApp();
  const location = useLocation();

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const links = [
    { label: 'Shop All', path: '/shop', icon: Package },
    { label: 'Gaming Laptops', path: '/gaming', icon: Gamepad2 },
    { label: 'Creator Workstations', path: '/creator', icon: Palette },
    { label: 'Accessories', path: '/accessories', icon: Headphones },
    { label: 'Refurbished', path: '/refurbished', icon: RefreshCw },
    { label: 'Wishlist', path: '#', icon: Heart },
    { label: 'Support', path: '/contact', icon: HelpCircle },
  ];

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
            onClick={onClose}
          />
          <div className="fixed inset-y-0 right-0 w-80 bg-tech-card border-l border-tech-border z-[100] p-6 animate-fade-in-up overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" onClick={onClose} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-tech-blue to-cyan-500 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold font-heading text-tech-text">NEXUS</span>
              </Link>
              <button
                onClick={onClose}
                className="p-2 hover:bg-tech-card-hover rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-tech-muted" />
              </button>
            </div>

            <nav className="space-y-1">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={link.path !== '#' ? onClose : undefined}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive
                        ? 'text-tech-blue bg-tech-blue/10'
                        : 'text-tech-text hover:bg-tech-card-hover'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-tech-blue' : 'text-tech-muted'}`} />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-tech-border space-y-3">
              <button
                onClick={() => { onClose(); setAuthOpen(true); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-tech-text hover:bg-tech-card-hover transition-colors"
              >
                <User className="w-5 h-5 text-tech-muted" />
                <span className="font-medium">Sign In / Sign Up</span>
              </button>
              <button
                onClick={() => { onClose(); setCartOpen(true); }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-tech-blue/10 border border-tech-blue/20 text-tech-blue hover:bg-tech-blue/20 transition-colors"
              >
                <span className="font-medium flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5" />
                  Cart
                </span>
                <span className="px-2 py-0.5 bg-tech-blue text-white text-xs rounded-full">{cartCount}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileNav;
