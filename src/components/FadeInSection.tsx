import { useScrollFadeIn } from '../hooks/useScrollFadeIn'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  delay?: string
}

export default function FadeInSection({ children, className = '', delay }: FadeInSectionProps) {
  const { ref, isVisible } = useScrollFadeIn(0.1)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      {children}
    </div>
  )
}
