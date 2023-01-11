import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './About.scss';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const AboutFr = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type =="abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        Je sais que <span> les bonnes applications</span>
        <br />
        sont synonymes <span>de bonnes affaires</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item "
              key={about.title.fr + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title.fr} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title.fr}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description.fr}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

//export default About;
export default AppWrap(
  MotionWrap(AboutFr, 'app__about'),
  'about',
  'app__whitebg'
);
