
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ScrollProgress from "@/components/ui/ScrollProgress";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [blogsNotice, setBlogsNotice] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main section[id]")
      );

      let currentSection = sections[0]?.id ?? "home";
      const activationPoint = 150;

      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top;

        if (sectionTop <= activationPoint) {
          currentSection = section.id;
        }
      });

      // Keep the last section active at the bottom of the page.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        currentSection = sections[sections.length - 1]?.id ?? currentSection;
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection
      );
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        {/* Logo */}
        <Link
          href="#home"
          className="navbar-logo"
          aria-label="JituDev4U - Home"
        >
          <Image
            src="/logo.png"
            alt="JituDev4U logo"
            width={90}
            height={54}
            priority
            className="navbar-logo-image"
          />
        </Link>

        {/* Desktop navigation or brand name */}
        <AnimatePresence mode="wait" initial={false}>
          {navVisible ? (
            <motion.div
              key="navigation"
              className="desktop-nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.replace("#", "") ? "active" : ""
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="brand"
              className="navbar-brand-title"
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Jitu<span>Dev4U</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop toggle */}
        <div className="navbar-controls">
          {/* View Blogs Button */}
          <button
            type="button"
            className="view-blogs-button"
            onClick={() => {
              setBlogsNotice(true);
              window.setTimeout(() => setBlogsNotice(false), 2500);
            }}
          >
            View Blogs
          </button>
          <button
            type="button"
            className="nav-toggle-button"
            aria-label={navVisible ? "Hide navigation" : "Show navigation"}
            aria-expanded={navVisible}
            onClick={() => setNavVisible((visible) => !visible)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={navVisible ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                {navVisible ? <X size={23} /> : <Menu size={23} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile brand */}
        <div className="mobile-brand-title">
          Jitu<span>Dev4U</span>
        </div>
      </nav>

         {/* Blogs Coming Soon Notification */}
      <AnimatePresence>
        {blogsNotice && (
          <motion.div
            className="blogs-coming-soon"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <span>Coming Soon!</span>
            <p>My blogs are currently under development.</p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Mobile navigation */}
      <div className="mobile-nav-container">
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.slice(1) ? "active" : ""
                    }`}
                  aria-current={
                    activeSection === link.href.slice(1)
                      ? "location"
                      : undefined
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ScrollProgress />
    </header>
  );
}
