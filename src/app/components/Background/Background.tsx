'use client';

import styles from './Background.module.css';

export default function Background() {
  return (
    <div className={styles.backgroundElements}>
      <div className={styles.blurCircle1}></div>
      <div className={styles.blurCircle2}></div>
      <div className={styles.blurCircle3}></div>
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div key={`particle-${i + 1}`} className={`${styles.floatingParticle} ${styles[`particle${i + 1}`]}`}></div>
      ))}
      
      {/* Random floating dots */}
      {[...Array(20)].map((_, i) => (
        <div key={`dot-${i + 1}`} className={`${styles.floatingDot} ${styles[`dot${i + 1}`]}`}></div>
      ))}
    </div>
  );
} 