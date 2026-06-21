// ============================================================================
// DUMMY PRODUCT DATA — Premium Gaming & Creator Laptops
// ============================================================================
export const PRODUCTS = [
  {
    id: 1,
    name: 'ASUS ROG Zephyrus G16 (2024)',
    tagline: 'Ultra-slim gaming powerhouse',
    price: 2499,
    originalPrice: 2799,
    badge: 'Best Seller',
    inStock: true,
    rating: 4.8,
    reviews: 127,
    image: 'https://placehold.co/600x400/transparent/2563EB?text=ROG+Zephyrus+G16',
    cpu: 'Intel Core i9-14900HX',
    gpu: 'NVIDIA RTX 4090',
    ram: '32GB',
    storage: '2TB SSD',
    screenSize: '16"',
    panelType: 'OLED',
    refreshRate: '240Hz',
    weight: '2.3kg',
    resolution: '2560 x 1600',
    battery: '90Wh',
    ports: '2x Thunderbolt 4, HDMI 2.1',
    partNumber: 'GU605-CX9'
  },
  {
    id: 2,
    name: 'Razer Blade 16 (2024)',
    tagline: 'CNC aluminum flagship',
    price: 3299,
    originalPrice: 3599,
    badge: 'Flagship',
    inStock: true,
    rating: 4.9,
    reviews: 89,
    image: 'https://placehold.co/600x400/transparent/10B981?text=Razer+Blade+16',
    cpu: 'Intel Core i9-14900HX',
    gpu: 'NVIDIA RTX 4090',
    ram: '64GB',
    storage: '2TB SSD',
    screenSize: '16"',
    panelType: 'Mini-LED',
    refreshRate: '240Hz',
    weight: '2.45kg',
    resolution: '3840 x 2400',
    battery: '95.2Wh',
    ports: '3x USB-C, HDMI 2.1',
    partNumber: 'RZ09-0510'
  },
  {
    id: 3,
    name: 'MSI Creator Z17 HX Studio',
    tagline: 'Creator-grade color accuracy',
    price: 3999,
    originalPrice: 4299,
    badge: 'Creator Choice',
    inStock: true,
    rating: 4.7,
    reviews: 64,
    image: 'https://placehold.co/600x400/transparent/F1F5F9?text=MSI+Creator+Z17',
    cpu: 'Intel Core i9-14900HX',
    gpu: 'NVIDIA RTX 4080',
    ram: '64GB',
    storage: '4TB SSD',
    screenSize: '17"',
    panelType: 'IPS',
    refreshRate: '165Hz',
    weight: '2.49kg',
    resolution: '2560 x 1600',
    battery: '90Wh',
    ports: '2x Thunderbolt 4, SD Express',
    partNumber: 'CreatorZ17HX-C14'
  },
  {
    id: 4,
    name: 'Apple MacBook Pro 16 M3 Max',
    tagline: 'Pro silicon for professionals',
    price: 3899,
    originalPrice: null,
    badge: 'Apple Silicon',
    inStock: true,
    rating: 4.9,
    reviews: 312,
    image: 'https://placehold.co/600x400/transparent/A855F7?text=MacBook+Pro+16',
    cpu: 'Apple M3 Max',
    gpu: 'M3 Max GPU (40-core)',
    ram: '128GB',
    storage: '8TB SSD',
    screenSize: '16"',
    panelType: 'Mini-LED',
    refreshRate: '120Hz',
    weight: '2.14kg',
    resolution: '3456 x 2234',
    battery: '100Wh',
    ports: '3x Thunderbolt 4, HDMI 2.1',
    partNumber: 'MRW33LL/A'
  },
  {
    id: 5,
    name: 'Dell XPS 17 (9730)',
    tagline: 'Minimalist creator workstation',
    price: 2899,
    originalPrice: 3199,
    badge: 'Workstation',
    inStock: false,
    rating: 4.6,
    reviews: 95,
    image: 'https://placehold.co/600x400/transparent/38BDF8?text=Dell+XPS+17',
    cpu: 'Intel Core i7-13700H',
    gpu: 'NVIDIA RTX 4070',
    ram: '32GB',
    storage: '1TB SSD',
    screenSize: '17"',
    panelType: 'IPS',
    refreshRate: '60Hz',
    weight: '2.21kg',
    resolution: '3840 x 2400',
    battery: '97Wh',
    ports: '4x Thunderbolt 4, SD Reader',
    partNumber: 'XPS17-9730'
  },
  {
    id: 6,
    name: 'Lenovo Legion Pro 7i Gen 9',
    tagline: 'Raw gaming performance',
    price: 2799,
    originalPrice: 3099,
    badge: 'Gaming Pick',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    image: 'https://placehold.co/600x400/transparent/F97316?text=Legion+Pro+7i',
    cpu: 'Intel Core i9-14900HX',
    gpu: 'NVIDIA RTX 4090',
    ram: '32GB',
    storage: '2TB SSD',
    screenSize: '16"',
    panelType: 'IPS',
    refreshRate: '240Hz',
    weight: '2.8kg',
    resolution: '2560 x 1600',
    battery: '99.9Wh',
    ports: 'USB-C, HDMI 2.1, RJ45',
    partNumber: '82WQ0001US'
  }
];

