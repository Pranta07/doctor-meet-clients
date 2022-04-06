import React from 'react';
import emailjs from "emailjs-com";
import { Container } from "react-bootstrap";
import ContactUsImg from '../../Assets/ContactUs/ContactUs.jpg';

const ContactUs = () => {
    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_429c7ul', 'template_dr9cfyd', e.target, 'M9AHQR1dWtEHnJG3q')
            .then((result) => {
                if (result.text === "OK") {
                    alert("Your Message Was Successfully Sent. Thank You !");
                    console.log(result.text);
                }

            }, (error) => {
                console.log(error.text);

            });
        e.target.reset();
    };
    return (
        <div className='ContactUs-section my-5'>
            <div>
                
            </div>
            <Container>
                <h1 className='text-center fw-bold fs-4' >Please Feel Free To Contact Us</h1>
                <form onSubmit={sendEmail}>
                    <div className="row d-flex flex-sm-row-reverse">
                        <div className="col-lg-6">
                            <div className="row pt-5 mx-auto">
                                <div className="col-10 form-group mx-auto">
                                    <input className='form-control' type="text" name="name" placeholder='Name' id="" />
                                </div>
                                <div className="col-10 form-group pt-3 mx-auto">
                                    <input className='form-control' type="text" name="email" placeholder='Email Address' id="" />
                                </div>
                                <div className="col-10 form-group pt-3 mx-auto">
                                    <input className='form-control' type="text" name="subject" placeholder='Subject' id="" />

                                </div>
                                <div className="col-10 form-group pt-3 mx-auto">
                                    <textarea placeholder='Your Message' className='form-control' name="message" id="" cols={30} rows={8}></textarea>

                                </div>
                                <div className="col-12  pt-3 text-center">
                                    <input className="btn btn-info bg-primary text-light fw-bold" type="submit" value="Send Message"></input>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className='img-fluid' src={ContactUsImg} alt="" />

                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default ContactUs;