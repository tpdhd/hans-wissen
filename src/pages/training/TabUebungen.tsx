import { Dumbbell, Weight } from 'lucide-react'
import SectionCard from '../../components/SectionCard'
import ExerciseCardNew from './ExerciseCardNew'
import FadeInSection from '../../components/FadeInSection'

const IMG_BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises'

const exercises = [
  {
    title: 'Kniebeugen (Bodyweight Squat)',
    germanName: 'Kniebeuge ohne Gewicht',
    muscles: 'Oberschenkel, Gesäß, Core',
    difficulty: 'Anfänger' as const,
    sets: '2–3 × 10–15 Wiederholungen',
    images: {
      start: `${IMG_BASE}/Bodyweight_Squat/0.jpg`,
      end: `${IMG_BASE}/Bodyweight_Squat/1.jpg`,
    },
    instructions: [
      'Stelle dich hüftbreit hin, Füße leicht nach außen gedreht.',
      'Senke dich langsam ab, als würdest du dich auf einen Stuhl setzen.',
      'Halte den Rücken gerade und die Knie über den Zehenspitzen.',
      'Gehe so tief wie bequem möglich (mindestens 90° im Knie).',
      'Drücke dich über die Fersen kräftig nach oben.',
    ],
    safetyNote: {
      type: 'safe' as const,
      text: 'Rückenschonend: Halte den Blick geradeaus und den Rücken neutral. Bei Unsicherheit: Stuhl hinter dich stellen als Sicherheitsnetz.',
    },
    tip: 'Du machst das beim Spaziergang ständig — jedes Mal wenn du dich hinsetzt und aufstehst. Jetzt machst du es bewusst!',
  },
  {
    title: 'Stuhlkniebeuge (Chair Squat)',
    germanName: 'Aufstehen und Hinsetzen am Stuhl',
    muscles: 'Oberschenkel, Gesäß',
    difficulty: 'Anfänger' as const,
    sets: '2–3 × 10–12 Wiederholungen',
    images: {
      start: `${IMG_BASE}/Chair_Squat/0.jpg`,
      end: `${IMG_BASE}/Chair_Squat/1.jpg`,
    },
    instructions: [
      'Stelle dich vor einen stabilen Stuhl, Füße hüftbreit.',
      'Senke dich langsam ab, bis du die Sitzfläche leicht berührst.',
      'Nicht hinsetzen — nur kurz antippen!',
      'Drücke dich sofort wieder nach oben.',
      'Halte die Arme vor der Brust oder gestreckt für Balance.',
    ],
    safetyNote: {
      type: 'safe' as const,
      text: 'Der Stuhl dient als Sicherheitsnetz. Ideal als Einstieg, bevor du freie Kniebeugen machst.',
    },
    tip: 'Wenn das leicht wird, versuche es mit einer kurzen Pause (2 Sek.) unten — das macht es deutlich schwerer.',
  },
  {
    title: 'Wadenheben (Standing Calf Raises)',
    germanName: 'Wadenheben im Stand',
    muscles: 'Waden (Gastrocnemius, Soleus)',
    difficulty: 'Anfänger' as const,
    sets: '2–3 × 15–20 Wiederholungen',
    images: {
      start: `${IMG_BASE}/Standing_Calf_Raises/0.jpg`,
      end: `${IMG_BASE}/Standing_Calf_Raises/1.jpg`,
    },
    instructions: [
      'Stelle dich hüftbreit hin, halte dich an einer Stuhllehne fest.',
      'Drücke dich langsam auf die Zehenspitzen hoch.',
      'Halte die Position oben kurz (1–2 Sek.).',
      'Senke dich langsam und kontrolliert wieder ab.',
      'Achte auf gleichmäßige Bewegung ohne Schwung.',
    ],
    safetyNote: {
      type: 'safe' as const,
      text: 'Sehr gelenkschonend. Stärkt die Waden, die beim täglichen Gehen stark beansprucht werden.',
    },
    tip: 'Für mehr Herausforderung: einbeinig ausführen oder auf einer Treppenstufe mit dem Fersen über die Kante.',
  },
  {
    title: 'Beckenheben (Glute Bridge)',
    germanName: 'Brücke / Beckenheben',
    muscles: 'Gesäß, hintere Oberschenkel, unterer Rücken',
    difficulty: 'Anfänger' as const,
    sets: '2–3 × 12–15 Wiederholungen',
    images: {
      start: `${IMG_BASE}/Butt_Lift_Bridge/0.jpg`,
      end: `${IMG_BASE}/Butt_Lift_Bridge/1.jpg`,
    },
    instructions: [
      'Lege dich auf den Rücken, Knie angewinkelt, Füße flach auf dem Boden.',
      'Arme liegen locker neben dem Körper.',
      'Spanne Gesäß und Bauch an.',
      'Hebe das Becken nach oben, bis Oberschenkel und Oberkörper eine gerade Linie bilden.',
      'Halte die Position oben 2–3 Sekunden.',
      'Senke das Becken langsam wieder ab, ohne den Boden ganz zu berühren.',
    ],
    safetyNote: {
      type: 'safe' as const,
      text: 'Kein Druck auf die Wirbelsäule — ideal bei Bandscheibenproblemen. Eine der besten Rücken-Übungen überhaupt.',
    },
    tip: 'Wenn es leicht wird: einbeinig ausführen oder einen Gegenstand (Buch, Wasserflasche) auf die Hüfte legen.',
  },
  {
    title: 'Liegestütze (Push-ups)',
    germanName: 'Liegestütze (Varianten: Wand, Knie, oder klassisch)',
    muscles: 'Brust, Schultern, Trizeps, Core',
    difficulty: 'Anfänger' as const,
    sets: '2–3 × 8–15 Wiederholungen',
    images: {
      start: `${IMG_BASE}/Pushups/0.jpg`,
      end: `${IMG_BASE}/Pushups/1.jpg`,
    },
    instructions: [
      'Anfänger-Variante: Stütze dich an einer Wand ab (Armlänge Abstand).',
      'Mittlere Variante: Auf den Knien am Boden.',
      'Fortgeschritten: Klassische Liegestütze auf den Zehen.',
      'Beuge die Arme und senke die Brust Richtung Wand/Boden.',
      'Drücke dich kraftvoll zurück in die Ausgangsposition.',
      'Halte den Körper gerade wie ein Brett — kein Hohlkreuz!',
    ],
    safetyNote: {
      type: 'caution' as const,
      text: 'Starte mit der Wand-Variante. Erst wenn du 15 saubere Wand-Liegestütze schaffst, probiere die Knie-Variante.',
    },
    tip: 'Wand-Liegestütze sind keine „leichte Version" — sie sind der richtige Einstieg. Selbst Profis nutzen Varianten.',
  },
  {
    title: 'Planke (Plank)',
    germanName: 'Unterarmstütz / Planke',
    muscles: 'Core (Bauch, Rücken), Schultern',
    difficulty: 'Mittel' as const,
    sets: '2–3 × 15–30 Sekunden (steigern)',
    images: {
      start: `${IMG_BASE}/Plank/0.jpg`,
      end: `${IMG_BASE}/Plank/1.jpg`,
    },
    instructions: [
      'Stütze dich auf die Unterarme, Ellbogen unter den Schultern.',
      'Körper bildet eine gerade Linie von Kopf bis Füße (oder Knie).',
      'Spanne Bauch und Gesäß fest an.',
      'Halte die Position — gleichmäßig atmen!',
      'Anfänger: Auf den Knien beginnen und langsam steigern.',
    ],
    safetyNote: {
      type: 'caution' as const,
      text: 'Bei Rückenproblemen: Nur auf Knien ausführen. Sofort aufhören wenn der untere Rücken durchhängt oder schmerzt.',
    },
    tip: 'Qualität vor Dauer! Lieber 15 Sek. perfekt als 60 Sek. mit Hohlkreuz.',
  },
  {
    title: 'Einbeinstand (Balance)',
    germanName: 'Einbeinstand — Gleichgewichtstraining',
    muscles: 'Beine, Hüfte, Core (Stabilisation)',
    difficulty: 'Anfänger' as const,
    sets: '2 × 20–30 Sekunden pro Seite',
    instructions: [
      'Stelle dich neben einen Stuhl (zum Festhalten bei Bedarf).',
      'Hebe ein Bein leicht an — das Knie bleibt locker.',
      'Halte die Balance, Blick geradeaus auf einen festen Punkt.',
      'Nach 20–30 Sek. Seitenwechsel.',
    ],
    safetyNote: {
      type: 'safe' as const,
      text: 'Sturzprävention pur! Das Otago-Programm hat damit 35–40 % weniger Stürze nachgewiesen.',
    },
    tip: 'Steigerungen: Augen schließen, auf weicher Unterlage stehen, Kopf drehen während du balancierst.',
  },
  {
    title: 'Seitliches Beinheben',
    germanName: 'Seitliches Beinheben im Stehen',
    muscles: 'Hüftabduktoren, Gesäß (seitlich)',
    difficulty: 'Anfänger' as const,
    sets: '2–3 × 12 pro Seite',
    instructions: [
      'Stelle dich seitlich neben einen Stuhl, halte dich fest.',
      'Hebe das äußere Bein langsam zur Seite (ca. 30–45°).',
      'Halte den Oberkörper aufrecht — nicht zur Seite lehnen!',
      'Senke das Bein langsam zurück, ohne den Boden zu berühren.',
      'Alle Wiederholungen auf einer Seite, dann wechseln.',
    ],
    safetyNote: {
      type: 'safe' as const,
      text: 'Stärkt die seitliche Hüftmuskulatur — extrem wichtig für Stabilität beim Gehen und Sturzprävention.',
    },
    tip: 'Diese Muskeln werden beim geradeaus Gehen kaum trainiert. Deshalb ist diese Übung so wertvoll als Ergänzung zu deinen Spaziergängen.',
  },
]

