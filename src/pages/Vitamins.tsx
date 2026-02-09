import { Pill, Apple, Zap, Dumbbell, AlertTriangle } from 'lucide-react'
import TrainingTabs from './training/TrainingTabs'
import type { TabItem } from './training/TrainingTabs'
import TabVitaminOverview from './vitamins/TabVitaminOverview'
import TabVitamine from './vitamins/TabVitamine'
import TabMineralstoffe from './vitamins/TabMineralstoffe'
import TabSupplements from './vitamins/TabSupplements'
import TabInteractions from './vitamins/TabInteractions'

const tabs: TabItem[] = [
  { id: 'overview', label: 'Übersicht', icon: <Pill className="w-4 h-4" />, component: TabVitaminOverview },
  { id: 'vitamins', label: 'Vitamine', icon: <Apple className="w-4 h-4" />, component: TabVitamine },
  { id: 'minerals', label: 'Mineralstoffe', icon: <Zap className="w-4 h-4" />, component: TabMineralstoffe },
  { id: 'supplements', label: 'Supplements', icon: <Dumbbell className="w-4 h-4" />, component: TabSupplements },
  { id: 'interactions', label: 'Wechselwirkungen', icon: <AlertTriangle className="w-4 h-4" />, component: TabInteractions },
]

export default function Vitamins() {
  return <TrainingTabs tabs={tabs} />
}
