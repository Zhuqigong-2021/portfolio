import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';

const Test = () => {
  return <div>This is Test</div>;
};

export default AppWrap(MotionWrap(Test, 'app__test'), 'test', 'app__primarybg');
