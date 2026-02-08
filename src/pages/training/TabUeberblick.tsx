import {
  Heart,
  Bone,
  Shield,
  Smile,
  TrendingUp,
  Brain,
  Activity,
  Sparkles,
} from 'lucide-react'
import SectionCard from '../../components/SectionCard'
import BenefitCard from '../../components/BenefitCard'
import FadeInSection from '../../components/FadeInSection'

export default function TabUeberblick() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <FadeInSection>
        <div className="relative bg-gradient-to-br from-primary/10 via-secondary to-accent/10 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blob-shape" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 blob-shape" />

          <div className="relative z-10">
            <span className="inline-block text-4xl mb-3">💪</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
              Krafttraining für Walkerinnen
            </h1>
            <p className="text-lg text-text-light max-w-2xl leading-relaxed mb-4">
              Du gehst bereits 1–2 Stunden täglich — super! Damit hast du eine starke
              Ausdauer-Basis. Was fehlt: <strong>gezieltes Krafttraining</strong>, das
              Muskeln aufbaut, Knochen stärkt und dich noch belastbarer macht.
              Bodyweight-Übungen zu Hause reichen völlig — kein Fitnessstudio nötig.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2.5 text-sm font-medium text-primary-dark border border-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
              2–3× pro Woche je 20–30 Min. Krafttraining — zusätzlich zu deinen Spaziergängen
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Why Training Matters */}
      <FadeInSection>
        <SectionCard title="Warum Krafttraining zusätzlich zum Gehen?" icon={<Heart className="w-6 h-6" />}>
          <p className="text-text-light mb-4">
            Spazierengehen ist fantastisch für Herz, Kreislauf und Stimmung. Aber für
            <strong> Muskelaufbau und Knochendichte</strong> braucht der Körper stärkere Reize.
            Ab 50 verlieren wir ca. <strong>0,8 % Muskelmasse pro Jahr</strong> — Gehen allein
            stoppt das nicht. Krafttraining schon.
          </p>
          <p className="text-text-light mb-6">
            Die Kombination aus Ausdauer (dein Walking) + Kraft ist der Goldstandard:
            Du bist kardiovaskulär fit <em>und</em> stark. Das ist die Formel für
            Unabhängigkeit bis ins hohe Alter.
          </p>

          {/* Benefit Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BenefitCard
              icon={<Bone className="w-6 h-6" />}
              title="Stärkere Knochen"
              description="Krafttraining verbessert die Knochendichte um bis zu +0,88 %. Ohne Training verliert man 0,6–2,1 % pro Jahr. Über 10 Jahre ist der Unterschied enorm."
            />
            <BenefitCard
              icon={<Shield className="w-6 h-6" />}
              title="Bis zu 50 % weniger Stürze"
              description="Kraft- und Balancetraining kann das Sturzrisiko halbieren. Das ist lebenswichtig: 90 % aller Hüftfrakturen betreffen Menschen über 65."
            />
            <BenefitCard
              icon={<Smile className="w-6 h-6" />}
              title="Bessere Stimmung"
              description="Krafttraining reduziert depressive Symptome um 28 %. Einige Studien zeigen: Bewegung wirkt bei Depressionen so effektiv wie Antidepressiva."
            />
            <BenefitCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Mehr Selbstständigkeit"
              description="Koffer tragen, Treppen steigen, vom Boden aufstehen — Kraft sichert die Unabhängigkeit. Dr. Peter Attia nennt das den 'Centenarian Decathlon'."
            />
            <BenefitCard
              icon={<Brain className="w-6 h-6" />}
              title="Schutz fürs Gehirn"
              description="Training setzt BDNF frei — ein 'Düngemittel für das Gehirn'. Knochen produzieren Osteocalcin, das die Gedächtnisfunktion verbessert."
            />
            <BenefitCard
              icon={<Activity className="w-6 h-6" />}
              title="Ergänzt dein Walking perfekt"
              description="Walking = Ausdauer. Krafttraining = Muskeln + Knochen. Zusammen hast du die perfekte Kombination für ein langes, selbstbestimmtes Leben."
            />
          </div>

          <div className="mt-6 bg-primary/5 border border-primary/10 rounded-xl p-4">
            <p className="text-sm text-text-light italic">
              „Es gibt nichts, was ich meinen Patienten sage, das wichtiger ist als Bewegung."
              — <strong>Dr. Peter Attia</strong>, Longevity-Experte und Autor von „Outlive"
            </p>
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Quick overview of what's in the other tabs */}
      <FadeInSection>
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
          <h3 className="font-bold text-text text-lg mb-4">📑 Was dich hier erwartet</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { emoji: '💪', title: 'Übungen', desc: '8 Bodyweight-Übungen mit Bildern und Anleitung' },
              { emoji: '📅', title: 'Wochenplan', desc: 'Konkreter Plan — kombiniert mit deinem Walking' },
              { emoji: '🦴', title: 'Knochen', desc: 'Warum Knochendichte so wichtig ist' },
              { emoji: '⚠️', title: 'Rücken', desc: 'Sichere Übungen und was du vermeiden solltest' },
              { emoji: '💊', title: 'Supplements', desc: 'Was wirklich hilft — evidenzbasiert' },
              { emoji: '📚', title: 'Quellen', desc: 'Alle Studien und weiterführende Links' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30">
                <span className="text-xl shrink-0">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-text text-sm">{item.title}</p>
                  <p className="text-xs text-text-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}
