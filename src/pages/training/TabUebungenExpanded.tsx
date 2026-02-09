import { Dumbbell, Weight, Heart } from 'lucide-react'
import SectionCard from '../../components/SectionCard'
import ExerciseCardNew from './ExerciseCardNew'
import FadeInSection from '../../components/FadeInSection'

const IMG_BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises'

// Note: GIF URLs from ExerciseDB API will be added once we identify the correct exercise IDs
// For now using static images as fallback
const exercises = [
  // === KRAFT UNTERKÖRPER ===
  {
    category: 'Kraft Unterkörper',
    exercises: [
      {
        title: 'Kniebeugen (Bodyweight Squat)',
        germanName: 'Kniebeuge ohne Gewicht',
        muscles: 'Oberschenkel, Gesäß, Core',
        difficulty: 'Anfänger' as const,
        sets: '2–3 × 10–15 Wiederholungen',
        // gifUrl: 'https://static.exercisedb.dev/media/XXXXX.gif', // TO BE ADDED
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
        title: 'Ausfallschritte (Lunges)',
        germanName: 'Ausfallschritte vorwärts',
        muscles: 'Oberschenkel, Gesäß, Balance',
        difficulty: 'Mittel' as const,
        sets: '2–3 × 8–10 pro Seite',
        instructions: [
          'Stehe aufrecht, Füße hüftbreit.',
          'Mache einen großen Schritt nach vorne.',
          'Senke dein hinteres Knie Richtung Boden (nicht aufsetzen!).',
          'Vorderes Knie bleibt über dem Fußgelenk (nicht über die Zehen schieben).',
          'Drücke dich über das vordere Bein zurück in die Ausgangsposition.',
          'Wechsle das Bein.',
        ],
        safetyNote: {
          type: 'caution' as const,
          text: 'Halte dich am Anfang an einem Stuhl fest für bessere Balance. Knie nicht über Zehenspitze!',
        },
        tip: 'Lunges sind hervorragend für Balance und Sturzprävention — sie trainieren genau die Bewegung beim Treppensteigen.',
      },
      {
        title: 'Step-ups (Treppensteigen)',
        germanName: 'Auf eine Stufe steigen',
        muscles: 'Oberschenkel, Gesäß, Waden',
        difficulty: 'Anfänger' as const,
        sets: '2–3 × 10 pro Seite',
        instructions: [
          'Stelle dich vor eine stabile Treppenstufe oder Box (20-30cm hoch).',
          'Steige mit einem Fuß auf die Stufe.',
          'Drücke dich über dieses Bein komplett nach oben — das andere Bein kommt nach.',
          'Steige langsam wieder herunter.',
          'Wechsle nach der Hälfte der Wiederholungen das Bein.',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Perfekt für Alltags-Funktionalität. Du trainierst genau das, was du beim Treppensteigen brauchst.',
        },
        tip: 'Mach das am Treppengeländer — dort kannst du dich bei Bedarf festhalten.',
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
    ],
  },
  // === KRAFT OBERKÖRPER ===
  {
    category: 'Kraft Oberkörper',
    exercises: [
      {
        title: 'Wand-Liegestütze (Wall Push-ups)',
        germanName: 'Liegestütze an der Wand',
        muscles: 'Brust, Schultern, Trizeps',
        difficulty: 'Anfänger' as const,
        sets: '2–3 × 10–15 Wiederholungen',
        instructions: [
          'Stelle dich etwa 60cm vor eine Wand.',
          'Lege die Hände auf Schulterhöhe flach an die Wand.',
          'Beuge die Arme und bringe dein Gesicht zur Wand.',
          'Halte den Körper gerade wie ein Brett.',
          'Drücke dich kraftvoll zurück.',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Perfekter Einstieg! Erst wenn du 15 saubere Wand-Liegestütze schaffst, gehe zur Knie-Variante über.',
        },
        tip: 'Je weiter du von der Wand wegstehst, desto schwerer wird es.',
      },
      {
        title: 'Liegestütze auf Knien',
        germanName: 'Knie-Liegestütze',
        muscles: 'Brust, Schultern, Trizeps, Core',
        difficulty: 'Mittel' as const,
        sets: '2–3 × 8–12 Wiederholungen',
        instructions: [
          'Gehe in den Vierfüßlerstand, Knie am Boden.',
          'Hände etwas breiter als schulterbreit.',
          'Senke den Oberkörper ab, bis die Brust fast den Boden berührt.',
          'Halte den Körper von Kopf bis Knie gerade.',
          'Drücke dich kraftvoll nach oben.',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Eine Matte oder Handtuch unter die Knie legen für mehr Komfort.',
        },
        tip: 'Konzentriere dich auf saubere Ausführung — lieber 8 perfekte als 15 wacklige!',
      },
      {
        title: 'Klassische Liegestütze (Push-ups)',
        germanName: 'Liegestütze auf den Zehen',
        muscles: 'Brust, Schultern, Trizeps, Core',
        difficulty: 'Mittel' as const,
        sets: '2–3 × 5–15 Wiederholungen',
        images: {
          start: `${IMG_BASE}/Pushups/0.jpg`,
          end: `${IMG_BASE}/Pushups/1.jpg`,
        },
        instructions: [
          'Gehe in die Plank-Position: Hände unter Schultern, Körper gerade.',
          'Beuge die Arme und senke die Brust Richtung Boden.',
          'Ellbogen etwa 45° vom Körper weg.',
          'Gehe so tief wie möglich (Brust fast am Boden).',
          'Drücke dich explosiv nach oben.',
          'Halte den Core angespannt — kein Hohlkreuz!',
        ],
        safetyNote: {
          type: 'caution' as const,
          text: 'Nur wenn du 15+ Knie-Liegestütze sauber schaffst! Qualität vor Quantität.',
        },
        tip: 'Harvard-Studie: >40 Liegestütze = 96% weniger Herzkrankheitsrisiko. Das ist dein Ziel!',
      },
      {
        title: 'Tisch-Rudern (Inverted Row)',
        germanName: 'Rudern unter dem Tisch',
        muscles: 'Rücken, Bizeps, Core',
        difficulty: 'Mittel' as const,
        sets: '2–3 × 8–12 Wiederholungen',
        instructions: [
          'Lege dich unter einen stabilen Tisch (Beine ausgestreckt).',
          'Greife die Tischkante mit beiden Händen.',
          'Ziehe deine Brust zur Tischkante hoch.',
          'Schulterblätter zusammenziehen!',
          'Senke dich langsam wieder ab.',
        ],
        safetyNote: {
          type: 'caution' as const,
          text: 'Tisch muss stabil sein! Erst testen ob er dein Gewicht hält. Alternativ: Theraband an Türgriff.',
        },
        tip: 'Pull-Übungen (Ziehen) sind genauso wichtig wie Push (Drücken) — sonst bekommst du Haltungsprobleme.',
      },
    ],
  },
  // === CORE (RUMPF) ===
  {
    category: 'Core (Rumpf)',
    exercises: [
      {
        title: 'Planke (Plank)',
        germanName: 'Unterarmstütz / Planke',
        muscles: 'Core (Bauch, Rücken), Schultern',
        difficulty: 'Mittel' as const,
        sets: '2–3 × 15–45 Sekunden',
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
        title: 'Bird-Dog',
        germanName: 'Diagonaler Stütz (Vogel-Hund)',
        muscles: 'Core, Rücken, Gesäß, Balance',
        difficulty: 'Mittel' as const,
        sets: '2–3 × 10 pro Seite',
        instructions: [
          'Gehe in den Vierfüßlerstand.',
          'Strecke gleichzeitig den rechten Arm nach vorne und das linke Bein nach hinten.',
          'Arm, Rumpf und Bein bilden eine gerade Linie.',
          'Halte 2–3 Sekunden, dann zurück.',
          'Seitenwechsel: linker Arm, rechtes Bein.',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Exzellent für Rücken und Balance! Rückenschonend und hochwirksam gegen Rückenschmerzen.',
        },
        tip: 'Konzentriere dich auf Stabilität, nicht auf Geschwindigkeit. Langsam und kontrolliert!',
      },
      {
        title: 'Dead Bug',
        germanName: 'Toter Käfer',
        muscles: 'Core (tiefer Bauch), Stabilität',
        difficulty: 'Mittel' as const,
        sets: '2–3 × 10–12 Wiederholungen',
        instructions: [
          'Lege dich auf den Rücken, Arme senkrecht nach oben gestreckt.',
          'Knie angewinkelt, Unterschenkel parallel zum Boden (90° Position).',
          'Senke gleichzeitig den rechten Arm nach hinten und das linke Bein nach unten.',
          'Halte den unteren Rücken am Boden gedrückt!',
          'Zurück in Ausgangsposition, dann Seitenwechsel.',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Rückenfreundlich! Trainiert die tiefen Bauchmuskeln die deine Wirbelsäule stabilisieren.',
        },
        tip: 'Atme gleichmäßig weiter — nicht Luft anhalten! Bauch bleibt angespannt.',
      },
      {
        title: 'Seitliche Planke (Side Plank)',
        germanName: 'Seitlicher Unterarmstütz',
        muscles: 'Seitliche Bauchmuskeln, Schultern',
        difficulty: 'Mittel' as const,
        sets: '2 × 15–30 Sek. pro Seite',
        instructions: [
          'Lege dich auf die Seite, Unterarm am Boden (Ellbogen unter Schulter).',
          'Hebe die Hüfte, bis dein Körper eine gerade Linie bildet.',
          'Anfänger: Unteres Knie am Boden lassen.',
          'Fortgeschritten: Beide Füße gestapelt.',
          'Halte die Position, dann Seitenwechsel.',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Trainiert seitliche Rumpfstabilität — wichtig für Balance und Sturzprävention.',
        },
        tip: 'Stelle dir vor du stehst zwischen zwei Glasscheiben — du darfst weder nach vorne noch hinten kippen.',
      },
    ],
  },
  // === BALANCE ===
  {
    category: 'Balance & Sturzprävention',
    exercises: [
      {
        title: 'Einbeinstand (Single Leg Stand)',
        germanName: 'Einbeinstand — Gleichgewichtstraining',
        muscles: 'Beine, Hüfte, Core (Stabilisation)',
        difficulty: 'Anfänger' as const,
        sets: '2 × 30 Sekunden pro Seite',
        instructions: [
          'Stelle dich neben einen Stuhl (zum Festhalten bei Bedarf).',
          'Hebe ein Bein leicht an — das Knie bleibt locker.',
          'Halte die Balance, Blick geradeaus auf einen festen Punkt.',
          'Nach 30 Sek. Seitenwechsel.',
          'Steigerung: Augen schließen!',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Sturzprävention pur! Das Otago-Programm hat damit 35–40 % weniger Stürze nachgewiesen.',
        },
        tip: 'Steigerungen: Augen schließen, auf weicher Unterlage stehen, Kopf drehen während du balancierst.',
      },
      {
        title: 'Tandem-Stand',
        germanName: 'Fersenspitzen-Stand (wie Seiltänzer)',
        muscles: 'Balance, Fußgelenke, Waden',
        difficulty: 'Anfänger' as const,
        sets: '2 × 30 Sekunden',
        instructions: [
          'Stelle einen Fuß direkt vor den anderen (Ferse berührt Zehen).',
          'Halte die Balance — Arme zur Seite für Stabilität.',
          'Blick geradeaus auf einen festen Punkt.',
          'Nach 30 Sek. Füße wechseln.',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Stuhl daneben zur Sicherheit! Diese Übung ist schwieriger als sie aussieht.',
        },
        tip: 'Das ist ein Standard-Test beim Arzt um Sturzrisiko zu bewerten. Übe es!',
      },
      {
        title: 'Heel-to-Toe Walk',
        germanName: 'Fersenspitzen-Gang',
        muscles: 'Balance, Koordination, Beinmuskeln',
        difficulty: 'Anfänger' as const,
        sets: '2–3 × 10 Schritte',
        instructions: [
          'Gehe eine gerade Linie entlang (z.B. Bodenfliesen-Naht).',
          'Setze bei jedem Schritt die Ferse direkt vor die Zehen des anderen Fußes.',
          'Arme zur Seite für Balance.',
          'Langsam und kontrolliert gehen.',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Mach das entlang einer Wand — so kannst du dich bei Bedarf abstützen.',
        },
        tip: 'Das macht die Polizei beim Alkoholtest — weil es Balance und Koordination testet!',
      },
      {
        title: 'Seitliches Beinheben (Side Leg Raise)',
        germanName: 'Seitliches Beinheben im Stehen',
        muscles: 'Hüftabduktoren, Gesäß (seitlich), Balance',
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
    ],
  },
  // === MOBILITÄT ===
  {
    category: 'Mobilität & Dehnung',
    exercises: [
      {
        title: 'Cat-Cow (Katze-Kuh)',
        germanName: 'Katze-Kuh Wirbelsäulen-Mobilisierung',
        muscles: 'Wirbelsäule, Rückenstrecker, Bauch',
        difficulty: 'Anfänger' as const,
        sets: '10–15 Wiederholungen',
        instructions: [
          'Gehe in den Vierfüßlerstand.',
          'Kuh: Atme ein, senke den Bauch, hebe den Kopf — Rücken wird hohl.',
          'Katze: Atme aus, runde den Rücken, ziehe den Bauch ein, Kopf senken.',
          'Fließende Bewegung zwischen beiden Positionen.',
          'Langsam und mit der Atmung synchronisieren.',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Perfekt als Aufwärmung oder am Morgen nach dem Aufstehen. Mobilisiert die gesamte Wirbelsäule.',
        },
        tip: 'Viele machen das täglich morgens für 2 Minuten — hilft gegen Rückensteifheit!',
      },
      {
        title: 'Hüftkreise (Hip Circles)',
        germanName: 'Hüftkreisen im Stand',
        muscles: 'Hüftgelenk, Mobilität',
        difficulty: 'Anfänger' as const,
        sets: '10 Kreise pro Richtung',
        instructions: [
          'Stelle dich hüftbreit hin, Hände auf die Hüften.',
          'Kreise langsam mit der Hüfte — große, weite Kreise.',
          'Erst 10x im Uhrzeigersinn, dann 10x gegen den Uhrzeigersinn.',
          'Oberkörper bleibt ruhig.',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Verbessert Hüftmobilität — wichtig fürs Gehen, Treppensteigen und Balance.',
        },
        tip: 'Mach das vor jedem Training als Warm-up. Oder während du Zähneputzt!',
      },
      {
        title: 'Schulterkreise (Shoulder Circles)',
        germanName: 'Schulterkreisen',
        muscles: 'Schultergelenk, Mobilität',
        difficulty: 'Anfänger' as const,
        sets: '10 Kreise vorwärts + 10 rückwärts',
        instructions: [
          'Stehe aufrecht, Arme locker.',
          'Kreise beide Schultern langsam vorwärts (große Kreise).',
          'Dann 10x rückwärts.',
          'Optional: Mit ausgestreckten Armen kreisen für mehr Intensität.',
        ],
        safetyNote: {
          type: 'safe' as const,
          text: 'Löst Verspannungen im Schulter-Nacken-Bereich. Perfekt bei Schreibtischarbeit.',
        },
        tip: 'Mach das mehrmals täglich — besonders wenn du viel sitzt oder nach dem Aufstehen.',
      },
    ],
  },
]

export default function TabUebungenExpanded() {
  return (
    <div className="space-y-8">
      <FadeInSection>
        <div className="bg-gradient-to-br from-primary/10 via-secondary to-transparent rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Dumbbell className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text mb-2">Deine Übungsbibliothek</h2>
              <p className="text-text-light leading-relaxed">
                <strong>20 Übungen</strong> ohne Equipment — nur dein Körper, ein Stuhl und eine Matte.
                Von Anfänger bis Fortgeschritten, sortiert nach Muskelgruppen.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <SectionCard title="Wie wirken verschiedene Trainingsformen?" icon={<Weight className="w-6 h-6" />}>
          <div className="bg-bg rounded-xl border border-border overflow-hidden mb-4">
            <div className="px-4 py-3 bg-secondary/30 border-b border-border">
              <h4 className="font-semibold text-text text-sm flex items-center gap-2">
                <Weight className="w-4 h-4 text-primary" />
                Impact auf Knochendichte & Muskelaufbau
              </h4>
            </div>
            <div className="p-4 space-y-2 text-sm">
              {[
                { level: 5, label: 'Krafttraining mit Gewichten', desc: 'stärkstes Signal für Knochen & Muskeln' },
                { level: 4, label: 'Bodyweight-Training (diese Übungen)', desc: 'sehr guter Einstieg, hochwirksam' },
                { level: 4, label: 'Walking mit Gewichtsweste', desc: 'verstärkt dein Gehen' },
                { level: 3, label: 'Walking (dein Standard)', desc: 'gut für Herz & Ausdauer, leicht für Knochen' },
                { level: 1, label: 'Schwimmen / Radfahren', desc: 'gelenkschonend, aber kein Knochen-Stimulus' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="flex gap-0.5 shrink-0 w-24">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className={`w-4 h-4 rounded-full transition-all ${
                          n <= item.level ? 'bg-primary scale-100' : 'bg-border scale-75'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-text-light">
                    <strong className="text-text">{item.label}</strong> — {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
            <p className="text-sm text-text-light flex items-start gap-2">
              <Heart className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Dein perfekter Mix:</strong> Walking (Zone 2 Cardio) + diese Bodyweight-Übungen (Kraft) = 
                Herz-Kreislauf-Fitness + starke Knochen & Muskeln. Das Beste aus beiden Welten!
              </span>
            </p>
          </div>
        </SectionCard>
      </FadeInSection>

      {exercises.map((section, sectionIndex) => (
        <FadeInSection key={section.category} delay={`${100 + sectionIndex * 50}ms`}>
          <SectionCard
            title={section.category}
            icon={
              section.category.includes('Unterkörper') ? <Dumbbell className="w-6 h-6" /> :
              section.category.includes('Oberkörper') ? <Dumbbell className="w-6 h-6" /> :
              section.category.includes('Core') ? <Target className="w-6 h-6" /> :
              section.category.includes('Balance') ? <Target className="w-6 h-6" /> :
              <Heart className="w-6 h-6" />
            }
          >
            <div className="space-y-3">
              {section.exercises.map((ex) => (
                <ExerciseCardNew key={ex.title} {...ex} />
              ))}
            </div>
          </SectionCard>
        </FadeInSection>
      ))}

      <FadeInSection delay="500ms">
        <div className="bg-secondary/30 rounded-2xl border border-border p-6">
          <h3 className="font-bold text-text text-lg mb-3 flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-primary" />
            Wie baue ich ein Training daraus?
          </h3>
          <div className="space-y-3 text-text-light">
            <p>
              <strong>Anfänger (Monat 1-2):</strong> Wähle 6-8 Übungen aus verschiedenen Kategorien.
              Beispiel: 2× Unterkörper, 2× Oberkörper, 1× Core, 1× Balance. Je 2 Sätze, 10-12 Wiederholungen.
            </p>
            <p>
              <strong>Fortgeschritten (ab Monat 3):</strong> 8-10 Übungen, 3 Sätze, 12-15 Wiederholungen.
              Kürzere Pausen (30-45 Sek.). Bei Planke/Balance: Zeit steigern statt Wiederholungen.
            </p>
            <p className="text-sm bg-primary/5 border border-primary/10 rounded-lg p-3">
              💡 <strong>Goldene Regel:</strong> Qualität vor Quantität! Lieber 10 perfekte Wiederholungen
              als 20 schlampige. Saubere Technik verhindert Verletzungen und bringt bessere Ergebnisse.
            </p>
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}

// Missing import
import { Target } from 'lucide-react'