export default function TabUebungen() {
  return (
    <div className="space-y-8">
      <FadeInSection>
        <SectionCard title="Bodyweight-Übungen für zu Hause" icon={<Dumbbell className="w-6 h-6" />}>
          <p className="text-text-light mb-4">
            Diese 8 Übungen brauchen kein Equipment — nur deinen Körper und einen stabilen
            Stuhl. Sie ergänzen dein Walking perfekt und trainieren genau die Muskelgruppen,
            die beim Gehen zu kurz kommen.
          </p>
          <p className="text-text-light mb-6">
            <strong>Tipp:</strong> Klicke auf eine Übung für detaillierte Anleitung mit
            Bildern. Starte mit den Übungen, die als „Anfänger" markiert sind.
          </p>

          {/* Training type overview */}
          <div className="bg-bg rounded-xl border border-border overflow-hidden mb-6">
            <div className="px-4 py-3 bg-secondary/30 border-b border-border">
              <h4 className="font-semibold text-text text-sm flex items-center gap-2">
                <Weight className="w-4 h-4 text-primary" />
                Was wirkt wie auf die Knochen?
              </h4>
            </div>
            <div className="p-4 space-y-2 text-sm">
              {[
                { level: 5, label: 'Krafttraining mit Gewichten', desc: 'stärkstes Signal' },
                { level: 4, label: 'Bodyweight-Training', desc: 'sehr guter Einstieg' },
                { level: 4, label: 'Walking mit Gewichtsweste', desc: 'verstärkt dein Gehen' },
                { level: 3, label: 'Walking (dein Standard)', desc: 'gut für Herz, leicht für Knochen' },
                { level: 1, label: 'Schwimmen / Radfahren', desc: 'gut für Gelenke, nicht für Knochen' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="flex gap-0.5 shrink-0 w-20">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className={`w-3.5 h-3.5 rounded-full ${
                          n <= item.level ? 'bg-primary' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                  <span><strong>{item.label}</strong> — {item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {exercises.map((ex) => (
              <ExerciseCardNew key={ex.title} {...ex} />
            ))}
          </div>
        </SectionCard>
      </FadeInSection>
    </div>
  )
}
