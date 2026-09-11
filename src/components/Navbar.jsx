import React from 'react';
import { COMPANY_INFO } from '../data.js';
import { Sparkles, ShieldCheck, Headphones, Activity } from 'lucide-react';

export default function Navbar({ activeTab, onTabChange }) {
  const { currentUser, name } = COMPANY_INFO;

  return (
    <header id="main-header" className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/85 border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm shadow-teal-600/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight">
                {name}
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200/60">
                CS Knowledge OS
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden md:block">
              Internal Customer Operations & Reply Intelligence
            </p>
          </div>
        </div>

        {/* Center: System Status Indicator */}
        <div className="hidden lg:flex items-center gap-4 text-xs font-medium text-slate-600 bg-slate-50/80 px-3 py-1.5 rounded-full border border-slate-200/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-700 font-semibold">KB v4.8 Active</span>
          </div>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Human-in-the-Loop Mode</span>
          </div>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1 text-slate-500">
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            <span>42 Verified Bulletins</span>
          </div>
        </div>

        {/* Right: Rep Profile & Queue Status */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-sm font-semibold text-slate-800 leading-tight">
              {currentUser.name}
            </span>
            <span className="text-xs text-slate-500 flex items-center justify-end gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {currentUser.role}
            </span>
          </div>
          
          <div className="relative">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-xl object-cover ring-2 ring-teal-500/20 shadow-sm"
            />
            <span
              title="Online - Available for escalation"
              className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"
            ></span>
          </div>
        </div>

      </div>
    </header>
  );
}
