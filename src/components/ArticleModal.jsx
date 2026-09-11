import React, { useState } from 'react';
import { X, FileText, AlertTriangle, CheckCircle, Tag, Calendar, User, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function ArticleModal({ article, onClose, onSave, onApprove, onReject, isProposed = false }) {
  if (!article) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(article.title);
  const [editedBody, setEditedBody] = useState(article.body || article.draftBody || '');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(editedBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    if (onSave) {
      onSave({
        ...article,
        title: editedTitle,
        body: editedBody,
        draftBody: editedBody
      });
    }
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div 
        id="article-detail-modal"
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200/80 flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 font-mono">
                {article.id}
              </span>
              <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200/60">
                {article.product}
              </span>
              <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200/60">
                {article.topic}
              </span>
              <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${
                article.status === 'Approved' 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}>
                {article.status || (isProposed ? 'Proposed Draft' : 'Draft')}
              </span>
            </div>

            {isEditing ? (
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="w-full text-xl font-bold text-slate-900 border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            ) : (
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {article.title}
              </h2>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 flex-1">
          {/* Duplicate / Conflict Flags */}
          {article.duplicateFlag && (
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Possible Duplicate Flag:</span> {article.duplicateFlag}
              </div>
            </div>
          )}

          {article.conflictFlag && (
            <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200 text-xs text-rose-900 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Policy Conflict Flag:</span> {article.conflictFlag}
              </div>
            </div>
          )}

          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-slate-50/80 rounded-xl border border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Updated: <strong>{article.lastUpdated || article.suggestedDate || 'Recent'}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>Author: <strong>{article.author || 'AI Draft Engine'}</strong></span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Sources: <strong>{(article.sourceTickets || []).join(', ')}</strong></span>
            </div>
          </div>

          {/* Article Summary */}
          {article.summary && (
            <div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                Executive Summary
              </div>
              <p className="text-sm text-slate-700 bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                {article.summary}
              </p>
            </div>
          )}

          {/* Content Body */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Full Technical Bulletin Content
              </span>
              <button
                onClick={handleCopy}
                className="text-xs flex items-center gap-1 text-slate-500 hover:text-teal-600 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy text</span>
                  </>
                )}
              </button>
            </div>

            {isEditing ? (
              <textarea
                value={editedBody}
                onChange={(e) => setEditedBody(e.target.value)}
                rows={12}
                className="w-full text-sm font-mono text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 leading-relaxed"
              />
            ) : (
              <div className="text-sm text-slate-800 leading-relaxed whitespace-pre-wrap bg-slate-50/40 p-4 rounded-xl border border-slate-100 font-sans">
                {editedBody}
              </div>
            )}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-slate-100">
              <Tag className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs text-slate-500 font-medium">Keywords:</span>
              {article.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md text-[11px] bg-slate-100 text-slate-600">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/60 rounded-b-2xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-sm"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Edit Content
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {isProposed && onApprove && (
              <button
                onClick={() => onApprove(article)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-1.5"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                Approve & Publish
              </button>
            )}
            {isProposed && onReject && (
              <button
                onClick={() => onReject(article)}
                className="px-3 py-2 text-xs font-semibold rounded-lg text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
              >
                Reject
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
