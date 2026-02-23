import React from "react";
import { useTranslation } from 'react-i18next';
import "./About.css";
import aboutImage from "../../assets/aboutImage.jpg";

function About(){
    const { t } = useTranslation();
    
    return(
        <div className="about" id="about">
            <div className="about_picture" data-aos="fade-right">
                <img src={aboutImage} alt={t('about.title')} />
            </div>
            <div className="about_text" data-aos="fade-left">
                <h1>{t('about.title')}</h1>
                
                <h2>{t('about.creation')}</h2>
                <p>{t('about.creationDesc1')}</p>
                <p>{t('about.creationDesc2')}</p>
                <ul>
                    <li>{t('about.rccm')}</li>
                    <li>{t('about.taxNumber')}</li>
                    <li>{t('about.nationalId')}</li>
                </ul>
                
                <h2>{t('about.objective')}</h2>
                <p>{t('about.objectiveDesc')}</p>
                <ul>
                    <li>{t('about.services.visualCom')}</li>
                    <li>{t('about.services.printing')}</li>
                    <li>{t('about.services.decoration')}</li>
                    <li>{t('about.services.general')}</li>
                </ul>
                
                <h2>{t('about.vision')}</h2>
                <p>{t('about.visionDesc')}</p>
                <ul>
                    <li>{t('about.visionPoints.quality')}</li>
                    <li>{t('about.visionPoints.prices')}</li>
                    <li>{t('about.visionPoints.delays')}</li>
                </ul>
            </div>
        </div>
    )
}

export default About;
