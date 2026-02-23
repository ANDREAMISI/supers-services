import React from "react";
import { useTranslation } from 'react-i18next';
import "./Services.css";
import { FaPrint, FaPaintRoller, FaBroom, FaUtensils } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";

function Services() {
  const { t } = useTranslation();

  const services = [
    { icon: FaPrint, titleKey: 'printing', delay: 100 },
    { icon: FaPaintRoller, titleKey: 'painting', delay: 200 },
    { icon: FaBroom, titleKey: 'cleaning', delay: 300 },
    { icon: FaUtensils, titleKey: 'catering', delay: 400 },
    { icon: BiNetworkChart, titleKey: 'other', delay: 500 }
  ];

  return (
    <div className="services" id="services">
      <h1 className="services_title" data-aos="fade-up">{t('services.title')}</h1>

      <div className="services_grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div className="service_card" key={index} data-aos="fade-up" data-aos-delay={service.delay}>
              <div className="service_icon">
                <Icon />
              </div>
              <h2>{t(`services.${service.titleKey}.title`)}</h2>
              <ul>
                {t(`services.${service.titleKey}.items`, { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
