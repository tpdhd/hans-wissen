import {
  Pill,
  Sun,
  Heart,
  Zap,
  Shield,
  Sparkles,
  Apple,
  Droplet,
  Activity,
  Dumbbell,
  AlertTriangle,
} from 'lucide-react'
import SectionCard from '../../components/SectionCard'
import BenefitCard from '../../components/BenefitCard'
import FadeInSection from '../../components/FadeInSection'

export default function TabVitaminOverview() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <FadeInSection>
        <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-primary/10 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blob-shape" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 blob-shape" />

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-3">
              <Pill className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
              Vitamine & Nährstoffe
            </h1>
            <p className="text-lg text-text-light max-w-2xl leading-relaxed mb-4">
              Dein Körper ist ein Meisterwerk — aber er braucht die richtigen Bausteine.
              Vitamine und Mineralstoffe sind essentiell für Energie, Immunsystem, Knochen,
              Gehirn und ein langes, gesundes Leben. Hier erfährst du, was wirklich wichtig ist.
            </p>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2.5 text-sm font-medium text-primary-dark border border-primary/10">
                <Sparkles className="w-4 h-4 text-primary" />
                <strong>Basis für alle Männer 30+:</strong> D3+K2, Omega-3, Magnesium
              </div>
              <p className="text-sm text-text-light/70 italic max-w-xl">
                Evidenzbasiert, wissenschaftlich fundiert — keine Marketing-Mythen.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Top 5 Supplements Quick Guide */}
      <FadeInSection>
        <SectionCard title="Die 5 wichtigsten Supplements für Männer 30+" icon={<Shield className="w-6 h-6" />}>
          <p className="text-text-light mb-6">
            Diese 5 Ergänzungen haben die stärkste Evidenz und den größten Impact auf
            Gesundheit und Lebensqualität — <strong>wenn deine Ernährung Lücken hat</strong>.
          </p>

          {/* Top 5 Grid */}
          <div className="grid grid-cols-1 gap-4">
            {/* 1. D3 + K2 */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text text-lg mb-1">1. Vitamin D3 + K2</h3>
                  <p className="text-sm text-text-light mb-2">
                    <strong>Warum:</strong> 80 % der Deutschen haben D3-Mangel (fehlende Sonne).
                    D3 stärkt Knochen, Immunsystem, Stimmung. K2 sorgt dafür, dass Calcium in
                    die Knochen geht (nicht in Arterien).
                  </p>
                  <p className="text-sm text-text-light">
                    <strong>Dosierung:</strong> 2000-4000 IE D3 + 100-200 µg K2 (MK-7) täglich, morgens zum Essen
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Omega-3 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/60 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-400/20 flex items-center justify-center shrink-0">
                  <Droplet className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text text-lg mb-1">2. Omega-3 (EPA/DHA)</h3>
                  <p className="text-sm text-text-light mb-2">
                    <strong>Warum:</strong> Entzündungshemmend, Herzgesundheit, Gehirnfunktion,
                    Gelenke. Wichtig, wenn du <strong>&lt;2× Fisch/Woche</strong> isst.
                  </p>
                  <p className="text-sm text-text-light">
                    <strong>Dosierung:</strong> 1-2 g EPA+DHA kombiniert täglich, zum Essen (fettlöslich)
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Magnesium */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-400/20 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text text-lg mb-1">3. Magnesium</h3>
                  <p className="text-sm text-text-light mb-2">
                    <strong>Warum:</strong> Über 300 Enzyme beteiligt. Schlaf, Muskeln, Stressabbau,
                    Herzrhythmus. Häufiger Mangel durch moderne Ernährung.
                  </p>
                  <p className="text-sm text-text-light">
                    <strong>Dosierung:</strong> 300-400 mg täglich (Citrat oder Glycinat), abends fördert Schlaf
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Kreatin */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/60 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-400/20 flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text text-lg mb-1">4. Kreatin Monohydrat</h3>
                  <p className="text-sm text-text-light mb-2">
                    <strong>Warum:</strong> Muskelkraft, Muskelmasse, kognitive Funktion.
                    Eines der am besten erforschten Supplements überhaupt.
                  </p>
                  <p className="text-sm text-text-light">
                    <strong>Dosierung:</strong> 5 g täglich (dauerhaft sicher, keine Ladephase nötig)
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Probiotika */}
            <div className="bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200/60 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-400/20 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-rose-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text text-lg mb-1">5. Probiotika</h3>
                  <p className="text-sm text-text-light mb-2">
                    <strong>Warum:</strong> Darmgesundheit, Immunsystem (70 % im Darm!),
                    Stimmung (Darm-Hirn-Achse). Basis für alles andere.
                  </p>
                  <p className="text-sm text-text-light">
                    <strong>Dosierung:</strong> 10-50 Mrd. KBE, mehrere Stämme, morgens nüchtern oder abends
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-primary/5 border border-primary/10 rounded-xl p-4">
            <p className="text-sm text-text-light italic">
              <strong>Wichtig:</strong> Supplements ersetzen keine ausgewogene Ernährung!
              Sie schließen Lücken. Echte Lebensmittel sind immer die Basis.
            </p>
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Why Vitamins & Minerals Matter */}
      <FadeInSection>
        <SectionCard title="Warum Vitamine & Mineralstoffe so wichtig sind" icon={<Apple className="w-6 h-6" />}>
          <p className="text-text-light mb-6">
            Dein Körper kann die meisten Vitamine und Mineralstoffe nicht selbst herstellen.
            Sie müssen über die Nahrung oder Supplements zugeführt werden. Ohne sie funktioniert
            <strong> nichts</strong>: kein Energiestoffwechsel, kein Immunsystem, keine Zellteilung,
            keine Knochen, kein Gehirn.
          </p>

          {/* Benefit Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BenefitCard
              icon={<Shield className="w-6 h-6" />}
              title="Starkes Immunsystem"
              description="Vitamin D, C, Zink, Selen — alle essentiell für die Abwehr von Viren, Bakterien und Entzündungen."
            />
            <BenefitCard
              icon={<Heart className="w-6 h-6" />}
              title="Herzgesundheit"
              description="Omega-3, Magnesium, Kalium, Folsäure — senken Blutdruck, schützen Gefäße, regulieren Herzrhythmus."
            />
            <BenefitCard
              icon={<Zap className="w-6 h-6" />}
              title="Energie & Stoffwechsel"
              description="B-Vitamine, Eisen, Magnesium — verwandeln Nahrung in Energie. Ohne sie: Müdigkeit, Schwäche."
            />
            <BenefitCard
              icon={<Activity className="w-6 h-6" />}
              title="Muskeln & Knochen"
              description="Calcium, Vitamin D, K2, Magnesium, Protein — stärken Knochen, verhindern Osteoporose, erhalten Muskelmasse."
            />
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Navigation to other tabs */}
      <FadeInSection>
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
          <h3 className="font-bold text-text text-lg mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Was dich hier erwartet
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: <Apple className="w-5 h-5 text-primary" />, title: 'Vitamine', desc: 'Alle 13 essentiellen Vitamine mit Funktion, Bedarf, Quellen' },
              { icon: <Zap className="w-5 h-5 text-primary" />, title: 'Mineralstoffe', desc: 'Die 10 wichtigsten Mineralstoffe von Magnesium bis Zink' },
              { icon: <Dumbbell className="w-5 h-5 text-primary" />, title: 'Supplements', desc: 'Evidenzbasierte Empfehlungen für Männer 30+' },
              { icon: <AlertTriangle className="w-5 h-5 text-primary" />, title: 'Wechselwirkungen', desc: 'Was zusammen nehmen, was NICHT — wichtig!' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30">
                <span className="shrink-0 mt-0.5">{item.icon}</span>
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
