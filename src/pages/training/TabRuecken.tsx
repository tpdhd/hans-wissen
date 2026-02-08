import {
  ShieldAlert,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from 'lucide-react'
import MedTerm from '../../components/MedTerm'
import SectionCard from '../../components/SectionCard'
import Collapsible from '../../components/Collapsible'
import FadeInSection from '../../components/FadeInSection'

export default function TabRuecken() {
  return (
    <div className="space-y-8">
      <FadeInSection>
        <SectionCard title="Rücken & Sicherheit" icon={<ShieldAlert className="w-6 h-6" />}>
          <div className="space-y-4 text-text-light">
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
              <p className="font-semibold text-accent flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5" />
                Wichtiger Hinweis
              </p>
              <p className="text-sm">
                Bei akuten Rückenschmerzen, einem frischen{' '}
                <MedTerm term="Bandscheibenvorfall" /> oder{' '}
                <MedTerm term="Spinalkanalstenose" /> bitte IMMER zuerst mit dem
                Arzt sprechen. Das hier Beschriebene gilt für Personen ohne akute
                Symptome, die ihren Rücken langfristig stärken wollen.
              </p>
            </div>

            <p>
              Die überraschende Botschaft: <strong>Krafttraining ist Teil der Lösung,
              nicht das Problem.</strong> Starke Rücken- und Rumpfmuskeln bilden ein
              „natürliches Korsett" um die Wirbelsäule. Und: Bandscheiben haben keine
              eigene Blutversorgung — sie werden durch Be- und Entlastung ernährt.
              Bewegung ist buchstäblich <em>Nahrung</em> für die Bandscheiben.
            </p>

            <p>
              Dein tägliches Gehen ist dabei schon hilfreich — die rhythmische
              Be- und Entlastung beim Gehen nährt die Bandscheiben. Krafttraining
              baut zusätzlich das muskuläre Korsett auf.
            </p>

            <div className="space-y-3 mt-4">
              <Collapsible title="Was ist ein Bandscheibenvorfall?">
                <div className="space-y-3">
                  <p>
                    Stell dir die Bandscheibe wie einen Berliner (Krapfen) vor:
                    Außen ein fester Ring, innen ein weicher Kern. Bei einem Vorfall
                    drückt der Kern durch Risse nach außen — und kann auf Nerven
                    drücken. Das verursacht Schmerzen, die oft ins Bein ausstrahlen
                    (<MedTerm term="Ischialgie">Ischias</MedTerm>).
                  </p>
                  <p>
                    In den meisten Fällen (über 90 %) heilt ein Bandscheibenvorfall
                    von selbst — ohne Operation. Wichtig: In Bewegung bleiben!
                  </p>
                </div>
              </Collapsible>

              <Collapsible title="Diese Übungen bitte VERMEIDEN" icon={<XCircle className="w-5 h-5 text-red-500" />}>
                <div className="space-y-3">
                  <ul className="space-y-2">
                    {[
                      { title: 'Sit-ups / Crunches', desc: 'Enormer Druck auf Bandscheiben durch Beugung unter Last' },
                      { title: 'Vorbeugen mit gestreckten Beinen', desc: 'Rundet die Lendenwirbelsäule' },
                      { title: 'Schweres Kreuzheben', desc: 'Zu viel Belastung ohne perfekte Technik' },
                      { title: 'Ruckartige Drehbewegungen', desc: 'Scherkräfte auf die Bandscheiben' },
                      { title: 'Schweres Überkopfdrücken', desc: 'Kann ein Hohlkreuz verstärken' },
                      { title: 'Springen ohne Vorbereitung', desc: 'Unkontrollierte Landebelastung' },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span><strong>{item.title}</strong> — {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapsible>

              <Collapsible title="Diese Übungen sind SICHER und empfohlen" icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                <div className="space-y-3">
                  <ul className="space-y-2">
                    {[
                      { title: 'Beckenheben (Glute Bridge)', desc: 'Kein Druck auf die Wirbelsäule' },
                      { title: 'Katzenbuckel/Kuh (Cat-Cow)', desc: 'Sanfte Mobilisierung' },
                      { title: 'Beckenkippung (Pelvic Tilt)', desc: 'Aktiviert tiefe Bauchmuskeln' },
                      { title: 'Planke (auf den Knien)', desc: 'Core-Stärkung bei neutraler Wirbelsäule' },
                      { title: 'Wandhocke / Stuhlkniebeugen', desc: 'Kontrollierte Beinarbeit' },
                      { title: 'Walking', desc: 'Dein täglicher Spaziergang nährt die Bandscheiben!' },
                      { title: 'Einbeinstand', desc: 'Gleichgewicht ohne Rückenbelastung' },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span><strong>{item.title}</strong> — {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapsible>

              <Collapsible title="Wann zum Arzt? — Warnsignale" icon={<AlertTriangle className="w-5 h-5 text-orange-500" />}>
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="font-semibold text-red-700 text-sm mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      SOFORT zum Arzt / Notaufnahme:
                    </p>
                    <ul className="text-sm space-y-1 text-red-700">
                      <li>• Kontrollverlust über Blase oder Darm (<MedTerm term="Cauda-equina-Syndrom">Cauda-equina-Syndrom</MedTerm> — Notfall!)</li>
                      <li>• Fortschreitende Muskelschwäche in den Beinen</li>
                      <li>• Taubheit im Sattelbereich</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <p className="font-semibold text-orange-700 text-sm mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      Zeitnah zum Arzt (innerhalb weniger Tage):
                    </p>
                    <ul className="text-sm space-y-1 text-orange-700">
                      <li>• Schmerzen, die nach 6 Wochen nicht besser werden</li>
                      <li>• Neues Taubheitsgefühl oder Kribbeln in den Beinen</li>
                      <li>• Schmerzen, die nachts schlimmer werden</li>
                      <li>• Fieber zusammen mit Rückenschmerzen</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="font-semibold text-green-700 text-sm mb-2 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" />
                      Normal und kein Grund zur Sorge:
                    </p>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>• Leichter Muskelkater nach Training (1–2 Tage)</li>
                      <li>• Leichtes Ziehen bei Dehnübungen</li>
                      <li>• Muskuläre Ermüdung beim Training</li>
                    </ul>
                  </div>
                </div>
              </Collapsible>
            </div>
          </div>
        </SectionCard>
      </FadeInSection>
    </div>
  )
}
