import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface CollapsibleProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  icon?: React.ReactNode
}

export default function Collapsible({ title, children, defaultOpen = false, icon }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-secondary/30 transition-colors"
        aria-expanded={isOpen}
      >
        {icon && <span className="text-primary shrink-0">{icon}</span>}
        <span className="flex-1 font-semibold text-text">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-text-light transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        <div className="px-5 pb-4 pt-1 text-text-light leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}
