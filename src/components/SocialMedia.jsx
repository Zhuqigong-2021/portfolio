import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaCodepen } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/qigong-zhu-71628113b/"
          target="_blank"
        >
          <RiLinkedinFill />
        </a>
      </div>

      <div>
        <a href="https://github.com/Zhuqigong-2021/" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="https://codepen.io/qigong-zhu" target="_blank">
          <FaCodepen />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
