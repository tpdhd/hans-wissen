import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ExerciseCardProps {
  title: string
  icon: React.ReactNode
  difficulty?: 'leicht' | 'mittel' | 'fortgeschritten'
  duration?: string
  children: React.ReactNode
}

const difficultyColors = {
  leicht: 'bg-green-100 text-green-700',
  mittel: 'bg-yellow-100 text-yellow-700',
  fortgeschritten: 'bg-orange-100 text-orange-700',
}

export default function ExerciseCard({
  title,
  icon,
  difficulty = 'leicht',
  duration,
  children,
}: ExerciseCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-bg rounded-xl border border-border overflow-hidden card-hover">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-5 py-4 flex items-center gap-3"
      >
        <span className="text-primary shrink-0 text-2xl">{icon}</span>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-text">{title}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
            {duration && (
              <span className="text-xs text-text-light">{duration}</span>
            )}
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-text-light transition-transform duration-300 shrink-0 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div className={`collapsible-content ${expanded ? 'open' : ''}`}>
        <div className="px-5 pb-4 text-text-light text-sm leading-relaxed border-t border-border pt-3">
          {children}
        </div>
      </div>
    </div>
  )
}
