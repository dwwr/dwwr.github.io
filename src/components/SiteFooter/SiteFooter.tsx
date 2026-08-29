import { Link } from 'react-router-dom'
import { copy } from '../../content'
import './SiteFooter.css'

export function SiteFooter() {
  const footer = copy.footer

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
