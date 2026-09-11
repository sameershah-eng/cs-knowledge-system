import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line, 
  CartesianGrid, 
  Area, 
  AreaChart 
} from 'recharts';
import { 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  TrendingDown, 
  TrendingUp, 
  Sparkles, 
  Filter, 
  ShieldCheck, 
  Clock, 
  Inbox,
  ArrowUpRight,
  HelpCircle,
  Search
} from 'lucide-react';
import { REPORTING_DATA, MOCK_TICKETS } from '../data.js';

export default function Reporting({ onSelectArticleId, onShowToast }) {
  const { stats, frequentQuestions, topicsEscalated, firstResponseTimeTrend, mostUsedArticles } = REPORTING_DATA;
  const [ticketFilter, setTicketFilter] = useState('All'); // 'All', 'Captured', 'Excluded'
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filteredTickets = MOCK_TICKETS.filter(t => {
    if (ticketFilter === 'All') return true;
    if (ticketFilter === 'Captured') return t.capturedInKB === true;
    if (ticketFilter === 'Excluded') return t.capturedInKB === false;
    return true;
  });

  return (
    <div id="reporting-module" className="space-y-8">
      
      {/* Reporting Header */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                Operations & Knowledge Insights
              </h1>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                Live Customer Service Analytics
              </span>
            </div>
            <p className="text-sm text-slate-600">
              Track agent first-response acceleration, recurring ticket patterns, and knowledge extraction filtering efficiency.
            </p>
          </div>

          <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/80 self-start md:self-auto flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            Last 30 Days Rolling Period
          </span>
        </div>
      </div>

      {/* TOP STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Tickets */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Total Tickets Reviewed</span>
            <Inbox className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-2">
            {stats.totalTicketsReviewed.toLocaleString()}
          </div>
          <div className="mt-2 flex items-center text-xs font-semibold text-emerald-600 gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+14% volume vs last month</span>
          </div>
        </div>

        {/* Articles Published */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Articles Published</span>
            <FileText className="w-4 h-4 text-teal-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-2">
            {stats.articlesPublished}
          </div>
          <div className="mt-2 text-xs font-medium text-slate-500">
            <span>4 proposed drafts currently pending</span>
          </div>
        </div>

        {/* Escalation Rate */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Escalation Rate</span>
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-2">
            {stats.escalationRate}
          </div>
          <div className="mt-2 flex items-center text-xs font-semibold text-emerald-600 gap-1">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>{stats.escalationTrend}</span>
          </div>
        </div>

        {/* Average Confidence */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Average Grounding Confidence</span>
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-2">
            {stats.averageConfidence}
          </div>
          <div className="mt-2 flex items-center text-xs font-semibold text-emerald-600 gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{stats.confidenceTrend}</span>
          </div>
        </div>

      </div>

      {/* CHARTS ROW 1: Frequent Questions Bar Chart & FRT Trend Line */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Most Frequent Questions Bar Chart */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Most Frequent Customer Questions
              </h2>
              <p className="text-xs text-slate-500">
                Inbound customer inquiry distribution by technical topic.
              </p>
            </div>
            <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60">
              Top 6 Topics
            </span>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={frequentQuestions} layout="vertical" margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" tick={{ fontSize: 11, fill: '#64748b' }} />
                <YAxis dataKey="topic" type="category" width={140} tick={{ fontSize: 11, fill: '#334155' }} />
                <Tooltip 
                  formatter={(val) => [`${val} inquiries`, 'Volume']}
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                />
                <Bar dataKey="count" fill="#0d9488" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* First Response Time Trend Line Chart */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                First Response Time (FRT) Trend
              </h2>
              <p className="text-xs text-slate-500">
                Average minutes to first human-verified response over the last 6 weeks.
              </p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-emerald-600 block leading-tight">
                11.4 min
              </span>
              <span className="text-[10px] text-slate-600">
                down from 44.2 min
              </span>
            </div>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={firstResponseTimeTrend} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="frtGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#64748b' }} />
                <YAxis unit="m" tick={{ fontSize: 11, fill: '#64748b' }} />
                <Tooltip 
                  formatter={(val) => [`${val} minutes`, 'Avg FRT']}
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="frtMinutes" stroke="#0d9488" strokeWidth={3} fillOpacity={1} fill="url(#frtGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* CHARTS ROW 2: Topics Escalated Donut Chart & Most Used Articles Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Topics Most Escalated Donut Chart */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4 lg:col-span-1">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Topics Most Escalated
              </h2>
              <p className="text-xs text-slate-500">
                Inquiries triggering Tier 2 engineering intervention.
              </p>
            </div>
          </div>

          <div className="h-52 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={topicsEscalated}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {topicsEscalated.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(val) => [`${val}% of escalations`, 'Rate']}
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2 pt-1 border-t border-slate-100">
            {topicsEscalated.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-700 font-medium">{item.name}</span>
                </div>
                <span className="font-bold text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Most Used Articles Ranked List */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Most Used Knowledge Base Bulletins
                </h2>
                <p className="text-xs text-slate-500">
                  Highest deflection impact and customer satisfaction ratings.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                Top Deflections
              </span>
            </div>

            <div className="divide-y divide-slate-100 mt-2">
              {mostUsedArticles.map((art, idx) => (
                <div key={art.id} className="py-3 flex items-center justify-between gap-4 group">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate group-hover:text-teal-700 transition-colors">
                        {art.title}
                      </div>
                      <div className="text-[11px] text-slate-600 flex items-center gap-2">
                        <span className="font-mono">{art.id}</span>
                        <span>•</span>
                        <span>{art.uses} replies drafted</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-right flex-shrink-0">
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        {art.deflections}
                      </span>
                      <span className="text-[10px] text-slate-600">deflected</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-600 block">
                        {art.rating}
                      </span>
                      <span className="text-[10px] text-slate-600">satisfaction</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center justify-between">
            <span>Questions without approved answers: <strong>4 recurring topics (14+ tickets)</strong></span>
            <span className="text-teal-600 font-semibold">Tracked in Training & Gaps →</span>
          </div>
        </div>

      </div>

      {/* TICKET EXTRACTION EXPLORER: Demonstrating Technical vs Routine Filtering */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900">
                Ticket Knowledge Ingestion Log
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200/60">
                8 Sample CS Conversations
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Demonstrates automatic filtering: routine order status/billing inquiries are excluded, while technical product knowledge is captured.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-xl text-xs">
            <button
              onClick={() => setTicketFilter('All')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                ticketFilter === 'All' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All (8)
            </button>
            <button
              onClick={() => setTicketFilter('Captured')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                ticketFilter === 'Captured' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Captured into KB (5)
            </button>
            <button
              onClick={() => setTicketFilter('Excluded')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                ticketFilter === 'Excluded' ? 'bg-white text-slate-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Excluded Routine (3)
            </button>
          </div>
        </div>

        <div className="divide-y divide-slate-100 overflow-x-auto">
          {filteredTickets.map((ticket) => (
            <div 
              key={ticket.id} 
              className="py-3.5 space-y-2 hover:bg-slate-50/50 p-2 rounded-xl transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                    {ticket.id}
                  </span>
                  <span className="text-xs font-semibold text-slate-900">
                    {ticket.customer}
                  </span>
                  <span className="text-xs text-slate-600">• {ticket.product}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    ticket.capturedInKB
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {ticket.capturedInKB ? 'Captured into KB' : 'Excluded from KB'}
                  </span>
                  <span className="text-[10px] text-slate-600">{ticket.date}</span>
                </div>
              </div>

              {/* Filtering Reason Badge */}
              <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>{ticket.filteringReason}</span>
              </div>

              {/* Collapsed or preview conversation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200/80">
                  <span className="font-bold text-slate-700 block mb-0.5">Customer Message:</span>
                  <p className="text-slate-600 italic">"{ticket.customerMessage}"</p>
                </div>
                <div className="p-2.5 rounded-lg bg-teal-50/40 border border-teal-100">
                  <span className="font-bold text-teal-900 block mb-0.5">Agent Verified Reply:</span>
                  <p className="text-slate-700">"{ticket.repReply}"</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
