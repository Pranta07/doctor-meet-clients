import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../redux/store';
import './DiagnosticAppointmentForm.css';
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({

  backgroundColor: theme.palette.background.default,
}))
const DiagnosticAppointmentForm = () => {
    const params = useParams();
    const [category, setCategory] = useState({});

    const navigate = useNavigate();
    const [data, setData] = useState({})
    const { user } = useAppSelector((state) => state.user);
    useEffect(() => {
        fetch(`https://floating-basin-02241.herokuapp.com/${params.category}`)
            .then(res => res.json())
            .then(data => {

                for (const d of data) {

                    if (d._id === params.id) {
                        // setCategory(d);

                        setCategory(d);

                    }
                }
            })
    }, [params.id, params.category])
    // console.log(category);
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
            data.name = user.name;
            data.email = user.email;
        
        data.selectedDiagnosis = category;
        data.paymentStatus = "unpaid";
        console.log(data)
        fetch(`https://floating-basin-02241.herokuapp.com/bookedDiagnosis`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Appointment is booked successfully. Now go to dashboard to pay");
                    navigate("/dashboard/user/my-diagnosises");
                }
            })
    }
    return (
        <RootStyle className='diagnostic-form-container mt-5'>
            <Container>
                <Row>
                    <Form onSubmit={handleOnSubmit}>
                        <Row className="mb-3">

                            <Form.Group as={Col} controlId="formGridName">

                                <Form.Control onChange={handleOnChange} type="text" placeholder="Enter Your Name" name="name" value={user?.name} disabled />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">

                                <Form.Control onChange={handleOnChange} type="email" name="email" placeholder="Enter Your Email" value={user?.email} disabled />
                            </Form.Group>
                        </Row>


                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">

                            <Form.Control onChange={handleOnChange} placeholder="Full Address" name="address" />
                        </Form.Group>


                        <Row className="mb-3">



                            <Form.Group as={Col} controlId="formGridPhoneNumber">

                                <Form.Control onChange={handleOnChange} type="text" name="phoneNumber" placeholder='Your Phone Number' required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDate">

                                <Form.Control onChange={handleOnChange} type="date" name="bookingDate" placeholder='Select a Date' required />
                            </Form.Group>


                        </Row>

                        <fieldset>
                            <legend>Emergeny Details</legend>
                            <Row>
                                <Form.Group as={Col} lg={6} md={6} sm={12} xs={12} controlId="formGridContactPerson">

                                    <Form.Control onChange={handleOnChange} type="text" name="contactPerson" placeholder='Contact Person' />
                                </Form.Group>
                                <Form.Group as={Col} lg={3} md={3} sm={6} xs={6} controlId="formGridAge">

                                    <Form.Control onChange={handleOnChange} type="text" name="age" placeholder='Enter Your Age' required />
                                </Form.Group>
                                <Form.Group as={Col} lg={3} md={3} sm={6} xs={6} controlId="formGridBlooadGroup">

                                    <Form.Select defaultValue="Blood Group" name="bloodGroup" onChange={handleOnChange} required>
                                        <option>Select Your Blood Group</option>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                    </Form.Select>
                                </Form.Group>

                            </Row>
                            <Row className="mt-4">
                                <Form.Group as={Col}>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Willing to donate blood"
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Male"
                                                name="gender"
                                                type={type}
                                                id={`inline-${type}-1`}
                                                onChange={handleOnChange}
                                            />
                                            <Form.Check
                                                inline
                                                label="Female"
                                                name="gender"
                                                type={type}
                                                id={`inline-${type}-2`}
                                                onChange={handleOnChange}
                                            />
                                            <Form.Check
                                                inline
                                                name="gender"
                                                label="Others"
                                                type={type}
                                                id={`inline-${type}-3`}
                                                onChange={handleOnChange}
                                            />
                                        </div>
                                    ))}
                                </Form.Group>

                            </Row>
                        </fieldset>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                            <Form.Control onChange={handleOnChange} as="textarea" rows={3} placeholder="Special Massage" name="specialMassage" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>


        </RootStyle>
    );
};

export default DiagnosticAppointmentForm;