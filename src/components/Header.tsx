import { useState } from 'react';
import Dropdown from './Dropdown';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site">
      <nav className="main wrap">
        <a href="#top" className="logo" onClick={closeMenu}>
          {profile.logo}
          <span className="dot">.</span>dev
        </a>

        {/* Same checkbox hook as the original, so your CSS keeps working */}
        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle-input"
          checked={menuOpen}
          onChange={(e) => setMenuOpen(e.target.checked)}
        />
        <label htmlFor="nav-toggle" className="nav-toggle" aria-label="Toggle menu">
          <span></span>
        </label>

        <ul className="nav-links">
          <li>
            <a href="#top" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <Dropdown label="Projects" projects={projects} onNavigate={closeMenu} />
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
