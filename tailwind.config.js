/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tech-bg': '#0F1115',
        'tech-card': '#1E222A',
        'tech-card-hover': '#252A34',
        'tech-blue': '#2563EB',
        'tech-blue-hover': '#1D4ED8',
        'tech-green': '#10B981',
        'tech-text': '#F1F5F9',
        'tech-muted': '#94A3B8',
        'tech-border': '#2D3340',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(37, 99, 235, 0.4)',
        'glow-green': '0 0 20px -5px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
