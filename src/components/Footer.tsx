import { Heart, Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-12">
      <div className="max-w-4xl mx-auto px-4 py-6 text-center">
        <div className="flex items-center justify-center gap-2 text-text-light text-sm">
          <span>Mit</span>
          <Heart className="w-4 h-4 text-accent fill-accent" />
          <span>erstellt</span>
          <Leaf className="w-4 h-4 text-primary" />
        </div>
        <p className="text-xs text-text-light/60 mt-2">
          Persönliches Wissenszentrum · Keine medizinische Beratung
        </p>
      </div>
    </footer>
  )
}
