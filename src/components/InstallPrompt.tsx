import { useState, useEffect } from 'react'
import { Download, X } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show after a small delay so it doesn't appear immediately
      setTimeout(() => setShowPrompt(true), 3000)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setShowPrompt(false)
    }
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white rounded-2xl shadow-lg border border-border p-4 animate-fade-in-up z-50">
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-text-light hover:text-text p-1"
        aria-label="Schließen"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 rounded-xl p-2.5 shrink-0">
          <Download className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-sm">App installieren?</p>
          <p className="text-xs text-text-light mt-0.5">
            Füge das Wissenszentrum zu deinem Startbildschirm hinzu — auch offline verfügbar!
          </p>
          <button
            onClick={handleInstall}
            className="mt-2 bg-primary text-white text-sm px-4 py-1.5 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Installieren
          </button>
        </div>
      </div>
    </div>
  )
}