// Facet options for deep filtering
export const FILTER_OPTIONS = {
  cpu: ['Intel Core i9-14900HX', 'Intel Core i7-13700H', 'Apple M3 Max'],
  gpu: ['NVIDIA RTX 4090', 'NVIDIA RTX 4080', 'NVIDIA RTX 4070', 'M3 Max GPU (40-core)'],
  ram: ['32GB', '64GB', '128GB'],
  storage: ['1TB SSD', '2TB SSD', '4TB SSD', '8TB SSD'],
  screenSize: ['16"', '17"'],
  panelType: ['OLED', 'Mini-LED', 'IPS'],
  refreshRate: ['60Hz', '120Hz', '165Hz', '240Hz'],
  weight: ['Under 2.5kg', '2.5kg and above']
};

export const FILTER_LABELS = {
  cpu: 'Processor',
  gpu: 'Graphics Card',
  ram: 'Memory',
  storage: 'Storage',
  screenSize: 'Screen Size',
  panelType: 'Panel Type',
  refreshRate: 'Refresh Rate',
  weight: 'Weight Class'
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
};

// ============================================================================
// ACCESSORIES DATA
// ============================================================================
export const ACCESSORIES = [
  {
    id: 'a1',
    name: 'NEXUS Pro Gaming Mouse',
    tagline: '25K DPI optical sensor',
    price: 89,
    originalPrice: 119,
    badge: 'Best Seller',
    inStock: true,
    rating: 4.8,
    reviews: 342,
    image: 'https://placehold.co/400x300/transparent/2563EB?text=Gaming+Mouse',
    category: 'Mice'
  },
  {
    id: 'a2',
    name: 'NEXUS Mechanical Keyboard',
    tagline: 'RGB hot-swappable switches',
    price: 149,
    originalPrice: 199,
    badge: 'New',
    inStock: true,
    rating: 4.7,
    reviews: 189,
    image: 'https://placehold.co/400x300/transparent/10B981?text=Mechanical+Keyboard',
    category: 'Keyboards'
  },
  {
    id: 'a3',
    name: 'NEXUS 4K Webcam',
    tagline: 'AI auto-framing',
    price: 199,
    originalPrice: null,
    badge: 'Creator Choice',
    inStock: true,
    rating: 4.6,
    reviews: 98,
    image: 'https://placehold.co/400x300/transparent/A855F7?text=4K+Webcam',
    category: 'Streaming'
  },
  {
    id: 'a4',
    name: 'NEXUS Laptop Stand Pro',
    tagline: 'Aluminum adjustable riser',
    price: 59,
    originalPrice: 79,
    badge: 'Popular',
    inStock: true,
    rating: 4.9,
    reviews: 512,
    image: 'https://placehold.co/400x300/transparent/F97316?text=Laptop+Stand',
    category: 'Stands'
  },
  {
    id: 'a5',
    name: 'NEXUS USB-C Docking Station',
    tagline: '14-in-1 Thunderbolt 4 dock',
    price: 299,
    originalPrice: 349,
    badge: 'Workstation',
    inStock: true,
    rating: 4.5,
    reviews: 76,
    image: 'https://placehold.co/400x300/transparent/38BDF8?text=USB-C+Dock',
    category: 'Docks'
  },
  {
    id: 'a6',
    name: 'NEXUS Premium Laptop Sleeve',
    tagline: 'Water-resistant vegan leather',
    price: 45,
    originalPrice: null,
    badge: 'Eco',
    inStock: true,
    rating: 4.7,
    reviews: 231,
    image: 'https://placehold.co/400x300/transparent/F1F5F9?text=Laptop+Sleeve',
    category: 'Bags'
  }
];

// ============================================================================
// REFURBISHED LAPTOPS DATA
// ============================================================================
export const REFURBISHED = PRODUCTS.map((p) => ({
  ...p,
  id: `ref-${p.id}`,
  name: `Refurbished ${p.name}`,
  price: Math.round(p.price * 0.75),
  originalPrice: p.price,
  badge: 'Refurbished',
  inStock: p.inStock,
  rating: Math.max(4, (p.rating - 0.2).toFixed(1))
}));

// ============================================================================
// CATEGORY HELPERS
// ============================================================================
export const GAMING_PRODUCTS = PRODUCTS.filter(
  (p) =>
    p.gpu.includes('RTX 4090') ||
    p.badge === 'Gaming Pick' ||
    p.badge === 'Best Seller' ||
    p.name.toLowerCase().includes('legion') ||
    p.name.toLowerCase().includes('rog')
);

export const CREATOR_PRODUCTS = PRODUCTS.filter(
  (p) =>
    p.badge === 'Creator Choice' ||
    p.badge === 'Workstation' ||
    p.badge === 'Apple Silicon' ||
    p.name.toLowerCase().includes('creator') ||
    p.name.toLowerCase().includes('macbook') ||
    p.name.toLowerCase().includes('xps')
);
