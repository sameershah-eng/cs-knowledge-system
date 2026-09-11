import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  RotateCcw, 
  AlertCircle, 
  Layers, 
  Clock, 
  ArrowRight,
  TrendingUp,
  FileQuestion,
  ChevronRight
} from 'lucide-react';
import { LEARNING_PATHS, KNOWLEDGE_GAPS, QUIZ_QUESTIONS } from '../data.js';

export default function Training({ onSelectArticleId, onShowToast }) {
  const [learningPaths, setLearningPaths] = useState(LEARNING_PATHS);
  const [activeTrack, setActiveTrack] = useState('All'); // 'All', 'Installation', 'Troubleshooting'
  
  // Interactive Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [questionId]: optionIndex }
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(null);

  // Filter paths by Installation vs Troubleshooting
  const filteredPaths = learningPaths.filter(p => {
    if (activeTrack === 'All') return true;
    if (activeTrack === 'Installation') return p.track.toLowerCase().includes('installation');
    if (activeTrack === 'Troubleshooting') return p.track.toLowerCase().includes('troubleshooting');
    return true;
  });

  const handleSelectOption = (questionId, optionIndex) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleCalculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    setQuizScore(score);
    setIsSubmitted(true);
    onShowToast({
      type: score === QUIZ_QUESTIONS.length ? 'success' : 'info',
      message: `Quiz completed: You scored ${score} out of ${QUIZ_QUESTIONS.length}!`
    });
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setQuizScore(null);
    setCurrentQuestionIndex(0);
    onShowToast({
      type: 'info',
      message: 'Practice quiz reset. Good luck!'
    });
  };

  const handleAdvanceModule = (pathId) => {
    setLearningPaths(prev => prev.map(path => {
      if (path.id === pathId && path.completedModules < path.modulesCount) {
        const nextCount = path.completedModules + 1;
        return { ...path, completedModules: nextCount };
      }
      return path;
    }));
    onShowToast({
      type: 'success',
      message: 'Module progress updated!'
    });
  };

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const userAns = selectedAnswers[currentQ.id];
  const hasAnsweredCurrent = userAns !== undefined;
  const isCurrentCorrect = userAns === currentQ.correctAnswer;

  return (
    <div id="training-module" className="space-y-8">
      
      {/* Training Header */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                Training & Learning Paths
              </h1>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200/60">
                Product Knowledge Tracks
              </span>
            </div>
            <p className="text-sm text-slate-600">
              Master fitness hardware engineering concepts with structured paths. Installation and assembly tracks are strictly segregated from mechanical troubleshooting.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200/80 self-start md:self-auto">
            <button
              onClick={() => setActiveTrack('All')}
              className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTrack === 'All' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Tracks
            </button>
            <button
              onClick={() => setActiveTrack('Installation')}
              className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTrack === 'Installation' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Installation Only
            </button>
            <button
              onClick={() => setActiveTrack('Troubleshooting')}
              className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTrack === 'Troubleshooting' ? 'bg-white text-amber-800 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Troubleshooting Only
            </button>
          </div>
        </div>
      </div>

      {/* LEARNING PATHS GRID */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-900">
              Active Hardware Learning Paths ({filteredPaths.length})
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            Installation & Diagnostic Tracks
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPaths.map((path) => {
            const pct = Math.round((path.completedModules / path.modulesCount) * 100);
            const isComplete = pct === 100;
            const isInstall = path.track.toLowerCase().includes('installation');

            return (
              <div
                key={path.id}
                id={`path-card-${path.id}`}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-teal-300 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                      isInstall 
                        ? 'bg-sky-50 text-sky-700 border-sky-200' 
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {path.track}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {path.estimatedMinutes} mins
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {path.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {path.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">
                      Progress: {path.completedModules} of {path.modulesCount} modules
                    </span>
                    <span className={`font-bold ${isComplete ? 'text-emerald-600' : 'text-slate-800'}`}>
                      {pct}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isComplete ? 'bg-emerald-500' : 'bg-teal-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-slate-400 font-medium">
                      Badge: {path.badge}
                    </span>

                    {!isComplete ? (
                      <button
                        onClick={() => handleAdvanceModule(path.id)}
                        className="text-xs font-semibold text-teal-600 hover:text-teal-800 transition-colors flex items-center gap-1"
                      >
                        <span>Mark next module</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Completed
                      </span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* KNOWLEDGE GAPS & INTERACTIVE QUIZ (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* KNOWLEDGE GAPS PANEL */}
        <div id="knowledge-gaps-panel" className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Customer Knowledge Gaps
                </h2>
                <p className="text-xs text-slate-500">
                  Topics repeatedly raised in customer tickets that currently lack an approved KB bulletin.
                </p>
              </div>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-800">
              {KNOWLEDGE_GAPS.length} High Priority
            </span>
          </div>

          <div className="space-y-3">
            {KNOWLEDGE_GAPS.map((gap) => (
              <div
                key={gap.id}
                className="p-3.5 rounded-xl border border-slate-200/90 hover:border-slate-300 transition-all bg-slate-50/50 space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-800">
                    {gap.topic}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    gap.urgency === 'High' 
                      ? 'bg-rose-100 text-rose-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {gap.urgency} Urgency
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2 pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <span>Product: <strong>{gap.product}</strong></span>
                    <span>Tickets: <strong>{gap.ticketCount}</strong></span>
                  </div>

                  <span className="text-teal-700 font-medium">
                    {gap.status} ({gap.assignedTo})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE PRACTICE QUIZ */}
        <div id="practice-quiz-panel" className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-5 flex flex-col justify-between">
          <div>
            {/* Quiz Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-teal-50 text-teal-700">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Interactive Practice Quiz
                  </h2>
                  <p className="text-xs text-slate-500">
                    Test your mastery of approved bulletins and warranty exception rules.
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono">
                Q {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Active Question Box */}
            <div className="mt-4 space-y-3">
              <div className="text-sm font-semibold text-slate-900 leading-snug">
                {currentQ.question}
              </div>

              {/* Options */}
              <div className="space-y-2 pt-2">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = userAns === optIdx;
                  const isCorrect = optIdx === currentQ.correctAnswer;
                  
                  let optionStyle = "border-slate-200 hover:border-slate-300 bg-white text-slate-700";

                  if (isSubmitted || (hasAnsweredCurrent && !isSubmitted)) {
                    if (isSelected) {
                      optionStyle = isCorrect
                        ? "border-emerald-500 bg-emerald-50/70 text-emerald-900 font-medium ring-1 ring-emerald-500/30"
                        : "border-rose-400 bg-rose-50/70 text-rose-900 ring-1 ring-rose-400/30";
                    } else if (isCorrect && (isSubmitted || hasAnsweredCurrent)) {
                      optionStyle = "border-emerald-300 bg-emerald-50/40 text-emerald-800";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(currentQ.id, optIdx)}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 cursor-pointer ${optionStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-slate-300 flex-shrink-0 flex items-center justify-center font-bold text-[10px] mt-0.5">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="leading-relaxed">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Instant Feedback Callout */}
              {hasAnsweredCurrent && (
                <div className={`p-3 rounded-xl text-xs space-y-1 mt-3 border animate-fade-in ${
                  isCurrentCorrect
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}>
                  <div className="flex items-center gap-1.5 font-bold">
                    {isCurrentCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Incorrect</span>
                      </>
                    )}
                    <span className="font-mono text-[10px] ml-auto text-slate-600">
                      Ref: {currentQ.sourceArticle}
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-700">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* Quiz Navigation & Score Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === QUIZ_QUESTIONS.length - 1}
                className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>

            <div className="flex items-center gap-2">
              {!isSubmitted ? (
                <button
                  onClick={handleCalculateScore}
                  disabled={Object.keys(selectedAnswers).length < QUIZ_QUESTIONS.length}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Submit & Score Quiz
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="text-xs font-bold text-slate-900">
                    Score: <span className="text-teal-600">{quizScore} / {QUIZ_QUESTIONS.length}</span>
                  </div>
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Retake</span>
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
