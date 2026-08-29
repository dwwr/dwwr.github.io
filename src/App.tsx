import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageShell } from './components/PageShell/PageShell'
import { SiteFooter } from './components/SiteFooter/SiteFooter'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LicensePage } from './pages/LicensePage'
import { PrivacyPage } from './pages/PrivacyPage'

export default function App() {
  return (
    <BrowserRouter>
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/license" element={<LicensePage />} />
        </Routes>
        <SiteFooter />
      </PageShell>
    </BrowserRouter>
  )
}
