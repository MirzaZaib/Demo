import { ShieldCheck, Clock, Wrench, FileCheck } from 'lucide-react';
import PageTitle from '../components/PageTitle';

const Warranty = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: '2-Year Premium Warranty',
      description: 'Every new laptop comes with a comprehensive 2-year warranty covering hardware defects and performance issues.'
    },
    {
      icon: Clock,
      title: '24-Hour Response',
      description: 'Our support team commits to diagnosing your issue within 24 hours of contacting us.'
    },
    {
      icon: Wrench,
      title: 'On-Site Repair Options',
      description: 'Available in select metro areas, certified technicians can repair your device at your location.'
    },
    {
      icon: FileCheck,
      title: 'Extended Protection Plans',
      description: 'Add accidental damage protection and extended coverage up to 4 years at checkout.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageTitle title="Warranty" />
      <div className="text-center mb-12">
        <ShieldCheck className="w-12 h-12 text-tech-green mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-tech-text">Warranty</h1>
        <p className="text-tech-muted mt-4 max-w-2xl mx-auto">
          Shop with confidence. NEXUS warranties protect your investment from day one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="bg-tech-card border border-tech-border rounded-2xl p-6">
              <Icon className="w-8 h-8 text-tech-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-tech-text">{feature.title}</h3>
              <p className="text-tech-muted mt-2">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-tech-card border border-tech-border rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-bold font-heading text-tech-text mb-4">What's Covered</h3>
        <ul className="space-y-3 text-tech-muted">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-tech-green rounded-full mt-2 flex-shrink-0"></span>
            Manufacturing defects in materials and workmanship
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-tech-green rounded-full mt-2 flex-shrink-0"></span>
            Display, keyboard, battery, and motherboard failures under normal use
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-tech-green rounded-full mt-2 flex-shrink-0"></span>
            Free return shipping for warranty claims
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-tech-green rounded-full mt-2 flex-shrink-0"></span>
            Loaner device program for qualifying repairs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Warranty;
