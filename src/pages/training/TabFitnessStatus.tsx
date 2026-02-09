import { useState } from 'react'
import { Target, Heart, Bone, Dumbbell, Wind, Grip, ChevronDown, TrendingUp, Lightbulb } from 'lucide-react'
import SectionCard from '../../components/SectionCard'
import FadeInSection from '../../components/FadeInSection'

interface FitnessGoal {
  id: string
  title: string
  icon: React.ReactNode
  unit: string
  levels: {
    label: string
    emoji: string
    range: string
    color: string
  }[]
  why: string
  source: string
  howToImprove: string
}

interface Biomarker {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  measurement: string
  ranges: { label: string; value: string; color: string }[]
  why: string
}

const fitnessGoals: FitnessGoal[] = [
  {
    id: 'pushups',
    title: 'Liegestütze',
    icon: <Dumbbell className="w-5 h-5" />,
    unit: 'Wiederholungen',
    levels: [
      { label: 'Kritisch', emoji: '🔴', range: '<5', color: 'bg-red-500' },
      { label: 'Ausbaufähig', emoji: '🟡', range: '5-15', color: 'bg-yellow-500' },
      { label: 'Gut', emoji: '🟢', range: '15-25', color: 'bg-green-500' },
      { label: 'Exzellent', emoji: '🏆', range: '25+', color: 'bg-primary' },
    ],
    why: 'Eine Harvard-Studie zeigte: Männer die >40 Liegestütze schaffen haben ein 96% geringeres Risiko für Herz-Kreislauf-Erkrankungen als jene die <10 schaffen.',
    source: 'Harvard Medical School, 2019',
    howToImprove: 'Starte mit Wand-Liegestützen, dann Knie-Variante. 3x/Woche trainieren, jede Woche 1-2 Wiederholungen mehr versuchen.',
  },
  {
    id: 'wallsit',
    title: 'Wall Sit (Wandsitzen)',
    icon: <Target className="w-5 h-5" />,
    unit: 'Sekunden',
    levels: [
      { label: 'Kritisch', emoji: '🔴', range: '<30s', color: 'bg-red-500' },
      { label: 'Ausbaufähig', emoji: '🟡', range: '30-60s', color: 'bg-yellow-500' },
      { label: 'Gut', emoji: '🟢', range: '60-90s', color: 'bg-green-500' },
      { label: 'Exzellent', emoji: '🏆', range: '90s+', color: 'bg-primary' },
    ],
    why: 'Misst Beinkraft und muskuläre Ausdauer. Starke Beine = weniger Sturzrisiko, mehr Unabhängigkeit im Alter.',
    source: 'Functional Fitness Assessments',
    howToImprove: 'Übe 2-3x/Woche. Rücken flach an die Wand, Knie 90°. Steigere wöchentlich um 5-10 Sekunden.',
  },
  {
    id: 'deadhang',
    title: 'Dead Hang (Freies Hängen)',
    icon: <Grip className="w-5 h-5" />,
    unit: 'Sekunden',
    levels: [
      { label: 'Kritisch', emoji: '🔴', range: '<10s', color: 'bg-red-500' },
      { label: 'Ausbaufähig', emoji: '🟡', range: '10-30s', color: 'bg-yellow-500' },
      { label: 'Gut', emoji: '🟢', range: '30-45s', color: 'bg-green-500' },
      { label: 'Exzellent', emoji: '🏆', range: '45s+', color: 'bg-primary' },
    ],
    why: 'Grip Strength korreliert direkt mit Langlebigkeit. Dead Hang trainiert Griffkraft, Schultern und dekomprimiert die Wirbelsäule.',
    source: 'Dr. Peter Attia',
    howToImprove: 'Hänge dich an eine Stange (Spielplatz, Türreck). Anfänger: Füße auf Stuhl stützen. Täglich 2-3 Versuche.',
  },
  {
    id: 'balance',
    title: 'Einbeinstand (Augen geschlossen)',
    icon: <Target className="w-5 h-5" />,
    unit: 'Sekunden',
    levels: [
      { label: 'Kritisch', emoji: '🔴', range: '<5s', color: 'bg-red-500' },
      { label: 'Ausbaufähig', emoji: '🟡', range: '5-15s', color: 'bg-yellow-500' },
      { label: 'Gut', emoji: '🟢', range: '15-30s', color: 'bg-green-500' },
      { label: 'Exzellent', emoji: '🏆', range: '30s+', color: 'bg-primary' },
    ],
    why: 'Balance-Fähigkeit bei geschlossenen Augen ist ein direkter Prädiktor für Sturzrisiko. Stürze sind die #1 Todesursache bei 65+.',
    source: 'Otago Exercise Programme',
    howToImprove: 'Täglich üben! Erst mit offenen Augen sicher 30s stehen, dann Augen schließen. Stuhl daneben zur Sicherheit.',
  },
  {
    id: 'heartrate',
    title: 'Ruhepuls',
    icon: <Heart className="w-5 h-5" />,
    unit: 'Schläge/Min',
    levels: [
      { label: 'Kritisch', emoji: '🔴', range: '>80', color: 'bg-red-500' },
      { label: 'Ausbaufähig', emoji: '🟡', range: '70-80', color: 'bg-yellow-500' },
      { label: 'Gut', emoji: '🟢', range: '60-70', color: 'bg-green-500' },
      { label: 'Exzellent', emoji: '🏆', range: '<60', color: 'bg-primary' },
    ],
    why: 'Ein niedriger Ruhepuls zeigt ein effizientes Herz-Kreislauf-System. Jeder Schlag weniger reduziert die Herz-Belastung über Millionen Schläge pro Jahr.',
    source: 'American Heart Association',
    howToImprove: 'Zone 2 Cardio (Walking, Radfahren) 3-4x/Woche für 30-45min. Verbesserung zeigt sich nach 6-8 Wochen.',
  },
  {
    id: 'grip',
    title: 'Griffkraft',
    icon: <Grip className="w-5 h-5" />,
    unit: 'kg',
    levels: [
      { label: 'Kritisch', emoji: '🔴', range: '<30kg', color: 'bg-red-500' },
      { label: 'Ausbaufähig', emoji: '🟡', range: '30-40kg', color: 'bg-yellow-500' },
      { label: 'Gut', emoji: '🟢', range: '40-50kg', color: 'bg-green-500' },
      { label: 'Exzellent', emoji: '🏆', range: '50kg+', color: 'bg-primary' },
    ],
    why: 'Grip Strength ist der beste EINZELPRÄDIKTOR für Langlebigkeit. Stärker als BMI, Blutdruck oder Cholesterin.',
    source: 'Prospective Urban Rural Epidemiology Study (PURE)',
    howToImprove: 'Dead Hangs, Farmers Walk (schwere Taschen tragen), Handtrainer. Auch: Gläser fest aufschrauben, Handtücher auswringen.',
  },
]

