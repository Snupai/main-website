'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <Link href="/">
            <span className={styles.logoIcon}>🌿</span> 
            Astra<span>kit</span>
          </Link>
        </div>
        <ul className={styles.navMenu}>
          <li><Link href="#features">Features</Link></li>
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
      </div>
    </nav>
  );
} 