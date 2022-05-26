import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSnackbar } from "notistack";

import {
  NavLink,
  useLocation,
  useNavigate,
  unstable_HistoryRouter as HistoryRouter,
  Link,
} from "react-router-dom";
import { clearErrors, login } from "../../../redux/actions/userAction";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import "./Login.css";

import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });

const Login = () => {
  const { user }: any = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  // console.log(user.success)
  const { enqueueSnackbar } = useSnackbar();

  // console.log(user)
  useEffect(() => { }, [user]);
  const navigate = useNavigate();
  const mail = useRef<HTMLInputElement>(null!);
  const pass = useRef<HTMLInputElement>(null!);
  const handelSubmit = (e: any): void => {
    e.preventDefault();
    const email: string = mail.current.value;
    const password: string = pass.current.value;
    // signUsingEmail(mailE, passE);
    dispatch(login(email, password));
    // console.log(user)
    if (user.error) {
      //@ts-ignore
      enqueueSnackbar(user.error);
      dispatch(clearErrors())
      // navigate("/");
    } else if (user?.success) {
      dispatch(clearErrors())
      enqueueSnackbar("Login success.");
      navigate("/");
    }
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

              <Link to="/password/forgot"> Forgot password? </Link>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
