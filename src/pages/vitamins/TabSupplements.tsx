import { Dumbbell, Sun, Droplet, Zap, Activity, Heart, Pill, Clock, AlertCircle, CheckCircle } from 'lucide-react'
import FadeInSection from '../../components/FadeInSection'
import vitaminData from '../../../vitamins-content.json'

const supplementIcons: Record<string, React.ReactNode> = {
  'd3-k2-kombi': <Sun className="w-6 h-6" />,
  'omega3': <Droplet className="w-6 h-6" />,
  'magnesium': <Zap className="w-6 h-6" />,
  'zink': <Pill className="w-6 h-6" />,
  'kreatin': <Activity className="w-6 h-6" />,
  'kollagen': <Heart className="w-6 h-6" />,
  'probiotika': <Pill className="w-6 h-6" />,
}

const supplementColors: Record<string, { bg: string, border: string, icon: string }> = {
  'd3-k2-kombi': { bg: 'bg-amber-50', border: 'border-amber-200/60', icon: 'text-amber-600' },
  'omega3': { bg: 'bg-blue-50', border: 'border-blue-200/60', icon: 'text-blue-600' },
  'magnesium': { bg: 'bg-green-50', border: 'border-green-200/60', icon: 'text-green-600' },
  'zink': { bg: 'bg-indigo-50', border: 'border-indigo-200/60', icon: 'text-indigo-600' },
  'kreatin': { bg: 'bg-purple-50', border: 'border-purple-200/60', icon: 'text-purple-600' },
  'kollagen': { bg: 'bg-rose-50', border: 'border-rose-200/60', icon: 'text-rose-600' },
  'probiotika': { bg: 'bg-orange-50', border: 'border-orange-200/60', icon: 'text-orange-600' },
}

export default function TabSupplements() {
  const { supplements } = vitaminData

  return (
    <div className="space-y-8">
      {/* Header */}
      <FadeInSection>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/60 rounded-2xl p-6">
          <h2 className="text-2xl font-extrabold text-text mb-2 flex items-center gap-2">
            <Dumbbell className="w-7 h-7 text-purple-600" />
            Supplement-Empfehlungen für Männer 30+
          </h2>
          <p className="text-text-light mb-3">
            Diese Supplements haben starke wissenschaftliche Evidenz und können Gesundheit,
            Leistung und Lebensqualität verbessern — <strong>wenn deine Ernährung Lücken hat</strong>.
          </p>
          <div className="bg-white/60 rounded-xl p-4 border border-purple-200/40">
            <p className="text-sm text-text-light">
              <strong className="text-text">Wichtig:</strong> Supplements sind kein Ersatz für eine
              ausgewogene Ernährung. Sie schließen Lücken. Echte Lebensmittel sind immer die Basis.
              Bei Unsicherheit: Bluttest machen und mit Arzt sprechen.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Supplement Cards */}
      <div className="space-y-4">
        {supplements.map((supplement, index) => {
          const colors = supplementColors[supplement.id] || { bg: 'bg-gray-50', border: 'border-gray-200', icon: 'text-gray-600' }
          const icon = supplementIcons[supplement.id] || <Pill className="w-6 h-6" />

          return (
            <FadeInSection key={supplement.id} delay={`${index * 50}ms`}>
              <div className={`${colors.bg} border ${colors.border} rounded-2xl p-5 shadow-sm`}>
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
                    <span className={colors.icon}>{icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text">{supplement.name}</h3>
                    <p className="text-sm text-text-light mt-1">
                      <strong>Warum:</strong> {supplement.warum}
                    </p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 gap-3 mt-4">
                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                      <Pill className="w-4 h-4 text-text-light mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Dosierung</p>
                        <p className="text-sm text-text font-semibold">{supplement.dosierung}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-text-light mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Einnahme</p>
                        <p className="text-sm text-text">{supplement.einnahme}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-text-light mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Interaktionen</p>
                        <p className="text-sm text-text">{supplement.interaktionen}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-text-light mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">Qualitätsmerkmale</p>
                        <p className="text-sm text-text">{supplement.qualitaet}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          )
        })}
      </div>

      {/* Footer Notes */}
      <FadeInSection>
        <div className="space-y-3">
          <div className="bg-green-50 border border-green-200/60 rounded-xl p-4">
            <h4 className="font-bold text-text mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Die Basis-3 für die meisten Männer 30+
            </h4>
            <p className="text-sm text-text-light">
              <strong>D3+K2, Omega-3, Magnesium</strong> — diese drei haben die stärkste Evidenz
              und decken die häufigsten Mängel in Deutschland ab (fehlende Sonne, wenig Fisch, Stress).
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
            <p className="text-sm text-text-light italic">
              <strong>Tipp:</strong> Bluttest machen lassen! Besonders für Vitamin D, B12, Eisen, Zink.
              So weißt du genau, was du brauchst — keine Vermutungen, keine Verschwendung.
            </p>
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}
