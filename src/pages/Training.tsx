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
  AlertTriangle,
  CheckCircle,
  XCircle,
  Brain,
  Zap,
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
              Fit &amp; Stark im Alter
            </h1>
            <p className="text-lg text-text-light max-w-2xl leading-relaxed mb-4">
              Es ist nie zu spät, anzufangen. Studien zeigen: Selbst mit 67, 75 oder 80 Jahren 
              kann man Muskeln aufbauen, Knochen stärken und das Sturzrisiko deutlich senken. 
              Eine Studie der Universität Erlangen begleitete Frauen über <strong>16 Jahre</strong> – 
              und die trainierende Gruppe behielt ihre Knochendichte, während die Kontrollgruppe 
              kontinuierlich verlor.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2.5 text-sm font-medium text-primary-dark border border-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
              Schon 2–3× pro Woche je 20–30 Minuten Training zeigt messbare Ergebnisse
            </div>
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
          <p className="text-text-light mb-4">
            Ab dem 50. Lebensjahr verlieren wir etwa <strong>0,8 % Muskelmasse pro Jahr</strong>. 
            Gleichzeitig sinkt die Muskelkraft um 1,2–1,5 % jährlich. Dieser schleichende Prozess 
            heißt <MedTerm term="Sarkopenie" /> – krankhafter Muskelschwund. 
            Er führt dazu, dass alltägliche Dinge wie Treppensteigen, Einkäufe tragen oder 
            vom Stuhl aufstehen immer schwerer fallen.
          </p>
          <p className="text-text-light mb-6">
            Die gute Nachricht: Krafttraining kann diesen Prozess nicht nur stoppen, sondern 
            <strong> umkehren</strong>. Eine Studie aus 2025 zeigte, dass Krafttraining kombiniert 
            mit guter Ernährung die Sarkopenie-Rate von 35 % auf <strong>0 %</strong> senkte – 
            in nur 12 Wochen!
          </p>
          
          {/* Benefit Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BenefitCard
              icon={<Bone className="w-6 h-6" />}
              title="Stärkere Knochen"
              description="Krafttraining verbessert die Knochendichte um bis zu +0,88 % an der Lendenwirbelsäule. Ohne Training verliert man 0,6–2,1 % pro Jahr. Über 10 Jahre macht das einen enormen Unterschied."
            />
            <BenefitCard
              icon={<Shield className="w-6 h-6" />}
              title="Bis zu 50 % weniger Stürze"
              description="Kraft- und Balancetraining kann das Sturzrisiko um bis zu 50 % senken. Das ist lebenswichtig: 90 % aller Hüftfrakturen betreffen Menschen über 65."
            />
            <BenefitCard
              icon={<Smile className="w-6 h-6" />}
              title="Bessere Stimmung"
              description="Krafttraining reduziert depressive Symptome um 28 %. Einige Studien zeigen: Bewegung wirkt bei Depressionen so effektiv wie Antidepressiva – ganz ohne Nebenwirkungen."
            />
            <BenefitCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Mehr Selbstständigkeit"
              description="Koffer tragen, Treppen steigen, vom Boden aufstehen – Kraft und Balance sichern die Unabhängigkeit. Dr. Peter Attia nennt das den 'Centenarian Decathlon': Training für ein selbstbestimmtes Leben."
            />
            <BenefitCard
              icon={<Brain className="w-6 h-6" />}
              title="Schutz fürs Gehirn"
              description="Training setzt BDNF frei – ein 'Düngemittel für das Gehirn'. Und die Knochen produzieren Osteocalcin, das die Gedächtnisfunktion verbessert. Bewegung schützt vor kognitivem Abbau."
            />
            <BenefitCard
              icon={<Activity className="w-6 h-6" />}
              title="Gesundes Herz"
              description="Krafttraining verbessert Blutdruckwerte, Blutfette und die Glukosetoleranz. Zone-2-Ausdauertraining stärkt Herz und Kreislauf und ist einer der stärksten Prädiktoren für ein langes Leben."
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

      {/* Section 2: Was passiert mit unseren Knochen? */}
      <FadeInSection>
        <SectionCard id="knochen" title="Was passiert mit unseren Knochen?" icon={<Bone className="w-6 h-6" />}>
          <div className="space-y-4 text-text-light">
            <p>
              Unsere Knochen sind lebendiges Gewebe. Den ganzen Tag über bauen spezielle 
              Zellen (<MedTerm term="Osteoblasten" /> und <MedTerm term="Osteoklasten" />) 
              Knochen auf und ab – wie eine ständige Baustelle. In jungen Jahren überwiegt der 
              Aufbau. Etwa ab dem 35. Lebensjahr kippt die Balance: Es wird mehr abgebaut als 
              aufgebaut.
            </p>
            <p>
              Bei Frauen beschleunigt sich dieser Prozess nach den Wechseljahren dramatisch. 
              Der Grund: Das Hormon <MedTerm term="Östrogen" /> schützt normalerweise die 
              Knochen, indem es den Abbau bremst. Wenn der Östrogenspiegel in der Menopause 
              sinkt, verlieren Frauen in den ersten 5–10 Jahren danach besonders schnell 
              Knochenmasse – bis zu <strong>2,1 % pro Jahr</strong>.
            </p>
            <p>
              <strong>Osteoporose</strong> betrifft etwa <strong>24 % aller Frauen über 65</strong> in 
              Deutschland. Das sind fast jede vierte! Aber: Krafttraining ist die 
              wirksamste nicht-medikamentöse Maßnahme dagegen.
            </p>

            {/* Knochen-Vergleichstabelle */}
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
                    Stell dir einen Knochen wie einen Schwamm vor. Ein gesunder Knochen hat 
                    eine dichte, feste Struktur mit kleinen, gleichmäßigen Poren. Bei Osteoporose 
                    werden diese Poren immer größer – der Schwamm wird löchrig und instabil.
                  </p>
                  <p>
                    Das bedeutet: Die Knochen werden brüchig und können schon bei kleinen 
                    Stößen oder Stürzen brechen. Besonders gefährdet sind Hüfte, 
                    Wirbelsäule und Handgelenke. Eine Hüftfraktur im Alter ist 
                    lebensgefährlich: 25–33 % der Betroffenen überleben das erste Jahr nicht.
                  </p>
                  <p>
                    Die gute Nachricht: Durch Krafttraining kann man Signale an die Knochen 
                    senden, die den Aufbau anregen. Wenn du Gewichte hebst, entstehen 
                    Zugkräfte an den Knochen – und der Körper reagiert: „Hier wird stärkerer 
                    Knochen gebraucht!"
                  </p>
                </div>
              </Collapsible>

              <Collapsible title="Bin ich gefährdet?">
                <div className="space-y-3">
                  <p>Das Risiko für Osteoporose steigt durch:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><strong>Alter</strong> – je älter, desto höher das Risiko</li>
                    <li><strong>Geschlecht</strong> – Frauen sind 4× häufiger betroffen als Männer</li>
                    <li><strong>Familiäre Vorbelastung</strong> – hat deine Mutter Osteoporose?</li>
                    <li><strong>Wechseljahre</strong> – besonders die ersten 10 Jahre danach</li>
                    <li><strong>Bewegungsmangel</strong> – Knochen brauchen Belastung</li>
                    <li><strong>Rauchen und Alkohol</strong></li>
                    <li><strong>Vitamin-D-Mangel</strong> – betrifft ~60 % der Deutschen im Winter</li>
                    <li><strong>Niedrige Kalziumzufuhr</strong></li>
                    <li><strong>Untergewicht</strong> (BMI unter 20)</li>
                    <li>Bestimmte Medikamente (z. B. Kortison über längere Zeit)</li>
                  </ul>
                  <p>
                    <strong>Tipp:</strong> Ein <MedTerm term="DEXA-Scan">DEXA-Scan</MedTerm> beim 
                    Arzt misst die Knochendichte und gibt Klarheit. Dr. Peter Attia empfiehlt 
                    diesen Test jährlich ab 65.
                  </p>
                </div>
              </Collapsible>

              <Collapsible title="Kann man Knochen wirklich wieder aufbauen?">
                <div className="space-y-3">
                  <p>
                    <strong>Ja – bis zu einem gewissen Grad!</strong> Die berühmte LIFTMOR-Studie 
                    (2018) zeigte: Hochintensives Krafttraining verbesserte bei postmenopausalen 
                    Frauen die Knochendichte an Lendenwirbelsäule UND Oberschenkelhals signifikant.
                  </p>
                  <p>
                    Noch beeindruckender: Die Erlanger EFOPS-Studie begleitete Frauen über 
                    <strong> 16 Jahre</strong>. Die trainierende Gruppe behielt ihre Knochendichte, 
                    während die nicht-trainierende Gruppe kontinuierlich verlor. Das ist eine 
                    der längsten Studien weltweit zu diesem Thema – und sie wurde in 
                    Deutschland durchgeführt!
                  </p>
                  <p>
                    Der eigentliche Gewinn ist oft nicht der Aufbau, sondern das 
                    <strong> Stoppen des Verlusts</strong>. Ohne Training verliert man 0,6–2,1 % 
                    Knochendichte pro Jahr. Mit Training behält man sie – oder gewinnt 
                    sogar etwas dazu. Über 10–20 Jahre ist der Unterschied enorm.
                  </p>
                </div>
              </Collapsible>

              <Collapsible title="Warum hilft Schwimmen und Radfahren nicht für die Knochen?">
                <div className="space-y-3">
                  <p>
                    Knochen reagieren auf <strong>mechanische Belastung</strong> – also auf Druck 
                    und Zugkräfte, die direkt auf sie einwirken. Beim Krafttraining oder Gehen 
                    entstehen genau diese Kräfte: Muskeln ziehen an den Knochen, und das 
                    Körpergewicht drückt auf sie.
                  </p>
                  <p>
                    Beim Schwimmen und Radfahren fehlt dieser direkte Reiz. Das Wasser 
                    trägt das Körpergewicht, und beim Radfahren gibt es kaum Stoßbelastung. 
                    Beides ist trotzdem gut – für Gelenke, Herz und Ausdauer. Aber für die 
                    Knochen braucht es Gewichtsbelastung.
                  </p>
                </div>
              </Collapsible>
            </div>
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Section 3: Welche Übungen helfen? */}
      <FadeInSection>
        <SectionCard id="uebungen" title="Welche Übungen helfen?" icon={<Dumbbell className="w-6 h-6" />}>
          <p className="text-text-light mb-4">
            Für Knochen und Muskeln braucht es vor allem <strong>Krafttraining</strong> – 
            also Übungen mit Widerstand (Gewichte, Bänder, Körpergewicht). 
            Ergänzt wird das durch <strong>Gleichgewichtsübungen</strong> für die 
            Sturzprävention und <strong>Walking</strong> für Herz und Kreislauf.
          </p>
          <p className="text-text-light mb-6">
            <strong>Wichtig:</strong> Fang langsam an und lerne die Bewegungen sauber. 
            Dr. Stacy Sims (Huberman Lab) empfiehlt für Neueinsteigerinnen 
            2 Wochen bis 4 Monate, um saubere Bewegungsmuster zu erlernen. Das 
            schützt vor Verletzungen und legt das Fundament für langfristigen Erfolg.
          </p>

          {/* Trainingsarten-Übersicht */}
          <div className="bg-bg rounded-xl border border-border overflow-hidden mb-6">
            <div className="px-4 py-3 bg-secondary/30 border-b border-border">
              <h4 className="font-semibold text-text text-sm">🏋️ Welche Trainingsart wirkt wie auf die Knochen?</h4>
            </div>
            <div className="p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span><strong>Krafttraining mit Gewichten</strong> – stärkstes Signal für Knochenaufbau</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span><strong>Impact/Sprungtraining</strong> – direkter mechanischer Reiz (mit Vorsicht!)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐⭐⭐⭐</span>
                <span><strong>Walking mit Gewichtsweste</strong> – gut für Anfänger</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐⭐⭐</span>
                <span><strong>Elastische Bänder</strong> – gut als Einstieg</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐</span>
                <span><strong>Schwimmen / Radfahren</strong> – gut für Gelenke &amp; Herz, aber nicht für Knochen</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <ExerciseCard
              title="Kniebeugen mit Stuhl (Chair Squats)"
              icon={<Dumbbell className="w-6 h-6 text-primary" />}
              difficulty="leicht"
              duration="5 Minuten"
            >
              <div className="space-y-2">
                <p>
                  <strong>Warum?</strong> Stärkt Oberschenkel und Gesäß – die größten 
                  Muskelgruppen des Körpers. Wichtig fürs Aufstehen, Treppensteigen 
                  und die Sturzprävention.
                </p>
                <p>
                  <strong>So geht's:</strong> Stell dich vor einen stabilen Stuhl. Senke 
                  dich langsam ab, als würdest du dich hinsetzen. Berühre die Sitzfläche 
                  kurz und stehe wieder auf. Halte den Rücken gerade und die Knie über 
                  den Zehen.
                </p>
                <p><strong>Sätze:</strong> 2–3 × 8–12 Wiederholungen</p>
                <p className="text-xs text-text-light/70 flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" />
                  <strong>Rücken-Hinweis:</strong> Sicher bei Bandscheibenproblemen, 
                  da der Stuhl als Sicherheitsnetz dient und die Bewegung kontrolliert bleibt.
                </p>
              </div>
            </ExerciseCard>

            <ExerciseCard
              title="Brücke (Glute Bridge)"
              icon={<Activity className="w-6 h-6 text-primary" />}
              difficulty="leicht"
              duration="5 Minuten"
            >
              <div className="space-y-2">
                <p>
                  <strong>Warum?</strong> Stärkt Gesäß und hintere Oberschenkel, ohne 
                  Druck auf die Wirbelsäule. Eine der besten Übungen bei Rückenproblemen.
                </p>
                <p>
                  <strong>So geht's:</strong> Leg dich auf den Rücken, Knie angewinkelt, 
                  Füße flach auf dem Boden. Hebe das Becken nach oben, bis Oberschenkel 
                  und Oberkörper eine gerade Linie bilden. Oben kurz halten, langsam 
                  absenken.
                </p>
                <p><strong>Sätze:</strong> 2–3 × 10–15 Wiederholungen</p>
                <p className="text-xs text-green-700 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <strong>Rückenschonend:</strong> Kein axialer Druck auf die Wirbelsäule – ideal bei Bandscheibenproblemen.
                </p>
              </div>
            </ExerciseCard>

            <ExerciseCard
              title="Einbeinstand (Balance)"
              icon={<Activity className="w-6 h-6 text-primary" />}
              difficulty="leicht"
              duration="3 Minuten"
            >
              <div className="space-y-2">
                <p>
                  <strong>Warum?</strong> Verbessert Gleichgewicht und Koordination – 
                  der wichtigste Faktor bei der Sturzprävention. Das <MedTerm term="Otago">Otago 
                  Exercise Programme</MedTerm> hat damit eine 35–40 % Reduktion der 
                  Sturzrate nachgewiesen.
                </p>
                <p>
                  <strong>So geht's:</strong> Stell dich neben einen Stuhl (zum Festhalten 
                  bei Bedarf). Hebe ein Bein leicht an und halte die Balance. Blick 
                  geradeaus. Seitenwechsel.
                </p>
                <p><strong>Ziel:</strong> 2 × 20–30 Sekunden pro Seite</p>
                <p className="text-xs text-text-light/70">
                  <strong>Steigerung:</strong> Augen schließen, auf weicher Unterlage stehen, 
                  ohne Festhalten üben.
                </p>
              </div>
            </ExerciseCard>

            <ExerciseCard
              title="Wand-Liegestütze"
              icon={<StretchHorizontal className="w-6 h-6 text-primary" />}
              difficulty="leicht"
              duration="5 Minuten"
            >
              <div className="space-y-2">
                <p>
                  <strong>Warum?</strong> Stärkt Brust, Schultern und Arme – wichtig 
                  fürs Abstützen bei einem Sturz und für Alltagsbewegungen wie Türen 
                  öffnen oder Einkäufe tragen.
                </p>
                <p>
                  <strong>So geht's:</strong> Stell dich etwa eine Armlänge von einer 
                  Wand entfernt. Hände schulterbreit an die Wand. Beuge die Arme 
                  und bringe die Brust zur Wand, dann drücke dich zurück.
                </p>
                <p><strong>Sätze:</strong> 2–3 × 10–15 Wiederholungen</p>
                <p className="text-xs text-green-700 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <strong>Rückenschonend:</strong> Oberkörperkraft ohne Rückenbelastung.
                </p>
              </div>
            </ExerciseCard>

            <ExerciseCard
              title="Bird Dog"
              icon={<Sparkles className="w-6 h-6 text-primary" />}
              difficulty="leicht"
              duration="5 Minuten"
            >
              <div className="space-y-2">
                <p>
                  <strong>Warum?</strong> Stärkt die tiefe Rumpfmuskulatur bei neutraler 
                  Wirbelsäule. Eine der wichtigsten Übungen für einen gesunden Rücken 
                  und die <MedTerm term="Tiefenmuskulatur" />.
                </p>
                <p>
                  <strong>So geht's:</strong> Vierfüßlerstand: Knie unter Hüfte, Hände 
                  unter Schultern. Strecke gleichzeitig den rechten Arm nach vorne und 
                  das linke Bein nach hinten. Kurz halten, zurück. Dann die andere 
                  Seite.
                </p>
                <p><strong>Sätze:</strong> 2–3 × 8 pro Seite</p>
                <p className="text-xs text-green-700 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <strong>Rückenschonend:</strong> Stabilisiert die Wirbelsäule und stärkt 
                  die Tiefenmuskulatur – ideal bei Bandscheibenproblemen.
                </p>
              </div>
            </ExerciseCard>

            <ExerciseCard
              title="Theraband-Rudern"
              icon={<Sparkles className="w-6 h-6 text-primary" />}
              difficulty="mittel"
              duration="5 Minuten"
            >
              <div className="space-y-2">
                <p>
                  <strong>Warum?</strong> Stärkt den oberen Rücken und verbessert die 
                  Haltung. Beugt dem typischen „Rundrücken" im Alter vor und 
                  stabilisiert die Schulterblätter.
                </p>
                <p>
                  <strong>So geht's:</strong> Befestige das Band auf Brusthöhe 
                  (z. B. an einer Türklinke). Ziehe die Enden mit angewinkelten Armen 
                  zum Körper. Schulterblätter zusammenziehen. Langsam zurücklassen.
                </p>
                <p><strong>Sätze:</strong> 2–3 × 12–15 Wiederholungen</p>
                <p className="text-xs text-text-light/70">
                  <strong>Steigerung:</strong> Stärkeres Band verwenden oder einarmig rudern.
                </p>
              </div>
            </ExerciseCard>

            <ExerciseCard
              title="Spaziergang (Zone 2)"
              icon={<TrendingUp className="w-6 h-6 text-primary" />}
              difficulty="leicht"
              duration="20–30 Minuten"
            >
              <div className="space-y-2">
                <p>
                  <strong>Warum?</strong> Regelmäßiges zügiges Gehen stärkt Herz und 
                  Kreislauf, verbessert die <MedTerm term="VO2max" /> und wirkt durch 
                  das Körpergewicht auch leicht auf die Knochen. Dr. Peter Attia 
                  nennt „Zone 2"-Ausdauer einen der stärksten Prädiktoren für ein langes Leben.
                </p>
                <p>
                  <strong>So geht's:</strong> Gehe zügig, aber so, dass du dich noch 
                  unterhalten könntest (leicht außer Atem, aber nicht keuchend). 
                  Das ist „Zone 2" – moderate Intensität.
                </p>
                <p><strong>Empfehlung:</strong> 3–5 × pro Woche, 20–30 Minuten</p>
                <p className="text-xs text-text-light/70">
                  <strong>Tipp:</strong> Eine Gewichtsweste (2–5 kg) beim Gehen erhöht 
                  den Knochenreiz deutlich.
                </p>
              </div>
            </ExerciseCard>

            <ExerciseCard
              title="Pallof Press (mit Band)"
              icon={<Zap className="w-6 h-6 text-primary" />}
              difficulty="mittel"
              duration="5 Minuten"
            >
              <div className="space-y-2">
                <p>
                  <strong>Warum?</strong> Anti-Rotations-Training für die Rumpfmuskulatur. 
                  Stärkt den Core, ohne die Wirbelsäule zu belasten – viel besser als 
                  Sit-ups oder Crunches!
                </p>
                <p>
                  <strong>So geht's:</strong> Befestige ein Band seitlich auf Brusthöhe. 
                  Halte das Band mit beiden Händen vor der Brust. Drücke die Hände 
                  nach vorne und halte – das Band zieht dich zur Seite, du widerstehst. 
                  Langsam zurückziehen. Seitenwechsel.
                </p>
                <p><strong>Sätze:</strong> 2–3 × 10 pro Seite</p>
                <p className="text-xs text-green-700 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <strong>Rückenschonend:</strong> Wirbelsäulenschonendes Core-Training – 
                  ideal bei Bandscheibenproblemen.
                </p>
              </div>
            </ExerciseCard>
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Section 4: Dein Wochenplan */}
      <FadeInSection>
        <SectionCard id="wochenplan" title="Dein Wochenplan" icon={<Calendar className="w-6 h-6" />}>
          <p className="text-text-light mb-4">
            Dieser Plan ist für den Einstieg gedacht – realistisch, nicht überfordernd 
            und mit Rücksicht auf Rückenprobleme. Zwischen Krafttrainingstagen liegen 
            mindestens 48 Stunden Pause für die Muskelerholung.
          </p>

          <div className="mb-6">
            <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
              <span className="text-lg">🌱</span> Monat 1–2: Sanfter Einstieg
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { day: 'Montag', activity: '🏋️ Kraft (Unterkörper): Stuhlkniebeugen, Brücke, seitl. Beinheben — 20 Min', color: 'bg-primary/10 border-primary/20' },
                { day: 'Dienstag', activity: '🚶 Zügiger Spaziergang (Zone 2) — 25–30 Min', color: 'bg-accent/10 border-accent/20' },
                { day: 'Mittwoch', activity: '🌿 Ruhetag: sanftes Dehnen oder Cat-Cow Mobilisierung — 10–15 Min', color: 'bg-secondary border-border' },
                { day: 'Donnerstag', activity: '🏋️ Kraft (Oberkörper): Wand-Liegestütze, Bird Dog, Einbeinstand — 20 Min', color: 'bg-primary/10 border-primary/20' },
                { day: 'Freitag', activity: '🚶 Spaziergang + Gleichgewichtsübungen — 25–30 Min', color: 'bg-accent/10 border-accent/20' },
                { day: 'Samstag', activity: '🏋️ Kraft (Ganzkörper): Mix aus Mo + Do Übungen — 20–25 Min', color: 'bg-primary/10 border-primary/20' },
                { day: 'Sonntag', activity: '🌿 Ruhetag — ausruhen und regenerieren', color: 'bg-secondary border-border' },
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
          </div>

          <Collapsible title="Monat 3–4: Widerstandsbänder einführen">
            <div className="space-y-3">
              <p>
                Alle Übungen aus Monat 1–2 werden gesteigert (3 × 12 Wiederholungen). 
                Zusätzlich kommen hinzu:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Theraband-Rudern</strong> für den oberen Rücken</li>
                <li><strong>Seitliches Band-Gehen (Monster Walk)</strong> für die Hüfte</li>
                <li><strong>Band-Bizepscurls</strong> für die Arme</li>
                <li><strong>Pallof Press</strong> für den Core</li>
              </ul>
              <p className="text-sm text-text-light/70">
                Intensität: moderat – du solltest 12–15 Wiederholungen schaffen, 
                die letzten 2–3 fühlen sich anstrengend an.
              </p>
            </div>
          </Collapsible>

          <Collapsible title="Ab Monat 5: Erste leichte Gewichte">
            <div className="space-y-3">
              <p>
                Wenn die Technik sitzt und der Rücken schmerzfrei ist, können 
                leichte Kurzhanteln (1–3 kg) hinzukommen:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Einarmiges Kurzhantel-Rudern</strong> (auf Bank gestützt)</li>
                <li><strong>Goblet Squats</strong> (Kniebeuge mit Kurzhantel vor der Brust)</li>
                <li><strong>Farmer's Walk</strong> (Gewichte tragen und gehen – super funktionell!)</li>
                <li><strong>Kurzhantel-Brustpresse</strong> auf der Bank</li>
              </ul>
              <p className="text-sm text-text-light/70">
                Intensität: moderat bis hoch – 8–12 Wiederholungen möglich, 
                mit 1–2 Wiederholungen „in Reserve" (nicht bis zum Muskelversagen).
              </p>
            </div>
          </Collapsible>

          <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mt-4">
            <p className="text-sm text-text-light">
              💡 <strong>Höre auf deinen Körper.</strong> Leichter Muskelkater am Anfang 
              ist normal und ein gutes Zeichen. Bei scharfen Schmerzen, Kribbeln oder 
              Taubheitsgefühlen sofort aufhören. Langsamkeit ist keine Schwäche – sie 
              ist Klugheit.
            </p>
          </div>

          <div className="mt-4 bg-secondary/50 rounded-xl p-4">
            <p className="text-sm text-text-light italic">
              „Der Schlüssel wenn man älter ist: SCHWER trainieren – nicht bis zum 
              Muskelversagen, sondern mit hohem Widerstand und sauberer Technik." 
              — <strong>Dr. Stacy Sims</strong>, Sportphysiologin
            </p>
          </div>
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
                Bei akuten Rückenschmerzen, einem frischen{' '}
                <MedTerm term="Bandscheibenvorfall" /> oder{' '}
                <MedTerm term="Spinalkanalstenose" /> bitte IMMER zuerst mit dem 
                Arzt oder der Ärztin sprechen. Das hier Beschriebene gilt für 
                Personen ohne akute Symptome, die ihren Rücken langfristig 
                stärken wollen.
              </p>
            </div>

            <p>
              Hier kommt die vielleicht überraschendste Botschaft: <strong>Krafttraining 
              ist Teil der Lösung, nicht das Problem.</strong> Starke Rücken- und 
              Rumpfmuskeln bilden ein „natürliches Korsett" um die Wirbelsäule und 
              schützen die Bandscheiben. Marathonfitness.de bringt es auf den Punkt: 
              „Krafttraining ist eine <em>zwingende Voraussetzung</em> für die 
              Genesung nach einem Bandscheibenvorfall."
            </p>

            <p>
              Die <MedTerm term="Tiefenmuskulatur" /> – kleine Muskeln direkt an der 
              Wirbelsäule plus Zwerchfell und Beckenboden – stabilisiert jeden 
              einzelnen Wirbel. Bei Bandscheibenpatienten ist sie oft verkümmert. 
              Gezieltes Training baut sie wieder auf. Und: Bandscheiben haben keine 
              eigene Blutversorgung. Sie werden durch Be- und Entlastung ernährt – 
              wie ein Schwamm, der gedrückt und losgelassen wird. Bewegung ist 
              also buchstäblich <em>Nahrung</em> für die Bandscheiben.
            </p>

            <div className="space-y-3 mt-4">
              <Collapsible title="Was ist ein Bandscheibenvorfall?">
                <div className="space-y-3">
                  <p>
                    Stell dir die Bandscheibe wie einen Berliner (Krapfen) vor: 
                    Außen ein fester Ring aus Fasergewebe, innen ein weicher 
                    Gallertkern. Bei einem Vorfall drückt der weiche Kern durch 
                    Risse im Faserring nach außen – und kann dort auf Nerven 
                    drücken. Das verursacht Schmerzen, Taubheit oder Kribbeln, 
                    die oft ins Bein ausstrahlen (<MedTerm term="Ischialgie">Ischias</MedTerm>).
                  </p>
                  <p>
                    Die gute Nachricht: In den meisten Fällen (über 90 %) heilt 
                    ein Bandscheibenvorfall von selbst – ohne Operation. Der 
                    Körper baut das ausgetretene Material langsam ab. Wichtig 
                    ist: In Bewegung bleiben, nicht in Schonhaltung verfallen.
                  </p>
                </div>
              </Collapsible>

              <Collapsible title="Diese Übungen bitte VERMEIDEN" icon={<XCircle className="w-5 h-5 text-red-500" />}>
                <div className="space-y-3">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Sit-ups / Crunches</strong> – enormer Druck auf die Bandscheiben durch Beugung unter Last</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Vorbeugen mit gestreckten Beinen</strong> – rundet die Lendenwirbelsäule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Schweres Kreuzheben</strong> – zu viel Belastung ohne perfekte Technik</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Ruckartige Drehbewegungen</strong> – Scherkräfte auf die Bandscheiben</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Schweres Überkopfdrücken</strong> – kann ein Hohlkreuz verstärken</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Springen ohne Vorbereitung</strong> – unkontrollierte Landebelastung bei instabiler Wirbelsäule</span>
                    </li>
                  </ul>
                </div>
              </Collapsible>

              <Collapsible title="Diese Übungen sind SICHER und empfohlen" icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                <div className="space-y-3">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span><strong>Brücke (Glute Bridge)</strong> – kein Druck auf die Wirbelsäule, stärkt Gesäß</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span><strong>Bird Dog</strong> – stärkt Tiefenmuskulatur bei neutraler Wirbelsäule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span><strong>Katzenbuckel/Kuh (Cat-Cow)</strong> – sanfte Mobilisierung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span><strong>Beckenkippung (Pelvic Tilt)</strong> – aktiviert tiefe Bauchmuskeln</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span><strong>Modifizierte Planke</strong> – Core-Stärkung bei neutraler Wirbelsäule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span><strong>Pallof Press</strong> – wirbelsäulenschonendes Anti-Rotations-Training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span><strong>Wandhocke / Stuhlkniebeugen</strong> – kontrollierte Beinarbeit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span><strong>Walking / Schwimmen (Rückenschwimmen)</strong> – Ganzkörper ohne Stoßbelastung</span>
                    </li>
                  </ul>
                </div>
              </Collapsible>

              <Collapsible title="Wann zum Arzt? — Warnsignale erkennen" icon={<AlertTriangle className="w-5 h-5 text-orange-500" />}>
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="font-semibold text-red-700 text-sm mb-2">
                      🚨 SOFORT zum Arzt / Notaufnahme:
                    </p>
                    <ul className="text-sm space-y-1 text-red-700">
                      <li>• Kontrollverlust über Blase oder Darm (<MedTerm term="Cauda-equina-Syndrom">Cauda-equina-Syndrom</MedTerm> – Notfall!)</li>
                      <li>• Fortschreitende Muskelschwäche in den Beinen</li>
                      <li>• Taubheit im Sattelbereich (Innenseiten der Oberschenkel)</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <p className="font-semibold text-orange-700 text-sm mb-2">
                      ⚠️ Zeitnah zum Arzt (innerhalb weniger Tage):
                    </p>
                    <ul className="text-sm space-y-1 text-orange-700">
                      <li>• Schmerzen, die nach 6 Wochen nicht besser werden</li>
                      <li>• Neues Taubheitsgefühl oder Kribbeln in den Beinen</li>
                      <li>• Schmerzen, die nachts oder im Liegen schlimmer werden</li>
                      <li>• Fieber zusammen mit Rückenschmerzen</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="font-semibold text-green-700 text-sm mb-2">
                      ✅ Normal und kein Grund zur Sorge:
                    </p>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>• Leichter Muskelkater nach Training (klingt nach 1–2 Tagen ab)</li>
                      <li>• Leichtes Ziehen bei Dehnübungen</li>
                      <li>• Muskuläre Ermüdung beim Training</li>
                      <li>• Bekanntes „Blockadegefühl" ohne neue Symptome</li>
                    </ul>
                  </div>
                </div>
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
              Eine ausgewogene Ernährung ist die Basis. Aber gerade im Alter gibt es 
              einige Nährstoffe, bei denen eine Ergänzung wissenschaftlich gut belegt ist. 
              Hier sind die wichtigsten – sortiert nach Evidenzstärke.
            </p>

            {/* Kreatin - Highlight Box */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-5 mt-2">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-text text-lg">Kreatin – Der Geheimtipp für Ältere!</h3>
              </div>
              <p className="mb-3">
                Kreatin ist NICHT nur für junge Sportler. Die Forschungslage für 
                ältere Erwachsene ist beeindruckend:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
                <li>
                  <strong>+1,37 kg Muskelmasse</strong> – in Kombination mit Krafttraining 
                  bei 57–70-Jährigen (Meta-Analyse von Chilibeck et al.)
                </li>
                <li>
                  <strong>Doppelte Kraftzuwächse</strong> – eine 2023-Studie zeigte: 
                  Kreatin + 10 Wochen Training verdoppelte die Kraftsteigerung im 
                  Vergleich zu Training allein
                </li>
                <li>
                  <strong>Bessere Alltagsfunktion</strong> – z. B. schneller vom Stuhl 
                  aufstehen (Stuhl-Aufsteh-Test)
                </li>
                <li>
                  <strong>Möglicher Gehirnschutz</strong> – erste Hinweise, dass 
                  Kreatin auch die Kognition bei Älteren verbessern könnte
                </li>
              </ul>
              <div className="bg-white/60 rounded-lg p-3 text-sm space-y-1">
                <p><strong>Dosierung:</strong> 3–5 g <MedTerm term="Kreatinmonohydrat">Kreatin-Monohydrat</MedTerm> pro Tag – dauerhaft</p>
                <p><strong>Kosten:</strong> ca. 5–10 € pro Monat</p>
                <p><strong>Sicherheit:</strong> Bei gesunden Nieren kein erhöhtes Risiko, auch langfristig. Ausreichend trinken (2–3 L/Tag)</p>
                <p className="text-text-light/70 italic">Anfangs kann es 1–2 kg Wassereinlagerung geben – das ist normal und kein Fett.</p>
              </div>
            </div>

            {/* Knochen-Trio */}
            <div className="mt-2">
              <h3 className="font-bold text-text text-lg mb-3 flex items-center gap-2">
                🦴 Das „Knochen-Trio": D3 + K2 + Magnesium
              </h3>
              <p className="mb-4">
                Diese drei Nährstoffe arbeiten zusammen wie ein Team: Vitamin D3 sorgt 
                dafür, dass Kalzium aufgenommen wird. Vitamin K2 leitet das Kalzium 
                in die Knochen (und hält es raus aus den Arterien!). Und Magnesium 
                unterstützt beide Prozesse.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-bg rounded-xl border border-border p-4">
                <h4 className="font-semibold text-text">☀️ Vitamin D3</h4>
                <p className="text-sm text-primary font-medium mt-1">1.000–4.000 IE/Tag (nach Blutwert)</p>
                <p className="text-xs text-text-light mt-1">
                  Essentiell für die Kalzium-Aufnahme. ~60 % der Deutschen haben zu niedrige 
                  Spiegel, besonders im Winter. <strong>Immer Blutwert messen lassen!</strong> 
                  Zielspiegel: 40–60 ng/ml.
                </p>
              </div>
              <div className="bg-bg rounded-xl border border-border p-4">
                <h4 className="font-semibold text-text">💚 Vitamin K2 (MK-7)</h4>
                <p className="text-sm text-primary font-medium mt-1">100–200 µg/Tag</p>
                <p className="text-xs text-text-light mt-1">
                  Aktiviert Proteine, die Kalzium in die Knochen leiten – und raus aus den 
                  Arterien. Faustregel: 100 µg K2 pro 10.000 IE D3.
                </p>
                <p className="text-xs text-accent font-medium mt-1">
                  ⚠️ Bei Blutverdünnern (Marcumar/Warfarin) unbedingt mit dem Arzt besprechen!
                </p>
              </div>
              <div className="bg-bg rounded-xl border border-border p-4">
                <h4 className="font-semibold text-text">✨ Magnesium</h4>
                <p className="text-sm text-primary font-medium mt-1">300–400 mg/Tag (Glycinat oder Citrat)</p>
                <p className="text-xs text-text-light mt-1">
                  Beteiligt an über 300 Prozessen im Körper. Wichtig für Knochen, Muskeln 
                  und Schlaf. <MedTerm term="Magnesiumglycinat">Magnesium-Glycinat</MedTerm> abends 
                  einnehmen → fördert den Schlaf. Nicht gleichzeitig mit Kalzium nehmen.
                </p>
              </div>
              <div className="bg-bg rounded-xl border border-border p-4">
                <h4 className="font-semibold text-text">🥛 Kalzium</h4>
                <p className="text-sm text-primary font-medium mt-1">1.000–1.200 mg/Tag (über Ernährung!)</p>
                <p className="text-xs text-text-light mt-1">
                  Am besten über Milchprodukte, grünes Gemüse, Mineralwasser. 
                  Supplement nur bei nachgewiesenem Mangel. <MedTerm term="Calciumcitrat">Kalziumcitrat</MedTerm> wird 
                  besser aufgenommen als Karbonat.
                </p>
              </div>
            </div>

            {/* Weitere Supplements */}
            <Collapsible title="Kollagen – bei Gelenkproblemen">
              <div className="space-y-3">
                <p>
                  <MedTerm term="Kollagenhydrolysat">Hydrolysiertes Kollagen</MedTerm> kann 
                  Gelenkschmerzen reduzieren und die Mobilität verbessern. Eine 
                  Meta-Analyse (2018) bestätigte die Wirksamkeit bei Arthrose.
                </p>
                <p>
                  <strong>Dosierung:</strong> 10–15 g hydrolysiertes Kollagen pro Tag
                </p>
                <p><strong>Kosten:</strong> ca. 15–25 € pro Monat</p>
                <p className="text-xs text-text-light/70">
                  Wichtig: Der Körper zerlegt aufgenommenes Kollagen in Aminosäuren 
                  und baut daraus neues Kollagen – er „kopiert" es nicht einfach. 
                  Aber: Eine UC-Davis-Studie (2025) zeigte, dass ein Marker für 
                  Kollagen-Synthese im Blut steigt.
                </p>
              </div>
            </Collapsible>

            <Collapsible title="Omega-3-Fettsäuren – gegen Entzündungen">
              <div className="space-y-3">
                <p>
                  Omega-3 (EPA und DHA) wirkt entzündungshemmend – besonders wichtig 
                  im Alter, wo chronische niedriggradige Entzündungen 
                  (<MedTerm term="Inflammaging" />) viele Krankheiten vorantreiben.
                </p>
                <p>
                  Eine Übersicht von 30 Studien zeigte: Omega-3 kann Gelenkschmerzen 
                  und Schwellungen bei Arthritis verbessern. Zusätzlich unterstützt 
                  es Herz und Gehirn.
                </p>
                <p>
                  <strong>Dosierung:</strong> 2–3 g kombiniertes EPA/DHA pro Tag
                </p>
                <p><strong>Kosten:</strong> ca. 15–25 € pro Monat</p>
                <p className="text-xs text-text-light/70">
                  Auf Qualität achten: IFOS-zertifizierte Produkte (auf Schwermetalle 
                  getestet). Am besten zu einer fetthaltigen Mahlzeit einnehmen.
                </p>
              </div>
            </Collapsible>

            {/* Übersichtstabelle */}
            <Collapsible title="📊 Supplement-Übersicht auf einen Blick">
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-2">Supplement</th>
                      <th className="text-left py-2 pr-2">Evidenz</th>
                      <th className="text-left py-2 pr-2">Dosis</th>
                      <th className="text-left py-2">ca. €/Monat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr><td className="py-2 pr-2 font-medium">Kreatin</td><td>⭐⭐⭐⭐⭐</td><td>3–5 g/Tag</td><td>5–10 €</td></tr>
                    <tr><td className="py-2 pr-2 font-medium">Vitamin D3</td><td>⭐⭐⭐⭐⭐</td><td>1.000–4.000 IE</td><td>~5 €</td></tr>
                    <tr><td className="py-2 pr-2 font-medium">Vitamin K2</td><td>⭐⭐⭐⭐</td><td>100–200 µg</td><td>~10 €</td></tr>
                    <tr><td className="py-2 pr-2 font-medium">Magnesium</td><td>⭐⭐⭐⭐</td><td>300–400 mg</td><td>10–15 €</td></tr>
                    <tr><td className="py-2 pr-2 font-medium">Omega-3</td><td>⭐⭐⭐⭐</td><td>2–3 g EPA+DHA</td><td>15–25 €</td></tr>
                    <tr><td className="py-2 pr-2 font-medium">Kollagen</td><td>⭐⭐⭐</td><td>10–15 g</td><td>15–25 €</td></tr>
                  </tbody>
                </table>
              </div>
            </Collapsible>

            <div className="bg-secondary rounded-xl p-4 mt-4">
              <p className="text-sm">
                💬 <strong>Wichtig:</strong> Nahrungsergänzung ersetzt keine ausgewogene 
                Ernährung – und schon gar kein Training! Sprich mit deinem Arzt oder 
                deiner Ärztin, bevor du etwas Neues einnimmst, besonders wenn du 
                bereits Medikamente nimmst. Vitamin D3 unbedingt per Bluttest 
                kontrollieren lassen.
              </p>
            </div>
          </div>
        </SectionCard>
      </FadeInSection>

      {/* Section 7: Quellen & Weiterlesen */}
      <FadeInSection>
        <SectionCard id="quellen" title="Quellen & Weiterlesen" icon={<BookOpen className="w-6 h-6" />}>
          <div className="space-y-5 text-text-light">
            <p className="text-sm">
              Alle Informationen auf dieser Seite basieren auf aktuellen 
              wissenschaftlichen Studien und Empfehlungen anerkannter Experten. 
              Hier findest du alle Quellen zum Nachlesen.
            </p>

            {/* Wissenschaftliche Studien */}
            <div>
              <h3 className="font-semibold text-text text-base mb-3">🔬 Wissenschaftliche Studien</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/28975661/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    LIFTMOR-Studie (Watson et al., 2018)
                  </a>{' '}
                  — Hochintensives Krafttraining verbessert Knochendichte bei postmenopausalen Frauen
                </li>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/15159265/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    EFOPS-Studie (Kemmler et al., Erlangen)
                  </a>{' '}
                  — 16-Jahres-Langzeitstudie: Krafttraining schützt vor Osteoporose
                </li>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/40420105/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Meta-Analyse 2025: Optimale Trainingsparameter
                  </a>{' '}
                  — Krafttraining verbessert BMD an Wirbelsäule und Hüfte
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9222380/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Meta-Analyse 2022: Krafttraining und Knochendichte
                  </a>{' '}
                  — Effekte auf Hüfte (+0,64 %) und Wirbelsäule (+0,62 %)
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10435089/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Sturzprävention durch Bewegung (Frontiers, 2023)
                  </a>{' '}
                  — Bis zu 50 % weniger Stürze durch Training
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6518405/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Kreatin bei älteren Erwachsenen (Review)
                  </a>{' '}
                  — +1,37 kg Muskelmasse, verbesserte Kraft
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12506341/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Kreatin + Krafttraining bei Älteren (2025)
                  </a>{' '}
                  — Verdoppelte Kraftzuwächse
                </li>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/32972636/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Kalzium, Vitamin D, K2, Magnesium und Knochengesundheit
                  </a>{' '}
                  — Synergistische Wirkung der Knochen-Nährstoffe
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5613455/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Vitamin D3 + K2 Synergie
                  </a>{' '}
                  — Zusammen wirksamer als einzeln für Knochen und Herz
                </li>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/30368550/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Kollagen und Gelenkgesundheit (Meta-Analyse)
                  </a>{' '}
                  — Wirksam bei Arthrose-Symptomen
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9413343/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Omega-3 bei Arthrose (Review)
                  </a>{' '}
                  — Reduziert Gelenkschmerzen und Schwellungen
                </li>
                <li>
                  <a href="https://www.sciencedirect.com/science/article/abs/pii/S0165178124000337" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Krafttraining und mentale Gesundheit (2024)
                  </a>{' '}
                  — Reduziert depressive Symptome bei Älteren signifikant
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9858649/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Bewegung und kognitive Funktion bei Älteren
                  </a>{' '}
                  — Schützt vor geistigem Abbau
                </li>
                <li>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9339797/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Krafttraining gegen Sarkopenie
                  </a>{' '}
                  — Wirksamstes Mittel gegen altersbedingten Muskelschwund
                </li>
              </ul>
            </div>

            {/* Podcasts */}
            <div>
              <h3 className="font-semibold text-text text-base mb-3">🎙️ Podcast-Episoden</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="https://www.hubermanlab.com/episode/how-to-use-exercise-to-improve-your-brains-health-longevity-performance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Huberman Lab: Exercise &amp; Brain Health (Jan 2025)
                  </a>{' '}
                  — Osteocalcin, BDNF, Bewegung &amp; Gehirn
                </li>
                <li>
                  <a href="https://www.hubermanlab.com/episode/dr-stacy-sims-female-specific-exercise-nutrition-for-health-performance-longevity" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Huberman Lab mit Dr. Stacy Sims (Juli 2024)
                  </a>{' '}
                  — Frauenspezifisches Training und Menopause
                </li>
                <li>
                  <a href="https://peterattiamd.com/exerciseforagingpeople/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Peter Attia #307: Exercise for Aging People
                  </a>{' '}
                  — Wie Ältere sicher mit Training beginnen
                </li>
                <li>
                  <a href="https://peterattiamd.com/exercising-for-longevity/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Peter Attia #206: Exercising for Longevity
                  </a>{' '}
                  — Die 4 Säulen des Trainings
                </li>
                <li>
                  <a href="https://peterattiamd.com/training-for-the-centenarian-decathlon/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Peter Attia #261: Centenarian Decathlon
                  </a>{' '}
                  — Training für ein selbstständiges Leben im Alter
                </li>
              </ul>
            </div>

            {/* Deutsche Quellen */}
            <div>
              <h3 className="font-semibold text-text text-base mb-3">🇩🇪 Deutsche Quellen</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="https://www.aerzteblatt.de/archiv/7898/Praevention-und-Therapie-der-Osteoporose-Die-Bedeutung-des-Sports-und-der-koerperlichen-Aktivitaet" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Deutsches Ärzteblatt: Osteoporose – Bedeutung des Sports
                  </a>
                </li>
                <li>
                  <a href="https://www.aok.de/pk/magazin/sport/fitness/osteoporose-uebungen-fuer-zu-hause/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    AOK: Osteoporose-Übungen für zu Hause
                  </a>
                </li>
                <li>
                  <a href="https://www.aok.de/pk/magazin/koerper-psyche/muskel-skelett-system/krafttraining-im-alter-nutzen-moeglichkeiten-uebungen/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    AOK: Krafttraining im Alter – Nutzen, Möglichkeiten, Übungen
                  </a>
                </li>
                <li>
                  <a href="https://www.apotheken-umschau.de/mein-koerper/video-rueckenschule-halt-und-kraft-fuer-die-wirbelsaeule-708495.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Apotheken Umschau: Video-Rückenschule
                  </a>
                </li>
                <li>
                  <a href="https://www.apotheken-umschau.de/krankheiten-symptome/neurologische-erkrankungen/einem-bandscheibenvorfall-vorbeugen-979305.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Apotheken Umschau: Bandscheibenvorfall vorbeugen
                  </a>
                </li>
                <li>
                  <a href="https://sportaerztezeitung.com/rubriken/training/12904/koerperliches-training-bei-osteoporose/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Sportärztezeitung: Training bei Osteoporose
                  </a>
                </li>
                <li>
                  <a href="https://www.osteoporose-deutschland.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Osteoporose Deutschland e.V. – Informationen &amp; Selbsthilfe
                  </a>
                </li>
              </ul>
            </div>

            {/* YouTube Videos */}
            <div>
              <h3 className="font-semibold text-text text-base mb-3">📺 Videos zum Mitmachen</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="https://www.youtube.com/watch?v=RfgCOraYpzk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    20 min Kraft-Training für Senioren im Stehen
                  </a>{' '}
                  — Gaby Fastner, ohne Geräte
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=s-6L6gGG81Y" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Krafttraining für Senioren zum Mitmachen
                  </a>{' '}
                  — Koordination &amp; Fitness
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=f8YE_Rl6ElQ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Sturzprophylaxe: Gleichgewicht- &amp; Krafttraining
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=TwdXky9at1Y" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Kräftigungsübungen im Stand
                  </a>{' '}
                  — Ergotopia
                </li>
              </ul>
            </div>

            {/* Bücher */}
            <div>
              <h3 className="font-semibold text-text text-base mb-3">📚 Bücher</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>„Outlive: The Science and Art of Longevity"</strong> — Peter Attia 
                  <span className="text-text-light/70"> — DAS Buch über Langlebigkeit, inkl. Training und Ernährung</span>
                </li>
                <li>
                  <strong>„Next Level"</strong> — Dr. Stacy Sims 
                  <span className="text-text-light/70"> — Frauenspezifisches Training, besonders für die Postmenopause</span>
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
