import { useEffect, useState, useRef, useMemo } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Eye,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  LayoutGrid,
  Search,
  X,
  BookOpen
} from 'lucide-react'
import { allVerbs, shuffleVerbs, type VerbData, type VerbForm } from './data'
import './App.css'

function FormSection({ title, arabicTitle, forms }: { title: string; arabicTitle: string; forms: VerbForm[] }) {
  return (
    <section className="form-section" aria-labelledby={`${title}-heading`}>
      <div className="form-section-heading">
        <div>
          <span className="section-index">{title === 'Past tense' ? '01' : '02'}</span>
          <h2 id={`${title}-heading`}>{title}</h2>
        </div>
        <span className="section-arabic" lang="ar" dir="rtl">{arabicTitle}</span>
      </div>
      <div className="form-list">
        {forms.map((form) => (
          <div className="form-row" key={`${title}-${form.arabic}`}>
            <div className="form-english">
              <span>{form.english}</span>
              {form.note && <span className="form-note">{form.note}</span>}
            </div>
            <span className="form-arabic" lang="ar" dir="rtl">{form.arabic}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  const [viewMode, setViewMode] = useState<'practice' | 'directory'>('practice')
  const [deck, setDeck] = useState<VerbData[]>(() => shuffleVerbs(allVerbs))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const touchStartX = useRef<number | null>(null)

  const currentVerb = deck[currentIndex] || allVerbs[0]

  // Unique categories derived dynamically from all loaded verbs
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(allVerbs.map((v) => v.category)))]
  }, [])

  // Filtered verbs for directory view
  const filteredVerbs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return allVerbs.filter((verb) => {
      const matchesCat = selectedCategory === 'All' || verb.category === selectedCategory
      const matchesSearch =
        !q ||
        verb.english.toLowerCase().includes(q) ||
        verb.arabic.includes(q) ||
        verb.root.toLowerCase().includes(q) ||
        verb.transliteration.toLowerCase().includes(q)
      return matchesCat && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  const goToNext = () => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setRevealed(false)
    } else {
      setCurrentIndex(0)
      setRevealed(false)
    }
  }

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      setRevealed(false)
    }
  }

  const handleShuffle = () => {
    setDeck(shuffleVerbs(allVerbs))
    setCurrentIndex(0)
    setRevealed(false)
  }

  const handleJumpToVerb = (verbId: string) => {
    const idx = deck.findIndex((v) => v.id === verbId)
    if (idx !== -1) {
      setCurrentIndex(idx)
    } else {
      // Put target verb at the current position in deck
      const targetVerb = allVerbs.find((v) => v.id === verbId)
      if (targetVerb) {
        const newDeck = [targetVerb, ...deck.filter((v) => v.id !== verbId)]
        setDeck(newDeck)
        setCurrentIndex(0)
      }
    }
    setRevealed(false)
    setViewMode('practice')
  }

  // Keyboard navigation (active in practice mode)
  useEffect(() => {
    if (viewMode !== 'practice') return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return
      }

      if (event.code === 'Space') {
        event.preventDefault()
        setRevealed((current) => !current)
      } else if (event.code === 'ArrowRight' || event.key.toLowerCase() === 'n') {
        event.preventDefault()
        goToNext()
      } else if (event.code === 'ArrowLeft' || event.key.toLowerCase() === 'p') {
        event.preventDefault()
        goToPrev()
      } else if (event.key.toLowerCase() === 's' || event.key.toLowerCase() === 'r') {
        event.preventDefault()
        handleShuffle()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [viewMode, currentIndex, deck.length])

  // Mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    if (viewMode !== 'practice') return
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (viewMode !== 'practice' || touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchEndX - touchStartX.current
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
    touchStartX.current = null
  }

  const heForm =
    currentVerb.pastForms.find((f) => f.arabic.includes(currentVerb.arabic)) ||
    currentVerb.pastForms[3] ||
    currentVerb.pastForms[0]

  return (
    <div className="app-shell" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <header className="topbar">
        <a
          className="brand"
          href="#study"
          onClick={(e) => {
            e.preventDefault()
            setViewMode('practice')
          }}
          aria-label="Arabic Verb Revision home"
        >
          <span className="brand-arabic" lang="ar" dir="rtl">فِعْل</span>
          <span className="brand-name">Arabic Verb Revision</span>
        </a>

        <div className="topbar-actions">
          {viewMode === 'practice' ? (
            <>
              <button
                className="view-mode-toggle-btn"
                onClick={() => setViewMode('directory')}
                title="View All Verbs Directory"
              >
                <LayoutGrid size={15} />
                <span>View all ({allVerbs.length})</span>
              </button>
              <button className="shuffle-btn" onClick={handleShuffle} title="Reshuffle deck (S)">
                <Shuffle size={14} />
                <span>Shuffle</span>
              </button>
            </>
          ) : (
            <button
              className="view-mode-toggle-btn active-mode"
              onClick={() => setViewMode('practice')}
              title="Return to Flashcard Practice"
            >
              <ArrowLeft size={15} />
              <span>Back to practice</span>
            </button>
          )}

          <div className="preview-label">
            <span /> {allVerbs.length} verbs
          </div>
        </div>
      </header>

      {/* Deck Progress Bar (Practice Mode) */}
      {viewMode === 'practice' && (
        <div
          className="deck-progress-container"
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={deck.length}
          aria-label="Practice deck progress"
        >
          <div
            className="deck-progress-fill"
            style={{ width: `${((currentIndex + 1) / deck.length) * 100}%` }}
          />
        </div>
      )}

      {/* VIEW 1: ALL VERBS DIRECTORY */}
      {viewMode === 'directory' ? (
        <main className="directory-layout" id="directory">
          <div className="directory-header">
            <div>
              <div className="directory-kicker-row">
                <span className="stage-kicker">DICTIONARY & PRACTICE INDEX</span>
                <span className="section-arabic" lang="ar" dir="rtl">فِهْرِس الأَفْعَال</span>
              </div>
              <h1>All Verbs</h1>
              <p className="directory-subtitle">
                Browse all {allVerbs.length} verbs across grammatical categories. Click any card to jump straight into its practice flashcard.
              </p>
            </div>

            <button
              className="back-to-practice-btn"
              onClick={() => setViewMode('practice')}
            >
              <span>Back to practice</span>
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="directory-toolbar">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="directory-search-input"
                placeholder="Search by English meaning, Arabic text, or root (e.g. 'go', 'أكل', 'ك-ت-ب')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <button
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  <X size={16} />
                </button>
              )}
              <span className="search-results-badge">
                {filteredVerbs.length} of {allVerbs.length}
              </span>
            </div>

            <div className="category-pills-row" role="tablist" aria-label="Filter by verb category">
              {categories.map((cat) => {
                const count = cat === 'All' ? allVerbs.length : allVerbs.filter((v) => v.category === cat).length
                const isActive = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    className={`category-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    {cat} <span className="pill-count">({count})</span>
                  </button>
                )
              })}
            </div>
          </div>

          {filteredVerbs.length === 0 ? (
            <div className="directory-empty-state">
              <p className="empty-title">No verbs found</p>
              <p className="empty-desc">No verbs matched “{searchQuery}”. Try clearing your search or category filters.</p>
              <button
                className="clear-filters-btn"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="directory-grid">
              {filteredVerbs.map((verb) => (
                <article
                  key={verb.id}
                  className="directory-card"
                  onClick={() => handleJumpToVerb(verb.id)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleJumpToVerb(verb.id)
                    }
                  }}
                  aria-label={`Practice verb ${verb.english}`}
                >
                  <div className="directory-card-top">
                    <span className="card-category-tag">{verb.category}</span>
                    <span className="card-root-text" lang="ar" dir="rtl">{verb.root}</span>
                  </div>

                  <div className="directory-card-body">
                    <div>
                      <h2 className="card-meaning-title">{verb.english}</h2>
                      <p className="card-translit-text">{verb.transliteration}</p>
                    </div>
                    <span className="card-arabic-text" lang="ar" dir="rtl">{verb.arabic}</span>
                  </div>

                  <div className="directory-card-footer">
                    <span>Practice card</span>
                    <ArrowUpRight size={16} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      ) : (
        /* VIEW 2: PRACTICE FLASHCARD DECK */
        <main className="study-layout" id="study">
          <aside className="study-sidebar" aria-label="Current study set">
            <div>
              <p className="sidebar-label">CURRENT DECK</p>
              <h2>{currentVerb.category}</h2>
              <p className="sidebar-subtitle">Arabic → English · Random Order</p>
            </div>
            <div className="sidebar-root">
              <span>ROOT</span>
              <strong lang="ar" dir="rtl">{currentVerb.root}</strong>
            </div>
            <ol className="study-steps">
              <li className={!revealed ? 'active' : 'complete'}>
                <span>{!revealed ? '1' : <Check size={14} strokeWidth={2.5} />}</span>
                Recall the verb
              </li>
              <li className={revealed ? 'active' : ''}>
                <span>2</span>
                Review its forms
              </li>
            </ol>
            <div className="keyboard-hints-group">
              <p className="keyboard-hint"><kbd>Space</kbd> to {revealed ? 'hide' : 'reveal'}</p>
              <p className="keyboard-hint"><kbd>→</kbd> next · <kbd>←</kbd> prev</p>
              <p className="keyboard-hint"><kbd>S</kbd> shuffle deck</p>
            </div>

            <button
              className="sidebar-browse-btn"
              onClick={() => setViewMode('directory')}
              title="Open full dictionary index"
            >
              <BookOpen size={16} />
              <span>Browse All {allVerbs.length} Verbs</span>
            </button>
          </aside>

          <section className="study-stage" aria-live="polite">
            {!revealed ? (
              <div className="prompt-view" key={`prompt-${currentVerb.id}-${currentIndex}`}>
                <div className="stage-heading">
                  <div>
                    <p className="stage-kicker">PAST TENSE · THIRD PERSON</p>
                    <h1>Which verb do you recognise?</h1>
                  </div>

                  {/* REPURPOSED HEADER BUTTON: VIEW ALL VERBS */}
                  <button
                    className="view-all-btn"
                    onClick={() => setViewMode('directory')}
                    title="View All Verbs Directory"
                  >
                    <LayoutGrid size={15} />
                    <span>View all ({allVerbs.length})</span>
                  </button>
                </div>

                <button className="prompt-card" onClick={() => setRevealed(true)} aria-expanded={revealed}>
                  <span className="prompt-card-top">
                    <span className="prompt-instruction">Select the card to reveal the root</span>
                    <span className="prompt-pronoun" lang="ar" dir="rtl">{currentVerb.pronounPrompt || 'هُوَ'}</span>
                  </span>
                  <span className="prompt-verb" lang="ar" dir="rtl">{currentVerb.arabic}</span>
                  <span className="prompt-card-bottom">
                    <span className="reveal-cta"><Eye size={18} /> Reveal verb</span>
                    <ArrowUpRight size={22} />
                  </span>
                </button>
                <p className="prompt-footnote">
                  The example shown is “{heForm.english.toLowerCase()}”. The root meaning and conjugations stay hidden until you select the card.
                </p>

                <div className="prompt-nav-bar">
                  <button
                    className="nav-secondary-btn"
                    onClick={goToPrev}
                    disabled={currentIndex === 0}
                    aria-label="Previous verb card"
                  >
                    <ChevronLeft size={16} /> Previous
                  </button>
                  <button
                    className="nav-primary-btn"
                    onClick={() => setRevealed(true)}
                    aria-label="Reveal conjugations"
                  >
                    <Eye size={16} /> Reveal Conjugations
                  </button>
                  <button
                    className="nav-secondary-btn"
                    onClick={goToNext}
                    aria-label="Next verb card"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="answer-view" key={`answer-${currentVerb.id}-${currentIndex}`}>
                <div className="answer-heading">
                  <div>
                    <p className="stage-kicker">ROOT MEANING</p>
                    <h1>{currentVerb.english}</h1>
                    <p className="transliteration">{currentVerb.transliteration}</p>
                  </div>
                  <div className="answer-verb">
                    <span lang="ar" dir="rtl">{currentVerb.arabic}</span>
                    <small>Past tense · {currentVerb.pronounPrompt || 'he'}</small>
                  </div>
                </div>

                <div className="root-strip">
                  <span>ROOT</span>
                  <strong lang="ar" dir="rtl">{currentVerb.root}</strong>
                  <p>One root, different persons and tenses.</p>
                </div>

                <div className="forms-grid">
                  <FormSection title="Past tense" arabicTitle="الماضي" forms={currentVerb.pastForms} />
                  <FormSection title="Present tense" arabicTitle="المضارع" forms={currentVerb.presentForms} />
                </div>

                <div className="answer-actions">
                  <button className="back-button" onClick={() => setRevealed(false)}>
                    <ArrowLeft size={18} /> Back to prompt
                  </button>
                  <div className="answer-actions-group">
                    <button
                      className="back-button"
                      onClick={goToPrev}
                      disabled={currentIndex === 0}
                      title="Previous verb"
                    >
                      <ChevronLeft size={18} /> Previous
                    </button>
                    <button className="review-button" onClick={() => setRevealed(false)}>
                      <RotateCcw size={17} /> Review again
                    </button>
                    <button className="next-button" onClick={goToNext} title="Next verb">
                      <span>Next Verb</span>
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </main>
      )}
    </div>
  )
}
