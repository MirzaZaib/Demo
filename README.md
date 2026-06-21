# NEXUS Premium Laptop Demo

A high-fidelity, dark-mode e-commerce prototype for a premium tech and laptop store. Built with React, React Router, Tailwind CSS, and Lucide React icons.

## Features

- Premium dark-mode design system
- Multi-page SPA routing (Home, Shop, Gaming, Creator, Accessories, Refurbished, Support pages)
- Sign In / Sign Up modal with validation
- Faceted product filtering sidebar
- Responsive product grid with hover zoom micro-interactions
- Product quick-view modal
- Dynamic comparison table for up to 4 devices
- Full cart drawer with quantity controls
- Toast notification system
- Sticky add-to-cart bar
- Mobile-first responsive layout with mobile nav drawer

## Project Structure

```
.
├── index.html              # Vite entry point
├── package.json
├── vite.config.js          # Builds everything into a single dist/index.html
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx            # React app mount
│   ├── App.jsx             # Router configuration
│   ├── index.css           # Tailwind + custom styles
│   ├── data.js             # Product & filter data
│   ├── context/            # AppContext for cart/toast/search state
│   ├── components/         # Reusable UI components
│   └── pages/              # Route pages
└── .github/workflows/      # Auto-deploy to GitHub Pages
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/#/shop` | All Laptops |
| `/#/gaming` | Gaming Laptops |
| `/#/creator` | Creator Workstations |
| `/#/accessories` | Accessories |
| `/#/refurbished` | Certified Refurbished |
| `/#/contact` | Contact Us |
| `/#/warranty` | Warranty |
| `/#/returns` | Returns |
| `/#/shipping` | Shipping |

## Local Development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for Production

```bash
npm run build
```

This outputs a single self-contained file at `dist/index.html` (no external runtime dependencies).

## Deploy to GitHub Pages

This project uses `HashRouter` so it works natively on GitHub Pages without server-side redirect rules.

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment**.
3. Select **GitHub Actions** as the source.
4. The workflow in `.github/workflows/deploy.yml` will build and deploy automatically on every push to `main`.

Your site will be live at `https://<username>.github.io/<repo-name>/`.
