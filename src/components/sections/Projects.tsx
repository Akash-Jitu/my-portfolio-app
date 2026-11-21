
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import { Github, ExternalLink, Lock } from "lucide-react";
import { GitBranch, ExternalLink, Lock } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const handlePrivateProject = () => {
    window.alert(
      "Sorry, this application cannot be opened publicly. It is a private security application developed for a company, and access is restricted."
    );
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="projects-eyebrow">MY WORK</p>

          <h2 className="projects-title">
            Featured <span>Projects</span>
          </h2>

          <p className="projects-description">
            Explore some of the projects I have worked on,
            showcasing my interests in web development,
            software engineering, and practical problem-solving.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.12,
              }}
            >
              <div className="project-image-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="project-image"
                />

                {project.isPrivate && (
                  <span className="project-private-badge">
                    <Lock size={13} />
                    Private Project
                  </span>
                )}
              </div>

              <div className="project-card-content">
                <h3 className="project-card-title">
                  {project.title}
                </h3>

                <p className="project-card-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>


                <div className="project-card-actions">
                  {/* GitHub button */}
                  <button
                    type="button"
                    className="project-link project-github-link"
                    onClick={() => {
                      if (project.isPrivate) {
                        window.alert(
                          "Sorry, this is a private repository and cannot be viewed publicly."
                        );
                      } else if (project.githubUrl !== "#") {
                        window.open(
                          project.githubUrl,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }
                    }}
                  >
                    {project.isPrivate ? (
                      <Lock size={16} />
                    ) : (
                      <GitBranch size={17} />
                    )}
                    GitHub
                  </button>

                  {/* Live Demo / Private Access */}
                  {project.isPrivate ? (
                    <button
                      type="button"
                      className="project-link project-live-link"
                      onClick={handlePrivateProject}
                    >
                      <Lock size={16} />
                      Private Access
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl}
                      className="project-link project-live-link"
                      onClick={(event) => {
                        if (project.liveUrl === "#") {
                          event.preventDefault();
                        }
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
