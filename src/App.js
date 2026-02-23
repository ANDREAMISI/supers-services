import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Contact from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import CookieConsent from './components/CookieConsent/CookieConsent';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });

    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="app">
      <div className="fixed-controls">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <LanguageSelector />
      </div>
      <ScrollToTop />
      <CookieConsent />
      <Header />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
