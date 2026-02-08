interface SectionCardProps {
  id?: string
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export default function SectionCard({ id, title, icon, children, className = '' }: SectionCardProps) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="px-5 py-4 md:px-8 md:py-5 border-b border-border bg-secondary/20">
          <h2 className="text-xl md:text-2xl font-bold text-primary-dark flex items-center gap-3">
            {icon && <span className="text-primary">{icon}</span>}
            {title}
          </h2>
        </div>
        <div className="px-5 py-5 md:px-8 md:py-6">
          {children}
        </div>
      </div>
    </section>
  )
}
