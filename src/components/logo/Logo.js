import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="tilt">
        <div className="pa3">
          <img style={{ paddingTop: '5px' }} src={brain} alt="brain_logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
