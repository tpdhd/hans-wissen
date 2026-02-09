import { Apple, Sun, Droplet, Eye, Bone, Shield, Zap, Heart, Brain, Sandwich, Star, Flame } from 'lucide-react'
import FadeInSection from '../../components/FadeInSection'
import vitaminData from '../../../vitamins-content.json'

const vitaminIcons: Record<string, React.ReactNode> = {
  'vitamin-d': <Sun className="w-6 h-6" />,
  'vitamin-k2': <Bone className="w-6 h-6" />,
  'vitamin-c': <Apple className="w-6 h-6" />,
  'vitamin-b12': <Droplet className="w-6 h-6" />,
  'vitamin-b6': <Zap className="w-6 h-6" />,
  'folsaeure': <Heart className="w-6 h-6" />,
  'vitamin-a': <Eye className="w-6 h-6" />,
  'vitamin-e': <Shield className="w-6 h-6" />,
  'vitamin-b1': <Flame className="w-6 h-6" />,
  'vitamin-b2': <Star className="w-6 h-6" />,
  'vitamin-b3': <Brain className="w-6 h-6" />,
  'vitamin-b5': <Sandwich className="w-6 h-6" />,
  'biotin': <Star className="w-6 h-6" />,
}

const vitaminColors: Record<string, { bg: string, border: string, icon: string }> = {
  'vitamin-d': { bg: 'bg-amber-50', border: 'border-amber-200/60', icon: 'text-amber-600' },
  'vitamin-k2': { bg: 'bg-green-50', border: 'border-green-200/60', icon: 'text-green-600' },
  'vitamin-c': { bg: 'bg-orange-50', border: 'border-orange-200/60', icon: 'text-orange-600' },
  'vitamin-b12': { bg: 'bg-red-50', border: 'border-red-200/60', icon: 'text-red-600' },
  'vitamin-b6': { bg: 'bg-yellow-50', border: 'border-yellow-200/60', icon: 'text-yellow-600' },
  'folsaeure': { bg: 'bg-emerald-50', border: 'border-emerald-200/60', icon: 'text-emerald-600' },
  'vitamin-a': { bg: 'bg-orange-50', border: 'border-orange-200/60', icon: 'text-orange-600' },
  'vitamin-e': { bg: 'bg-green-50', border: 'border-green-200/60', icon: 'text-green-600' },
  'vitamin-b1': { bg: 'bg-yellow-50', border: 'border-yellow-200/60', icon: 'text-yellow-600' },
  'vitamin-b2': { bg: 'bg-amber-50', border: 'border-amber-200/60', icon: 'text-amber-600' },
  'vitamin-b3': { bg: 'bg-blue-50', border: 'border-blue-200/60', icon: 'text-blue-600' },
  'vitamin-b5': { bg: 'bg-purple-50', border: 'border-purple-200/60', icon: 'text-purple-600' },
  'biotin': { bg: 'bg-pink-50', border: 'border-pink-200/60', icon: 'text-pink-600' },
}

export default function TabVitamine() {
  const { vitamins } = vitaminData

  return (
    <div className="space-y-8">
      {/* Header */}
      <FadeInSection>
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 rounded-2xl p-6">
          <h2 className="text-2xl font-extrabold text-text mb-2 flex items-center gap-2">
            <Apple className="w-7 h-7 text-primary" />
            Die 13 essentiellen Vitamine
          </h2>
          <p className="text-text-light">
            Vitamine sind organische Verbindungen, die dein Körper (meist) nicht selbst herstellen kann.
            Sie sind essentiell für Stoffwechsel, Immunsystem, Zellwachstum und Gesundheit.
          </p>
        </div>
      </FadeInSection>

      {/* Vitamin Cards */}
      <div className="space-y-4">
        {vitamins.map((vitamin, index) => {
          const colors = vitaminColors[vitamin.id] || { bg: 'bg-gray-50', border: 'border-gray-200', icon: 'text-gray-600' }
          const icon = vitaminIcons[vitamin.id] || <Apple className="w-6 h-6" />

          return (
            <FadeInSection key={vitamin.id} delay={`${index * 50}ms`}>
              <div className={`${colors.bg} border ${colors.border} rounded-2xl p-5 shadow-sm`}>
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
                    <span className={colors.icon}>{icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text">{vitamin.name}</h3>
                    <p className="text-sm text-text-light mt-1">{vitamin.funktion}</p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/60 rounded-xl p-3">
                    <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Tagesbedarf (RDA)</p>
                    <p className="text-sm text-text font-semibold">{vitamin.tagesbedarf}</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Beste Quellen</p>
                    <p className="text-sm text-text">{vitamin.quellen}</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Mangel-Symptome</p>
                    <p className="text-sm text-text">{vitamin.mangel}</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Überdosierung</p>
                    <p className="text-sm text-text">{vitamin.ueberdosis}</p>
                  </div>
                </div>

                {/* Tipp */}
                {vitamin.tipp && (
                  <div className="mt-3 bg-white/80 border border-primary/10 rounded-xl p-3">
                    <p className="text-sm text-text">
                      <strong className="text-primary">💡 Tipp:</strong> {vitamin.tipp}
                    </p>
                  </div>
                )}
              </div>
            </FadeInSection>
          )
        })}
      </div>

      {/* Footer Note */}
      <FadeInSection>
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
          <p className="text-sm text-text-light italic">
            <strong>Hinweis:</strong> RDA = Recommended Dietary Allowance (empfohlene Tagesdosis für erwachsene Männer).
            Diese Werte decken den Bedarf von 97-98 % der gesunden Bevölkerung. Individuelle Bedarfe können variieren
            (z.B. bei Krankheit, Stress, Sport).
          </p>
        </div>
      </FadeInSection>
    </div>
  )
}
