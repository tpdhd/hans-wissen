import { Link, useLocation } from 'react-router-dom'
import { Leaf, Home, ArrowLeft } from 'lucide-react'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          {!isHome && (
            <ArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform" />
          )}
          <Leaf className="w-7 h-7 text-primary animate-leaf-sway" />
          <span className="text-lg font-bold text-primary-dark">
            Hans' Wissenszentrum
          </span>
        </Link>
        {!isHome && (
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-text-light hover:text-primary transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Startseite</span>
          </Link>
        )}
      </div>
    </header>
  )
}
