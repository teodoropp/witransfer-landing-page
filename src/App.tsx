/** @format */

// Trigger deployment with new secrets

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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappLink =
    "https://wa.me/244926002092?text=Olá!%20Gostaria%20de%20obter%20mais%20informações%20sobre%20como%20ser%20um%20motorista%20WiTransfer.";

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Novo Pedido de Parceria WiTransfer*\n\n*Nome/Empresa:* ${formData.name}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.phone}\n\n*Mensagem:*\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/244926002092?text=${encodedText}`, "_blank");
  };

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
              style={{
                height: scrolled ? "70px" : "65px",
                objectFit: "contain",
                transition: "height 0.3s ease",
              }}
            />
          </a>

          <div className="header-actions">
            <nav className="nav-links desktop-only">
              <a href="#about">Sobre</a>
              <a href="#features">Funcionalidades</a>
              <a href="#partners">Parceiros</a>
            </nav>
            <a href="#download" className="btn-nav desktop-only">
              Obter a App
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
                    className="menu-close"
                    onClick={() => setIsMenuOpen(false)}>
                    <X size={28} />
                  </button>
                </div>

                <nav className="mobile-nav">
                  <motion.a
                    href="#about"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}>
                    Sobre
                  </motion.a>
                  <motion.a
                    href="#features"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}>
                    Funcionalidades
                  </motion.a>
                  <motion.a
                    href="#partners"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}>
                    Parceiros
                  </motion.a>
                  <motion.div
                    className="mobile-menu-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}>
                    <a
                      href="#download"
                      className="btn-nav mobile-cta"
                      onClick={() => setIsMenuOpen(false)}>
                      Obter a App
                    </a>
                    <p>Siga-nos nas redes sociais</p>
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
                Sua viagem, <br />
                <span className="text-gradient">nossa prioridade.</span>
              </h1>
              <p>
                O WiTransfer conecta-o aos melhores motoristas da cidade.
                Rápido, seguro e concebido com a melhor experiência de
                utilização do mercado.
              </p>
              <div className="hero-actions-split">
                <a href="#download" className="btn btn-primary">
                  Baixar Agora <ChevronRight size={20} />
                </a>
                <a href="#features" className="btn btn-secondary">
                  Saber Mais
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
                <div className="about-badge">O que é o WiTransfer?</div>
                <h2>
                  Muito mais que uma viagem. Uma nova forma de viver a cidade.
                </h2>
                <p>
                  O WiTransfer nasceu com o objetivo de revolucionar a
                  mobilidade urbana, unindo tecnologia de ponta, motoristas de
                  excelência e uma preocupação constante com a segurança e o
                  conforto dos nossos utilizadores.
                </p>
                <p>
                  A nossa plataforma proporciona a simbiose perfeita entre quem
                  precisa de chegar rápido ao seu destino e profissionais
                  dedicados a oferecer a melhor experiência de condução
                  possível.
                </p>
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
              <h2>Como funciona?</h2>
              <p>
                Solicitar uma viagem com o WiTransfer é tão simples quanto
                contar até cinco.
              </p>
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
                  <h3>1. Registo Rápido e Seguro</h3>
                  <p>
                    Inicie a sua jornada criando uma conta em segundos. O nosso
                    processo de autenticação é simples, podendo até utilizar
                    biometria facial para um acesso ainda mais rápido e
                    protegido nas próximas vezes.
                  </p>
                  <ul className="zigzag-list">
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      Acesso imediato à plataforma
                    </li>
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      Opção de Login biométrico
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
                      alt="Passo 1 - Login"
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
                  <h3>2. Escolha a Categoria</h3>
                  <p>
                    Na página principal, selecione a categoria de viagem que
                    melhor se adequa às suas necessidades. Oferecemos opções
                    diversas para garantir que viaja sempre com o conforto e o
                    preço ideais para cada momento.
                  </p>
                  <ul className="zigzag-list">
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      Várias opções de categorias
                    </li>
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      Preços adaptados a si
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
                      alt="Passo 2 - Categoria"
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
                  <h3>3. Selecione o Destino</h3>
                  <p>
                    A nossa tecnologia de GPS integrada deteta o seu ponto de
                    partida. Basta inserir o seu destino desejado e confirmar o
                    trajeto no mapa, visualizando imediatamente a melhor rota
                    calculada.
                  </p>
                  <ul className="zigzag-list">
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      Deteção automática do local
                    </li>
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      Sugestões de rotas otimizadas
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
                      alt="Passo 3 - Destino"
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
                  <h3>4. Escolha a Viatura e Preço</h3>
                  <p>
                    Visualize as viaturas disponíveis, o tempo estimado de
                    chegada (ETA) e o valor fixo da viagem. Compare as opções e
                    selecione o carro perfeito, com total transparência sem
                    surpresas no final.
                  </p>
                  <ul className="zigzag-list">
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      Valores transparentes
                    </li>
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      Previsão exata de tempo
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
                      alt="Passo 4 - Viatura"
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
                  <h3>5. Confirmação e Notificação</h3>
                  <p>
                    Após solicitar, receberá uma notificação instantânea assim
                    que o motorista mais próximo aceitar a viagem. Acompanhe a
                    aproximação em tempo real e prepare-se para viajar com
                    segurança e conforto.
                  </p>
                  <ul className="zigzag-list">
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      Notificações em tempo real
                    </li>
                    <li>
                      <div className="list-icon">
                        <ChevronRight size={14} />
                      </div>{" "}
                      Acompanhamento no mapa
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
                      alt="Passo 5 - Notificação"
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
              <span className="section-badge">Parceiros</span>
              <h2>Torne-se um parceiro WiTransfer</h2>
              <p>
                Tem uma frota ou quer trabalhar connosco? Entre em contacto e
                descubra as vantagens exclusivas para o seu negócio.
              </p>
            </motion.div>

            <div className="partners-split">
              <motion.div
                className="partners-details"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <h3>Informações de Contacto</h3>
                <p className="partners-details-desc">
                  A nossa equipa está sempre pronta para o ajudar a escalar o
                  seu negócio de mobilidade urbana connosco.
                </p>

                <div className="contact-info-list">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <strong>Morada</strong>
                      <span>Luanda, Angola (Talatona)</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Phone size={22} />
                    </div>
                    <div>
                      <strong>Telefone</strong>
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
                      <strong>E-mail</strong>
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
                      <strong>Horário</strong>
                      <span>Segunda a Sexta, 08:00 - 18:00</span>
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
                    <label>Nome Completo / Empresa</label>
                    <input
                      type="text"
                      placeholder="Como devemos chamá-lo?"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>E-mail</label>
                      <input
                        type="email"
                        placeholder="O seu melhor e-mail"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Telefone</label>
                      <input
                        type="tel"
                        placeholder="+244..."
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Mensagem</label>
                    <textarea
                      rows={4}
                      placeholder="Conte-nos como podemos colaborar..."
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn">
                    Enviar Mensagem
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
                <h2>Leve o WiTransfer no seu bolso</h2>
                <p>
                  Acesso rápido, segurança garantida e os melhores motoristas à
                  distância de um clique. Descarregue a nossa aplicação agora e
                  viaje com conforto hoje mesmo.
                </p>

                <div className="download-action">
                  <a
                    href="/witransfer.apk"
                    download
                    className="btn btn-secondary"
                    style={{
                      background: "var(--color-white)",
                      color: "var(--color-primary)",
                      border: "none",
                    }}>
                    Baixar Aplicativo <Bot size={20} />
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
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="/images/logo.png" alt="WiTransfer" />
              </a>
              <p className="footer-tagline">
                A sua viagem, a nossa prioridade. Conectamos passageiros aos
                melhores motoristas da cidade com rapidez, segurança e o melhor
                preço.
              </p>
            </div>

            <div className="footer-links-group">
              <h4>Produto</h4>
              <ul>
                <li>
                  <a href="#features">Como Funciona</a>
                </li>
                <li>
                  <a href="#download">Download</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>Motoristas</h4>
              <ul>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    Seja Motorista
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    Requisitos
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>Empresa</h4>
              <ul>
                <li>
                  <a href="#about">Sobre Nós</a>
                </li>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    Contactos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} WiTransfer. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
