import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />,
    warning: <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-sky-600 flex-shrink-0" />
  };

  const bgColors = {
    success: 'bg-white border-emerald-200 text-slate-800 shadow-emerald-100/50',
    warning: 'bg-white border-amber-200 text-slate-800 shadow-amber-100/50',
    error: 'bg-white border-rose-200 text-slate-800 shadow-rose-100/50',
    info: 'bg-white border-sky-200 text-slate-800 shadow-sky-100/50'
  };

  return (
    <div
      id="toast-notification"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg transition-all duration-300 transform translate-y-0 ${bgColors[toast.type || 'info']}`}
    >
      {icons[toast.type || 'info']}
      <div className="text-sm font-medium pr-2">
        {toast.message}
      </div>
      <button
        id="toast-close-btn"
        onClick={onClose}
        className="text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
