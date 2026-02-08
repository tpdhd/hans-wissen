import { Target, Dumbbell, Calendar, Bone, ShieldAlert, Pill, BookOpen } from 'lucide-react'
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
  { id: 'ueberblick', label: 'Überblick', icon: <Target className="w-4 h-4" />, component: TabUeberblick },
  { id: 'uebungen', label: 'Übungen', icon: <Dumbbell className="w-4 h-4" />, component: TabUebungen },
  { id: 'wochenplan', label: 'Wochenplan', icon: <Calendar className="w-4 h-4" />, component: TabWochenplan },
  { id: 'knochen', label: 'Knochen', icon: <Bone className="w-4 h-4" />, component: TabKnochen },
  { id: 'ruecken', label: 'Rücken', icon: <ShieldAlert className="w-4 h-4" />, component: TabRuecken },
  { id: 'nahrung', label: 'Supplements', icon: <Pill className="w-4 h-4" />, component: TabNahrung },
  { id: 'quellen', label: 'Quellen', icon: <BookOpen className="w-4 h-4" />, component: TabQuellen },
]

export default function Training() {
  return <TrainingTabs tabs={tabs} />
}
