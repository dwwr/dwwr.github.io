import { Link } from 'react-router-dom'
import type { PortfolioCopy } from '../../content/types'
import './SiteFooter.css'

export interface SiteFooterProps {
  readonly footer: PortfolioCopy['footer']
}

export function SiteFooter({ footer }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <p className="site-footer__note">{footer.note}</p>
      <nav className="site-footer__legal" aria-label={footer.legalAria}>
        <ul className="site-footer__legal-list">
          {footer.legalNav.map((item) => (
            <li key={item.href}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
