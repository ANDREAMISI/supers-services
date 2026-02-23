import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import './LanguageSelector.css';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'ln', name: 'Lingala' },
    { code: 'sw', name: 'Kiswahili' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="language-selector">
      <FaGlobe className="globe-icon" />
      <select 
        value={i18n.language} 
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label="Language selector"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;