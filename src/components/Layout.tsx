import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../data/projects'

export function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navSolid = !isHome || scrolled

  return (
    <div className="site">
      <header className={`nav ${navSolid ? 'nav--solid' : 'nav--hero'}`}>
        <Link to="/" className="nav__brand">
          {profile.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="nav__links">
            <li>
              <a href={isHome ? '#practice' : '/#practice'}>Practice</a>
            </li>
            <li>
              <a href={isHome ? '#work' : '/#work'}>Projects</a>
            </li>
            <li>
              <a href={isHome ? '#about' : '/#about'}>About</a>
            </li>
            <li>
              <a href={isHome ? '#contact' : '/#contact'}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span>Structural Engineering · MEP Design</span>
      </footer>
    </div>
  )
}
