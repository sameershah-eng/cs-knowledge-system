import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  AlertTriangle, 
  ExternalLink, 
  BookOpen, 
  RotateCcw, 
  ArrowRight,
  ShieldCheck,
  LifeBuoy,
  FileCheck2,
  Clock,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';
import { PRESET_QUESTIONS, findSuggestedReply } from '../data.js';

export default function ReplyAssistant({ articles, onSelectArticle, onShowToast }) {
  const [question, setQuestion] = useState(PRESET_QUESTIONS[0].question);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState(() => findSuggestedReply(PRESET_QUESTIONS[0].question, articles));
  const [editableText, setEditableText] = useState(result ? result.suggestedText : '');
  const [copied, setCopied] = useState(false);
  const [inserted, setInserted] = useState(false);
  const [escalated, setEscalated] = useState(false);

  // When user clicks a preset question
  const handleSelectPreset = (preset) => {
    setQuestion(preset.question);
    setCopied(false);
    setInserted(false);
    setEscalated(false);
    
    // Simulate instantaneous analysis
    setIsGenerating(true);
    setTimeout(() => {
      const match = findSuggestedReply(preset.question, articles);
      setResult(match);
      setEditableText(match ? match.suggestedText : '');
      setIsGenerating(false);
      onShowToast({
        type: 'info',
        message: `Loaded template for: ${preset.label}`
      });
    }, 280);
  };

  // Submit custom or edited question
  const handleGenerate = (e) => {
    if (e) e.preventDefault();
    if (!question.trim()) return;

    setIsGenerating(true);
    setCopied(false);
    setInserted(false);
    setEscalated(false);

    setTimeout(() => {
      const match = findSuggestedReply(question, articles);
      setResult(match);
      setEditableText(match ? match.suggestedText : '');
      setIsGenerating(false);

      if (match?.needsEscalation) {
        onShowToast({
          type: 'warning',
          message: 'Low confidence match: Escalation recommended'
        });
      } else {
        onShowToast({
          type: 'success',
          message: `Grounded reply generated with ${match.confidence} confidence`
        });
      }
    }, 350);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editableText);
    setCopied(true);
    onShowToast({
      type: 'success',
      message: 'Suggested reply copied to clipboard!'
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInsert = () => {
    setInserted(true);
    onShowToast({
      type: 'success',
      message: 'Draft reply populated into active ticket editor!'
    });
  };

  const handleEscalate = () => {
    setEscalated(true);
    onShowToast({
      type: 'warning',
      message: 'Ticket escalated to Hardware Engineering Lead (Marcus Vance)'
    });
  };

  const handleClear = () => {
    setQuestion('');
    setResult(null);
    setEditableText('');
    setCopied(false);
    setInserted(false);
    setEscalated(false);
  };

  return (
    <div id="reply-assistant-module" className="space-y-6">
      
      {/* Module Banner / Introduction */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                Reply Assistant
              </h1>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200/70">
                Grounding Engine v4.8
              </span>
            </div>
            <p className="text-sm text-slate-600">
              Paste or type an inbound customer inquiry below. The assistant retrieves verified engineering bulletins and policies to formulate an accurate, human-toned draft.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/60 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Policy Grounded
            </span>
          </div>
        </div>

        {/* Preset Question Pills */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Instant Test Scenarios (Click to load):
            </span>
            <span className="text-xs text-slate-600">
              5 verified + 1 edge case
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {PRESET_QUESTIONS.map((preset, idx) => (
              <button
                key={idx}
                id={`preset-btn-${idx}`}
                onClick={() => handleSelectPreset(preset)}
                className={`text-xs px-3 py-1.5 rounded-xl border font-medium transition-all text-left flex items-center gap-1.5 ${
                  question === preset.question
                    ? 'bg-teal-50 border-teal-300 text-teal-900 shadow-sm ring-1 ring-teal-400/30'
                    : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Box Form */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-sm">
        <form onSubmit={handleGenerate} className="space-y-4">
          <div className="flex items-center justify-between">
            <label 
              htmlFor="customer-question-input"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-teal-600" />
              Customer Inquiry / Ticket Message:
            </label>
            {question && (
              <button
                type="button"
                onClick={handleClear}
                className="text-xs text-slate-600 hover:text-slate-800 transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          <div className="relative">
            <textarea
              id="customer-question-input"
              rows={3}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g. How do I balance the walking belt on the T800? Or customer asks to return dumbbell after 45 days..."
              className="w-full text-sm text-slate-900 bg-slate-50/50 p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all placeholder:text-slate-400 font-sans"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div className="text-xs text-slate-600 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Simulated matching queries {articles.length} approved knowledge articles</span>
            </div>

            <button
              type="submit"
              id="generate-reply-btn"
              disabled={isGenerating || !question.trim()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-sm font-semibold shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Analyzing Knowledge Base...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Suggested Reply</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Suggested Reply Output & Sources Panel */}
      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
          
          {/* Main Reply Box (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              
              {/* Header with Confidence Badge & Reason */}
              <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Grounding Confidence:
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${result.confidenceBadgeColor}`}>
                    {result.confidence} Confidence
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    id="copy-reply-btn"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-all shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Reply</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleInsert}
                    id="insert-reply-btn"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition-all shadow-2xs"
                  >
                    {inserted ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Inserted!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Insert in Ticket</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Confidence Reason Callout */}
              <div className="px-5 py-2.5 bg-slate-100/60 border-b border-slate-100 text-xs text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>{result.confidenceReason}</span>
              </div>

              {/* Low Confidence Warning / Escalation Banner */}
              {(result.needsEscalation || result.confidence === 'Low') && (
                <div className="p-4 bg-rose-50 border-b border-rose-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-rose-900">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-rose-800">
                        Attention: Low Confidence / No Exact Bulletin Match
                      </div>
                      <div className="text-xs text-rose-700 mt-0.5">
                        This inquiry cannot be safely answered automatically without risking misinformation or voiding equipment warranties. Escalate directly to Tier 2 Hardware Engineering.
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleEscalate}
                    disabled={escalated}
                    id="escalate-owner-btn"
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold whitespace-nowrap shadow-sm transition-all disabled:opacity-50"
                  >
                    {escalated ? 'Escalated to Engineering' : 'Escalate to Owner'}
                  </button>
                </div>
              )}

              {/* Editable Suggested Text Area */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Drafted Response (Editable by Rep):
                  </span>
                  <span className="text-xs text-slate-600">
                    Warm, professional customer service tone
                  </span>
                </div>

                <textarea
                  id="suggested-reply-editor"
                  rows={13}
                  value={editableText}
                  onChange={(e) => setEditableText(e.target.value)}
                  className="w-full text-sm font-normal text-slate-800 bg-slate-50/40 p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white leading-relaxed transition-all font-sans"
                />

                <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
                  <span>Characters: {editableText.length}</span>
                  <span className="italic">Human approval required before transmission</span>
                </div>
              </div>

            </div>
          </div>

          {/* Sources Used Panel (1 Column) */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-teal-600" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Sources Used ({result.sources.length})
                  </h2>
                </div>
                <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
                  Verified KB
                </span>
              </div>

              {result.sources.length === 0 ? (
                <div className="p-6 text-center text-slate-600 text-xs">
                  <AlertTriangle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  No direct knowledge base bulletins matched this inquiry.
                </div>
              ) : (
                <div className="space-y-3">
                  {result.sources.map((source) => (
                    <div
                      key={source.id}
                      className="p-3.5 rounded-xl border border-slate-200/80 hover:border-teal-300 hover:bg-teal-50/30 transition-all group"
                    >
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700 font-mono">
                          {source.id}
                        </span>
                        <span className="text-[10px] font-medium text-slate-600">
                          {source.product}
                        </span>
                      </div>

                      <h3 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-teal-700 transition-colors">
                        {source.title}
                      </h3>

                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                        {source.summary}
                      </p>

                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] text-slate-600">
                          Tickets: {(source.sourceTickets || []).slice(0, 2).join(', ')}
                        </span>
                        
                        <button
                          onClick={() => onSelectArticle(source)}
                          className="text-[11px] font-semibold text-teal-600 hover:text-teal-800 flex items-center gap-1 transition-colors"
                        >
                          <span>View article</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Source Verification Badge */}
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500 flex items-start gap-2">
                <FileCheck2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  Source bulletins are regularly audited by Quality Assurance and Technical Operations leads.
                </span>
              </div>
            </div>

            {/* Rep Assistance Quick Tips */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-50/50 to-sky-50/50 border border-teal-100 text-xs text-slate-700">
              <div className="font-semibold text-slate-800 mb-1 flex items-center gap-1.5">
                <ThumbsUp className="w-3.5 h-3.5 text-teal-600" />
                Customer Success Pro-Tip
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600">
                Always confirm whether the customer is under warranty before offering courier pickup. If the customer indicates an electrical burning smell, recommend immediate unplugging.
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
