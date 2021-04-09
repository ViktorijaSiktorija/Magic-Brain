import React from 'react';
import Tilt from 'react-tilt';
import './Logos.css';
import ai from './ai.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt-inner pa3">
                    <img style={{paddingTop: '0px', paddingRight: '50px', height: 150, width: 150}} alt='logo' src={ai}/>
            </Tilt>
        </div>
  );
}

export default Logo;