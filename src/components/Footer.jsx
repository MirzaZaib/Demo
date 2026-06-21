import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Mail, Send, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Footer = () => {
  const { addToast } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    addToast('Thanks for subscribing!');
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const shopLinks = [
    { label: 'Gaming Laptops', path: '/gaming' },
    { label: 'Creator Workstations', path: '/creator' },
    { label: 'Accessories', path: '/accessories' },
    { label: 'Refurbished', path: '/refurbished' },
  ];

  const supportLinks = [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Warranty', path: '/warranty' },
    { label: 'Returns', path: '/returns' },
    { label: 'Shipping', path: '/shipping' },
  ];

  return (
    <footer className="border-t border-tech-border bg-tech-card mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-tech-blue to-cyan-500 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-heading text-tech-text">NEXUS</span>
            </div>
            <p className="text-sm text-tech-muted">Premium laptops and workstations for creators, gamers, and professionals.</p>
          </div>
          <div>
            <h4 className="font-semibold font-heading mb-4 text-tech-text">Shop</h4>
            <ul className="space-y-2 text-sm text-tech-muted">
              {shopLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-tech-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-heading mb-4 text-tech-text">Support</h4>
            <ul className="space-y-2 text-sm text-tech-muted">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-tech-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-heading mb-4 text-tech-text">Stay Updated</h4>
            {subscribed ? (
              <div className="flex items-center gap-2 text-tech-green">
                <Check className="w-5 h-5" />
                <span className="text-sm font-medium">You're subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tech-muted" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full bg-tech-bg border border-tech-border rounded-lg pl-10 pr-3 py-2 text-sm text-tech-text placeholder-tech-muted focus:outline-none focus:border-tech-blue"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-tech-blue hover:bg-tech-blue-hover text-white rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="border-t border-tech-border mt-8 pt-8 text-center text-sm text-tech-muted">
          © 2024 NEXUS Premium Tech. Demo prototype for client review.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
