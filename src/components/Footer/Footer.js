import React from "react";
import { useTranslation } from 'react-i18next';
import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_col" data-aos="fade-up">
          <h2 className="footer_logo">{t('footer.company')}</h2>
          <p>{t('footer.description')}</p>

          <div className="footer_legal">
            <p><strong>RCCM :</strong> {t('footer.rccm')}</p>
            <p><strong>ID NAT :</strong> {t('footer.nationalId')}</p>
            <p><strong>N° Impôt :</strong> {t('footer.taxNumber')}</p>
          </div>
        </div>

        <div className="footer_col" data-aos="fade-up" data-aos-delay="100">
          <h3>{t('footer.quickLinks')}</h3>
          <ul>
            <li><a href="#home">{t('header.home')}</a></li>
            <li><a href="#about">{t('header.about')}</a></li>
            <li><a href="#services">{t('header.services')}</a></li>
            <li><a href="#clients">{t('header.clients')}</a></li>
            <li><a href="#contact">{t('header.contact')}</a></li>
          </ul>
        </div>

        <div className="footer_col" data-aos="fade-up" data-aos-delay="200">
          <h3>{t('header.contact')}</h3>

          <p><FaMapMarkerAlt /> {t('contact.addressLine3')}</p>
          <p><FaPhoneAlt /> +243 991 888 245</p>
          <p><FaEnvelope /> contact.supersservices@gmail.com</p>

          <a
            href="https://wa.me/243991888245"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_whatsapp"
          >
            <FaWhatsapp /> {t('contact.whatsapp')}
          </a>
        </div>

        <div className="footer_col" data-aos="fade-up" data-aos-delay="300">
          <h3>{t('footer.followUs')}</h3>
          <p>{t('footer.followUsText')}</p>

          <div className="social_icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a
              href="https://wa.me/243991888245"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  );
}

export default Footer;