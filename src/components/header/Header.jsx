import { useState } from 'react';
import { navigation } from '../../assets/data/resumeData';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Ankit Kapoor, home">
          <span className="brand-mark" aria-hidden="true">AK</span>
          <span className="brand-copy">
            <strong>Ankit Kapoor</strong>
            <span>SOFTWARE ENGINEER</span>
          </span>
        </a>

        <nav className={`header-nav${menuOpen ? ' is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
          <ul className="nav-links">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="button button-quiet header-cta" href="#contact">
          Let&apos;s talk <i className="ri-arrow-right-up-line" aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={menuOpen ? 'ri-close-line' : 'ri-menu-3-line'} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Header;
