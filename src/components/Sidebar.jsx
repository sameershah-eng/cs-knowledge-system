import React from 'react';
import { 
  MessageSquareQuote, 
  BookOpen, 
  GraduationCap, 
  BarChart3, 
  Dumbbell, 
  Sparkles,
  LifeBuoy
} from 'lucide-react';

export default function Sidebar({ activeTab, onTabChange, proposedCount = 4, gapsCount = 4 }) {
  const navItems = [
    {
      id: 'reply-assistant',
      label: 'Reply Assistant',
      description: 'Draft sourced responses',
      icon: MessageSquareQuote,
      badge: null,
    },
    {
      id: 'knowledge-base',
      label: 'Knowledge Base',
      description: 'Bulletins & proposed drafts',
      icon: BookOpen,
      badge: proposedCount > 0 ? `${proposedCount} review` : null,
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    },
    {
      id: 'training',
      label: 'Training & Gaps',
      description: 'Learning paths & quiz',
      icon: GraduationCap,
      badge: gapsCount > 0 ? `${gapsCount} gaps` : null,
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    },
    {
      id: 'reporting',
      label: 'Reporting & Insights',
      description: 'FRT trends & metrics',
      icon: BarChart3,
      badge: null,
    },
  ];

  return (
    <aside id="sidebar-nav" className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 border border-slate-200/80 shadow-sm">
        
        <div className="px-3 pt-2 pb-3 mb-1 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Workspace Modules
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/50">
            <Dumbbell className="w-3 h-3 text-teal-600" />
            Fitness Ops
          </span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-150 group ${
                  isActive
                    ? 'bg-slate-900 text-white font-medium shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`p-1.5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-teal-500/20 text-teal-300'
                        : 'text-slate-400 group-hover:text-slate-700 bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-sm font-semibold truncate leading-tight">
                      {item.label}
                    </div>
                    <div
                      className={`text-[11px] truncate ${
                        isActive ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {item.description}
                    </div>
                  </div>
                </div>

                {item.badge && (
                  <span
                    className={`ml-2 px-1.5 py-0.5 text-[10px] font-semibold rounded-md border whitespace-nowrap ${
                      isActive
                        ? 'bg-teal-400/20 text-teal-200 border-teal-400/30'
                        : item.badgeColor
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Context Card */}
        <div className="mt-4 pt-3 border-t border-slate-100 px-2 pb-1">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-50/60 to-sky-50/60 border border-teal-100/80 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-teal-900 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Grounding Guarantee</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Every suggestion is grounded in approved engineering bulletins. Responses below threshold trigger instant Tier 2 escalation.
            </p>
          </div>
        </div>

      </div>
    </aside>
  );
}
