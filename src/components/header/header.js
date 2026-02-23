import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import logo from "../../assets/logo.png";
import "./header.css";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'clients', href: '#clients' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <div className="header_container" id="home">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo" data-aos="fade-right">
          <img src={logo} alt="Ets Supers Services Logo" />
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={item.key} data-aos="fade-down" data-aos-delay={index * 100}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {t(`header.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      <div className="home">
        <div className="overlay"></div>
        <div className="home_text" data-aos="fade-up">
          <h1>{t('home.title')}</h1>
          <h2><span>{t('home.subtitle1')}</span> {t('home.subtitle2')}</h2>
          <p>{t('home.description')}</p>
          <div className="home_buttons">
            <a href="#contact" className="btn_primary">
              {t('home.contactBtn')}
            </a>
            <a 
              href="https://wa.me/243991888245?text=Bonjour%20Ets%20Supers%20Services" 
              className="btn_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;