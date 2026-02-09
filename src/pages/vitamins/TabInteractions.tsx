import { AlertTriangle, CheckCircle, ThumbsUp, X } from 'lucide-react'
import FadeInSection from '../../components/FadeInSection'
import vitaminData from '../../../vitamins-content.json'

export default function TabInteractions() {
  const { interactions } = vitaminData

  return (
    <div className="space-y-8">
      {/* Header */}
      <FadeInSection>
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/60 rounded-2xl p-6">
          <h2 className="text-2xl font-extrabold text-text mb-2 flex items-center gap-2">
            <AlertTriangle className="w-7 h-7 text-red-600" />
            Nährstoff-Wechselwirkungen
          </h2>
          <p className="text-text-light mb-3">
            Die richtige Kombination macht den Unterschied! Manche Nährstoffe verstärken sich gegenseitig,
            andere blockieren die Aufnahme. Hier erfährst du, <strong>was zusammen gehört</strong> und
            <strong> was du getrennt nehmen solltest</strong>.
          </p>
          <div className="bg-white/60 rounded-xl p-4 border border-red-200/40">
            <p className="text-sm text-text-light">
              <strong className="text-text">Wichtig:</strong> Viele Supplements konkurrieren um
              dieselben Transporter im Darm. Getrennte Einnahme (z.B. morgens/abends) maximiert die Aufnahme.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Synergies - Good Combinations */}
      <FadeInSection>
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
          <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Gute Kombinationen — das verstärkt sich!
          </h3>
          <p className="text-sm text-text-light mb-4">
            Diese Nährstoffe arbeiten zusammen und sollten <strong>gemeinsam eingenommen</strong> werden.
          </p>

          <div className="space-y-3">
            {interactions.synergies.map((synergy, index) => (
              <FadeInSection key={index} delay={`${index * 50}ms`}>
                <div className="bg-green-50 border border-green-200/60 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <ThumbsUp className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-bold text-text text-base mb-1">{synergy.combo}</h4>
                      <p className="text-sm text-text-light mb-2">
                        <strong>Effekt:</strong> {synergy.effect}
                      </p>
                      <p className="text-sm text-text bg-white/60 rounded-lg px-3 py-2">
                        <strong className="text-green-600">✓ Empfehlung:</strong> {synergy.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Antagonisms - Bad Combinations */}
      <FadeInSection>
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
          <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
            <X className="w-6 h-6 text-red-600" />
            Schlechte Kombinationen — das NICHT zusammen nehmen!
          </h3>
          <p className="text-sm text-text-light mb-4">
            Diese Nährstoffe konkurrieren miteinander oder blockieren sich gegenseitig.
            <strong> Getrennte Einnahme</strong> ist wichtig!
          </p>

          <div className="space-y-3">
            {interactions.antagonisms.map((antagonism, index) => (
              <FadeInSection key={index} delay={`${index * 50}ms`}>
                <div className="bg-red-50 border border-red-200/60 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-bold text-text text-base mb-1">{antagonism.combo}</h4>
                      <p className="text-sm text-text-light mb-2">
                        <strong>Problem:</strong> {antagonism.effect}
                      </p>
                      <p className="text-sm text-text bg-white/60 rounded-lg px-3 py-2">
                        <strong className="text-red-600">⚠ Empfehlung:</strong> {antagonism.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Practical Timing Guide */}
      <FadeInSection>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/60 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-blue-600" />
            Praktischer Einnahme-Plan
          </h3>
          <p className="text-sm text-text-light mb-4">
            So verteilst du deine Supplements optimal über den Tag:
          </p>

          <div className="space-y-3">
            {/* Morning */}
            <div className="bg-white/60 rounded-xl p-4">
              <h4 className="font-bold text-text mb-2">🌅 Morgens (zum Frühstück)</h4>
              <ul className="text-sm text-text-light space-y-1 ml-4">
                <li>• Vitamin D3 + K2 (fettlöslich, energetisierend)</li>
                <li>• Omega-3 (fettlöslich, mit Essen)</li>
                <li>• Vitamin C (energetisierend, mit Eisen kombinierbar)</li>
                <li>• B-Komplex (energetisierend)</li>
                <li>• Kreatin (Timing egal, aber Routine wichtig)</li>
                <li>• Kollagen (im Kaffee oder Smoothie)</li>
              </ul>
            </div>

            {/* Midday/Afternoon */}
            <div className="bg-white/60 rounded-xl p-4">
              <h4 className="font-bold text-text mb-2">☀️ Mittags/Nachmittags</h4>
              <ul className="text-sm text-text-light space-y-1 ml-4">
                <li>• Eisen (falls nötig) — NICHT mit Calcium, Zink oder Kaffee</li>
                <li>• Vitamin C (verstärkt Eisen-Aufnahme)</li>
              </ul>
            </div>

            {/* Evening */}
            <div className="bg-white/60 rounded-xl p-4">
              <h4 className="font-bold text-text mb-2">🌙 Abends (zum Abendessen oder vor dem Schlafen)</h4>
              <ul className="text-sm text-text-light space-y-1 ml-4">
                <li>• Magnesium (fördert Schlaf, Entspannung)</li>
                <li>• Zink (bessere Aufnahme getrennt von Calcium/Eisen)</li>
                <li>• Probiotika (ruhige Verdauungsphase)</li>
                <li>• Calcium (falls nötig) — NICHT mit Eisen, Zink oder Magnesium</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Footer Note */}
      <FadeInSection>
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
          <p className="text-sm text-text-light italic">
            <strong>Tipp:</strong> Wenn du viele Supplements nimmst, verteile sie über den Tag
            (morgens/abends). Das maximiert die Aufnahme und vermeidet Konkurrenz im Darm.
            Bei Unsicherheit: Apotheker oder Arzt fragen!
          </p>
        </div>
      </FadeInSection>
    </div>
  )
}
