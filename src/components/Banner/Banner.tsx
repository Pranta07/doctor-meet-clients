import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import bannerImage1 from '../../Assets/Carousel/undraw_community.svg'
import bannerImage2 from '../../Assets/Carousel/undraw_doctors.svg'
import bannerImage3 from '../../Assets/Carousel/undraw_monitoring.svg'
import bannerImage4 from '../../Assets/Carousel/undraw_Online_information.svg'
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel fade={true} controls={false} indicators={false}>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 carousel-img"
                        style={{ height: "400px" }}
                        src={bannerImage1}
                        alt="First slide"
                    />
                    <div className="carousel-img-transparent-banner"></div>

                    <Carousel.Caption>

                        <p className='carousel-caption-para'>We have a team of specialists</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 carousel-img"
                        style={{ height: "400px" }}
                        src={bannerImage2}
                        alt="Second slide"
                    />
                    <div className="carousel-img-transparent-banner"></div>
                    <Carousel.Caption>
                        <p className='carousel-caption-para'>A lot of guidence</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 carousel-img"
                        style={{ height: "400px" }}
                        src={bannerImage3}
                        alt="Third slide"
                    />
                    <div className="carousel-img-transparent-banner"
                        style={{ backgroundColor: "rgba(131, 149, 167,0.5)" }}
                    ></div>
                    <Carousel.Caption>

                        <p className='carousel-caption-para'>We are your friends</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 carousel-img"
                        style={{ height: "400px" }}
                        src={bannerImage4}
                        alt="Third slide"
                    />
                    <div className="carousel-img-transparent-banner"></div>
                    <Carousel.Caption>
                        <p className='carousel-caption-para'>You can always monitor your records</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;