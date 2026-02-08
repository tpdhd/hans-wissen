import { Apple, Sparkles, Bone, Sun, Heart, Star, Milk, MessageCircle, BarChart3 } from 'lucide-react'
import MedTerm from '../../components/MedTerm'
import SectionCard from '../../components/SectionCard'
import Collapsible from '../../components/Collapsible'
import FadeInSection from '../../components/FadeInSection'

export default function TabNahrung() {
  return (
    <div className="space-y-8">
      <FadeInSection>
        <SectionCard title="Nahrungsergänzung" icon={<Apple className="w-6 h-6" />}>
          <div className="space-y-4 text-text-light">
            <p>
              Eine ausgewogene Ernährung ist die Basis. Aber gerade im Alter gibt es
              einige Nährstoffe, bei denen eine Ergänzung wissenschaftlich gut belegt ist.
              Da du viel gehst, ist gute Versorgung besonders wichtig.
            </p>

            {/* Kreatin */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-5 mt-2">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-text text-lg">Kreatin — Der Geheimtipp für aktive Ältere!</h3>
              </div>
              <p className="mb-3">
                Kreatin ist NICHT nur für junge Sportler. Gerade in Kombination mit
                Training zeigt die Forschung beeindruckende Ergebnisse:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
                <li><strong>+1,37 kg Muskelmasse</strong> bei 57–70-Jährigen (Meta-Analyse)</li>
                <li><strong>Doppelte Kraftzuwächse</strong> vs. Training allein</li>
                <li><strong>Bessere Alltagsfunktion</strong> — schneller vom Stuhl aufstehen</li>
                <li><strong>Möglicher Gehirnschutz</strong> — erste Hinweise auf kognitive Vorteile</li>
              </ul>
              <div className="bg-white/60 rounded-lg p-3 text-sm space-y-1">
                <p><strong>Dosierung:</strong> 3–5 g <MedTerm term="Kreatinmonohydrat">Kreatin-Monohydrat</MedTerm> pro Tag — dauerhaft</p>
                <p><strong>Kosten:</strong> ca. 5–10 € pro Monat</p>
                <p><strong>Sicherheit:</strong> Bei gesunden Nieren kein Risiko. Ausreichend trinken (2–3 L/Tag)</p>
                <p className="text-text-light/70 italic">Anfangs 1–2 kg Wassereinlagerung — das ist normal und kein Fett.</p>
              </div>
            </div>

            {/* Knochen-Trio */}
            <div className="mt-2">
              <h3 className="font-bold text-text text-lg mb-3 flex items-center gap-2">
                <Bone className="w-5 h-5 text-primary" />
                Das „Knochen-Trio": D3 + K2 + Magnesium
              </h3>
              <p className="mb-4">
                Diese drei Nährstoffe arbeiten zusammen: Vitamin D3 → Kalzium aufnehmen.
                Vitamin K2 → Kalzium in die Knochen leiten. Magnesium → beide Prozesse
                unterstützen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-bg rounded-xl border border-border p-4">
                <h4 className="font-semibold text-text flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-amber-500" />
                  Vitamin D3
                </h4>
                <p className="text-sm text-primary font-medium mt-1">1.000–4.000 IE/Tag (nach Blutwert)</p>
                <p className="text-xs text-text-light mt-1">
                  Essentiell für Kalzium-Aufnahme. ~60 % der Deutschen haben zu niedrige
                  Spiegel. <strong>Immer Blutwert messen lassen!</strong> Ziel: 40–60 ng/ml.
                </p>
              </div>
              <div className="bg-bg rounded-xl border border-border p-4">
                <h4 className="font-semibold text-text flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-green-600" />
                  Vitamin K2 (MK-7)
                </h4>
                <p className="text-sm text-primary font-medium mt-1">100–200 µg/Tag</p>
                <p className="text-xs text-text-light mt-1">
                  Leitet Kalzium in die Knochen — und raus aus den Arterien.
                </p>
                <p className="text-xs text-accent font-medium mt-1 flex items-center gap-1">
                  Bei Blutverdünnern (Marcumar/Warfarin) mit Arzt besprechen!
                </p>
              </div>
              <div className="bg-bg rounded-xl border border-border p-4">
                <h4 className="font-semibold text-text flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-purple-500" />
                  Magnesium
                </h4>
                <p className="text-sm text-primary font-medium mt-1">300–400 mg/Tag (Glycinat oder Citrat)</p>
                <p className="text-xs text-text-light mt-1">
                  Wichtig für Knochen, Muskeln und Schlaf. Abends als Glycinat → fördert
                  den Schlaf.
                </p>
              </div>
              <div className="bg-bg rounded-xl border border-border p-4">
                <h4 className="font-semibold text-text flex items-center gap-1.5">
                  <Milk className="w-4 h-4 text-sky-500" />
                  Kalzium
                </h4>
                <p className="text-sm text-primary font-medium mt-1">1.000–1.200 mg/Tag (über Ernährung!)</p>
                <p className="text-xs text-text-light mt-1">
                  Am besten über Milchprodukte, grünes Gemüse, Mineralwasser.
                  Supplement nur bei nachgewiesenem Mangel.
                </p>
              </div>
            </div>

            {/* Weitere */}
            <Collapsible title="Kollagen — bei Gelenkproblemen">
              <div className="space-y-3">
                <p>
                  <MedTerm term="Kollagenhydrolysat">Hydrolysiertes Kollagen</MedTerm> kann
                  Gelenkschmerzen reduzieren. Eine Meta-Analyse bestätigte die Wirksamkeit bei Arthrose.
                </p>
                <p><strong>Dosierung:</strong> 10–15 g/Tag · <strong>Kosten:</strong> ca. 15–25 €/Monat</p>
              </div>
            </Collapsible>

            <Collapsible title="Omega-3 — gegen Entzündungen">
              <div className="space-y-3">
                <p>
                  EPA und DHA wirken entzündungshemmend — wichtig gegen chronische
                  Entzündungen (<MedTerm term="Inflammaging" />) im Alter.
                </p>
                <p><strong>Dosierung:</strong> 2–3 g EPA+DHA/Tag · <strong>Kosten:</strong> ca. 15–25 €/Monat</p>
                <p className="text-xs text-text-light/70">
                  IFOS-zertifizierte Produkte wählen. Zu einer fetthaltigen Mahlzeit einnehmen.
                </p>
              </div>
            </Collapsible>

            <Collapsible title="Supplement-Übersicht auf einen Blick" icon={<BarChart3 className="w-5 h-5 text-primary" />}>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-2">Supplement</th>
                      <th className="text-left py-2 pr-2">Evidenz</th>
                      <th className="text-left py-2 pr-2">Dosis</th>
                      <th className="text-left py-2">ca. €/Monat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr><td className="py-2 pr-2 font-medium">Kreatin</td><td><span className="text-primary">Sehr hoch</span></td><td>3–5 g/Tag</td><td>5–10 €</td></tr>
                    <tr><td className="py-2 pr-2 font-medium">Vitamin D3</td><td><span className="text-primary">Sehr hoch</span></td><td>1.000–4.000 IE</td><td>~5 €</td></tr>
                    <tr><td className="py-2 pr-2 font-medium">Vitamin K2</td><td><span className="text-primary">Hoch</span></td><td>100–200 µg</td><td>~10 €</td></tr>
                    <tr><td className="py-2 pr-2 font-medium">Magnesium</td><td><span className="text-primary">Hoch</span></td><td>300–400 mg</td><td>10–15 €</td></tr>
                    <tr><td className="py-2 pr-2 font-medium">Omega-3</td><td><span className="text-primary">Hoch</span></td><td>2–3 g EPA+DHA</td><td>15–25 €</td></tr>
                    <tr><td className="py-2 pr-2 font-medium">Kollagen</td><td><span className="text-text-light">Mittel</span></td><td>10–15 g</td><td>15–25 €</td></tr>
                  </tbody>
                </table>
              </div>
            </Collapsible>

            <div className="bg-secondary rounded-xl p-4 mt-4">
              <p className="text-sm flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Wichtig:</strong> Nahrungsergänzung ersetzt keine Ernährung —
                und kein Training! Sprich mit deinem Arzt, bevor du etwas Neues einnimmst.
                Vitamin D3 unbedingt per Bluttest kontrollieren.</span>
              </p>
            </div>
          </div>
        </SectionCard>
      </FadeInSection>
    </div>
  )
}
