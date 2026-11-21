
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "Hi, I'm Akash Jitu";
  const introText = "Hi, I'm ";
  // const nameText = "Akash Jitu";

  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (typedCount >= fullText.length) {
      const timer = window.setTimeout(() => {
        setTypedCount(0);
      }, 5500);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setTypedCount((count) => count + 1);
    }, 90);

    return () => window.clearTimeout(timer);
  }, [typedCount, fullText.length]);

  const typedIntro = fullText.slice(
    0,
    Math.min(typedCount, introText.length)
  );

  const typedName = fullText.slice(
    introText.length,
    typedCount
  );
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="hero-eyebrow">
            <span className="hero-status-dot" />
            WELCOME TO MY DIGITAL SPACE
          </p>

          <h1 className="hero-title" aria-label={fullText}>
            <span className="hero-title-intro" aria-hidden="true">
              {typedIntro}
              {typedCount <= introText.length && (
                <span className="hero-title-cursor" />
              )}
            </span>

            <span className="hero-title-name" aria-hidden="true">
              {typedName}
              {typedCount > introText.length && (
                <span className="hero-title-cursor" />
              )}
            </span>
          </h1>

          <h2 className="hero-role">Full Stack Developer</h2>

          <p className="hero-description">
            I build modern, responsive, and user-friendly web applications.
            I enjoy turning ideas into practical digital experiences through
            clean code, thoughtful design, and continuous learning.
          </p>

          <div className="hero-actions">
            <Link href="#contact" className="hero-button hero-button-primary">
              Contact Me <ArrowRight size={18} />
            </Link>

            <Link href="#about" className="hero-button hero-button-secondary">
              Explore More <ArrowDown size={18} />
            </Link>
          </div>

          <div className="hero-tech-label">
            <span>BUILDING WITH</span>
            <div className="hero-tech-list">
              <span>Java</span>
              <span>Typescript</span>
              <span>MERN</span>
              <span>Databases</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="hero-photo">
            <Image
              src="/profile-photo.png"
              alt="Portrait of Akash Jitu"
              width={500}
              height={500}
              priority
              className="profile-photo-image"
            />
          </div>
        </motion.div>
      </div>

      <a href="#about" className="hero-scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
