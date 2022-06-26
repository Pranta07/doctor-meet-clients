import React, { useEffect, useState } from 'react';
import {  Card, Col, Form, Row } from 'react-bootstrap';
import {  useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import Page from '../Page';
import './style/style.css';


const GetAppointmentForm = () => {
    const { user } = useAppSelector((state) => state.user);
    const params = useParams();
const navigate=useNavigate();
    const [selectedDoctor, setSelectedDoctor] = useState({});
    const [data, setData] = useState({});
    useEffect(() => {
        //Here a specific doctor has to be fetched using params.id
        fetch("https://floating-basin-02241.herokuapp.com/doctors")
            .then(res => res.json())
            .then(data => {
                for (const d of data) {
                    if (d._id === params.id) {
                        setSelectedDoctor(d);
                    }
                }
            })
    }, [params])

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
    }
    const submitTheFormOfPatientsInfo = (e) => {
        e.preventDefault();
        const patientInfo = { patientName: user?.name, patientEmail: user?.email, ...data, doctorInfo: selectedDoctor, status: "unpaid",doctorEmail:selectedDoctor.email};
        
        fetch(`https://floating-basin-02241.herokuapp.com/allAppointments`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(patientInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Appointment is Booked Successfully!");
                    navigate("/dashboard/user/my-appointments");
                }
            })

        // naviagte(`/payAppointmentFee/${selectedDoctor?.id}`)
    }
     console.log(selectedDoctor);
    return (
        <Page title="Get Appointments">
            <div className="book-appointment-form-container">
                <h1 className='text-center fw-bold' style={{fontFamily:"'Roboto', sans-serif"}}>Appointment Form</h1>
                <div className='appointment-doctor-info-card'>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={selectedDoctor.img} />
  <hr className="mx-auto w-50" style={{border:"1px solid black"}}/>
  <Card.Body>
    
    <Card.Text>
      <h2 className='appointment-doctor-info'>Dr.{selectedDoctor.name}</h2>
      <h3 className='appointment-doctor-info'>{selectedDoctor.specialist}</h3>
      <h3 className='appointment-doctor-info'>{selectedDoctor.email}</h3>
      <h3 className='appointment-doctor-info'>{selectedDoctor.phone}</h3>
      <h3 className='appointment-doctor-info'>{selectedDoctor.website}</h3>
    </Card.Text>
  </Card.Body>
</Card>
                </div>

                <Form className="book-appointment-form" onSubmit={submitTheFormOfPatientsInfo}>


                    <Form.Group className="d-flex justify-content-between align-items-center mt-4">
                        <Form.Label>Patient Name</Form.Label>
                        <Form.Control type="text" disabled placeholder={user?.name} />
                    </Form.Group>

                    <Form.Group className="d-flex justify-content-between align-items-center mt-4">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Mobile Number" name="mobileNumber" onChange={handleOnChange} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="d-flex justify-content-between align-items-center mt-4">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Age" name="age" onChange={handleOnChange} />
                        </Form.Group>

                        <Form.Group as={Col} className="d-flex justify-content-between align-items-center mt-4">
                            <Form.Label></Form.Label>
                            <Form.Select aria-label="Default select example" name="bloodGroup" onChange={handleOnChange} required>
                                <option>Select Your Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group as={Col} className="d-flex justify-content-between align-items-center mt-4">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Date" name="date" onChange={handleOnChange} />
                        </Form.Group>

                        <Form.Group as={Col} className="d-flex justify-content-between align-items-center mt-4">
                            <Form.Select name="timeSlot" onChange={handleOnChange}>
                                <option>Select a Timeslot</option>
                                <option value={selectedDoctor.timeSlot1}>{selectedDoctor.timeSlot1}</option>
                                <option value={selectedDoctor.timeSlot2}>{selectedDoctor.timeSlot2}</option>
                                <option value={selectedDoctor.timeSlot3}>{selectedDoctor.timeSlot3}</option>


                            </Form.Select>
                        </Form.Group>

                    </Row>




                    <Row mb={3}>
                        <Form.Group as={Col} className="d-flex justify-content-between align-items-center">
                            <Form.Label>Gender</Form.Label>
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
                        <Form.Group className="" as={Col}>
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupFile01">Attach File</label>
                                <input type="file" className="form-control" id="inputGroupFile01" multiple onChange={handleOnChange} name="file"/>
                            </div>
                        </Form.Group>

                    </Row>



                    <Form.Group className="d-flex justify-content-between align-items-center mt-4">
                        <Form.Label>Describe Your Problems</Form.Label>

                        <Form.Control as="textarea" rows={3} name="healthIssues" onChange={handleOnChange} placeholder="Present Health Condition" />
                    </Form.Group>

                    <button className="btn-appointment-book" type="submit" >
                        Book
                    </button>
                </Form>
            </div>
        </Page>
    );
};

export default GetAppointmentForm;

