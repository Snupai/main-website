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
      {[...Array(30)].map((_, i) => (
        <div key={`dot-${i + 1}`} className={`${styles.floatingDot} ${styles[`dot${i + 1}`]}`}></div>
      ))}

      {/* Twinkling Stars */}
      {[...Array(15)].map((_, i) => (
        <div key={`star-${i + 1}`} className={`${styles.twinklingStar} ${styles[`star${i + 1}`]}`}>
          <div className={styles.starCore}></div>
          <div className={styles.starGlow}></div>
        </div>
      ))}

      {/* Falling Stars */}
      {[...Array(6)].map((_, i) => (
        <div key={`fallingStar-${i + 1}`} className={`${styles.fallingStar} ${styles[`fallingStar${i + 1}`]}`}></div>
      ))}
    </div>
  );
} 