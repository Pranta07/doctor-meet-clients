import React from 'react';
import brand from './../../Assets/img/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-bc-color" >
      { window.location.pathname === "/dashboard/dashboarHome" ||
      window.location.pathname === "/dashboard/doctors" ||
      window.location.pathname === "/dashboard/admin" ||
      window.location.pathname === "/dashboard/favdoc"? <div></div>  :<footer>
        <section className="container text-white text-start">
          <div className=" row row-cols-1 row-cols-md-4 row-cols-lg-4 mx-auto pt-5">
            <div className="col">
              <img src={brand} alt="" className="img-fluid" />
              {/* <span className="fw-bold ps-2">Doctors Meet Up</span> */}
              <p className="mt-2">
                <small>
                  Doctors Meet Up provides progressive, and affordable
                  healthcare, accessible on mobile and online for everyone.
                </small>
              </p>
            </div>
            <div className="col">
              <span className="fw-bold">Company</span>
              <ul className="list mt-2">
                <li>About</li>
                <li>Reports</li>
                <li>Top doctors</li>
                <li>Donate Blood</li>
                <li>Covid Portal</li>
                <li>Apps</li>
              </ul>
            </div>
            <div className="col">
              <span className="fw-bold">District</span>
              <ul className="list mt-2">
                <li>Chittagong</li>
                <li>Dhaka</li>
                <li>Khulna</li>
                <li>Rajshahi</li>
                <li>Comilla</li>
              </ul>
            </div>
            <div className="col">
              <span className="fw-bold">Help</span>
              <ul className="list mt-2">
                <li>Help Center</li>
                <li>Contact support</li>
                <li>Instruction</li>
                <li>Emergency</li>
              </ul>
            </div>
          </div>
          <div className="media-icon footer-dot ">
            <h5>Follow us on</h5>
            <div className="icons">
              <i className="fab fa-facebook pe-2"></i>
              <i className="fab fa-instagram pe-2"></i>
              <i className="fab fa-twitter"></i>
            </div>
            <p className="text-center mb-0 pb-2">
              <small>
                All rights reserved ©Doctors Meet up,2022 | NERMX Developers
              </small>
            </p>
          </div>
        </section>
      </footer>}
    </div>
  );
};

export default Footer;
