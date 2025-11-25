import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Removed hash link handling; navigation now uses route Links.

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#18121e]/20 backdrop-blur-3xl rounded-b-2xl">
        <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
            <img src="/favicon.png" alt="Astrakit Logo" className="h-8 w-8 object-contain" />
            <span className="text-[var(--primary-200)]">Astrakit</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><Link className="text-[var(--text-300)] hover:text-white" to="/features">Features</Link></li>
            <li><Link className="text-[var(--text-300)] hover:text-white" to="/contact">Contact</Link></li>
            <li><Link to="/creator-tools" className={`hover:text-white ${pathname === '/creator-tools' ? 'font-bold text-white' : 'text-[var(--text-300)]'}`}>Creator Tools</Link></li>
            <li>
              <Link to="/donate" className={`rounded-md px-3 py-1.5 font-medium transition-colors ${pathname === '/donate' ? 'bg-[var(--secondary-400)] text-[var(--background-950)]' : 'bg-[var(--primary-200)] text-[var(--background-950)] hover:bg-[var(--primary-300)]'}`}>Donate</Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button aria-label="Toggle menu" onClick={toggleMenu} className="md:hidden inline-flex flex-col justify-center gap-1.5 h-9 w-9">
            <span className={`h-0.5 w-7 bg-[var(--text-50)] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-7 bg-[var(--text-50)] transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-7 bg-[var(--text-50)] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col items-center gap-5 text-lg">
            <li><Link className="text-[var(--text-300)] hover:text-white transition-colors" to="/features" onClick={closeMenu}>Features</Link></li>
            <li><Link className="text-[var(--text-300)] hover:text-white transition-colors" to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/creator-tools" onClick={closeMenu} className={`hover:text-white transition-colors ${pathname === '/creator-tools' ? 'font-bold text-white' : 'text-[var(--text-300)]'}`}>Creator Tools</Link></li>
            <li>
              <Link onClick={closeMenu} to="/donate" className={`rounded-md px-4 py-2 font-semibold transition-colors ${pathname === '/donate' ? 'bg-[var(--secondary-400)] text-[var(--background-950)]' : 'bg-[var(--primary-200)] text-[var(--background-950)] hover:bg-[var(--primary-300)]'}`}>Donate</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}