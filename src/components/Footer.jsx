import React from 'react';
import { ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="app-footer" className="w-full mt-12 py-6 border-t border-slate-200/80 bg-white/50 backdrop-blur-xs text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-4 h-4 text-teal-600" />
          <span className="font-semibold text-slate-700">ApexFit Equipment Co.</span>
          <span>•</span>
          <span>CS Knowledge System</span>
        </div>

        <div className="flex items-center gap-1.5 font-medium text-slate-600 bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200/60">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>Prototype build. Human review and approval required before sending to customers.</span>
        </div>

        <div className="text-[11px] text-slate-400">
          In-memory demo environment • No API keys required
        </div>
      </div>
    </footer>
  );
}
