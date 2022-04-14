import React from 'react';
import Flip from 'react-reveal/Flip';
import './TextAnimation.css';
const TextAnimation = () => {
    

    return (
        <div>
        <Flip left>
          <h1 className="font-open-sens fw-bold">Virtual Healthcare For You</h1>
          <p className='font-lora my-4'>Doctor-meet provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
<button className='btn-consult-banner font-anek-bangla'>Consult today</button>
        </Flip>
      </div>
    );
};

export default TextAnimation;