const biomarkers: Biomarker[] = [
  {
    id: 'bone',
    title: 'Knochendichte (T-Score)',
    icon: <Bone className="w-5 h-5" />,
    description: 'Gemessen via DEXA-Scan (Dual-Energy X-ray Absorptiometry)',
    measurement: 'T-Score = Vergleich mit jungen, gesunden Erwachsenen',
    ranges: [
      { label: 'Normal', value: '≥ -1.0', color: 'text-green-600' },
      { label: 'Osteopenie (Vorstufe)', value: '-1.0 bis -2.5', color: 'text-yellow-600' },
      { label: 'Osteoporose', value: '≤ -2.5', color: 'text-red-600' },
    ],
    why: 'Krafttraining erhöht Knochendichte um +0,88%/Jahr. Ohne Training: -2,1%/Jahr Verlust ab 40. Ein gebrochener Hüftknochen mit 70 = 30% Sterberisiko im ersten Jahr.',
  },
  {
    id: 'vo2max',
    title: 'VO₂ Max',
    icon: <Wind className="w-5 h-5" />,
    description: 'Maximale Sauerstoffaufnahme = kardiovaskuläre Fitness',
    measurement: 'Messen via: Cooper Test, 2K Rudern, oder Smartwatch-Schätzung',
    ranges: [
      { label: 'Schlecht (60-69 Jahre)', value: '<25 ml/kg/min', color: 'text-red-600' },
      { label: 'Durchschnitt', value: '25-35 ml/kg/min', color: 'text-yellow-600' },
      { label: 'Gut', value: '35-40 ml/kg/min', color: 'text-green-600' },
      { label: 'Exzellent', value: '>40 ml/kg/min', color: 'text-primary' },
    ],
    why: 'Menschen im untersten VO₂ Max Viertel haben ein 5x höheres Sterberisiko als jene im obersten Viertel. Es ist der stärkste Prädiktor für Langlebigkeit.',
  },
]

