import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Layers, User, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header = () => {
  const { cartCount, setCartOpen, setAuthOpen, setMobileNavOpen, searchQuery, setSearchQuery } = useApp();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/gaming', label: 'Gaming' },
    { path: '/creator', label: 'Creator' },
    { path: '/accessories', label: 'Accessories' },
    { path: '/refurbished', label: 'Refurbished' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-tech-bg/80 backdrop-blur-xl border-b border-tech-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-tech-blue to-cyan-500 rounded-lg flex items-center justify-center">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-heading tracking-tight text-tech-text">NEXUS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-tech-blue bg-tech-blue/10'
                    : 'text-tech-muted hover:text-tech-text hover:bg-tech-card-hover'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tech-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search laptops, parts, specs..."
                className="w-full bg-tech-card border border-tech-border rounded-lg pl-10 pr-10 py-2 text-sm text-tech-text placeholder-tech-muted focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-tech-muted hover:text-tech-text"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setAuthOpen(true)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-tech-muted hover:text-tech-text transition-colors"
            >
              <User className="w-4 h-4" />
              Sign In
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2 bg-tech-card hover:bg-tech-card-hover border border-tech-border rounded-lg transition-colors"
            >
              <ShoppingCart className="w-4 h-4 text-tech-text" />
              <span className="hidden sm:inline text-sm font-medium text-tech-text">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-tech-blue text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden p-2 bg-tech-card hover:bg-tech-card-hover border border-tech-border rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-tech-text" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tech-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search laptops..."
              className="w-full bg-tech-card border border-tech-border rounded-lg pl-10 pr-10 py-2 text-sm text-tech-text placeholder-tech-muted focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-tech-muted hover:text-tech-text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
