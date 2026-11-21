
import Link from "next/link";
import {
  ArrowUp,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import {
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/akash-jitu-6728b62b8/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/akashjitu_7623/",
    icon: FaInstagram,
  },
  {
    name: "X",
    url: "https://x.com/jitu285992",
    icon: FaXTwitter,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/akash.jitu.686600/",
    icon: FaFacebook,
  },
  {
    name: "GitHub",
    url: "https://github.com/Akash-Jitu",
    icon: FaGithub,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@wronggamer2.013",
    icon: FaYoutube,
  },
];

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="#home" className="footer-logo">
              Jitu<span>Dev4U</span>
            </Link>

            <p>
              Building modern digital experiences through clean code,
              creative thinking, and continuous learning.
            </p>

            <div className="footer-social-links">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-navigation">
            <h3>Quick Links</h3>

            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Get In Touch</h3>

            <p>
              <MapPin size={16} />
              Kolkata, West Bengal, India
            </p>

            <a href="mailto:ajitu5414@gmail.com">
              <Mail size={16} />
              ajitu5414@gmail.com
            </a>

            <a href="tel:+918391847623">
              <Phone size={16} />
              +91 8391847623
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} <span>JituDev4U</span>. All rights reserved.
          </p>

          <Link href="#home" className="footer-back-to-top">
            Back to Top <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
