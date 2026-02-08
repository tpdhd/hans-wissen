import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ExerciseCardNewProps {
  title: string
  germanName: string
  muscles: string
  difficulty: 'Anfänger' | 'Mittel'
  sets: string
  images?: { start: string; end: string }
  instructions: string[]
  safetyNote?: { type: 'safe' | 'caution'; text: string }
  tip?: string
}

const difficultyColors = {
  Anfänger: 'bg-green-100 text-green-700 border-green-200',
  Mittel: 'bg-yellow-100 text-yellow-700 border-yellow-200',
}

export default function ExerciseCardNew({
  title,
  germanName,
  muscles,
  difficulty,
  sets,
  images,
  instructions,
  safetyNote,
  tip,
}: ExerciseCardNewProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm card-hover">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-5 py-4 flex items-center gap-4"
      >
        {/* Small thumbnail */}
        {images && (
          <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-border bg-secondary/30">
            <img
              src={images.start}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-text leading-tight">{title}</h4>
          <p className="text-xs text-text-light mt-0.5">{germanName}</p>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full border ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
            <span className="text-xs text-text-light/70">{muscles}</span>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-text-light transition-transform duration-300 shrink-0 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div className={`collapsible-content ${expanded ? 'open' : ''}`}>
        <div className="px-5 pb-5 border-t border-border pt-4 space-y-4">
          {/* Exercise images — start and end position */}
          {images && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <img
                  src={images.start}
                  alt={`${title} — Startposition`}
                  className="w-full rounded-xl border border-border"
                  loading="lazy"
                />
                <p className="text-xs text-text-light text-center mt-1">Startposition</p>
              </div>
              <div>
                <img
                  src={images.end}
                  alt={`${title} — Endposition`}
                  className="w-full rounded-xl border border-border"
                  loading="lazy"
                />
                <p className="text-xs text-text-light text-center mt-1">Endposition</p>
              </div>
            </div>
          )}

          {/* Step by step instructions */}
          <div>
            <h5 className="font-semibold text-text text-sm mb-2">Ausführung:</h5>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-text-light">
              {instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Sets */}
          <div className="bg-secondary/50 rounded-xl px-4 py-2.5">
            <p className="text-sm font-medium text-text">
              📊 <strong>Sätze & Wiederholungen:</strong> {sets}
            </p>
          </div>

          {/* Safety note */}
          {safetyNote && (
            <div
              className={`rounded-xl px-4 py-2.5 text-sm flex items-start gap-2 ${
                safetyNote.type === 'safe'
                  ? 'bg-green-50 border border-green-200 text-green-700'
                  : 'bg-orange-50 border border-orange-200 text-orange-700'
              }`}
            >
              <span className="shrink-0">{safetyNote.type === 'safe' ? '✅' : '⚠️'}</span>
              <span>{safetyNote.text}</span>
            </div>
          )}

          {/* Tip */}
          {tip && (
            <p className="text-xs text-text-light/70 italic">
              💡 <strong>Tipp:</strong> {tip}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
