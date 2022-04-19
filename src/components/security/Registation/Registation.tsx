import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../firebase/useFirebase/useFirebase';
// import useAuth from "../../Hooks/useAuth";

const Registation = () => {
  let { createUsingEmail, signUsingGoogle, setMessage, message } =
    useFirebase();

  const FirstName = useRef<HTMLInputElement>(null!);
  const LastName = useRef<HTMLInputElement>(null!);
  const mail = useRef<HTMLInputElement>(null!);
  const pass = useRef<HTMLInputElement>(null!);
  const Cpass = useRef<HTMLInputElement>(null!);
  const handelSubmit = (e: any): void => {
    e.preventDefault();
    const mailE: string = mail.current.value;
    const passE: string = pass.current.value;
    const passC: string = Cpass.current.value;
    const fName: string = FirstName.current.value;
    const LName: string = LastName.current.value;

    if (passE !== passC) {
      setMessage('Confirm Password doest Matched');
    } else {
      createUsingEmail(mailE, passE, fName, LName);
      console.log(mailE, passE, fName, LName);
      mail.current.value = '';
      pass.current.value = '';
      Cpass.current.value = '';
      FirstName.current.value = '';
      LastName.current.value = '';
      setMessage('');
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?b=1&k=20&m=1281150061&s=612x612&w=0&h=Wlus0AvwwVksa9X5w1RUyp1pu8_vbpVOdw25FLBEG_s="
            alt=""
          />
        </div>
        <div className="col-lg-6 my-auto">
          <Form className="container">
            <div className="form-row row my-3">
              <Form.Label>Name</Form.Label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  ref={FirstName}
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  ref={LastName}
                />
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control ref={mail} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={pass} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                ref={Cpass}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            {message ? <p className="text-danger"> {message} </p> : []}
            <Form.Group
              className="mb-3 d-flex 
    justify-content-between"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button onClick={handelSubmit} variant="primary px-4" type="submit">
              SignUp
            </Button>
            <div className="row my-3">
              {' '}
              <small className="font-weight-bold">
                Already have an account?{' '}
                <span className="text-danger ">
                  <NavLink to="/login">Login</NavLink>
                </span>
              </small>{' '}
            </div>
          </Form>
          <div className="row px-3 mt-4 mb-2 ">
            <div className="line"></div>{' '}
            <small className="or text-center">Or</small>
            <div className="line"></div>
          </div>
          <div className="mb-4 d-flex px-3">
            <h6 className="mb-0 d-flex align-items-center mr-4">
              Sign in with:{' '}
            </h6>
            <div className="d-flex my-2">
              <button className="btn p-0">
                <img
                  src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png"
                  alt="facebook"
                  width="40px"
                  height="40px"
                />
              </button>
              <button onClick={signUsingGoogle} className="btn p-0">
                <img
                  src="https://i.ibb.co/Bn4NZDd/pngegg.png"
                  alt="google"
                  width="26px"
                  height="26px"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
