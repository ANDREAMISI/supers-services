import React from "react";
import { useTranslation } from 'react-i18next';
import "./Clients.css";
import { FaBuilding, FaUniversity, FaHandsHelping } from "react-icons/fa";
import { MdPublic } from "react-icons/md";

function Clients() {
  const { t } = useTranslation();

  const clients = [
    { icon: MdPublic, titleKey: 'un', delay: 200 },
    { icon: FaHandsHelping, titleKey: 'ngo', delay: 300 },
    { icon: FaBuilding, titleKey: 'companies', delay: 400 },
    { icon: FaUniversity, titleKey: 'schools', delay: 500 }
  ];

  return (
    <div className="clients" id="clients">
      <h1 className="clients_title" data-aos="fade-up">{t('clients.title')}</h1>

      <p className="clients_intro" data-aos="fade-up" data-aos-delay="100">
        <span dangerouslySetInnerHTML={{ __html: t('clients.intro') }} />
      </p>

      <div className="clients_grid">
        {clients.map((client, index) => {
          const Icon = client.icon;
          return (
            <div className="client_card" key={index} data-aos="fade-up" data-aos-delay={client.delay}>
              <Icon className="client_icon" />
              <h2>{t(`clients.${client.titleKey}.title`)}</h2>
              <p dangerouslySetInnerHTML={{ __html: t(`clients.${client.titleKey}.description`) }} />
            </div>
          );
        })}
      </div>

      <div className="clients_conclusion" data-aos="fade-up">
        <p>{t('clients.conclusion')}</p>
      </div>
    </div>
  );
}

export default Clients;