const keyTakeaways = [
  {
    icon: <Grip className="w-4 h-4" />,
    text: 'Grip Strength ist der beste Einzelprädiktor für Langlebigkeit',
    highlight: true,
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    text: 'Ab 30 verliert man 3-5% Muskelmasse pro Dekade — Training stoppt das',
  },
  {
    icon: <Wind className="w-4 h-4" />,
    text: 'VO₂ Max im untersten Viertel = 5x höheres Sterberisiko',
    highlight: true,
  },
  {
    icon: <Target className="w-4 h-4" />,
    text: 'Stürze sind die #1 Todesursache bei 65+ — Balance-Training rettet Leben',
  },
  {
    icon: <Heart className="w-4 h-4" />,
    text: 'Eine Harvard-Studie zeigt: >40 Liegestütze = 96% weniger Herzkrankheitsrisiko',
    highlight: true,
  },
  {
    icon: <Target className="w-4 h-4" />,
    text: 'Peter Attia nennt es den "Centenarian Decathlon" — was kannst du mit 90 noch?',
  },
  {
    icon: <Bone className="w-4 h-4" />,
    text: 'Krafttraining verbessert Knochendichte um +0,88% — ohne Training -2,1%/Jahr',
  },
  {
    icon: <Dumbbell className="w-4 h-4" />,
    text: '3x Kraft + 3-4x Zone 2 Cardio ist das wissenschaftliche Optimum',
    highlight: true,
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    text: 'Du baust nicht "Muskeln" auf — du baust Unabhängigkeit, Lebensqualität und Lebensjahre auf',
  },
  {
    icon: <Heart className="w-4 h-4" />,
    text: 'Jede Trainingseinheit ist eine Investition in dein zukünftiges Ich',
  },
]

