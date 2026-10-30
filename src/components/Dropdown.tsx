import { useDropdown } from '../hooks/useDropdown';
import type { Project } from '../types';

interface DropdownProps {
  label: string;
  projects: Project[];
  onNavigate: () => void;
}

export default function Dropdown({ label, projects, onNavigate }: DropdownProps) {
  const { open, setOpen, toggle, containerRef, buttonRef } = useDropdown();

  return (
    <li className="dropdown" ref={containerRef}>
      <button
        id="dropdownBtn"
        ref={buttonRef}
        className="dropdown-btn"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={toggle}
        type="button"
      >
        {label} <span className="arrow">{open ? '▲' : '▼'}</span>
      </button>
      <ul id="dropdownMenu" className={`dropdown-menu${open ? ' show' : ''}`}>
        {projects.map((p) => (
          <li key={p.id}>
            <a
              href={`#${p.id}`}
              onClick={() => {
                setOpen(false);
                onNavigate();
              }}
            >
              {p.title}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
