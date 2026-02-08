import { Bone } from 'lucide-react'
import MedTerm from '../../components/MedTerm'
import SectionCard from '../../components/SectionCard'
import Collapsible from '../../components/Collapsible'
import FadeInSection from '../../components/FadeInSection'

export default function TabKnochen() {
  return (
    <div className="space-y-8">
      <FadeInSection>
        <SectionCard title="Knochen & Osteoporose" icon={<Bone className="w-6 h-6" />}>
          <div className="space-y-4 text-text-light">
            <p>
              Unsere Knochen sind lebendiges Gewebe. Spezielle Zellen
              (<MedTerm term="Osteoblasten" /> und <MedTerm term="Osteoklasten" />)
              bauen Knochen ständig auf und ab. Ab etwa dem 35. Lebensjahr kippt die Balance:
              Es wird mehr abgebaut als aufgebaut.
            </p>
            <p>
              Bei Frauen beschleunigt sich dieser Prozess nach den Wechseljahren.
              Das Hormon <MedTerm term="Östrogen" /> schützt normalerweise die Knochen.
              Wenn der Östrogenspiegel sinkt, verlieren Frauen in den ersten 5–10 Jahren
              danach bis zu <strong>2,1 % Knochenmasse pro Jahr</strong>.
            </p>
            <p>
              <strong>Osteoporose</strong> betrifft etwa <strong>24 % aller Frauen über 65</strong> —
              fast jede vierte! Die gute Nachricht: Dein tägliches Gehen hilft bereits etwas,
              aber Krafttraining ist die wirksamste nicht-medikamentöse Maßnahme dagegen.
            </p>

            {/* Comparison table */}
            <div className="bg-bg rounded-xl border border-border overflow-hidden mt-4">
              <div className="px-4 py-3 bg-secondary/30 border-b border-border">
                <h4 className="font-semibold text-text text-sm">📊 Knochendichte: Mit vs. ohne Training</h4>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
                  <div className="font-semibold text-text">Messstelle</div>
                  <div className="font-semibold text-green-700">Mit Training</div>
                  <div className="font-semibold text-red-600">Ohne Training</div>

                  <div>Hüfte</div>
                  <div className="text-green-700">+0,30 bis +0,64 %</div>
                  <div className="text-red-600">-0,6 bis -1,1 %/Jahr</div>

                  <div>Lendenwirbelsäule</div>
                  <div className="text-green-700">+0,62 bis +0,88 %</div>
                  <div className="text-red-600">-0,6 bis -2,1 %/Jahr</div>

                  <div>Oberschenkelhals</div>
                  <div className="text-green-700">bis +0,89 %</div>
                  <div className="text-red-600">-0,6 bis -1,1 %/Jahr</div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-3 mt-6">
              <h3 className="font-semibold text-text text-lg">Häufige Fragen</h3>

              <Collapsible title="Was genau ist Osteoporose?">
                <div className="space-y-3">
                  <p>
                    Stell dir die Bandscheibe wie einen Berliner vor: Außen ein fester Ring,
                    innen ein weicher Kern. Bei Osteoporose werden die Poren immer größer —
                    der Knochen wird löchrig und instabil.
                  </p>
                  <p>
                    Das bedeutet: Die Knochen werden brüchig und können schon bei kleinen
                    Stößen brechen. Besonders gefährdet sind Hüfte, Wirbelsäule und Handgelenke.
                    Eine Hüftfraktur im Alter ist lebensgefährlich: 25–33 % der Betroffenen
                    überleben das erste Jahr nicht.
                  </p>
                  <p>
                    Durch Krafttraining sendest du Signale an die Knochen, die den Aufbau
                    anregen. Zugkräfte durch Muskeln → Körper reagiert: „Hier wird stärkerer
                    Knochen gebraucht!"
                  </p>
                </div>
              </Collapsible>

              <Collapsible title="Bin ich gefährdet?">
                <div className="space-y-3">
                  <p>Das Risiko für Osteoporose steigt durch:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><strong>Alter</strong> — je älter, desto höher</li>
                    <li><strong>Geschlecht</strong> — Frauen 4× häufiger betroffen</li>
                    <li><strong>Familiäre Vorbelastung</strong></li>
                    <li><strong>Wechseljahre</strong> — besonders die ersten 10 Jahre danach</li>
                    <li><strong>Vitamin-D-Mangel</strong> — ~60 % der Deutschen im Winter</li>
                    <li><strong>Niedrige Kalziumzufuhr</strong></li>
                    <li>Bestimmte Medikamente (z. B. Kortison)</li>
                  </ul>
                  <p>
                    <strong>Tipp:</strong> Ein <MedTerm term="DEXA-Scan">DEXA-Scan</MedTerm> beim
                    Arzt misst die Knochendichte. Dr. Peter Attia empfiehlt diesen Test jährlich ab 65.
                  </p>
                </div>
              </Collapsible>

              <Collapsible title="Kann man Knochen wirklich wieder aufbauen?">
                <div className="space-y-3">
                  <p>
                    <strong>Ja — bis zu einem gewissen Grad!</strong> Die LIFTMOR-Studie (2018)
                    zeigte: Hochintensives Krafttraining verbesserte bei postmenopausalen Frauen
                    die Knochendichte signifikant.
                  </p>
                  <p>
                    Die Erlanger EFOPS-Studie begleitete Frauen über <strong>16 Jahre</strong>.
                    Die trainierende Gruppe behielt ihre Knochendichte, während die
                    nicht-trainierende Gruppe verlor. Das ist eine der längsten Studien weltweit —
                    durchgeführt in Deutschland!
                  </p>
                  <p>
                    Der eigentliche Gewinn ist oft das <strong>Stoppen des Verlusts</strong>.
                    Über 10–20 Jahre macht das einen enormen Unterschied.
                  </p>
                </div>
              </Collapsible>

              <Collapsible title="Warum hilft mein Spazierengehen nur teilweise?">
                <div className="space-y-3">
                  <p>
                    Gehen ist gut — es erzeugt Stoßbelastung durch dein Körpergewicht. Aber
                    Knochen brauchen <strong>stärkere Reize</strong> für echten Aufbau. Beim
                    Krafttraining ziehen Muskeln mit viel mehr Kraft an den Knochen als beim Gehen.
                  </p>
                  <p>
                    Dein Walking ist ein solides Fundament. Krafttraining darauf aufzubauen
                    ist die optimale Kombination — dein Gehen wird dadurch sogar leichter
                    und angenehmer, weil du kräftigere Beinmuskeln hast.
                  </p>
                </div>
              </Collapsible>
            </div>
          </div>
        </SectionCard>
      </FadeInSection>
    </div>
  )
}
