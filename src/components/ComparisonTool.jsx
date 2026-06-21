import { X } from 'lucide-react';
import { PRODUCTS, formatPrice } from '../data';

const ComparisonTool = ({ compareIds, onRemove }) => {
  const comparedProducts = PRODUCTS.filter((p) => compareIds.includes(p.id));

  if (comparedProducts.length === 0) return null;

  const specRows = [
    { label: 'Price', key: 'price', format: (v) => formatPrice(v) },
    { label: 'Processor', key: 'cpu' },
    { label: 'Graphics', key: 'gpu' },
    { label: 'Memory', key: 'ram' },
    { label: 'Storage', key: 'storage' },
    { label: 'Display', key: 'screenSize', format: (v, p) => `${v} ${p.panelType} @ ${p.refreshRate}` },
    { label: 'Resolution', key: 'resolution' },
    { label: 'Weight', key: 'weight' },
    { label: 'Battery', key: 'battery' },
    { label: 'Ports', key: 'ports' },
    { label: 'SKU', key: 'partNumber' }
  ];

  return (
    <section className="mt-16 animate-fade-in-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold font-heading">Compare Devices</h2>
          <p className="text-tech-muted text-sm mt-1">Side-by-side spec comparison for up to 4 laptops</p>
        </div>
        <div className="text-sm text-tech-muted">
          {comparedProducts.length} of 4 selected
        </div>
      </div>

      <div className="bg-tech-card border border-tech-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-tech-border">
                <th className="text-left p-4 text-sm font-semibold text-tech-muted bg-tech-card compare-header min-w-[160px]">Specification</th>
                {comparedProducts.map((product) => (
                  <th key={product.id} className="p-4 bg-tech-card compare-header min-w-[200px]">
                    <div className="text-left">
                      <div className="flex items-start justify-between">
                        <span className="font-bold font-heading text-tech-text">{product.name}</span>
                        <button
                          onClick={() => onRemove(product.id)}
                          className="p-1 hover:bg-tech-card-hover rounded transition-colors ml-2"
                        >
                          <X className="w-4 h-4 text-tech-muted" />
                        </button>
                      </div>
                      <div className="text-tech-blue font-bold mt-1">{formatPrice(product.price)}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specRows.map((row, idx) => (
                <tr key={row.key} className={idx % 2 === 0 ? 'bg-tech-bg/30' : ''}>
                  <td className="p-4 text-sm font-semibold text-tech-muted border-r border-tech-border">{row.label}</td>
                  {comparedProducts.map((product) => (
                    <td key={`${product.id}-${row.key}`} className="p-4 text-sm font-mono text-tech-text border-r border-tech-border last:border-r-0">
                      {row.format ? row.format(product[row.key], product) : product[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTool;
