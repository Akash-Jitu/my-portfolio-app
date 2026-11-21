
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

import {
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/akash-jitu-6728b62b8/",
    color: "linkedin",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/akashjitu_7623/",
    color: "instagram",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    url: "https://x.com/jitu285992",
    color: "twitter",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/akash.jitu.686600/",
    color: "facebook",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Akash-Jitu",
    color: "github",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@wronggamer2.013",
    color: "youtube",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [enquiry, setEnquiry] = useState("");

  const wordCount = enquiry.trim()
    ? enquiry.trim().split(/\s+/).length
    : 0;

  const isFormValid =
    name.trim().length > 0 &&
    contact.trim().length > 0 &&
    enquiry.trim().length > 0 &&
    wordCount <= 500;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedContact = contact.trim();
    const trimmedEnquiry = enquiry.trim();

    const currentWordCount = trimmedEnquiry
      ? trimmedEnquiry.split(/\s+/).length
      : 0;

    if (!trimmedName || !trimmedContact || !trimmedEnquiry) {
      return;
    }

    if (currentWordCount > 500) {
      alert("Your enquiry must not exceed 500 words.");
      return;
    }

    const recipient = "ajitu5414@gmail.com";
    const subject = `Enquiry from ${trimmedName}`;

    const body = `
Name: ${trimmedName}

Mobile Number / Email: ${trimmedContact}

Enquiry:
${trimmedEnquiry}
  `;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipient
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">GET IN TOUCH</span>
          <h2>
            Let&apos;s <span>Connect</span>
          </h2>
          <p>
            Have a project, opportunity, or just want to say hello?
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Contact Information */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Contact Information</h3>
            <p className="contact-info-description">
              Let&apos;s start a conversation. You can reach me through
              any of the following details.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={21} />
                </div>
                <div>
                  <span>Location</span>
                  <p>Kolkata, West Bengal, India</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Phone size={21} />
                </div>
                <div>
                  <span>Phone Number</span>
                  <p>+91 8391847623</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={21} />
                </div>
                <div>
                  <span>Email Address</span>
                  <p>ajitu5414@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-social-area">
              <h4>Connect With Me</h4>

              <div className="contact-social-grid">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`contact-social-link ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Send an Enquiry</h3>
            <p className="contact-form-description">
              Fill out the form below and Let&apos;s discuss your ideas.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-detail">Mobile Number / Email</label>
                <input
                  id="contact-detail"
                  type="text"
                  placeholder="Enter your mobile number or email"
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-enquiry">Your Enquiry</label>
                <textarea
                  id="contact-enquiry"
                  placeholder="Write your enquiry here..."
                  rows={6}
                  value={enquiry}
                  onChange={(event) => {
                    const value = event.target.value;
                    const words = value.trim()
                      ? value.trim().split(/\s+/)
                      : [];

                    if (words.length <= 500) {
                      setEnquiry(value);
                    }
                  }}
                  required
                />
                <div className="enquiry-word-count">
                  <span>Maximum 500 words</span>
                  <span className={wordCount > 500 ? "word-limit-error" : ""}>
                    {wordCount}/500 words
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="contact-submit-button"
                disabled={!isFormValid}
              >
                Send Enquiry
                <Send size={17} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
