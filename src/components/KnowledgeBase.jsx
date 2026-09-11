import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Edit3, 
  GitMerge, 
  ExternalLink,
  BookOpen,
  Tag,
  Calendar,
  Layers,
  FileQuestion,
  RefreshCw,
  FileCheck
} from 'lucide-react';

export default function KnowledgeBase({ 
  articles, 
  setArticles,
  proposedArticles, 
  setProposedArticles,
  onSelectArticle, 
  onShowToast 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [isCreatingArticle, setIsCreatingArticle] = useState(false);
  const [newArticleForm, setNewArticleForm] = useState({
    title: '',
    product: 'Treadmills',
    topic: 'Troubleshooting',
    summary: '',
    body: '',
    sourceTickets: '#TK-9201'
  });

  const products = ['All', 'Treadmills', 'Power Racks', 'Adjustable Dumbbells', 'Rowing Machines', 'Exercise Bikes', 'Resistance Bands', 'General'];
  const topics = ['All', 'Installation', 'Troubleshooting', 'Policy', 'Compatibility', 'General'];
  const statuses = ['All', 'Approved', 'Draft', 'Needs Review', 'Outdated'];

  // Filtered Approved / Live Articles
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesSearch = 
        !searchQuery.trim() ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (art.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        art.id.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesProduct = selectedProduct === 'All' || art.product === selectedProduct;
      const matchesTopic = selectedTopic === 'All' || art.topic === selectedTopic;
      const matchesStatus = selectedStatus === 'All' || (art.status || 'Approved') === selectedStatus;

      return matchesSearch && matchesProduct && matchesTopic && matchesStatus;
    });
  }, [articles, searchQuery, selectedProduct, selectedTopic, selectedStatus]);

  // Actions on Proposed Articles
  const handleApproveProposed = (proposedItem) => {
    // Add to approved articles
    const newApproved = {
      id: `KB-REV-${Math.floor(100 + Math.random() * 900)}`,
      title: proposedItem.title,
      product: proposedItem.product,
      topic: proposedItem.topic,
      status: 'Approved',
      lastUpdated: new Date().toISOString().split('T')[0],
      author: 'Sarah Chen (Reviewed)',
      sourceTickets: proposedItem.sourceTickets || [],
      summary: proposedItem.summary,
      body: proposedItem.draftBody,
      tags: [proposedItem.product.toLowerCase(), 'approved-review']
    };

    setArticles(prev => [newApproved, ...prev]);
    setProposedArticles(prev => prev.filter(p => p.id !== proposedItem.id));
    onShowToast({
      type: 'success',
      message: `Approved and published "${proposedItem.title}" to Knowledge Base!`
    });
  };

  const handleRejectProposed = (proposedItem) => {
    setProposedArticles(prev => prev.filter(p => p.id !== proposedItem.id));
    onShowToast({
      type: 'info',
      message: `Rejected proposed draft "${proposedItem.title}".`
    });
  };

  const handleMergeProposed = (proposedItem) => {
    // Find target article to merge into
    const targetArticle = articles.find(a => a.product === proposedItem.product) || articles[0];
    setArticles(prev => prev.map(art => {
      if (art.id === targetArticle.id) {
        return {
          ...art,
          body: art.body + `\n\n[Merged Addendum from ${proposedItem.id}]:\n` + proposedItem.draftBody,
          lastUpdated: new Date().toISOString().split('T')[0],
          sourceTickets: Array.from(new Set([...art.sourceTickets, ...proposedItem.sourceTickets]))
        };
      }
      return art;
    }));

    setProposedArticles(prev => prev.filter(p => p.id !== proposedItem.id));
    onShowToast({
      type: 'success',
      message: `Merged draft content into existing bulletin ${targetArticle.id} (${targetArticle.title})`
    });
  };

  const handleCreateArticleSubmit = (e) => {
    e.preventDefault();
    if (!newArticleForm.title.trim() || !newArticleForm.body.trim()) return;

    const newArt = {
      id: `KB-MAN-${Math.floor(100 + Math.random() * 900)}`,
      title: newArticleForm.title,
      product: newArticleForm.product,
      topic: newArticleForm.topic,
      status: 'Approved',
      lastUpdated: new Date().toISOString().split('T')[0],
      author: 'Sarah Chen (Tier 2)',
      sourceTickets: newArticleForm.sourceTickets.split(',').map(s => s.trim()),
      summary: newArticleForm.summary || newArticleForm.body.slice(0, 120) + '...',
      body: newArticleForm.body,
      tags: [newArticleForm.product.toLowerCase(), newArticleForm.topic.toLowerCase()]
    };

    setArticles(prev => [newArt, ...prev]);
    setIsCreatingArticle(false);
    setNewArticleForm({
      title: '',
      product: 'Treadmills',
      topic: 'Troubleshooting',
      summary: '',
      body: '',
      sourceTickets: '#TK-9201'
    });
    onShowToast({
      type: 'success',
      message: `Created new technical bulletin "${newArt.title}"`
    });
  };

  return (
    <div id="knowledge-base-module" className="space-y-8">
      
      {/* Module Header */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                Knowledge Base & Bulletin Library
              </h1>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {articles.length} Verified Bulletins
              </span>
            </div>
            <p className="text-sm text-slate-600">
              Browse approved technical repair manuals, assembly sequences, and customer service policies.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCreatingArticle(true)}
              id="new-article-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Bulletin</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              id="kb-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, symptom, keywords..."
              className="w-full text-xs text-slate-800 bg-slate-50 pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
            />
          </div>

          {/* Product Filter */}
          <div>
            <select
              id="filter-product-select"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full text-xs text-slate-800 bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            >
              <option value="All">Product: All Categories</option>
              {products.filter(p => p !== 'All').map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Topic Filter */}
          <div>
            <select
              id="filter-topic-select"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full text-xs text-slate-800 bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            >
              <option value="All">Topic: All Topics</option>
              {topics.filter(t => t !== 'All').map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              id="filter-status-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full text-xs text-slate-800 bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            >
              <option value="All">Status: All Statuses</option>
              {statuses.filter(s => s !== 'All').map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* PROPOSED ARTICLES SECTION */}
      {proposedArticles.length > 0 && (
        <div id="proposed-articles-section" className="bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40 rounded-2xl p-6 border border-amber-200/80 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-amber-200/60">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
                <Sparkles className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-slate-900">
                    Proposed Articles Awaiting Review
                  </h2>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-200/80 text-amber-900">
                    {proposedArticles.length} Pending
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  AI-drafted knowledge extracted from recurring customer service tickets. Review, approve, or merge into existing bulletins.
                </p>
              </div>
            </div>

            <span className="text-[11px] font-medium text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-md border border-amber-200 self-start sm:self-auto">
              Automated Ticket Extraction
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proposedArticles.map((prop) => (
              <div
                key={prop.id}
                id={`proposed-card-${prop.id}`}
                className="bg-white rounded-xl p-4 border border-amber-200/90 shadow-2xs space-y-3 relative hover:shadow-sm transition-all"
              >
                {/* Possible Duplicate Flag */}
                {prop.duplicateFlag && (
                  <div className="p-2.5 rounded-lg bg-amber-100/70 border border-amber-300 text-xs text-amber-900 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Duplicate Alert:</span> {prop.duplicateFlag}
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700">
                      {prop.id}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-teal-50 text-teal-700 border border-teal-200/60">
                      {prop.product}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                      Draft Proposal
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-600">
                    {prop.suggestedDate}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {prop.summary}
                  </p>
                </div>

                {/* Source tickets */}
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
                  <span className="font-medium text-slate-700">Sources:</span>
                  {(prop.sourceTickets || []).map(st => (
                    <span key={st} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-[10px]">
                      {st}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: Approve / Edit / Reject / Merge */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleApproveProposed(prop)}
                      id={`approve-${prop.id}`}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1 shadow-2xs transition-colors cursor-pointer"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Approve</span>
                    </button>

                    <button
                      onClick={() => onSelectArticle({ ...prop, isProposed: true })}
                      id={`edit-${prop.id}`}
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-slate-500" />
                      <span>Edit</span>
                    </button>

                    <button
                      onClick={() => handleMergeProposed(prop)}
                      id={`merge-${prop.id}`}
                      title="Merge into existing bulletin"
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <GitMerge className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Merge</span>
                    </button>
                  </div>

                  <button
                    onClick={() => handleRejectProposed(prop)}
                    id={`reject-${prop.id}`}
                    className="text-xs font-semibold text-rose-600 hover:text-rose-800 p-1.5 transition-colors cursor-pointer"
                  >
                    Reject
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* APPROVED KNOWLEDGE BASE ARTICLES LIST */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-900">
              Approved Bulletins & Policies ({filteredArticles.length})
            </h2>
          </div>
          <span className="text-xs text-slate-600">
            Showing {filteredArticles.length} of {articles.length} records
          </span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80">
            <FileQuestion className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-semibold text-slate-800">No articles matched your filter</h3>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search terms or resetting the product/topic dropdowns.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedProduct('All');
                setSelectedTopic('All');
                setSelectedStatus('All');
              }}
              className="mt-3 px-3 py-1.5 text-xs font-semibold text-teal-600 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                id={`article-card-${article.id}`}
                onClick={() => onSelectArticle(article)}
                className="bg-white rounded-xl p-5 border border-slate-200/80 hover:border-teal-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Conflict Flag Notice on specific articles */}
                  {article.conflictFlag && (
                    <div className="mb-3 p-2 rounded-lg bg-rose-50 border border-rose-200 text-[11px] text-rose-800 flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Policy Conflict:</span> Newer ticket memo updates return window.
                      </div>
                    </div>
                  )}

                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700">
                      {article.id}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                      article.status === 'Approved'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {article.status || 'Approved'}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                      {article.product}
                    </span>
                    <span className="text-slate-600">
                      {article.topic}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-600">
                    <span>Updated: {article.lastUpdated}</span>
                    <span className="font-mono">{(article.sourceTickets || []).join(', ')}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* CREATE NEW ARTICLE MODAL */}
      {isCreatingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">
                Draft New Technical Bulletin
              </h2>
              <button
                onClick={() => setIsCreatingArticle(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateArticleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Bulletin Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Horizon-Glide T800: Incline Motor Calibration"
                  value={newArticleForm.title}
                  onChange={(e) => setNewArticleForm({ ...newArticleForm, title: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Product</label>
                  <select
                    value={newArticleForm.product}
                    onChange={(e) => setNewArticleForm({ ...newArticleForm, product: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                  >
                    {products.filter(p => p !== 'All').map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Topic</label>
                  <select
                    value={newArticleForm.topic}
                    onChange={(e) => setNewArticleForm({ ...newArticleForm, topic: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                  >
                    {topics.filter(t => t !== 'All').map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Executive Summary</label>
                <input
                  type="text"
                  placeholder="Short 1-line description of problem and fix"
                  value={newArticleForm.summary}
                  onChange={(e) => setNewArticleForm({ ...newArticleForm, summary: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Source Ticket IDs (comma-separated)</label>
                <input
                  type="text"
                  placeholder="#TK-9020, #TK-9031"
                  value={newArticleForm.sourceTickets}
                  onChange={(e) => setNewArticleForm({ ...newArticleForm, sourceTickets: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Detailed Technical Steps & Procedures</label>
                <textarea
                  rows={6}
                  required
                  placeholder="Step 1: Unplug power...\nStep 2: Inspect sensor probe..."
                  value={newArticleForm.body}
                  onChange={(e) => setNewArticleForm({ ...newArticleForm, body: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 font-sans"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCreatingArticle(false)}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-sm"
                >
                  Publish Bulletin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
