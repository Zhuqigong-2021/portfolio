import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './Navbar.scss';
import { useEffect, useRef } from 'react';

const Navbar = ({ language, setLanguage }) => {
  const [toggle, setToggle] = useState(false);
  const lan = useRef();
  const lanMobile = useRef();
  const navEn = ['home', 'about', 'work', 'skills', 'contact'];

  function judgeLanuage() {
    if (language === 'en') {
      setLanguage('fr');
      lan.current.innerHTML = 'EN';
      if (window.innerWidth < 900) lanMobile.current.innerHTML = 'EN';
    }

    if (language === 'fr') {
      setLanguage('en');
      lan.current.innerHTML = 'FR';
      if (window.innerWidth < 900) lanMobile.current.innerHTML = 'FR';
    }
  }

  return (
    <nav className="app__navbar">
      <div className="logo">
        <div>P</div>
        <span>hil</span>
      </div>
      <ul className="app__navbar-links">
        {language === 'en'
          ? ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div className="app__navbar-logo" />
                <a href={`#${item}`}>{item}</a>
              </li>
            ))
          : language === 'fr'
          ? ['accueil', 'à propos', 'oeuvre', 'stack', 'Me joindre'].map(
              (item, index) => (
                <li className="app__flex p-text" key={`link-${item}`}>
                  <div className="app__navbar-logo" />
                  <a href={`#${navEn[index]}`}>{item}</a>
                </li>
              )
            )
          : ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div className="app__navbar-logo" />
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
      </ul>

      <button
        ref={lan}
        className="btn__language"
        onClick={() => judgeLanuage()}
      >
        FR
      </button>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <button ref={lanMobile} onClick={judgeLanuage}>
                FR
              </button>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
