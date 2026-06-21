import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Github, Chrome } from 'lucide-react';
import Modal from './Modal';

const AuthModal = ({ isOpen, onClose, onSuccess }) => {
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onSuccess(mode === 'signin' ? 'Signed in successfully!' : 'Account created successfully!');
      onClose();
      setForm({ name: '', email: '', password: '' });
    }, 1200);
  };

  const toggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
    setForm({ name: '', email: '', password: '' });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={mode === 'signin' ? 'Sign In' : 'Create Account'} size="md">
      <form onSubmit={handleSubmit} className="space-y-5">
        {mode === 'signup' && (
          <div>
            <label className="block text-sm font-medium text-tech-muted mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-tech-muted" />
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-tech-bg border border-tech-border rounded-lg pl-10 pr-4 py-3 text-tech-text placeholder-tech-muted focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue transition-colors"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-tech-muted mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-tech-muted" />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full bg-tech-bg border border-tech-border rounded-lg pl-10 pr-4 py-3 text-tech-text placeholder-tech-muted focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-tech-muted mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-tech-muted" />
            <input
              required
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              minLength={8}
              className="w-full bg-tech-bg border border-tech-border rounded-lg pl-10 pr-12 py-3 text-tech-text placeholder-tech-muted focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-tech-muted hover:text-tech-text"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mode === 'signin' && (
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-tech-muted cursor-pointer">
              <input type="checkbox" className="rounded border-tech-border bg-tech-bg text-tech-blue focus:ring-tech-blue" />
              Remember me
            </label>
            <button type="button" className="text-tech-blue hover:underline">Forgot password?</button>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-3 bg-tech-blue hover:bg-tech-blue-hover disabled:opacity-70 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            mode === 'signin' ? 'Sign In' : 'Create Account'
          )}
        </button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-tech-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-tech-card text-tech-muted">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <button
            type="button"
            onClick={() => { onSuccess('Signed in with Google (demo)'); onClose(); }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-tech-bg border border-tech-border rounded-lg hover:border-tech-blue transition-colors"
          >
            <Chrome className="w-4 h-4 text-tech-text" />
            <span className="text-sm text-tech-text">Google</span>
          </button>
          <button
            type="button"
            onClick={() => { onSuccess('Signed in with GitHub (demo)'); onClose(); }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-tech-bg border border-tech-border rounded-lg hover:border-tech-blue transition-colors"
          >
            <Github className="w-4 h-4 text-tech-text" />
            <span className="text-sm text-tech-text">GitHub</span>
          </button>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-tech-muted">
        {mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          type="button"
          onClick={toggleMode}
          className="text-tech-blue hover:underline font-medium"
        >
          {mode === 'signin' ? 'Sign up' : 'Sign in'}
        </button>
      </p>
    </Modal>
  );
};

export default AuthModal;
