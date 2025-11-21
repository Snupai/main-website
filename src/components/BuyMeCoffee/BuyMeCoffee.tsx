'use client';

import styles from './BuyMeCoffee.module.css';

export default function BuyMeCoffee() {
  return (
    <a 
      href="https://www.buymeacoffee.com/astrakit" 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Buy Me A Coffee"
    >
      <img 
        src="https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg" 
        alt="Buy Me A Coffee" 
        className={styles.icon}
      />
    </a>
  );
} 