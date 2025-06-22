'use client';

import Link from "next/link";
import Navigation from "../components/Navigation/Navigation";
import styles from "./page.module.css";

export default function CreatorTools() {
  return (
    <main className={styles.main}>
      <Navigation />

      <div className={styles.container}>
        <h1 className={styles.title}>Creator Tools</h1>
        <p className={styles.description}>
          Tools for content creators.
        </p>

        <div className={styles.toolsGrid}>
          <div className={styles.toolCard}>
            <h2>Stream Integration</h2>
            <p>Integrate Astrakit chat into your live streams.</p>
          </div>
          <div className={styles.toolCard}>
            <h2>Moderation Suite</h2>
            <p>Advanced moderation tools to keep your community safe.</p>
          </div>
          <div className={styles.toolCard}>
            <h2>Analytics Dashboard</h2>
            <p>Track engagement and community metrics.</p>
          </div>
          <div className={styles.toolCard}>
            <h2>Custom Bots</h2>
            <p>Create custom bots to automate tasks and engage with your audience.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 