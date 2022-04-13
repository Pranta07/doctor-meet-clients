import React from 'react';
import Flip from 'react-reveal/Flip';
import './TextAnimation.css';
const TextAnimation = () => {
    

    return (
        <div>
        <Flip left>
          <h1 className="font-tamil">Virtual Healthcare For You</h1>
          <p className='font-roboto'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
<button className='btn-consult font-anek-bangla'>Consult today</button>
        </Flip>
      </div>
    );
};

export default TextAnimation;