function FitnessGoalCard({ goal }: { goal: FitnessGoal }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm card-hover">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-5 py-4"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            {goal.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-text">{goal.title}</h4>
            <p className="text-xs text-text-light">{goal.unit}</p>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-text-light transition-transform duration-300 shrink-0 ${
              expanded ? 'rotate-180' : ''
            }`}
          />
        </div>

        {/* Progress bar with 4 levels */}
        <div className="flex gap-1">
          {goal.levels.map((level, i) => (
            <div key={i} className="flex-1">
              <div className={`h-2 rounded-full ${level.color} transition-all hover:h-3`} />
              <div className="text-[10px] text-center mt-1 text-text-light/70">
                {level.emoji} {level.range}
              </div>
            </div>
          ))}
        </div>
      </button>

      <div className={`collapsible-content ${expanded ? 'open' : ''}`}>
        <div className="px-5 pb-5 border-t border-border pt-4 space-y-3">
          <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
            <h5 className="font-semibold text-sm text-text mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              Warum ist das wichtig?
            </h5>
            <p className="text-sm text-text-light leading-relaxed">{goal.why}</p>
            <p className="text-xs text-text-light/60 mt-2 italic">Quelle: {goal.source}</p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-3">
            <h5 className="font-semibold text-sm text-text mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              So verbesserst du es:
            </h5>
            <p className="text-sm text-text-light leading-relaxed">{goal.howToImprove}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {goal.levels.map((level, i) => (
              <div
                key={i}
                className={`text-center py-2 rounded-lg border transition-all hover:scale-105 ${
                  i === 3 ? 'bg-primary/10 border-primary/30' : 'bg-secondary/20 border-border'
                }`}
              >
                <div className="text-lg mb-1">{level.emoji}</div>
                <div className="text-xs font-medium text-text">{level.label}</div>
                <div className="text-xs text-text-light/70">{level.range}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function BiomarkerCard({ biomarker }: { biomarker: Biomarker }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm card-hover">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-5 py-4 flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          {biomarker.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-text">{biomarker.title}</h4>
          <p className="text-xs text-text-light mt-1">{biomarker.description}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-text-light transition-transform duration-300 shrink-0 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div className={`collapsible-content ${expanded ? 'open' : ''}`}>
        <div className="px-5 pb-5 border-t border-border pt-4 space-y-3">
          <div className="bg-secondary/30 rounded-lg p-3">
            <h5 className="font-semibold text-sm text-text mb-2">Wie messen?</h5>
            <p className="text-sm text-text-light">{biomarker.measurement}</p>
          </div>

          <div>
            <h5 className="font-semibold text-sm text-text mb-2">Werte-Bereiche:</h5>
            <div className="space-y-2">
              {biomarker.ranges.map((range, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 px-3 bg-secondary/20 rounded-lg"
                >
                  <span className="text-sm font-medium text-text">{range.label}</span>
                  <span className={`text-sm font-bold ${range.color}`}>{range.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
            <p className="text-sm text-text-light leading-relaxed">{biomarker.why}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TabFitnessStatus() {
  return (
    <div className="space-y-8">
      <FadeInSection>
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text mb-2">Dein Fitness-Plateau</h2>
              <p className="text-text-light leading-relaxed">
                Es geht nicht darum "jung" zu sein — es geht darum <strong>funktional und unabhängig</strong> zu bleiben.
                Diese Werte zeigen was dein Körper können sollte, um gesund zu altern.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay="100ms">
        <SectionCard title="Messbare Fitness-Ziele" icon={<Target className="w-6 h-6" />}>
          <p className="text-text-light mb-4">
            Diese Tests kannst du selbst zu Hause machen. Klicke auf jedes Ziel für Details
            und wissenschaftliche Begründung.
          </p>
          <div className="space-y-3">
            {fitnessGoals.map((goal) => (
              <FitnessGoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </SectionCard>
      </FadeInSection>

      <FadeInSection delay="200ms">
        <SectionCard title="Wichtige Biomarker" icon={<Heart className="w-6 h-6" />}>
          <p className="text-text-light mb-4">
            Diese Werte solltest du mit deinem Arzt besprechen und regelmäßig überprüfen lassen.
          </p>
          <div className="space-y-3">
            {biomarkers.map((biomarker) => (
              <BiomarkerCard key={biomarker.id} biomarker={biomarker} />
            ))}
          </div>
        </SectionCard>
      </FadeInSection>

      <FadeInSection delay="300ms">
        <SectionCard title="Wusstest du?" icon={<Lightbulb className="w-6 h-6" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {keyTakeaways.map((takeaway, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 border transition-all hover:scale-105 ${
                  takeaway.highlight
                    ? 'bg-primary/10 border-primary/30 shadow-sm'
                    : 'bg-secondary/30 border-border'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      takeaway.highlight ? 'bg-primary/20 text-primary' : 'bg-secondary text-text-light'
                    }`}
                  >
                    {takeaway.icon}
                  </div>
                  <p className="text-sm text-text leading-relaxed flex-1">{takeaway.text}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </FadeInSection>
    </div>
  )
}
