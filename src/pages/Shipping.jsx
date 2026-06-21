import { Truck, Clock, Globe, ShieldCheck } from 'lucide-react';
import PageTitle from '../components/PageTitle';

const Shipping = () => {
  const methods = [
    {
      icon: Truck,
      title: 'Express Shipping',
      description: 'Free 2-day express shipping on all laptop orders over $2,000.'
    },
    {
      icon: Clock,
      title: 'Same-Day Dispatch',
      description: 'Orders placed before 2 PM PST ship the same business day.'
    },
    {
      icon: Globe,
      title: 'International Delivery',
      description: 'We ship worldwide with duties and taxes calculated at checkout.'
    },
    {
      icon: ShieldCheck,
      title: 'Insured Packages',
      description: 'Every shipment is fully insured and requires signature confirmation.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageTitle title="Shipping" />
      <div className="text-center mb-12">
        <Truck className="w-12 h-12 text-tech-green mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-tech-text">Shipping</h1>
        <p className="text-tech-muted mt-4 max-w-2xl mx-auto">
          Fast, secure, and transparent delivery for every order.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {methods.map((method) => {
          const Icon = method.icon;
          return (
            <div key={method.title} className="bg-tech-card border border-tech-border rounded-2xl p-6">
              <Icon className="w-8 h-8 text-tech-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-tech-text">{method.title}</h3>
              <p className="text-tech-muted mt-2">{method.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full bg-tech-card border border-tech-border rounded-2xl">
          <thead>
            <tr className="border-b border-tech-border">
              <th className="text-left p-4 text-sm font-semibold text-tech-muted">Shipping Method</th>
              <th className="text-left p-4 text-sm font-semibold text-tech-muted">Cost</th>
              <th className="text-left p-4 text-sm font-semibold text-tech-muted">Delivery Time</th>
            </tr>
          </thead>
          <tbody className="text-sm text-tech-text">
            <tr className="border-b border-tech-border">
              <td className="p-4">Standard Ground</td>
              <td className="p-4">Free over $500</td>
              <td className="p-4">5-7 business days</td>
            </tr>
            <tr className="border-b border-tech-border">
              <td className="p-4">Express 2-Day</td>
              <td className="p-4">Free over $2,000</td>
              <td className="p-4">2 business days</td>
            </tr>
            <tr>
              <td className="p-4">Next Day Air</td>
              <td className="p-4">$89</td>
              <td className="p-4">1 business day</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shipping;
