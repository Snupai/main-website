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
          Astrakit is free and open-source, funded entirely by donations from users like you. 
          Your support helps us maintain servers, develop new features, and keep the platform accessible to everyone.
        </p>

        <div className={styles.donationOptions}>
          <div className={styles.donationCard}>
            <h2>One-Time Donation</h2>
            <p>Make a single contribution to support our development</p>
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
            <p>Become a regular supporter and help us plan for the future</p>
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
              <p>Support ongoing development and new feature releases</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Privacy First</h3>
              <p>Stay independent from corporate interests and data collection</p>
            </div>
          </div>
        </div>

        <div className={styles.otherWays}>
          <h2>Other Ways to Support</h2>
          <p>Not able to donate? You can still help by:</p>
          <ul>
            <li>Contributing to our open-source code on GitHub</li>
            <li>Reporting bugs and suggesting features</li>
            <li>Spreading the word about Astrakit</li>
            <li>Helping other users in our community</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 