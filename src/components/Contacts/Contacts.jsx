import React, { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import emailjs from "@emailjs/browser";
import "./Contacts.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_o84bxkl",  
        "template_6zozmol",  
        form.current,
        "jwniokVu077ioURjn" 
      )
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
          form.current.reset();
          setTimeout(() => setSubmitted(false), 5000);
        },
        () => {
          alert("❌ Erreur lors de l'envoi. Réessayez !");
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contact_title" data-aos="fade-up">{t('contact.title')}</h1>

      <div className="contact_container">
        <div className="contact_info" data-aos="fade-right">
          <div className="info_item">
            <FaMapMarkerAlt className="contact_icon" />
            <div>
              <h3>{t('contact.address')}</h3>
              <p>{t('contact.addressLine1')}</p>
              <p>{t('contact.addressLine2')}</p>
              <p>{t('contact.addressLine3')}</p>
            </div>
          </div>

          <div className="info_item">
            <FaPhoneAlt className="contact_icon" />
            <div>
              <h3>{t('contact.phone')}</h3>
              <p>+243 991 888 245</p>
              <p>+243 832 753 531</p>
            </div>
          </div>

          <div className="info_item">
            <FaEnvelope className="contact_icon" />
            <div>
              <h3>{t('contact.email')}</h3>
              <p>contact.supersservices@gmail.com</p>
            </div>
          </div>

          <p className="contact_note">{t('contact.note')}</p>
        </div>

        <div className="contact_form" data-aos="fade-left">
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder={t('contact.form.name')}
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder={t('contact.form.email')}
              required
            />

            <input
              type="text"
              name="user_phone"
              placeholder={t('contact.form.phone')}
            />

            <textarea
              name="message"
              placeholder={t('contact.form.message')}
              rows="5"
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? t('contact.form.sending') : t('contact.form.send')}
            </button>

            {submitted && (
              <p className="success_message">{t('contact.form.success')}</p>
            )}
          </form>

          <a
            href="https://wa.me/243991888245?text=Bonjour%20Ets%20Supers%20Services,%20je%20souhaite%20obtenir%20un%20devis."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp_button"
          >
            <FaWhatsapp className="whatsapp_icon" />
            {t('contact.whatsapp')}
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/243991888245?text=Bonjour%20Ets%20Supers%20Services,%20je%20souhaite%20obtenir%20un%20devis."
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default Contact;
