import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { register } from "../../../redux/actions/userAction";
import { useAppDispatch } from "../../../redux/store";

const Registation = () => {
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();

  const Name = useRef<HTMLInputElement>(null!);
  const Email = useRef<HTMLInputElement>(null!);
  const pass = useRef<HTMLInputElement>(null!);
  const Cpass = useRef<HTMLInputElement>(null!);
  const Image = useRef<HTMLInputElement>(null!);
  const handelSubmit = (e: any): void => {
    e.preventDefault();
    const email: string = Email.current.value;
    const password: string = pass.current.value;
    const confirmPassword: string = Cpass.current.value;
    const name: string = Name.current.value;
    const image: string = Image.current.value;

    if (password !== confirmPassword) {
      setMessage("Confirm Password doest Matched");
    } else {
      // createUsingEmail(mailE, passE, name );
      console.log(email, password, name, image);
      dispatch(
        register({
          name,
          email,
          password,
          image,
        })
      );
      // Email.current.value = '';
      // pass.current.value = '';
      // Cpass.current.value = '';
      // setMessage('');
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
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image Link</Form.Label>
              <Form.Control ref={Image} type="text" placeholder="Enter Image" />
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
          {/* <div className="row px-3 mt-4 mb-2 ">
            <div className="line"></div>{' '}
            <small className="or text-center">Or</small>
            <div className="line"></div>
          </div> */}
          {/* <div className="mb-4 d-flex px-3">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Registation;
