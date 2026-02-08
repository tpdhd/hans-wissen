import { Dumbbell, Pill, Smartphone, Brain, Sprout, Sun } from 'lucide-react'
import TopicCard from '../components/TopicCard'
import FadeInSection from '../components/FadeInSection'

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Greeting Header */}
      <FadeInSection>
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sprout className="w-8 h-8 text-primary animate-gentle-bounce" />
            <Sun className="w-6 h-6 text-accent animate-pulse-soft" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-3">
            Willkommen im Wissenszentrum
          </h1>
          <p className="text-lg text-text-light max-w-xl mx-auto">
            Dein persönlicher Ort für Gesundheitswissen — verständlich, 
            freundlich und immer griffbereit. 🌿
          </p>
        </div>
      </FadeInSection>

      {/* Decorative divider */}
      <div className="section-divider mb-8">
        <span className="text-primary text-sm font-medium">Deine Themen</span>
      </div>

      {/* Topic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 stagger-children">
        <TopicCard
          title="💪 Fit & Stark im Alter"
          description="Training, Knochengesundheit, Übungen und alles was dich stark hält."
          icon={<Dumbbell className="w-7 h-7 text-primary" />}
          to="/training"
        />
        <TopicCard
          title="💊 Vitamine & Nährstoffe"
          description="Was dein Körper braucht und welche Nahrungsergänzung sinnvoll ist."
          icon={<Pill className="w-7 h-7 text-text-light" />}
          disabled
        />
        <TopicCard
          title="📱 Technik einfach erklärt"
          description="Smartphone, Apps und Internet — Schritt für Schritt erklärt."
          icon={<Smartphone className="w-7 h-7 text-text-light" />}
          disabled
        />
        <TopicCard
          title="🧠 Geistig fit bleiben"
          description="Gedächtnistraining, Rätsel und Tipps für mentale Fitness."
          icon={<Brain className="w-7 h-7 text-text-light" />}
          disabled
        />
      </div>

      {/* Motivational note */}
      <FadeInSection>
        <div className="mt-10 text-center">
          <p className="text-sm text-text-light/70 italic">
            „Jeder Schritt zählt — es ist nie zu spät, etwas Gutes für sich zu tun." 🌱
          </p>
        </div>
      </FadeInSection>
    </div>
  )
}
