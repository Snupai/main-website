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
          Enhance your content creation with Astrakit's powerful suite of tools designed specifically for creators.
        </p>

        <div className={styles.toolsGrid}>
          <div className={styles.toolCard}>
            <h2>Stream Integration</h2>
            <p>Seamlessly integrate Astrakit chat into your live streams with customizable overlays and real-time interaction.</p>
          </div>
          <div className={styles.toolCard}>
            <h2>Moderation Suite</h2>
            <p>Advanced moderation tools to keep your community safe and engaged with automated filters and custom rules.</p>
          </div>
          <div className={styles.toolCard}>
            <h2>Analytics Dashboard</h2>
            <p>Track engagement, growth, and community metrics with our comprehensive analytics platform.</p>
          </div>
          <div className={styles.toolCard}>
            <h2>Custom Bots</h2>
            <p>Create and deploy custom bots to automate tasks, engage with your audience, and enhance the chat experience.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 