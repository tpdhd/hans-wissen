import { BookOpen } from 'lucide-react'
import SectionCard from '../../components/SectionCard'
import FadeInSection from '../../components/FadeInSection'

export default function TabQuellen() {
  return (
    <div className="space-y-8">
      <FadeInSection>
        <SectionCard title="Quellen & Weiterlesen" icon={<BookOpen className="w-6 h-6" />}>
          <div className="space-y-5 text-text-light">
            <p className="text-sm">
              Alle Informationen basieren auf aktuellen wissenschaftlichen Studien und
              Empfehlungen anerkannter Experten. Hier alle Quellen zum Nachlesen.
            </p>

            {/* Studien */}
            <div>
              <h3 className="font-semibold text-text text-base mb-3">🔬 Wissenschaftliche Studien</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/28975661/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    LIFTMOR-Studie (Watson et al., 2018)
                  </a>{' '}
                  — Hochintensives Krafttraining und Knochendichte
                </li>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/15159265/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    EFOPS-Studie (Kemmler et al., Erlangen)
                  </a>{' '}
                  — 16-Jahres-Langzeitstudie
                </li>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/40420105/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Meta-Analyse 2025: Optimale Trainingsparameter
                  </a>{' '}
                  — BMD an Wirbelsäule und Hüfte
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9222380/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Meta-Analyse 2022: Krafttraining und Knochendichte
                  </a>{' '}
                  — Hüfte (+0,64 %) und Wirbelsäule (+0,62 %)
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10435089/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Sturzprävention durch Bewegung (2023)
                  </a>{' '}
                  — Bis zu 50 % weniger Stürze
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6518405/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Kreatin bei älteren Erwachsenen
                  </a>{' '}
                  — +1,37 kg Muskelmasse
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12506341/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Kreatin + Krafttraining (2025)
                  </a>{' '}
                  — Verdoppelte Kraftzuwächse
                </li>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/32972636/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Kalzium, D3, K2, Magnesium und Knochen
                  </a>{' '}
                  — Synergistische Wirkung
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5613455/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Vitamin D3 + K2 Synergie
                  </a>{' '}
                  — Zusammen wirksamer
                </li>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/30368550/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Kollagen und Gelenkgesundheit
                  </a>{' '}
                  — Wirksam bei Arthrose
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9413343/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Omega-3 bei Arthrose
                  </a>{' '}
                  — Reduziert Gelenkschmerzen
                </li>
                <li>
                  <a href="https://www.sciencedirect.com/science/article/abs/pii/S0165178124000337" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Krafttraining und mentale Gesundheit (2024)
                  </a>{' '}
                  — Reduziert depressive Symptome
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9858649/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Bewegung und kognitive Funktion
                  </a>{' '}
                  — Schützt vor geistigem Abbau
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9339797/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Krafttraining gegen Sarkopenie
                  </a>{' '}
                  — Wirksamstes Mittel
                </li>
              </ul>
            </div>

            {/* Podcasts */}
            <div>
              <h3 className="font-semibold text-text text-base mb-3">🎙️ Podcast-Episoden</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="https://www.hubermanlab.com/episode/how-to-use-exercise-to-improve-your-brains-health-longevity-performance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Huberman Lab: Exercise &amp; Brain Health
                  </a>
                </li>
                <li>
                  <a href="https://www.hubermanlab.com/episode/dr-stacy-sims-female-specific-exercise-nutrition-for-health-performance-longevity" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Huberman Lab mit Dr. Stacy Sims
                  </a>{' '}
                  — Frauenspezifisches Training
                </li>
                <li>
                  <a href="https://peterattiamd.com/exerciseforagingpeople/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Peter Attia #307: Exercise for Aging People
                  </a>
                </li>
                <li>
                  <a href="https://peterattiamd.com/exercising-for-longevity/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Peter Attia #206: Exercising for Longevity
                  </a>
                </li>
                <li>
                  <a href="https://peterattiamd.com/training-for-the-centenarian-decathlon/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Peter Attia #261: Centenarian Decathlon
                  </a>
                </li>
              </ul>
            </div>

            {/* Deutsche Quellen */}
            <div>
              <h3 className="font-semibold text-text text-base mb-3">🇩🇪 Deutsche Quellen</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="https://www.aerzteblatt.de/archiv/7898/Praevention-und-Therapie-der-Osteoporose-Die-Bedeutung-des-Sports-und-der-koerperlichen-Aktivitaet" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Deutsches Ärzteblatt: Osteoporose &amp; Sport
                  </a>
                </li>
                <li>
                  <a href="https://www.aok.de/pk/magazin/sport/fitness/osteoporose-uebungen-fuer-zu-hause/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    AOK: Osteoporose-Übungen
                  </a>
                </li>
                <li>
                  <a href="https://www.aok.de/pk/magazin/koerper-psyche/muskel-skelett-system/krafttraining-im-alter-nutzen-moeglichkeiten-uebungen/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    AOK: Krafttraining im Alter
                  </a>
                </li>
                <li>
                  <a href="https://www.apotheken-umschau.de/mein-koerper/video-rueckenschule-halt-und-kraft-fuer-die-wirbelsaeule-708495.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Apotheken Umschau: Video-Rückenschule
                  </a>
                </li>
                <li>
                  <a href="https://sportaerztezeitung.com/rubriken/training/12904/koerperliches-training-bei-osteoporose/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Sportärztezeitung: Training bei Osteoporose
                  </a>
                </li>
                <li>
                  <a href="https://www.osteoporose-deutschland.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Osteoporose Deutschland e.V.
                  </a>
                </li>
              </ul>
            </div>

            {/* Videos */}
            <div>
              <h3 className="font-semibold text-text text-base mb-3">📺 Videos zum Mitmachen</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="https://www.youtube.com/watch?v=RfgCOraYpzk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    20 min Kraft-Training für Senioren (Gaby Fastner)
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=s-6L6gGG81Y" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Krafttraining für Senioren zum Mitmachen
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=f8YE_Rl6ElQ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Sturzprophylaxe: Gleichgewicht- &amp; Krafttraining
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=TwdXky9at1Y" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Kräftigungsübungen im Stand (Ergotopia)
                  </a>
                </li>
              </ul>
            </div>

            {/* Bücher */}
            <div>
              <h3 className="font-semibold text-text text-base mb-3">📚 Bücher</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>„Outlive: The Science and Art of Longevity"</strong> — Peter Attia
                  <span className="text-text-light/70"> — DAS Buch über Langlebigkeit</span>
                </li>
                <li>
                  <strong>„Next Level"</strong> — Dr. Stacy Sims
                  <span className="text-text-light/70"> — Frauenspezifisches Training, Postmenopause</span>
                </li>
                <li>
                  <strong>„Roar"</strong> — Dr. Stacy Sims
                  <span className="text-text-light/70"> — Frauenspezifische Ernährung und Training</span>
                </li>
              </ul>
            </div>

            <p className="text-xs text-text-light/50 mt-4 italic">
              Stand: Februar 2026 · Alle Quellen zuletzt überprüft im Februar 2026
            </p>
          </div>
        </SectionCard>
      </FadeInSection>
    </div>
  )
}
