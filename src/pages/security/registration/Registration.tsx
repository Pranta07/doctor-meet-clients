import React, { useRef, useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import {
  NavLink,
  useNavigate,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { register } from "../../../redux/actions/userAction";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });

const Registation = () => {
  const { user }: any = useAppSelector((state) => state);
  useEffect(() => { }, [user]);
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const Name = useRef<HTMLInputElement>(null!);
  const Email = useRef<HTMLInputElement>(null!);
  const pass = useRef<HTMLInputElement>(null!);
  const Cpass = useRef<HTMLInputElement>(null!);
  const handelSubmit = (e: any): void => {
    e.preventDefault();
    const email: string = Email.current.value;
    const password: string = pass.current.value;
    const confirmPassword: string = Cpass.current.value;
    const name: string = Name.current.value;

    if (password !== confirmPassword) {
      setMessage("Confirm Password doest Matched");
    } else {
      dispatch(
        register({
          name,
          email,
          password,
        })
      );
      if (user.success) {
        navigate("/")
      }
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
              <div className="col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  ref={Name}
                />
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={Email}
                type="email"
                placeholder="Enter email"
              />
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
              {" "}
              <small className="font-weight-bold">
                Already have an account?{" "}
                <span className="text-danger ">
                  <NavLink to="/login">Login</NavLink>
                </span>
              </small>{" "}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registation;
