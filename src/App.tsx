import { useEffect, useState, useRef } from 'react'
import { ArrowLeft, ArrowUpRight, Check, Eye, RotateCcw, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react'
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
  const [deck, setDeck] = useState<VerbData[]>(() => shuffleVerbs(allVerbs))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const currentVerb = deck[currentIndex] || allVerbs[0]

  const goToNext = () => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setRevealed(false)
    } else {
      // Loop back to first card
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

  useEffect(() => {
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
  }, [currentIndex, deck.length])

  // Mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
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

  // Find example third-person phrase for footnote
  const heForm =
    currentVerb.pastForms.find((f) => f.arabic.includes(currentVerb.arabic)) ||
    currentVerb.pastForms[3] ||
    currentVerb.pastForms[0]

  return (
    <div className="app-shell" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <header className="topbar">
        <a className="brand" href="#study" aria-label="Arabic Verb Revision home">
          <span className="brand-arabic" lang="ar" dir="rtl">فِعْل</span>
          <span className="brand-name">Arabic Verb Revision</span>
        </a>
        <div className="topbar-actions">
          <button className="shuffle-btn" onClick={handleShuffle} title="Reshuffle deck (S)">
            <Shuffle size={14} />
            <span>Shuffle</span>
          </button>
          <div className="preview-label">
            <span /> {deck.length} verbs
          </div>
        </div>
      </header>

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
        </aside>

        <section className="study-stage" aria-live="polite">
          {!revealed ? (
            <div className="prompt-view" key={`prompt-${currentVerb.id}-${currentIndex}`}>
              <div className="stage-heading">
                <div>
                  <p className="stage-kicker">PAST TENSE · THIRD PERSON</p>
                  <h1>Which verb do you recognise?</h1>
                </div>
                <div className="card-stepper">
                  <button
                    className="stepper-arrow"
                    onClick={goToPrev}
                    disabled={currentIndex === 0}
                    aria-label="Previous card"
                    title="Previous card (Left Arrow)"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="sample-number">
                    CARD {String(currentIndex + 1).padStart(2, '0')} / {String(deck.length).padStart(2, '0')}
                  </span>
                  <button
                    className="stepper-arrow"
                    onClick={goToNext}
                    aria-label="Next card"
                    title="Next card (Right Arrow)"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
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
              <p className="prompt-footnote">The example shown is “{heForm.english.toLowerCase()}”. The root meaning and conjugations stay hidden until you select the card.</p>

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
    </div>
  )
}
