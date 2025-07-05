'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <nav className={styles.navbar}>
        <div className={styles.backgroundOverlay} />
        <div className={styles.backdropBlur} />
        <div className={styles.navContainer}>
          <div className={styles.navLogo}>
            <Link href="/" className={styles.logo}>
              <img src="/favicon.png" alt="Astrakit Logo" className={styles.logoImage}/>
              <span className={styles.logoText}>Astrakit</span>
            </Link>
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
          </button>

          {/* Desktop Menu */}
          <ul className={`${styles.navMenu} ${styles.desktop}`}>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="#gallery">Gallery</Link></li>
            <li><Link href="#team">Team</Link></li>
            <li><Link href="#download">Download</Link></li>
            <li><Link href="#contact">Contact</Link></li>
            <li>
              <Link 
                href="/creator-tools" 
                className={pathname === '/creator-tools' ? styles.active : ''}
              >
                Creator Tools
              </Link>
            </li>
            <li>
              <Link 
                href="/donate" 
                className={`${styles.donateButton} ${pathname === '/donate' ? styles.active : ''}`}
              >
                Donate
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
            <ul className={styles.mobileNavMenu}>
              <li><Link href="#features" onClick={closeMenu}>Features</Link></li>
              <li><Link href="#gallery" onClick={closeMenu}>Gallery</Link></li>
              <li><Link href="#team" onClick={closeMenu}>Team</Link></li>
              <li><Link href="#download" onClick={closeMenu}>Download</Link></li>
              <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
              <li>
                <Link 
                  href="/creator-tools" 
                  className={pathname === '/creator-tools' ? styles.active : ''}
                  onClick={closeMenu}
                >
                  Creator Tools
                </Link>
              </li>
              <li>
                <Link 
                  href="/donate" 
                  className={`${styles.donateButton} ${pathname === '/donate' ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
} 