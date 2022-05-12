import React from 'react';
import { Carousel } from 'react-bootstrap';
import './DiagnosticCenterBanner.css';
const DiagnosticCenterBanner = () => {
    return (
        <div className='diagnostic-banner-container'>
            <Carousel fade indicators={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 diagnostic-banner-img"
      src="https://images.pexels.com/photos/7089017/pexels-photo-7089017.jpeg"
      alt="First slide"

    />
    <Carousel.Caption>
      <h3 className='diagnostic-carousel-title'>Advance Medical Equipments</h3>
      <p className='diagnostic-carousel-para'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center">
      <img
      className="d-block w-50 diagnostic-banner-img"
      src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg"
      alt="Second slide"
    />
    <img
      className="d-block w-50 diagnostic-banner-img"
      src="https://images.pexels.com/photos/4226925/pexels-photo-4226925.jpeg"
      alt="Second slide 2"
    />
      </div>
    

    <Carousel.Caption>
      <h3 className='diagnostic-carousel-title'>Fast Report Delivery</h3>
      <p className='diagnostic-carousel-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 diagnostic-banner-img"
      src="https://images.pexels.com/photos/3825541/pexels-photo-3825541.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='diagnostic-carousel-title'>Enriched Labratory</h3>
      <p className='diagnostic-carousel-para'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default DiagnosticCenterBanner;