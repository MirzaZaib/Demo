const Badge = ({ children, variant = 'blue' }) => {
  const variants = {
    blue: 'bg-tech-blue/10 text-tech-blue border-tech-blue/20',
    green: 'bg-tech-green/10 text-tech-green border-tech-green/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    gray: 'bg-tech-card-hover text-tech-muted border-tech-border'
  };
  return (
    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
