import { Link } from 'react-router-dom'
import { Lock, Sparkles } from 'lucide-react'

interface TopicCardProps {
  title: string
  description: string
  icon: React.ReactNode
  to?: string
  disabled?: boolean
}

export default function TopicCard({ title, description, icon, to, disabled = false }: TopicCardProps) {
  const content = (
    <div
      className={`relative bg-white rounded-2xl border p-6 transition-all duration-300 ${
        disabled
          ? 'border-border/50 opacity-60 cursor-not-allowed'
          : 'border-border card-hover cursor-pointer hover:border-primary/30'
      }`}
    >
      {disabled && (
        <div className="absolute top-3 right-3">
          <Lock className="w-4 h-4 text-text-light/40" />
        </div>
      )}
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-2xl ${
          disabled ? 'bg-gray-100' : 'bg-primary/10'
        }`}
      >
        {icon}
      </div>
      <h3 className={`font-bold text-lg mb-1.5 ${disabled ? 'text-text-light' : 'text-text'}`}>
        {title}
      </h3>
      <p className="text-sm text-text-light leading-relaxed">{description}</p>
      {disabled && (
        <span className="inline-block mt-3 text-xs bg-secondary px-3 py-1 rounded-full text-text-light">
          <Sparkles className="w-3 h-3 inline mr-1" />
          Kommt bald
        </span>
      )}
    </div>
  )

  if (disabled || !to) return content

  return (
    <Link to={to} className="block no-underline">
      {content}
    </Link>
  )
}
