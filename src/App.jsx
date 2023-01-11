import React, { useState } from 'react';
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  AboutFr,
  FooterFr,
  HeaderFr,
  SkillsFr,
  TestimonialFr,
  WorkFr,
} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  const [language, setLanguage] = useState('en');
  return (
    <div className="app ">
      <Navbar language={language} setLanguage={setLanguage} />
      {language === 'en' ? <Header /> : <HeaderFr />}
      {language === 'en' ? <About /> : <AboutFr />}
      {language === 'en' ? <Work /> : <WorkFr />}
      {language === 'en' ? <Skills /> : <SkillsFr />}
      {language === 'en' ? <Testimonial /> : <TestimonialFr />}
      {language === 'en' ? (
        <Footer language={language} />
      ) : (
        <FooterFr language={language} />
      )}
    </div>
  );
};

export default App;
