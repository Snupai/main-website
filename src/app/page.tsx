'use client';

import Link from "next/link";
import Navigation from "./components/Navigation/Navigation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>
              Discover The<br />
              <span className={styles.heroTitleGreen}>Future Of Chatting</span>
            </h1>
            <p className={styles.heroDescription}>
              Free and open-source chat app with secure, seamless communication.
            </p>
            <div className={styles.heroButtons}>
              <Link href="#download" className={styles.primaryButton}>Download Now</Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className={styles.team}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Team
            </h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <iframe src="https://api.astrakit.cc/iframe-profile?username=catpawzz" className={styles.teamMemberIframe}></iframe>
              </div>
              <div className={styles.teamMember}>
                <iframe src="https://api.astrakit.cc/iframe-profile?username=snupai" className={styles.teamMemberIframe}></iframe>
              </div>
              <div className={styles.teamMember}>
                <iframe src="https://api.astrakit.cc/iframe-profile?username=yuuiko" className={styles.teamMemberIframe}></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className={styles.download}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Download
            </h2>
            <p className={styles.versionInfo}>
              Current version: <strong>ALPHA</strong>
            </p>
            <div className={styles.downloadButtons}>
              <a href="#" className={styles.downloadButton}>
                F-Droid
              </a>
              <a href="#" className={styles.downloadButton}>
                Google Play
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 