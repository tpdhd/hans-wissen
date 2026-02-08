import {
  Heart,
  Bone,
  Dumbbell,
  Calendar,
  ShieldAlert,
  Apple,
  BookOpen,
  Sparkles,
  TrendingUp,
  Shield,
  Smile,
  Activity,
  StretchHorizontal,
} from 'lucide-react'
import MedTerm from '../components/MedTerm'
import SectionCard from '../components/SectionCard'
import BenefitCard from '../components/BenefitCard'
import ExerciseCard from '../components/ExerciseCard'
import Collapsible from '../components/Collapsible'
import FadeInSection from '../components/FadeInSection'

export default function Training() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <FadeInSection>
        <div className="relative bg-gradient-to-br from-primary/10 via-secondary to-accent/10 rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Decorative blob */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blob-shape" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 blob-shape" />
          
          <div className="relative z-10">
            <span className="inline-block text-4xl mb-3">💪</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
              Fit & Stark im Alter
            </h1>
            <p className="text-lg text-text-light max-w-2xl leading-relaxed">
              [CONTENT WIRD ERGÄNZT] — Motivierender Einleitungstext darüber, 
              warum es nie zu spät ist, mit Training anzufangen und wie 
              Bewegung die Lebensqualität im Alter verbessert.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Quick Navigation */}
      <FadeInSection>
        <nav className="bg-white rounded-xl border border-border p-4">
          <p className="text-sm font-semibold text-text-light mb-2">📑 Auf dieser Seite:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Warum Training?', href: '#warum' },
              { label: 'Knochen', href: '#knochen' },
              { label: 'Übungen', href: '#uebungen' },
              { label: 'Wochenplan', href: '#wochenplan' },
              { label: 'Rücken', href: '#ruecken' },
              { label: 'Nahrungsergänzung', href: '#nahrung' },
              { label: 'Quellen', href: '#quellen' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm px-3 py-1.5 rounded-lg bg-secondary hover:bg-primary/10 text-text-light hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeInSection>

      {/* Section 1: Warum Training wichtig ist */}
      <FadeInSection>
        <SectionCard id="warum" title="Warum Training wichtig ist" icon={<Heart className="w-6 h-6" />}>
          <p className="text-text-light mb-6">
            [CONTENT WIRD ERGÄNZT] — Einführung warum regelmäßige Bewegung 
            gerade ab 60+ so wichtig ist. Bezug auf <MedTerm term="Sarkopenie" />, 
            Sturzprävention und allgemeine Gesundheit.
          </p>
          
          {/* Benefit Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BenefitCard
              icon={<Bone className="w-6 h-6" />}
              title="Stärkere Knochen"
              description="[CONTENT WIRD ERGÄNZT] — Wie Training die Knochendichte verbessert."
            />
            <BenefitCard
              icon={<Shield className="w-6 h-6" />}
              title="Weniger Stürze"
              description="[CONTENT WIRD ERGÄNZT] — Besseres Gleichgewicht und Stabilität."
            />
            <BenefitCard
              icon={<Smile className="w-6 h-6" />}
              title="Bessere Stimmung"
              description="[CONTENT WIRD ERGÄNZT] — Bewegung gegen Depressionen und Einsamkeit."
            />
            <BenefitCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Mehr Selbstständigkeit"
              description="[CONTENT WIRD ERGÄNZT] — Alltagsaktivitäten länger alleine meistern."
            />
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Section 2: Was passiert mit unseren Knochen? */}
      <FadeInSection>
        <SectionCard id="knochen" title="Was passiert mit unseren Knochen?" icon={<Bone className="w-6 h-6" />}>
          <div className="space-y-4 text-text-light">
            <p>
              [CONTENT WIRD ERGÄNZT] — Erklärung von <MedTerm term="Osteoporose" /> in 
              einfacher Sprache. Was passiert im Körper, warum werden Knochen brüchig, 
              besonders bei Frauen nach den <MedTerm term="Wechseljahre">Wechseljahren</MedTerm>.
            </p>
            <p>
              [CONTENT WIRD ERGÄNZT] — Risikofaktoren, 
              Rolle von <MedTerm term="Calcium" /> und <MedTerm term="Vitamin D" />.
            </p>

            {/* FAQ Section */}
            <div className="space-y-3 mt-6">
              <h3 className="font-semibold text-text text-lg">Häufige Fragen</h3>
              <Collapsible title="Was genau ist Osteoporose?">
                <p>[CONTENT WIRD ERGÄNZT] — Einfache Erklärung mit Vergleichen 
                (z.B. Knochen wie ein Schwamm, der immer mehr Löcher bekommt).</p>
              </Collapsible>
              <Collapsible title="Bin ich gefährdet?">
                <p>[CONTENT WIRD ERGÄNZT] — Risikofaktoren checken: 
                Alter, Geschlecht, Familiensituation, Bewegungsmangel, Ernährung.</p>
              </Collapsible>
              <Collapsible title="Kann man Knochen wieder aufbauen?">
                <p>[CONTENT WIRD ERGÄNZT] — Ja, bis zu einem gewissen Grad! 
                Was die Wissenschaft sagt.</p>
              </Collapsible>
            </div>
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Section 3: Welche Übungen helfen? */}
      <FadeInSection>
        <SectionCard id="uebungen" title="Welche Übungen helfen?" icon={<Dumbbell className="w-6 h-6" />}>
          <p className="text-text-light mb-6">
            [CONTENT WIRD ERGÄNZT] — Überblick über die wichtigsten Trainingsarten 
            für Knochengesundheit und allgemeine Fitness im Alter. 
            Unterschied zwischen <MedTerm term="Krafttraining" />, 
            <MedTerm term="Ausdauertraining" /> und Gleichgewichtsübungen.
          </p>

          <div className="space-y-3">
            <ExerciseCard
              title="Kniebeugen (mit Stuhl)"
              icon={<Dumbbell className="w-6 h-6 text-primary" />}
              difficulty="leicht"
              duration="5 Minuten"
            >
              <p>[CONTENT WIRD ERGÄNZT] — Anleitung, Varianten, Worauf achten.</p>
            </ExerciseCard>

            <ExerciseCard
              title="Einbeinstand"
              icon={<Activity className="w-6 h-6 text-primary" />}
              difficulty="leicht"
              duration="3 Minuten"
            >
              <p>[CONTENT WIRD ERGÄNZT] — Gleichgewichtsübung, Hilfe am Stuhl möglich.</p>
            </ExerciseCard>

            <ExerciseCard
              title="Wandliegestütze"
              icon={<StretchHorizontal className="w-6 h-6 text-primary" />}
              difficulty="leicht"
              duration="5 Minuten"
            >
              <p>[CONTENT WIRD ERGÄNZT] — Oberkörper stärken, gelenkschonend.</p>
            </ExerciseCard>

            <ExerciseCard
              title="Theraband-Übungen"
              icon={<Sparkles className="w-6 h-6 text-primary" />}
              difficulty="mittel"
              duration="10 Minuten"
            >
              <p>[CONTENT WIRD ERGÄNZT] — Verschiedene Übungen mit dem elastischen Band.</p>
            </ExerciseCard>

            <ExerciseCard
              title="Spaziergang mit Tempo"
              icon={<TrendingUp className="w-6 h-6 text-primary" />}
              difficulty="leicht"
              duration="20-30 Minuten"
            >
              <p>[CONTENT WIRD ERGÄNZT] — Ausdauer und Knochenstärkung durch Gehen.</p>
            </ExerciseCard>
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Section 4: Dein Wochenplan */}
      <FadeInSection>
        <SectionCard id="wochenplan" title="Dein Wochenplan" icon={<Calendar className="w-6 h-6" />}>
          <p className="text-text-light mb-6">
            [CONTENT WIRD ERGÄNZT] — Ein einfacher, realistischer Wochenplan 
            zum Starten. Nicht überfordernd, mit Ruhetagen.
          </p>

          <div className="grid grid-cols-1 gap-3">
            {[
              { day: 'Montag', activity: '[Kraftübungen — 20 Min]', color: 'bg-primary/10 border-primary/20' },
              { day: 'Dienstag', activity: '[Spaziergang — 30 Min]', color: 'bg-accent/10 border-accent/20' },
              { day: 'Mittwoch', activity: '[Ruhetag oder leichtes Dehnen]', color: 'bg-secondary border-border' },
              { day: 'Donnerstag', activity: '[Gleichgewicht + Kraft — 20 Min]', color: 'bg-primary/10 border-primary/20' },
              { day: 'Freitag', activity: '[Spaziergang — 30 Min]', color: 'bg-accent/10 border-accent/20' },
              { day: 'Samstag', activity: '[Theraband-Übungen — 15 Min]', color: 'bg-primary/10 border-primary/20' },
              { day: 'Sonntag', activity: '[Ruhetag 🌿]', color: 'bg-secondary border-border' },
            ].map((item) => (
              <div
                key={item.day}
                className={`flex items-center gap-4 px-5 py-3 rounded-xl border ${item.color}`}
              >
                <span className="font-semibold text-text w-28 shrink-0">{item.day}</span>
                <span className="text-text-light text-sm">{item.activity}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-text-light/70 mt-4 italic">
            [CONTENT WIRD ERGÄNZT] — Hinweis: Langsam starten, auf den Körper hören, 
            bei Schmerzen aufhören.
          </p>
        </SectionCard>
      </FadeInSection>

      {/* Section 5: Wichtig bei Rückenproblemen */}
      <FadeInSection>
        <SectionCard id="ruecken" title="Wichtig bei Rückenproblemen" icon={<ShieldAlert className="w-6 h-6" />}>
          <div className="space-y-4 text-text-light">
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
              <p className="font-semibold text-accent flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5" />
                Wichtiger Hinweis
              </p>
              <p className="text-sm">
                [CONTENT WIRD ERGÄNZT] — Bei bestehenden Rückenproblemen, 
                <MedTerm term="Bandscheibenvorfall">Bandscheibenvorfällen</MedTerm> oder 
                <MedTerm term="Spinalkanalstenose" /> immer zuerst mit dem Arzt sprechen.
              </p>
            </div>
            
            <p>
              [CONTENT WIRD ERGÄNZT] — Was man bei <MedTerm term="Bandscheibenvorfall" /> 
              beachten muss. Welche Übungen gut sind, welche man vermeiden sollte. 
              Rolle der <MedTerm term="Rumpfmuskulatur">Rumpfmuskulatur (Core)</MedTerm>.
            </p>

            <div className="space-y-3 mt-4">
              <Collapsible title="Was ist ein Bandscheibenvorfall?">
                <p>[CONTENT WIRD ERGÄNZT] — Einfache Erklärung mit Bildern/Vergleichen.</p>
              </Collapsible>
              <Collapsible title="Welche Übungen sollte ich vermeiden?">
                <p>[CONTENT WIRD ERGÄNZT] — Konkrete Beispiele und warum.</p>
              </Collapsible>
              <Collapsible title="Sichere Übungen für den Rücken">
                <p>[CONTENT WIRD ERGÄNZT] — Empfohlene, sanfte Übungen.</p>
              </Collapsible>
            </div>
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Section 6: Nahrungsergänzung */}
      <FadeInSection>
        <SectionCard id="nahrung" title="Nahrungsergänzung" icon={<Apple className="w-6 h-6" />}>
          <div className="space-y-4 text-text-light">
            <p>
              [CONTENT WIRD ERGÄNZT] — Welche Nahrungsergänzungsmittel sinnvoll sein können, 
              besonders <MedTerm term="Vitamin D" />, <MedTerm term="Calcium" />, 
              <MedTerm term="Magnesium" /> und <MedTerm term="Vitamin K2">Vitamin K2</MedTerm>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                { name: 'Vitamin D3', dosage: '[DOSIERUNG ERGÄNZEN]', note: 'Besonders im Winter wichtig' },
                { name: 'Calcium', dosage: '[DOSIERUNG ERGÄNZEN]', note: 'Für die Knochen' },
                { name: 'Magnesium', dosage: '[DOSIERUNG ERGÄNZEN]', note: 'Für Muskeln und Nerven' },
                { name: 'Vitamin K2', dosage: '[DOSIERUNG ERGÄNZEN]', note: 'Hilft dem Calcium in die Knochen' },
              ].map((supp) => (
                <div key={supp.name} className="bg-bg rounded-xl border border-border p-4">
                  <h4 className="font-semibold text-text">{supp.name}</h4>
                  <p className="text-sm text-primary font-medium mt-1">{supp.dosage}</p>
                  <p className="text-xs text-text-light mt-1">{supp.note}</p>
                </div>
              ))}
            </div>

            <div className="bg-secondary rounded-xl p-4 mt-4">
              <p className="text-sm italic">
                [CONTENT WIRD ERGÄNZT] — Hinweis: Nahrungsergänzung ersetzt keine 
                ausgewogene Ernährung. Immer Rücksprache mit dem Arzt halten.
              </p>
            </div>
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Section 7: Quellen & Weiterlesen */}
      <FadeInSection>
        <SectionCard id="quellen" title="Quellen & Weiterlesen" icon={<BookOpen className="w-6 h-6" />}>
          <div className="space-y-3 text-text-light">
            <p className="text-sm">
              Alle Informationen basieren auf aktuellen wissenschaftlichen Erkenntnissen 
              und werden regelmäßig überprüft.
            </p>

            <div className="space-y-2 mt-4">
              <p className="font-semibold text-text text-sm">Quellen:</p>
              <ul className="list-disc list-inside text-sm space-y-1.5">
                <li>[QUELLE WIRD ERGÄNZT] — z.B. Deutsche Gesellschaft für Sportmedizin</li>
                <li>[QUELLE WIRD ERGÄNZT] — z.B. Bundeszentrale für gesundheitliche Aufklärung</li>
                <li>[QUELLE WIRD ERGÄNZT] — z.B. Osteoporose Selbsthilfegruppen</li>
                <li>[QUELLE WIRD ERGÄNZT] — z.B. Cochrane Reviews zu Exercise & Aging</li>
              </ul>
            </div>

            <div className="space-y-2 mt-4">
              <p className="font-semibold text-text text-sm">Weiterlesen:</p>
              <ul className="list-disc list-inside text-sm space-y-1.5">
                <li>[LINK WIRD ERGÄNZT] — Empfohlene Webseiten</li>
                <li>[LINK WIRD ERGÄNZT] — Bücher und Videos</li>
              </ul>
            </div>
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Back to top */}
      <div className="text-center pt-4 pb-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark transition-colors"
        >
          ↑ Nach oben
        </a>
      </div>
    </div>
  )
}
