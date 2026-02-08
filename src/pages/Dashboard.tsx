import { Link } from 'react-router-dom'
import { Dumbbell, Pill, Smartphone, Brain, Lock } from 'lucide-react'

interface DashboardCardProps {
  title: string
  subtitle: string
  emoji: string
  icon: React.ReactNode
  to?: string
  disabled?: boolean
  bgClass: string
  iconBgClass: string
}

function DashboardCard({ title, subtitle, emoji, icon, to, disabled = false, bgClass, iconBgClass }: DashboardCardProps) {
  const card = (
    <div
      className={`relative rounded-3xl p-4 flex flex-col justify-between h-full transition-all duration-300 ${bgClass} ${
        disabled
          ? 'opacity-55 cursor-not-allowed'
          : 'card-hover cursor-pointer animate-warm-glow'
      }`}
    >
      {disabled && (
        <div className="absolute top-2.5 right-2.5 bg-white/60 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1">
          <Lock className="w-3 h-3 text-text-light/60" />
          <span className="text-[10px] font-bold text-text-light/70 uppercase tracking-wide">Bald</span>
        </div>
      )}
      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${iconBgClass} mb-2`}>
        {icon}
      </div>
      <div>
        <div className="text-lg leading-tight mb-0.5">
          <span className="mr-1">{emoji}</span>
          <span className="font-extrabold text-text">{title}</span>
        </div>
        <p className="text-xs text-text-light/80 leading-snug">{subtitle}</p>
      </div>
    </div>
  )

  if (disabled || !to) return card
  return <Link to={to} className="block no-underline h-full">{card}</Link>
}

export default function Dashboard() {
  const hour = new Date().getHours()
  let greeting: string
  if (hour < 11) greeting = 'Guten Morgen'
  else if (hour < 17) greeting = 'Hallo'
  else greeting = 'Guten Abend'

  return (
    <div className="flex flex-col h-full px-4 py-3 max-w-lg mx-auto w-full">
      {/* Compact warm header */}
      <div className="text-center mb-3 shrink-0">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-2xl">🌻</span>
          <h1 className="text-xl font-extrabold text-primary-dark tracking-tight">
            Hans' Wissenszentrum
          </h1>
        </div>
        <p className="text-sm text-text-light">
          {greeting}, Hans! Was möchtest du entdecken?
        </p>
      </div>

      {/* 2x2 Topic Grid — fills remaining space */}
      <div className="grid grid-cols-2 gap-3 flex-1 min-h-0 stagger-children">
        <DashboardCard
          title="Fit & Stark"
          subtitle="Training & Übungen für jeden Tag"
          emoji="💪"
          icon={<Dumbbell className="w-5 h-5 text-white" />}
          to="/training"
          bgClass="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-200/60 shadow-md"
          iconBgClass="bg-warm-orange/80"
        />
        <DashboardCard
          title="Vitamine"
          subtitle="Nährstoffe & Ergänzung"
          emoji="💊"
          icon={<Pill className="w-5 h-5 text-white/70" />}
          disabled
          bgClass="bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200/60"
          iconBgClass="bg-stone-300"
        />
        <DashboardCard
          title="Technik"
          subtitle="Smartphone & Apps einfach erklärt"
          emoji="📱"
          icon={<Smartphone className="w-5 h-5 text-white/70" />}
          disabled
          bgClass="bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200/60"
          iconBgClass="bg-stone-300"
        />
        <DashboardCard
          title="Geistig fit"
          subtitle="Gedächtnis & mentale Fitness"
          emoji="🧠"
          icon={<Brain className="w-5 h-5 text-white/70" />}
          disabled
          bgClass="bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200/60"
          iconBgClass="bg-stone-300"
        />
      </div>

      {/* Small motivational footer */}
      <div className="text-center py-2 shrink-0">
        <p className="text-xs text-text-light/60 italic">
          „Wissen ist die beste Medizin" 🌿
        </p>
      </div>
    </div>
  )
}
