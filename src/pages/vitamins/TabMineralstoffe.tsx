import { Zap, Droplet, Heart, Bone, Apple, Shield, Sparkles, Star, Leaf, Flame } from 'lucide-react'
import FadeInSection from '../../components/FadeInSection'
import vitaminData from '../../../vitamins-content.json'

const mineralIcons: Record<string, React.ReactNode> = {
  'magnesium': <Zap className="w-6 h-6" />,
  'zink': <Shield className="w-6 h-6" />,
  'eisen': <Droplet className="w-6 h-6" />,
  'calcium': <Bone className="w-6 h-6" />,
  'kalium': <Heart className="w-6 h-6" />,
  'selen': <Star className="w-6 h-6" />,
  'jod': <Sparkles className="w-6 h-6" />,
  'chrom': <Apple className="w-6 h-6" />,
  'mangan': <Leaf className="w-6 h-6" />,
  'kupfer': <Flame className="w-6 h-6" />,
}

const mineralColors: Record<string, { bg: string, border: string, icon: string }> = {
  'magnesium': { bg: 'bg-green-50', border: 'border-green-200/60', icon: 'text-green-600' },
  'zink': { bg: 'bg-blue-50', border: 'border-blue-200/60', icon: 'text-blue-600' },
  'eisen': { bg: 'bg-red-50', border: 'border-red-200/60', icon: 'text-red-600' },
  'calcium': { bg: 'bg-gray-50', border: 'border-gray-200/60', icon: 'text-gray-600' },
  'kalium': { bg: 'bg-purple-50', border: 'border-purple-200/60', icon: 'text-purple-600' },
  'selen': { bg: 'bg-amber-50', border: 'border-amber-200/60', icon: 'text-amber-600' },
  'jod': { bg: 'bg-cyan-50', border: 'border-cyan-200/60', icon: 'text-cyan-600' },
  'chrom': { bg: 'bg-indigo-50', border: 'border-indigo-200/60', icon: 'text-indigo-600' },
  'mangan': { bg: 'bg-emerald-50', border: 'border-emerald-200/60', icon: 'text-emerald-600' },
  'kupfer': { bg: 'bg-orange-50', border: 'border-orange-200/60', icon: 'text-orange-600' },
}

export default function TabMineralstoffe() {
  const { minerals } = vitaminData

  return (
    <div className="space-y-8">
      {/* Header */}
      <FadeInSection>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 rounded-2xl p-6">
          <h2 className="text-2xl font-extrabold text-text mb-2 flex items-center gap-2">
            <Zap className="w-7 h-7 text-green-600" />
            Die 10 wichtigsten Mineralstoffe
          </h2>
          <p className="text-text-light">
            Mineralstoffe sind anorganische Nährstoffe, die für Knochen, Muskeln, Nervensystem,
            Enzyme und fast alle Körperfunktionen essentiell sind. Dein Körper kann sie nicht
            selbst herstellen — sie müssen über die Nahrung zugeführt werden.
          </p>
        </div>
      </FadeInSection>

      {/* Mineral Cards */}
      <div className="space-y-4">
        {minerals.map((mineral, index) => {
          const colors = mineralColors[mineral.id] || { bg: 'bg-gray-50', border: 'border-gray-200', icon: 'text-gray-600' }
          const icon = mineralIcons[mineral.id] || <Zap className="w-6 h-6" />

          return (
            <FadeInSection key={mineral.id} delay={`${index * 50}ms`}>
              <div className={`${colors.bg} border ${colors.border} rounded-2xl p-5 shadow-sm`}>
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
                    <span className={colors.icon}>{icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text">{mineral.name}</h3>
                    <p className="text-sm text-text-light mt-1">{mineral.funktion}</p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/60 rounded-xl p-3">
                    <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Tagesbedarf (RDA/AI)</p>
                    <p className="text-sm text-text font-semibold">{mineral.tagesbedarf}</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Beste Quellen</p>
                    <p className="text-sm text-text">{mineral.quellen}</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Mangel-Symptome</p>
                    <p className="text-sm text-text">{mineral.mangel}</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Überdosierung</p>
                    <p className="text-sm text-text">{mineral.ueberdosis}</p>
                  </div>
                </div>

                {/* Tipp */}
                {mineral.tipp && (
                  <div className="mt-3 bg-white/80 border border-primary/10 rounded-xl p-3">
                    <p className="text-sm text-text">
                      <strong className="text-primary">💡 Tipp:</strong> {mineral.tipp}
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
            <strong>Hinweis:</strong> RDA = Recommended Dietary Allowance, AI = Adequate Intake.
            Diese Werte gelten für erwachsene Männer. Individuelle Bedarfe können je nach Aktivität,
            Ernährung und Gesundheitszustand variieren.
          </p>
        </div>
      </FadeInSection>
    </div>
  )
}
