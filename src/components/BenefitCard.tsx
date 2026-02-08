interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-xl border border-border p-5 card-hover group">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
        <span className="text-primary">{icon}</span>
      </div>
      <h3 className="font-bold text-text mb-1">{title}</h3>
      <p className="text-sm text-text-light leading-relaxed">{description}</p>
    </div>
  )
}
