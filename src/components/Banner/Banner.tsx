import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import bannerImage1 from '../../Assets/Carousel/undraw_community.svg'
// import bannerImage2 from '../../Assets/Carousel/undraw_doctors.svg'
// import bannerImage3 from '../../Assets/Carousel/undraw_monitoring.svg'
// import bannerImage4 from '../../Assets/Carousel/undraw_Online_information.svg'
import TextAnimation from '../HomeBanner/HomeBannerAnimations/TextAnimation';
import TextZoom from './TextZoom'
import './Banner.css';
import SlideTextAnimation from './SlideTextAnimation/SlideTextAnimation';
const Banner = () => {
    return (
        <div>
            <Carousel fade={true} controls={true} indicators={false}>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 carousel-img"
                        style={{ height: "400px" }}
                        src="https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg"
                        alt="First slide"
                    />
                    <div className="carousel-img-transparent-banner"></div>

                    <Carousel.Caption>
                        <div className="d-flex">
                            <div className="w-50 text-start">
                            <TextAnimation></TextAnimation>
                            </div>
                        
                      
                        </div>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 carousel-img"
                        style={{ height: "400px" }}
                        src="https://images.pexels.com/photos/4226764/pexels-photo-4226764.jpeg"
                        alt="Second slide"
                    />
                    <div className="carousel-img-transparent-banner"></div>
                    <Carousel.Caption>
                        <SlideTextAnimation></SlideTextAnimation>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 carousel-img"
                        style={{ height: "400px" }}
                        src="https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg"
                        alt="Third slide"
                    />
                    <div className="carousel-img-transparent-banner"
                        style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}
                    ></div>
                    <Carousel.Caption>

                        <TextZoom></TextZoom>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
        </div>
    );
};

export default Banner;