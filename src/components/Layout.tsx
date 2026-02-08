import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import InstallPrompt from './InstallPrompt'

export default function Layout() {
  const location = useLocation()
  const isDashboard = location.pathname === '/'

  // Dashboard has its own full-screen layout — no header/footer
  if (isDashboard) {
    return (
      <div className="h-dvh flex flex-col warm-gradient-bg overflow-hidden">
        <main className="flex-1 flex flex-col min-h-0">
          <Outlet />
        </main>
        <InstallPrompt />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <InstallPrompt />
    </div>
  )
}
