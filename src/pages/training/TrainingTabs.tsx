import { useState, useRef, useEffect } from 'react'

export interface TabItem {
  id: string
  label: string
  icon: React.ReactNode
  component: React.LazyExoticComponent<React.ComponentType> | React.ComponentType
}

interface TrainingTabsProps {
  tabs: TabItem[]
}

export default function TrainingTabs({ tabs }: TrainingTabsProps) {
  const [activeTab, setActiveTab] = useState(() => {
    // Restore last tab from sessionStorage
    const saved = sessionStorage.getItem('training-tab')
    return saved && tabs.some((t) => t.id === saved) ? saved : tabs[0].id
  })

  // Track scroll positions per tab
  const scrollPositions = useRef<Record<string, number>>({})
  const contentRef = useRef<HTMLDivElement>(null)

  // Save active tab to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('training-tab', activeTab)
  }, [activeTab])

  const switchTab = (tabId: string) => {
    // Save current scroll position
    scrollPositions.current[activeTab] = window.scrollY

    setActiveTab(tabId)

    // Restore scroll position for new tab (after render)
    requestAnimationFrame(() => {
      const saved = scrollPositions.current[tabId]
      window.scrollTo({ top: saved ?? 0 })
    })
  }

  const ActiveComponent = tabs.find((t) => t.id === activeTab)?.component

  return (
    <div>
      {/* Sticky Tab Bar */}
      <nav className="sticky top-[57px] z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide gap-0.5 px-2 py-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-200 shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-primary/10 text-primary-dark border border-primary/20'
                    : 'text-text-light hover:bg-secondary hover:text-text'
                }`}
              >
                <span className={activeTab === tab.id ? 'text-primary' : 'text-text-light'}>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      <div ref={contentRef} className="max-w-4xl mx-auto px-4 py-6">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  )
}
