
"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Java", percentage: 92 },
    { name: "Python", percentage: 94 },
    { name: "JavaScript / TypeScript", percentage: 95 },
    { name: "HTML / CSS", percentage: 98 },
    { name: "REST APIs", percentage: 90 },
    { name: "Databases", percentage: 93 },
    { name: "System Design", percentage: 89 },
    { name: "Node.js / Express.js", percentage: 92 },
    { name: "Git & GitHub", percentage: 94 },
    { name: "Machine Learning & GenAI Integration", percentage: 90 },
];

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <motion.div
                    className="skills-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="skills-subtitle">MY EXPERTISE</span>

                    <h2>
                        My <span>Skills</span>
                    </h2>

                    <p>
                        Technologies and concepts I work with to build
                        applications and solve real-world problems.
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <div className="skill-info">
                                <h3>{skill.name}</h3>
                                <span>{skill.percentage}%</span>
                            </div>

                            <div
                                className="skill-progress-track"
                                role="progressbar"
                                aria-label={skill.name}
                                aria-valuenow={skill.percentage}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <motion.div
                                    className="skill-progress-fill"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.percentage}%` }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.2,
                                        delay: index * 0.08,
                                        ease: "easeOut",
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
