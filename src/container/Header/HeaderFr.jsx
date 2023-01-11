import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowDownShort } from 'react-icons/bs';
import TypeWriterEffect from 'react-typewriter-effect';

import { AppWrap, MotionWrap, HomeWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const HeaderFr = () => (
  <div className="app__header app__flex  ">
    <div className="app__greeting">
      <div className="app__fr">
        <motion.p initial={{ x: -100 }} animate={{ x: 0 }}>
          Bienvenu sur mon portfolio
        </motion.p>
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-un voyage dans
          mon monde de développeurs
        </motion.span>
      </div>
      <div className="app__intro">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Mon nom est Zhu Qigong .Pour votre facilité, , n'hésitez pas à
          m'appeler Phil pour faire court . Je vien de Montréal .
        </motion.p>

        <TypeWriterEffect
          textStyle={{
            // fontFamily: 'sansif',
            color: '#313bac',
            fontWeight: 600,
            fontSize: '15px',
            marginTop: '1rem',
          }}
          startDelay={2000}
          cursorColor="#3F3D56"
          hideCursorAfterText="true"
          multiText={[
            'Je suis Trilingue . . .',
            'Je suis Polyvalent . . .',
            'Je peux faire du Dévelopement Frontend. . . ',
            'Je peux aussi faire du Dévelopement Backend .',
          ]}
          multiTextDelay={1500}
          typeSpeed={40}
        />
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        <a href="#about">
          Savoir plus <BsArrowDownShort className="arrow__down" />
        </a>
      </motion.button>
      <motion.div
        className="circles__group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="circle__i">
          <svg viewBox="0 0 40 40" className="circular-chart">
            <path
              className="circle-bg"
              stroke=" #fdba74"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="circle"
              stroke=" #f97316"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 0.72 }}
              transition={{ delay: 2, duration: 2 }}
              strokeDasharray="75, 100"
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text className="content" x="11" y="20">
              7
            </text>
            <text className="sub__content" x="16" y="20">
              .20
            </text>
          </svg>
          ACCESSIBILITÉ
        </div>
        <div className="circle__i">
          <svg viewBox="0 0 40 40" className="circular-chart">
            <path
              className="circle-bg"
              stroke="#fca5a5"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="circle"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 0.75 }}
              transition={{ delay: 2, duration: 2 }}
              stroke="#ef4444"
              strokeDasharray="75, 100"
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text className="content" x="11" y="20">
              7
            </text>
            <text className="sub__content" x="16" y="20">
              .25
            </text>
          </svg>
          CONTENU
        </div>
        <div className="circle__i">
          <svg viewBox="0 0 40 40" className="circular-chart">
            <path
              className="circle-bg"
              stroke="#5eead4"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="circle"
              stroke="#14b8a6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 0.79 }}
              transition={{ delay: 2, duration: 2 }}
              strokeDasharray="75, 100"
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text className="content" x="12" y="20">
              7
            </text>
            <text className="sub__content" x="16" y="20">
              .34
            </text>
          </svg>
          PERFORMANCE
        </div>
      </motion.div>
    </div>
  </div>
);

export default HomeWrap(HeaderFr, 'home', 'app__primarybg');
// export default HomeWrap(
//   MotionWrap(Header, 'app__header'),
//   'home',
//   'app__primarybg'
// );
