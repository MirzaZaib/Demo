import { useMemo } from 'react';
import { Filter, X, Check } from 'lucide-react';
import { FILTER_OPTIONS, FILTER_LABELS } from '../data';

const FilterSection = ({ title, options, selected, onChange }) => {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold text-tech-text mb-3 font-heading">{title}</h4>
      <div className="space-y-2">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <label
              key={option}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-tech-card-hover cursor-pointer transition-colors group"
            >
              <div className={`
                w-4 h-4 rounded border flex items-center justify-center transition-all
                ${isSelected ? 'bg-tech-blue border-tech-blue' : 'border-tech-muted group-hover:border-tech-text'}
              `}>
                {isSelected && <Check className="w-3 h-3 text-white" />}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={isSelected}
                onChange={() => onChange(option)}
              />
              <span className={`text-sm ${isSelected ? 'text-tech-text' : 'text-tech-muted group-hover:text-tech-text'} transition-colors`}>
                {option}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

const FilterSidebar = ({ filters, setFilters, isOpen, onClose }) => {
  const activeFilterCount = useMemo(
    () => Object.values(filters).flat().length,
    [filters]
  );

  const toggleFilter = (category, option) => {
    setFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [category]: updated };
    });
  };

  const clearFilters = () => {
    setFilters(Object.fromEntries(Object.keys(FILTER_OPTIONS).map((k) => [k, []])));
  };

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold font-heading flex items-center gap-2">
          <Filter className="w-5 h-5 text-tech-blue" />
          Filters
          {activeFilterCount > 0 && (
            <span className="px-2 py-0.5 bg-tech-blue text-white text-xs rounded-full">{activeFilterCount}</span>
          )}
        </h3>
        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-xs text-tech-muted hover:text-tech-text underline"
          >
            Clear all
          </button>
        )}
      </div>

      {Object.entries(FILTER_OPTIONS).map(([category, options]) => (
        <FilterSection
          key={category}
          title={FILTER_LABELS[category]}
          options={options}
          selected={filters[category]}
          onChange={(option) => toggleFilter(category, option)}
        />
      ))}
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24 bg-tech-card border border-tech-border rounded-xl p-5">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            onClick={onClose}
          />
          <div className="fixed inset-y-0 left-0 w-80 bg-tech-card border-r border-tech-border z-50 p-5 overflow-y-auto lg:hidden">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-tech-card-hover rounded-lg"
            >
              <X className="w-5 h-5 text-tech-muted" />
            </button>
            {sidebarContent}
          </div>
        </>
      )}
    </>
  );
};

export default FilterSidebar;
