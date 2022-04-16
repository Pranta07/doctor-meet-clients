import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import TextAnimation from '../HomeBanner/HomeBannerAnimations/TextAnimation';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel fade={true} controls={true} indicators={false}>
                <Carousel.Item interval={3000}>
                    
                    <div className="d-flex justify-content-between align-items-center container">
                        <div className="w-50">
                        <TextAnimation></TextAnimation>
                        </div>
                       <div className='w-50'>
                       
                       <img
                        className="d-block mx-auto img-fluid carousel-img"
                        style={{ height: "400px" }}
                        src="https://i.ibb.co/gP4vTSD/handdrawn-vector-60.jpg"
                        alt="First slide"
                    />
                           </div> 
                    
                    </div>

                </Carousel.Item>
                <Carousel.Item interval={3000}>
                   
                <div className="d-flex justify-content-between align-items-center container">
                        <div className="w-50">
                        <h1 className="text-start font-open-sens">Fight <br /> <span style={{color:"#e3376e"}} > Covid-19 </span> </h1>
                        <h4 className="text-start font-lora my-5">From 2020 we start a mission to provide free medical consultation to those who are affected with Covid-19 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ducimus!</h4>
                        <button className="btn-consult-banner">Contact Now</button>

                        </div>
                       <div className='w-50'>
                      
                       <img
                        className="d-block mx-auto img-fluid carousel-img"
                        style={{ height: "400px" }}
                        src="https://i.ibb.co/Wg8LFP0/istockphoto-1215660193-170667a-removebg-preview.png"
                        alt="second slide"
                    />
                           </div> 
                    
                    </div>
                
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <div className="d-flex justify-content-between align-items-center container">
                        <div className='w-50'>
                            <h1 className="text-start font-open-sens">Emergency <br /> <span style={{color:"#e3376e"}} > Consultant </span></h1>
                            <h4 className="text-start font-lora my-5 ">We Provide An Emergency Health Consultant Within 1 Hour to Our Premium Member</h4>
                            <button className="btn-consult-banner">Get Premium Membership</button>
                        </div>
                       
                       
                       <div className="w-50">
 <img
                        className="d-block mx-auto img-fluid carousel-img"
                        style={{ height: "400px" }}
                        src="https://i.ibb.co/ZzsNLrc/4162622-1-removebg-preview.png"
                        alt="third slide"
                    />
                        </div>
                      
                
                
                    </div>
                    
                </Carousel.Item>
               
            </Carousel>
        </div>
    );
};

export default Banner;
