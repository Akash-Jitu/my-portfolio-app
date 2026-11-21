
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Code2,
  UserRound,
  BriefcaseBusiness,
  GitBranch,
  Laptop,
} from "lucide-react";

const technologies = [
  "TypeScript",
  "Node.js",
  "React.js",
  "Express.js",
  "MongoDB",
  "TCP/IP & Protocol Handling",
];

const education = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    institution:
      "Durgapur Institute of Advanced Technology and Management",
    period: "2022 – 2026",
    detail: "Bachelor of Technology",
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Baradongal Ramanath Institution",
    period: "2022",
    detail: "Higher Secondary Education",
  },
  {
    degree: "Secondary (Class X)",
    institution: "Baradongal Ramanath Institution",
    period: "2020",
    detail: "Secondary Education",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-photo">
            <Image
              src="/profile-photo.png"
              alt="Portrait of Akash Jitu"
              width={500}
              height={500}
              className="about-profile-image"
            />
          </div>

          <div className="about-location">
            <MapPin size={17} />
            <span>Kolkata, West Bengal, India</span>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-eyebrow">
            <UserRound size={16} />
            ABOUT ME
          </p>

          <h2 className="about-title">
            Get to Know <span>Me</span>
          </h2>

          <h3 className="about-subtitle">
            A passionate Full Stack Developer
          </h3>

          <p className="about-description">
            Hi, I&apos;m Akash Jitu, a Computer Science and Engineering
            graduate from Maulana Abul Kalam University of Technology.
          </p>

          <p className="about-description">
            I enjoy developing modern web applications, solving
            real-world problems, and exploring new technologies.
            My interests include Full Stack Development, Technical Solutions,
            System Design & Problem solving.
          </p>

          <p className="about-description">
            I believe in continuous learning, writing clean code,
            and improving my development skills through hands-on
            projects and practical experience.
          </p>

          <div className="about-highlights">
            <div className="about-highlight">
              <Code2 size={21} />
              <div>
                <strong>Development</strong>
                <span>Web Applications</span>
                <span>Technical Solutions</span>
              </div>
            </div>

            <div className="about-highlight">
              <GraduationCap size={22} />
              <div>
                <strong>Education</strong>
                <span>B.Tech in CSE</span>
              </div>
            </div>

            {/* Work Experience */}

          </div>
        </motion.div>
      </div>

      {/* Work Experience */}
      <motion.article
        className="about-work-experience"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="work-experience-heading">
          <div className="work-experience-icon">
            <BriefcaseBusiness size={22} />
          </div>

          <div>
            <strong>Work Experience</strong>
            <span>September 2026 – Present</span>
          </div>
        </div>

        <h3>Full Stack Developer</h3>

        <p className="work-company">Tracia Sicura LLP</p>

        <p className="work-description">
          Working on full-stack application development,
          backend services, server-side communication,
          TCP connections, and protocol encoding and decoding.
        </p>

        <div className="work-technologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="additional-experience">
          <div>
            <GitBranch size={17} />
            <span>Open Source Contributions</span>
          </div>

          <div>
            <Laptop size={17} />
            <span>Freelancing</span>
          </div>
        </div>
      </motion.article>

      {/* Education Background */}
      <motion.div
        className="education-section"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
      >
        <div className="education-heading">
          <p className="about-eyebrow">
            <GraduationCap size={17} />
            MY ACADEMIC JOURNEY
          </p>

          <h2 className="about-title">
            Education <span>Background</span>
          </h2>
        </div>

        <div className="education-grid">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              className="education-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="education-icon">
                <GraduationCap size={23} />
              </div>

              <span className="education-period">
                {item.period}
              </span>

              <h3>{item.degree}</h3>

              <p>{item.institution}</p>

              <span className="education-detail">
                {item.detail}
              </span>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
