import React from 'react';
import Roll from 'react-reveal/Roll';
import './TextZoom.css';

const TextZoom = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
        <Roll left>
          <h1 className='font-oswald'>Free Consultation for Covid Patients</h1>
          <button className='btn-slide-contact'>Contact Now</button>
        </Roll>
      </div>
    );
};

export default TextZoom;