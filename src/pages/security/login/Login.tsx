import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../../firebase/useFirebase/useFirebase";
import "./Login.css";

const Login = () => {
  let { signUsingGoogle, signUsingEmail } = useFirebase();
  const mail = useRef<HTMLInputElement>(null!);
  const pass = useRef<HTMLInputElement>(null!);
  const handelSubmit = (e: any): void => {
    e.preventDefault();
    const mailE: string = mail.current.value;
    const passE: string = pass.current.value;
    signUsingEmail(mailE, passE);
    // console.log(mailE,passE);
    mail.current.value = "";
    pass.current.value = "";
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="col-lg-6 my-auto">
          <Form className="container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control ref={mail} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={pass} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex 
    justify-content-between"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember me" />{" "}
              <a href=""> Forgot password? </a>
            </Form.Group>
            <Button onClick={handelSubmit} variant="primary px-4" type="submit">
              Login
            </Button>
            <div className="row my-3">
              {" "}
              <small className="font-weight-bold">
                Don't have an account?{" "}
                <span className="text-danger ">
                  <NavLink to="/signUp">Register</NavLink>
                </span>
              </small>{" "}
            </div>
          </Form>
          <div className="row px-3 mt-4 mb-2 ">
            <div className="line"></div>{" "}
            <small className="or text-center">Or</small>
            <div className="line"></div>
          </div>
          <div className="mb-4 d-flex px-3">
            <h6 className="mb-0 d-flex align-items-center mr-4">
              Sign in with:{" "}
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

export default Login;
