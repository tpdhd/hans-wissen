import TrainingTabs from './training/TrainingTabs'
import type { TabItem } from './training/TrainingTabs'
import TabUeberblick from './training/TabUeberblick'
import TabUebungen from './training/TabUebungen'
import TabWochenplan from './training/TabWochenplan'
import TabKnochen from './training/TabKnochen'
import TabRuecken from './training/TabRuecken'
import TabNahrung from './training/TabNahrung'
import TabQuellen from './training/TabQuellen'

const tabs: TabItem[] = [
  { id: 'ueberblick', label: 'Überblick', emoji: '🎯', component: TabUeberblick },
  { id: 'uebungen', label: 'Übungen', emoji: '💪', component: TabUebungen },
  { id: 'wochenplan', label: 'Wochenplan', emoji: '📅', component: TabWochenplan },
  { id: 'knochen', label: 'Knochen', emoji: '🦴', component: TabKnochen },
  { id: 'ruecken', label: 'Rücken', emoji: '⚠️', component: TabRuecken },
  { id: 'nahrung', label: 'Supplements', emoji: '💊', component: TabNahrung },
  { id: 'quellen', label: 'Quellen', emoji: '📚', component: TabQuellen },
]

export default function Training() {
  return <TrainingTabs tabs={tabs} />
}
