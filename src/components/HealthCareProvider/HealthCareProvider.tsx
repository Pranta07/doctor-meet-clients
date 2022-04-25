import React from 'react';
import { Container } from 'react-bootstrap';
import HealthCareProviderImg from "../../Assets/HealthCareProvider/HealthCareProvider.png";
import './HealthCareProvider.css';

const HealthCareProvider = () => {
  return (
    <div className="health-care-provider-section">
      <Container>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-12 img-container mb-3">
            <img className='img-fluid' src={HealthCareProviderImg} alt="" />
          </div>
          <div className="col-lg-6 col-12 text-start ps-5">
            <div className="d-flex flex-column">
              <h3>Leading healthcare</h3>
              <h3>providers</h3>
              <div className="hr-line my-3 text-justify"></div>
              <p className="health-care-provider-description">
                Doctor Meet provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </p>
            </div>
            <button
              type="button"
              className="btn learn-more-button btn-outline-primary rounded-pill px-4"
            >
              Learn more
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HealthCareProvider;
