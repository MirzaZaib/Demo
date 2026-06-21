import { useEffect } from 'react';
import { X, CheckCircle, Info, AlertCircle } from 'lucide-react';

const icons = {
  success: CheckCircle,
  info: Info,
  error: AlertCircle,
};

const colors = {
  success: 'text-tech-green border-tech-green/20 bg-tech-green/10',
  info: 'text-tech-blue border-tech-blue/20 bg-tech-blue/10',
  error: 'text-red-400 border-red-500/20 bg-red-500/10',
};

export const Toast = ({ toast, onRemove }) => {
  const Icon = icons[toast.type] || Info;

  useEffect(() => {
    const timer = setTimeout(() => onRemove(toast.id), 4000);
    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg backdrop-blur-sm animate-fade-in-up ${colors[toast.type]}`}>
      <Icon className="w-5 h-5 flex-shrink-0" />
      <p className="text-sm font-medium text-tech-text">{toast.message}</p>
      <button
        onClick={() => onRemove(toast.id)}
        className="ml-auto p-1 hover:bg-white/10 rounded transition-colors"
      >
        <X className="w-4 h-4 text-tech-muted" />
      </button>
    </div>
  );
};

export const ToastContainer = ({ toasts, onRemove }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-[110] flex flex-col gap-3 w-full max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
};
