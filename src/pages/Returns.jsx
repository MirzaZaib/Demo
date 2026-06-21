import { RefreshCw, CalendarDays, Package, Truck } from 'lucide-react';
import PageTitle from '../components/PageTitle';

const Returns = () => {
  const steps = [
    {
      icon: CalendarDays,
      title: '30-Day Window',
      description: 'Start your return within 30 days of delivery for a full refund or exchange.'
    },
    {
      icon: Package,
      title: 'Easy Packaging',
      description: 'Use the original box and accessories. We provide a prepaid return label.'
    },
    {
      icon: Truck,
      title: 'Free Return Shipping',
      description: 'Returns are free for all orders within the continental United States.'
    },
    {
      icon: RefreshCw,
      title: 'Fast Refunds',
      description: 'Refunds are processed within 5-7 business days after we receive your return.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageTitle title="Returns" />
      <div className="text-center mb-12">
        <RefreshCw className="w-12 h-12 text-tech-green mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-tech-text">Returns</h1>
        <p className="text-tech-muted mt-4 max-w-2xl mx-auto">
          Changed your mind? Our hassle-free 30-day return policy has you covered.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="bg-tech-card border border-tech-border rounded-2xl p-6">
              <Icon className="w-8 h-8 text-tech-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-tech-text">{step.title}</h3>
              <p className="text-tech-muted mt-2">{step.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-tech-card border border-tech-border rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-bold font-heading text-tech-text mb-4">Return Conditions</h3>
        <ul className="space-y-3 text-tech-muted">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-tech-green rounded-full mt-2 flex-shrink-0"></span>
            Item must be in original condition with all packaging and accessories
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-tech-green rounded-full mt-2 flex-shrink-0"></span>
            Software licenses and digital downloads are non-refundable once activated
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-tech-green rounded-full mt-2 flex-shrink-0"></span>
            Custom-configured orders may be subject to a 15% restocking fee
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Returns;
