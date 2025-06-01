'use client';

import Link from "next/link";
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import styles from "./page.module.css";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.pageWrapper}>
      <Navigation />
      
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.blurCircle1}></div>
        <div className={styles.blurCircle2}></div>
        <div className={styles.blurCircle3}></div>
        
        {/* Floating Particles */}
        <div className={`${styles.floatingParticle} ${styles.particle1}`}></div>
        <div className={`${styles.floatingParticle} ${styles.particle2}`}></div>
        <div className={`${styles.floatingParticle} ${styles.particle3}`}></div>
        <div className={`${styles.floatingParticle} ${styles.particle4}`}></div>
        <div className={`${styles.floatingParticle} ${styles.particle5}`}></div>
        
        {/* Floating Dots */}
        <div className={`${styles.floatingDot} ${styles.dot1}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot2}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot3}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot4}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot5}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot6}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot7}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot8}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot9}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot10}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot11}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot12}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot13}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot14}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot15}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot16}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot17}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot18}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot19}`}></div>
        <div className={`${styles.floatingDot} ${styles.dot20}`}></div>
      </div>
      
      <div className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>
              Discover The<br />
              <span className={styles.heroTitleGreen}>Future Of Chatting</span>
            </h1>
            <p className={styles.heroDescription}>
              Astrakit is a free and open-source chat app designed by nerds. Enjoy secure, 
              seamless communication with powerful features and complete transparency, all without any cost.
            </p>
            <p className={styles.userCount}>
              Join over <span className={styles.highlight}>17</span> satisfied users who have 
              transformed the way they chat with people.
            </p>
            <div className={styles.heroButtons}>
              <Link href="#download" className={styles.primaryButton}>Download Now</Link>
              <Link href="#features" className={styles.secondaryButton}>Learn More</Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Key Features That <span className={styles.sectionTitleGreen}>Shine</span>
            </h2>
            <p className={styles.sectionDescription}>
              Discover the tools that make Astrakit the perfect place to connect, share, and chat effortlessly. 
              From seamless messaging to customizable experiences, we've got everything you need to stay connected your way!
            </p>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureCardTitle}>Secure & Encrypted</h3>
                <p className={styles.featureCardText}>You have control over your data, with options to delete it at any time and customizable encryption methods.</p>
              </div>
              <div className={styles.featureCard}>
                <h3 className={styles.featureCardTitle}>Temporary Message Storage</h3>
                <p className={styles.featureCardText}>Messages are stored on our servers only until delivered and read, then automatically deleted, ensuring no long-term record on our infrastructure.</p>
              </div>
              <div className={styles.featureCard}>
                <h3 className={styles.featureCardTitle}>Open source & Free</h3>
                <p className={styles.featureCardText}>We believe that open source software combined with privacy should be accessible to everyone. We're funded only by donations.</p>
              </div>
              <div className={styles.featureCard}>
                <h3 className={styles.featureCardTitle}>Transparent</h3>
                <p className={styles.featureCardText}>We operate with complete transparency, providing open access to our source code and development process, by still keeping your data secure at any time.</p>
              </div>
              <div className={styles.featureCard}>
                <h3 className={styles.featureCardTitle}>Feature packed</h3>
                <p className={styles.featureCardText}>Astrakit is loaded with features that enhance your chatting experience. Stay tuned for upcoming features that will make communication even more enjoyable.</p>
              </div>
              <div className={styles.featureCard}>
                <h3 className={styles.featureCardTitle}>Community Driven</h3>
                <p className={styles.featureCardText}>Join a vibrant community of users and cats (hehe) who contribute to the continuous improvement and evolution of Astrakit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className={styles.gallery}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Experience Astrakit <span className={styles.sectionTitleGreen}>Yourself</span>
            </h2>
            <p className={styles.sectionDescription}>
              Get a glimpse of Astrakit's sleek design and powerful features in action!
            </p>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <div className={styles.screenshotPlaceholder}>
                  <p className={styles.screenshotPlaceholderText}>Image not found</p>
                </div>
                <h3 className={styles.galleryItemTitle}>Simple interface</h3>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.screenshotPlaceholder}>
                  <p className={styles.screenshotPlaceholderText}>Image not found</p>
                </div>
                <h3 className={styles.galleryItemTitle}>Feature packed</h3>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.screenshotPlaceholder}>
                  <p className={styles.screenshotPlaceholderText}>Image not found</p>
                </div>
                <h3 className={styles.galleryItemTitle}>Make Astrakit yours</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className={styles.team}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Who Works In <span className={styles.sectionTitleGreen}>Our Team</span>
            </h2>
            <p className={styles.sectionDescription}>
              Discover the talented individuals behind Astrakit and learn how their expertise shapes our platform.
            </p>
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
              Ready to <span className={styles.sectionTitleGreen}>Get Started?</span>
            </h2>
            <p className={styles.downloadDescription}>
              Getting started with Astrakit is completely free and doesn't take long at all! 
              Not convinced? Try it out by yourself below!
            </p>
            <p className={styles.versionInfo}>
              Current version: <strong>ALPHA</strong> | Last updated: <strong>-</strong>
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

        {/* Contact Section */}
        <section id="contact" className={styles.contact}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Get In <span className={styles.sectionTitleGreen}>Touch</span>
            </h2>
            <p className={styles.sectionDescription}>
              We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
            </p>
            
            <div className={styles.contactContent}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <h4 className={styles.contactItemTitle}>Email</h4>
                  <a href="mailto:contact@astrakit.cc" className={styles.contactItemText}>contact@astrakit.cc</a>
                </div>
                <div className={styles.contactItem}>
                  <h4 className={styles.contactItemTitle}>Social</h4>
                  <a href="#" className={styles.contactItemText}>@astrakit</a>
                </div>
                <div className={styles.contactItem}>
                  <h4 className={styles.contactItemTitle}>Location</h4>
                  <p className={styles.contactItemText}>Catland (it's not real)</p>
                </div>
              </div>

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
                <textarea
                  name="message"
                  placeholder="What would you like to tell us?"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                />
                <button type="submit" className={styles.submitButton}>
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer - moved outside mainContent */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <h3 className={styles.footerBrandTitle}>Astrakit</h3>
              <p className={styles.footerBrandText}>Astrakit is a free and open-source chat app designed for seamless communication and collaboration.</p>
            </div>
            <div className={styles.footerLinks}>
              <h4 className={styles.footerLinksTitle}>Quick Links</h4>
              <ul className={styles.footerLinksList}>
                <li><Link href="#features" className={styles.footerLink}>Features</Link></li>
                <li><Link href="#gallery" className={styles.footerLink}>Gallery</Link></li>
                <li><Link href="#team" className={styles.footerLink}>Team</Link></li>
                <li><Link href="#download" className={styles.footerLink}>Download</Link></li>
                <li><Link href="#contact" className={styles.footerLink}>Contact</Link></li>
                <li><Link href="/creator-tools" className={styles.footerLink}>Creator Tools</Link></li>
              </ul>
            </div>
            <div className={styles.footerLinks}>
              <h4 className={styles.footerLinksTitle}>Legal</h4>
              <ul className={styles.footerLinksList}>
                <li><Link href="#" className={styles.footerLink}>Privacy Policy</Link></li>
                <li><Link href="#" className={styles.footerLink}>Terms of Service</Link></li>
                <li><Link href="#" className={styles.footerLink}>Security Notice</Link></li>
                <li><Link href="#" className={styles.footerLink}>GDPR Compliance</Link></li>
              </ul>
            </div>
            <div className={styles.footerLinks}>
              <h4 className={styles.footerLinksTitle}>Resources</h4>
              <ul className={styles.footerLinksList}>
                <li><Link href="/donate" className={styles.footerLink}>Donate</Link></li>
                <li><Link href="#" className={styles.footerLink}>Documentation / Help</Link></li>
                <li><Link href="#" className={styles.footerLink}>Network Status</Link></li>
                <li><Link href="#" className={styles.footerLink}>GitHub ORG</Link></li>
                <li><Link href="#" className={styles.footerLink}>Report Issues</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2025 Astrakit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 