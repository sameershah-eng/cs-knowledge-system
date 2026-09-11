import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import ReplyAssistant from './components/ReplyAssistant.jsx';
import KnowledgeBase from './components/KnowledgeBase.jsx';
import Training from './components/Training.jsx';
import Reporting from './components/Reporting.jsx';
import ArticleModal from './components/ArticleModal.jsx';
import Toast from './components/Toast.jsx';
import Footer from './components/Footer.jsx';
import { INITIAL_ARTICLES, PROPOSED_ARTICLES, KNOWLEDGE_GAPS } from './data.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('reply-assistant');
  const [articles, setArticles] = useState(INITIAL_ARTICLES);
  const [proposedArticles, setProposedArticles] = useState(PROPOSED_ARTICLES);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
    if (window._toastTimeout) clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
      setToast(null);
    }, 3800);
  };

  const handleSaveArticle = (updatedArticle) => {
    setArticles(prev => prev.map(a => a.id === updatedArticle.id ? updatedArticle : a));
    showToast({
      type: 'success',
      message: `Updated bulletin ${updatedArticle.id} successfully.`
    });
  };

  const handleApproveArticle = (articleToApprove) => {
    const approved = {
      ...articleToApprove,
      id: `KB-REV-${Math.floor(100 + Math.random() * 900)}`,
      status: 'Approved',
      lastUpdated: new Date().toISOString().split('T')[0],
      author: 'Sarah Chen (Reviewed)',
      body: articleToApprove.body || articleToApprove.draftBody,
    };
    setArticles(prev => [approved, ...prev]);
    setProposedArticles(prev => prev.filter(p => p.id !== articleToApprove.id));
    setSelectedArticle(null);
    showToast({
      type: 'success',
      message: `Approved and published "${articleToApprove.title}"`
    });
  };

  const handleRejectArticle = (articleToReject) => {
    setProposedArticles(prev => prev.filter(p => p.id !== articleToReject.id));
    setSelectedArticle(null);
    showToast({
      type: 'info',
      message: `Rejected proposed draft "${articleToReject.title}"`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/40 via-sky-50/30 to-teal-50/40 text-slate-800 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* Top Navigation Bar */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Container */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          
          {/* Left Navigation Sidebar */}
          <Sidebar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            proposedCount={proposedArticles.length}
            gapsCount={KNOWLEDGE_GAPS.length}
          />

          {/* Center Workspace Content Area */}
          <div className="flex-1 w-full min-w-0">
            {activeTab === 'reply-assistant' && (
              <ReplyAssistant
                articles={articles}
                onSelectArticle={(art) => setSelectedArticle(art)}
                onShowToast={showToast}
              />
            )}

            {activeTab === 'knowledge-base' && (
              <KnowledgeBase
                articles={articles}
                setArticles={setArticles}
                proposedArticles={proposedArticles}
                setProposedArticles={setProposedArticles}
                onSelectArticle={(art) => setSelectedArticle(art)}
                onShowToast={showToast}
              />
            )}

            {activeTab === 'training' && (
              <Training
                onSelectArticleId={(id) => {
                  const found = articles.find(a => a.id === id);
                  if (found) setSelectedArticle(found);
                }}
                onShowToast={showToast}
              />
            )}

            {activeTab === 'reporting' && (
              <Reporting
                onSelectArticleId={(id) => {
                  const found = articles.find(a => a.id === id);
                  if (found) setSelectedArticle(found);
                }}
                onShowToast={showToast}
              />
            )}
          </div>

        </div>
      </main>

      {/* Article Inspection / Edit Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          isProposed={selectedArticle.isProposed || selectedArticle.status === 'Proposed'}
          onClose={() => setSelectedArticle(null)}
          onSave={handleSaveArticle}
          onApprove={handleApproveArticle}
          onReject={handleRejectArticle}
        />
      )}

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Footer with Human Approval Disclaimer */}
      <Footer />

    </div>
  );
}
