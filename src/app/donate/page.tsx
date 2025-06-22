'use client';

import Link from "next/link";
import Navigation from "../components/Navigation/Navigation";
import styles from "./page.module.css";

export default function Donate() {
  return (
    <main className={styles.main}>
      <Navigation />

      <div className={styles.container}>
        <h1 className={styles.title}>Support Astrakit</h1>
        <p className={styles.description}>
          Free and open-source, funded by donations.
        </p>

        <div className={styles.donationOptions}>
          <div className={styles.donationCard}>
            <h2>One-Time Donation</h2>
            <div className={styles.amounts}>
              <button className={styles.amountButton}>$5</button>
              <button className={styles.amountButton}>$10</button>
              <button className={styles.amountButton}>$25</button>
              <button className={styles.amountButton}>$50</button>
            </div>
            <button className={styles.donateNowButton}>Donate Now</button>
          </div>

          <div className={styles.donationCard}>
            <h2>Monthly Support</h2>
            <div className={styles.amounts}>
              <button className={styles.amountButton}>$5/mo</button>
              <button className={styles.amountButton}>$10/mo</button>
              <button className={styles.amountButton}>$25/mo</button>
              <button className={styles.amountButton}>$50/mo</button>
            </div>
            <button className={styles.donateNowButton}>Subscribe</button>
          </div>
        </div>

        <div className={styles.whyDonate}>
          <h2>Why Donate?</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <h3>Keep It Free</h3>
              <p>Your donations ensure Astrakit remains free for everyone</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Server Costs</h3>
              <p>Help us maintain reliable servers and infrastructure</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Development</h3>
              <p>Support ongoing development and new features</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 