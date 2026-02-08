import { Calendar, Sprout, Dumbbell, Footprints, Leaf, Lightbulb } from 'lucide-react'
import SectionCard from '../../components/SectionCard'
import Collapsible from '../../components/Collapsible'
import FadeInSection from '../../components/FadeInSection'

export default function TabWochenplan() {
  return (
    <div className="space-y-8">
      <FadeInSection>
        <SectionCard title="Dein Wochenplan" icon={<Calendar className="w-6 h-6" />}>
          <p className="text-text-light mb-2">
            Du gehst bereits täglich 1–2 Stunden — das bleibt dein Fundament!
            Dieser Plan fügt <strong>3 kurze Krafteinheiten pro Woche</strong> hinzu.
            An den anderen Tagen gehst du wie gewohnt spazieren.
          </p>
          <p className="text-text-light mb-6 text-sm">
            Zwischen Krafttrainingstagen liegen mindestens 48 Stunden Pause für die
            Muskelerholung. Dein Walking kannst du jeden Tag machen.
          </p>

          <div className="mb-6">
            <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
              <Sprout className="w-5 h-5 text-primary" />
              Monat 1–2: Sanfter Einstieg
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  day: 'Montag',
                  icon: <Dumbbell className="w-4 h-4" />,
                  activity: 'Kraft (20 Min) + Spaziergang',
                  detail: 'Kniebeugen, Beckenheben, seitl. Beinheben — dann gehen wie gewohnt',
                  color: 'bg-primary/10 border-primary/20',
                  iconColor: 'text-primary',
                },
                {
                  day: 'Dienstag',
                  icon: <Footprints className="w-4 h-4" />,
                  activity: 'Spaziergang wie gewohnt',
                  detail: '1–2 Stunden zügiges Gehen (Zone 2)',
                  color: 'bg-accent/10 border-accent/20',
                  iconColor: 'text-accent',
                },
                {
                  day: 'Mittwoch',
                  icon: <Dumbbell className="w-4 h-4" />,
                  activity: 'Kraft (20 Min) + Spaziergang',
                  detail: 'Liegestütze (Wand), Planke (Knie), Einbeinstand — dann gehen',
                  color: 'bg-primary/10 border-primary/20',
                  iconColor: 'text-primary',
                },
                {
                  day: 'Donnerstag',
                  icon: <Footprints className="w-4 h-4" />,
                  activity: 'Spaziergang wie gewohnt',
                  detail: 'Vielleicht eine neue Route ausprobieren?',
                  color: 'bg-accent/10 border-accent/20',
                  iconColor: 'text-accent',
                },
                {
                  day: 'Freitag',
                  icon: <Dumbbell className="w-4 h-4" />,
                  activity: 'Kraft (25 Min) + Spaziergang',
                  detail: 'Mix aus allen Übungen — Ganzkörper',
                  color: 'bg-primary/10 border-primary/20',
                  iconColor: 'text-primary',
                },
                {
                  day: 'Samstag',
                  icon: <Footprints className="w-4 h-4" />,
                  activity: 'Langer Spaziergang',
                  detail: 'Extra-Runde an der frischen Luft',
                  color: 'bg-accent/10 border-accent/20',
                  iconColor: 'text-accent',
                },
                {
                  day: 'Sonntag',
                  icon: <Leaf className="w-4 h-4" />,
                  activity: 'Aktive Erholung',
                  detail: 'Leichter Spaziergang, Dehnen, Mobilisierung',
                  color: 'bg-secondary border-border',
                  iconColor: 'text-text-light',
                },
              ].map((item) => (
                <div
                  key={item.day}
                  className={`px-5 py-3 rounded-xl border ${item.color}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-text w-28 shrink-0">{item.day}</span>
                    <span className={`${item.iconColor} shrink-0`}>{item.icon}</span>
                    <span className="text-text font-medium text-sm">{item.activity}</span>
                  </div>
                  <p className="text-xs text-text-light mt-1 ml-32">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-6">
            <p className="text-sm text-text-light flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span><strong>Reihenfolge:</strong> Mach das Krafttraining VOR dem Spaziergang.
              So bist du frisch und konzentriert für die Übungen, und der Spaziergang
              danach dient als lockeres Cooldown.</span>
            </p>
          </div>

          <Collapsible title="Monat 3–4: Intensität steigern">
            <div className="space-y-3">
              <p>
                Die gleichen Übungen, aber mit mehr Wiederholungen und weniger Pausen:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>3 × 15 Kniebeugen</strong> (statt 2 × 10)</li>
                <li><strong>Einbeiniges Beckenheben</strong> statt beidbeinig</li>
                <li><strong>Liegestütze von der Treppenstufe</strong> (tiefer als Wand)</li>
                <li><strong>Planke 30–45 Sekunden</strong> (statt 15)</li>
                <li><strong>Wadenheben einbeinig</strong></li>
              </ul>
              <p className="text-sm text-text-light/70">
                Optional: Theraband für Ruderübungen und Monster Walk hinzufügen.
              </p>
            </div>
          </Collapsible>

          <Collapsible title="Ab Monat 5: Zusätzliche Belastung">
            <div className="space-y-3">
              <p>
                Wenn die Technik sitzt, kommen externe Widerstände hinzu:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Rucksack mit Büchern</strong> bei Kniebeugen (3–5 kg)</li>
                <li><strong>Gewichtsweste</strong> beim Spaziergang (2–5 kg)</li>
                <li><strong>Wasserflaschen als Hanteln</strong> (1–2 kg)</li>
                <li><strong>Farmer's Walk</strong> — Einkaufstaschen tragen und gehen</li>
              </ul>
              <p className="text-sm text-text-light/70">
                Intensität: 8–12 Wiederholungen, die letzten 2 fühlen sich anstrengend an.
              </p>
            </div>
          </Collapsible>

          <div className="mt-4 bg-secondary/50 rounded-xl p-4">
            <p className="text-sm text-text-light italic">
              „Der Schlüssel wenn man älter ist: SCHWER trainieren — nicht bis zum
              Muskelversagen, sondern mit hohem Widerstand und sauberer Technik."
              — <strong>Dr. Stacy Sims</strong>, Sportphysiologin
            </p>
          </div>
        </SectionCard>
      </FadeInSection>
    </div>
  )
}
