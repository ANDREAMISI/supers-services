import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="cookie-consent">
      <p>
        Nous utilisons des cookies pour améliorer votre expérience sur notre site.
        En continuant, vous acceptez notre utilisation des cookies.
      </p>
      <button onClick={acceptCookies}>Accepter</button>
    </div>
  );
}

export default CookieConsent;
