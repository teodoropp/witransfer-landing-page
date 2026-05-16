/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

import { useEffect, useState } from "react";
import {
  MapPin,
  ChevronRight,
  ScanFace,
  Car,
  Bell,
  Star,
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  Bot,
  Languages,
  QrCode,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./index.css";
import { translations } from "./translations";
import type { Language } from "./translations";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InternationalPhoneInput = (PhoneInput as any).default || PhoneInput;

function App() {
  console.log("PhoneInput component check:", InternationalPhoneInput);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>("pt");
  const [dialCode, setDialCode] = useState("244");
  const [showQRModal, setShowQRModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const t = translations[lang];

  const whatsappLink = `https://wa.me/244926002092?text=${encodeURIComponent(t.whatsappText)}`;

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*${t.formWhatsappTitle}*\n\n*${t.formWhatsappName}:* ${formData.name}\n*${t.formWhatsappEmail}:* ${formData.email}\n*${t.formWhatsappPhone}:* ${formData.phone}\n\n*${t.formWhatsappMsg}:*\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/244926002092?text=${encodedText}`, "_blank");
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  useEffect(() => {
    document.title =
      lang === "pt"
        ? "WiTransfer - Sua viagem, nossa prioridade"
        : "WiTransfer - Your journey, our priority";
  }, [lang]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = scrolled ? 80 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  if (isLoading) {
    return (
      <div className="skeleton-container">
        <header className="header container skeleton-header">
          <div className="skeleton-shimmer skeleton-logo"></div>
          <div className="skeleton-nav">
            <div className="skeleton-shimmer skeleton-nav-item"></div>
            <div className="skeleton-shimmer skeleton-nav-item"></div>
            <div className="skeleton-shimmer skeleton-nav-item"></div>
          </div>
          <div className="skeleton-shimmer skeleton-button"></div>
        </header>

        <main className="container">
          <section className="skeleton-hero">
            <div className="skeleton-hero-content">
              <div className="skeleton-shimmer skeleton-hero-title"></div>
              <div className="skeleton-shimmer skeleton-hero-text"></div>
              <div className="skeleton-shimmer skeleton-hero-text"></div>
              <div
                className="skeleton-shimmer skeleton-hero-text"
                style={{ width: "60%" }}></div>
              <div className="skeleton-hero-buttons">
                <div className="skeleton-shimmer skeleton-button"></div>
                <div className="skeleton-shimmer skeleton-button"></div>
              </div>
            </div>
            <div className="skeleton-shimmer skeleton-hero-visual"></div>
          </section>

          <section className="skeleton-section">
            <div className="skeleton-shimmer skeleton-section-title"></div>
            <div className="skeleton-zigzag">
              <div className="skeleton-zigzag-text">
                <div
                  className="skeleton-shimmer skeleton-hero-title"
                  style={{ height: "32px" }}></div>
                <div className="skeleton-shimmer skeleton-hero-text"></div>
                <div className="skeleton-shimmer skeleton-hero-text"></div>
              </div>
              <div className="skeleton-shimmer skeleton-zigzag-visual"></div>
            </div>
            <div className="skeleton-zigzag reverse">
              <div className="skeleton-zigzag-text">
                <div
                  className="skeleton-shimmer skeleton-hero-title"
                  style={{ height: "32px" }}></div>
                <div className="skeleton-shimmer skeleton-hero-text"></div>
                <div className="skeleton-shimmer skeleton-hero-text"></div>
              </div>
              <div className="skeleton-shimmer skeleton-zigzag-visual"></div>
            </div>
          </section>

          <section className="skeleton-section">
            <div className="skeleton-shimmer skeleton-card"></div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          <a href="#" className="logo">
            <img
              src="/images/logo.png"
              alt="WiTransfer"
              className="main-logo"
              style={{
                height: scrolled ? "70px" : "65px",
                objectFit: "contain",
                transition: "height 0.3s ease",
              }}
            />
          </a>

          <div className="header-actions">
            <nav className="nav-links desktop-only">
              <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
                {t.nav.about}
              </a>
              <a
                href="#features"
                onClick={(e) => scrollToSection(e, "features")}>
                {t.nav.features}
              </a>
              <a
                href="#partners"
                onClick={(e) => scrollToSection(e, "partners")}>
                {t.nav.partners}
              </a>
            </nav>
            <button
              className="lang-toggle"
              onClick={toggleLang}
              title={
                lang === "pt" ? "Switch to English" : "Mudar para Português"
              }>
              <Languages size={20} />
              <span>{lang.toUpperCase()}</span>
            </button>
            <a
              href="#download"
              className="btn-nav desktop-only"
              onClick={(e) => scrollToSection(e, "download")}>
              {t.nav.download}
            </a>
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="mobile-menu-overlay"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}>
                <div className="mobile-menu-header">
                  <img
                    src="/images/logo.png"
                    alt="WiTransfer"
                    className="mobile-menu-logo"
                  />
                  <button
                    className="lang-toggle-mobile"
                    onClick={() => {
                      toggleLang();
                      setIsMenuOpen(false);
                    }}>
                    <Languages size={20} />
                    <span>{lang.toUpperCase()}</span>
                  </button>
                </div>

                <nav className="mobile-nav">
                  <motion.a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}>
                    {t.nav.about}
                  </motion.a>
                  <motion.a
                    href="#features"
                    onClick={(e) => scrollToSection(e, "features")}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}>
                    {t.nav.features}
                  </motion.a>
                  <motion.a
                    href="#partners"
                    onClick={(e) => scrollToSection(e, "partners")}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}>
                    {t.nav.partners}
                  </motion.a>
                  <motion.div
                    className="mobile-menu-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}>
                    <a
                      href="#download"
                      className="btn-nav mobile-cta"
                      onClick={(e) => scrollToSection(e, "download")}>
                      {t.nav.download}
                    </a>
                    <p>{t.nav.followUs}</p>
                    <div className="mobile-socials">
                      {/* Placeholders for social icons if needed */}
                    </div>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-split">
            <div className="hero-content-split animate-fade-in">
              <h1>
                {t.hero.title} <br />
                <span className="text-gradient">{t.hero.subtitle}</span>
              </h1>
              <p>{t.hero.description}</p>
              <div className="hero-actions-split">
                <a
                  href="#download"
                  className="btn btn-primary"
                  onClick={(e) => scrollToSection(e, "download")}>
                  {t.hero.cta} <ChevronRight size={20} />
                </a>
                <a
                  href="#features"
                  className="btn btn-secondary"
                  onClick={(e) => scrollToSection(e, "features")}>
                  {t.hero.learnMore}
                </a>
              </div>
            </div>

            <div className="hero-visual-split">
              <motion.img
                src="/images/hero_image.png"
                alt="WiTransfer App 3D"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  width: "100%",
                  height: "auto",
                  filter: "drop-shadow(0 35px 60px rgba(144, 42, 209, 0.25))",
                }}
              />
            </div>
          </div>
        </section>

        {/* --- NOVA SECÇÃO "SOBRE O WITRANSFER" --- */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="about-content">
              <motion.div
                className="about-text"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}>
                <div className="about-badge">{t.about.badge}</div>
                <h2>{t.about.title}</h2>
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </motion.div>

              <motion.div
                className="about-visual"
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}>
                <div className="about-image-wrapper">
                  <img
                    src="/images/about_image.png"
                    alt="Mobilidade Urbana WiTransfer"
                  />
                  <div className="about-image-glow"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="features-bg-grid"></div>

          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}>
              <h2>{t.features.title}</h2>
              <p>{t.features.subtitle}</p>
            </motion.div>

            <div className="features-zigzag">
              {/* Passo 1 */}
              <motion.div
                className="zigzag-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}>
                <motion.div
                  className="zigzag-content"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}>
                  <div
                    className="feature-icon"
                    style={{
                      marginBottom: "1.5rem",
                      width: "60px",
                      height: "60px",
                      background: "rgba(144, 42, 209, 0.1)",
                      color: "#902ad1",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <ScanFace size={30} />
                  </div>
                  <h3>{t.features.step1.title}</h3>
                  <p>{t.features.step1.desc}</p>
                  <ul className="zigzag-list">
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      {t.features.step1.list1}
                    </li>
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      {t.features.step1.list2}
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="zigzag-visual"
                  initial={{ opacity: 0, scale: 0.9, x: 30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  viewport={{ once: true }}>
                  <div
                    className="visual-placeholder"
                    style={{
                      padding: 0,
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                    }}>
                    <img
                      src="/screens/step1.png"
                      alt={t.features.step1.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Passo 2 */}
              <motion.div
                className="zigzag-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}>
                <motion.div
                  className="zigzag-content"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}>
                  <div
                    className="feature-icon"
                    style={{
                      marginBottom: "1.5rem",
                      width: "60px",
                      height: "60px",
                      background: "rgba(144, 42, 209, 0.1)",
                      color: "#902ad1",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Star size={30} />
                  </div>
                  <h3>{t.features.step2.title}</h3>
                  <p>{t.features.step2.desc}</p>
                  <ul className="zigzag-list">
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      {t.features.step2.list1}
                    </li>
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      {t.features.step2.list2}
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="zigzag-visual"
                  initial={{ opacity: 0, scale: 0.9, x: -30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  viewport={{ once: true }}>
                  <div
                    className="visual-placeholder"
                    style={{
                      padding: 0,
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                    }}>
                    <img
                      src="/screens/step2.png"
                      alt={t.features.step2.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Passo 3 */}
              <motion.div
                className="zigzag-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}>
                <motion.div
                  className="zigzag-content"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}>
                  <div
                    className="feature-icon"
                    style={{
                      marginBottom: "1.5rem",
                      width: "60px",
                      height: "60px",
                      background: "rgba(144, 42, 209, 0.1)",
                      color: "#902ad1",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <MapPin size={30} />
                  </div>
                  <h3>{t.features.step3.title}</h3>
                  <p>{t.features.step3.desc}</p>
                  <ul className="zigzag-list">
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      {t.features.step3.list1}
                    </li>
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      {t.features.step3.list2}
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="zigzag-visual"
                  initial={{ opacity: 0, scale: 0.9, x: 30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  viewport={{ once: true }}>
                  <div
                    className="visual-placeholder"
                    style={{
                      padding: 0,
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                    }}>
                    <img
                      src="/screens/step3.png"
                      alt={t.features.step3.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Passo 4 */}
              <motion.div
                className="zigzag-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}>
                <motion.div
                  className="zigzag-content"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}>
                  <div
                    className="feature-icon"
                    style={{
                      marginBottom: "1.5rem",
                      width: "60px",
                      height: "60px",
                      background: "rgba(144, 42, 209, 0.1)",
                      color: "#902ad1",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Car size={30} />
                  </div>
                  <h3>{t.features.step4.title}</h3>
                  <p>{t.features.step4.desc}</p>
                  <ul className="zigzag-list">
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      {t.features.step4.list1}
                    </li>
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      {t.features.step4.list2}
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="zigzag-visual"
                  initial={{ opacity: 0, scale: 0.9, x: -30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  viewport={{ once: true }}>
                  <div
                    className="visual-placeholder"
                    style={{
                      padding: 0,
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                    }}>
                    <div className="visual-bg-glow"></div>
                    <img
                      src="/screens/step4.png"
                      alt={t.features.step4.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Passo 5 */}
              <motion.div
                className="zigzag-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}>
                <motion.div
                  className="zigzag-content"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}>
                  <div
                    className="feature-icon"
                    style={{
                      marginBottom: "1.5rem",
                      width: "60px",
                      height: "60px",
                      background: "rgba(144, 42, 209, 0.1)",
                      color: "#902ad1",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Bell size={30} />
                  </div>
                  <h3>{t.features.step5.title}</h3>
                  <p>{t.features.step5.desc}</p>
                  <ul className="zigzag-list">
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      {t.features.step5.list1}
                    </li>
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      {t.features.step5.list2}
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="zigzag-visual"
                  initial={{ opacity: 0, scale: 0.9, x: 30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  viewport={{ once: true }}>
                  <div
                    className="visual-placeholder"
                    style={{
                      padding: 0,
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                    }}>
                    <div className="visual-bg-glow"></div>
                    <img
                      src="/screens/step5.png"
                      alt={t.features.step5.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SECÇÃO PARCEIROS / CONTACTOS --- */}
        <section id="partners" className="partners-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}>
              <span className="section-badge">{t.partners.badge}</span>
              <h2>{t.partners.title}</h2>
              <p>{t.partners.desc}</p>
            </motion.div>

            <div className="partners-split">
              <motion.div
                className="partners-details"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <h3>{t.partners.contactTitle}</h3>
                <p className="partners-details-desc">
                  {t.partners.contactDesc}
                </p>

                <div className="contact-info-list">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <strong>{t.partners.labels.address}</strong>
                      <span>Luanda, Angola (Talatona)</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Phone size={22} />
                    </div>
                    <div>
                      <strong>{t.partners.labels.phone}</strong>
                      <a href="tel:+244926002092" className="contact-link">
                        +244 926 002 092
                      </a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Mail size={22} />
                    </div>
                    <div>
                      <strong>{t.partners.labels.email}</strong>
                      <a
                        href="mailto:Geral@maisresultados.co.ao"
                        className="contact-link">
                        Geral@maisresultados.co.ao
                      </a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Clock size={22} />
                    </div>
                    <div>
                      <strong>{t.partners.labels.schedule}</strong>
                      <span>{t.partners.labels.scheduleVal}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="partners-form-container"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <form className="partners-form" onSubmit={handlePartnerSubmit}>
                  <div className="form-group">
                    <label>{t.partners.form.name}</label>
                    <input
                      type="text"
                      placeholder={t.partners.form.namePlaceholder}
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>{t.partners.form.email}</label>
                    <input
                      type="email"
                      placeholder={t.partners.form.emailPlaceholder}
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>{t.partners.form.phone}</label>
                    <div className="separated-phone-input">
                      // eslint-disable-next-line
                      @typescript-eslint/no-explicit-any
                      <div
                        className="country-selector-wrapper"
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        style={{ "--dial-code": `"+${dialCode}"` } as any}>
                        <InternationalPhoneInput
                          country={"ao"}
                          value={dialCode}
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          onChange={(_phone, data: any) => {
                            setDialCode(data.dialCode);
                          }}
                          inputStyle={{ display: "none" }}
                          buttonClass="country-selector-button"
                          dropdownClass="phone-input-dropdown"
                          searchClass="phone-input-search"
                          enableSearch={true}
                          disableSearchIcon={true}
                          searchPlaceholder="Pesquisar..."
                          specialLabel=""
                        />
                      </div>
                      <input
                        type="tel"
                        className="standalone-phone-input"
                        placeholder={t.partners.form.phonePlaceholder}
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          // Apenas números
                          const val = e.target.value.replace(/\D/g, "");
                          setFormData({ ...formData, phone: val });
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>{t.partners.form.message}</label>
                    <textarea
                      rows={4}
                      placeholder={t.partners.form.messagePlaceholder}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn">
                    {t.partners.form.submit}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="download" className="download">
          <div className="container">
            <div className="download-split">
              <div className="download-content">
                <h2>{t.download.title}</h2>
                <p>{t.download.desc}</p>

                <div className="download-action">
                  <a
                    href="/witransfer.apk"
                    className="btn btn-secondary"
                    onClick={(e) => {
                      // Verificar se é mobile de forma simples
                      const isMobile = /iPhone|iPad|iPod|Android/i.test(
                        navigator.userAgent,
                      );
                      if (!isMobile) {
                        e.preventDefault();
                        setShowQRModal(true);
                      }
                    }}
                    style={{
                      background: "var(--color-white)",
                      color: "var(--color-primary)",
                      border: "none",
                    }}>
                    {t.download.button} <Bot size={20} />
                  </a>
                </div>
              </div>
              <div className="download-visual">
                <motion.img
                  src="/screens/icone.png"
                  alt="App WiTransfer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* QR Code Modal */}
        <AnimatePresence>
          {showQRModal && (
            <motion.div
              className="qr-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQRModal(false)}>
              <motion.div
                className="qr-modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}>
                <button
                  className="qr-modal-close"
                  onClick={() => setShowQRModal(false)}>
                  <X size={24} />
                </button>
                <div className="qr-modal-header">
                  <QrCode size={40} className="qr-icon" />
                  <h3>Baixe o WiTransfer</h3>
                  <p>
                    Aponte a câmara do seu telemóvel para o código abaixo para
                    descarregar a aplicação.
                  </p>
                </div>
                <div className="qr-code-container">
                  <QRCodeSVG
                    value={window.location.origin + "/witransfer.apk"}
                    size={200}
                    level={"H"}
                    includeMargin={true}
                  />
                </div>
                <div className="qr-modal-footer">
                  <p>Disponível para Android</p>
                  <div className="store-badges">
                    {/* Futuros links para as lojas */}
                    <span className="badge-placeholder">
                      Play Store em breve
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="/images/logo.png" alt="WiTransfer" />
              </a>
              <p className="footer-tagline">{t.footer.tagline}</p>
            </div>

            <div className="footer-links-group">
              <h4>{t.footer.product}</h4>
              <ul>
                <li>
                  <a href="#features">{t.footer.links.howItWorks}</a>
                </li>
                <li>
                  <a href="#download">{t.footer.links.download}</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>{t.footer.drivers}</h4>
              <ul>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    {t.footer.links.beADriver}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    {t.footer.links.requirements}
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>{t.footer.company}</h4>
              <ul>
                <li>
                  <a href="#about">{t.footer.links.aboutUs}</a>
                </li>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    {t.footer.links.contacts}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} WiTransfer. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
