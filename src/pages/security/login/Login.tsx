import React, { useEffect, useRef } from "react";
import { useSnackbar } from "notistack";
import {
  NavLink,
  useLocation,
  useNavigate,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import "./Login.css";
import { clearErrors, login } from "../../../redux/actions/userAction";
import undrow_login from "../../../assets/img/undraw_access_account_re_8spm.svg";
import { createBrowserHistory } from "history";
import { Button, TextField } from "@mui/material";

const history: any = createBrowserHistory({ window });

const Login = () => {
  const { user }: any = useAppSelector((state) => state);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {}, [user]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mail = useRef<HTMLInputElement>(null!);
  const pass = useRef<HTMLInputElement>(null!);
  const handelSubmit = (e: any): void => {
    e.preventDefault();
    const email: string = mail.current?.value;
    const password: string = pass.current?.value;
    // signUsingEmail(mailE, passE);
    dispatch(login(email, password));
    if (user.error) {
      enqueueSnackbar(user.error);
      dispatch(clearErrors());
    } else if (user.success) {
      dispatch(clearErrors());
      enqueueSnackbar("logged in successfully!");
      if (history.location.pathname === "/signUp") {
        navigate("/");
      } else {
        navigate(history.back());
      }
    }
  };
  return (
    <div className="container my-5">
      <div className="row py-5 my-5 ">
        <div className="col-lg-6">
          <img className="img-fluid" src={undrow_login} alt="" />
        </div>
        <div className="col-lg-6 my-auto py-5">
          <div
            style={{
              width: "100%",
            }}
            className="container"
          >
            <h3
              style={{
                color: "#0074ff",
              }}
            >
              {" "}
              Sign In{" "}
            </h3>
            <hr
              style={{
                width: "100px",
                border: `1px solid rgb(0 116 255)`,
                boxShadow: "rgb(99 99 99 / 20%) 0px 2px 8px 0px",
                margin: " 20px auto !important",
                borderRadius: "10px",
              }}
            />
            <form onSubmit={handelSubmit}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                inputRef={mail}
                required
                type="email"
                sx={{
                  marginY: "10px",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                required
                inputRef={pass}
                type="password"
                sx={{
                  marginY: "10px",
                }}
              />
              <NavLink to="/password/forgot">
                <Button variant="text" style={{ color: "rgb(0 116 255)" }}>
                  {" "}
                  Forget Password?{" "}
                </Button>{" "}
                <br />
              </NavLink>
              <Button
                type="submit"
                sx={{ marginY: "10px" }}
                variant="contained"
              >
                Login
              </Button>

              <p>
                {" "}
                <span style={{ fontWeight: "600", color: "gray" }}>
                  {" "}
                  Not registered yet?
                </span>
                <NavLink to="/signUp">
                  <Button> Create an Account </Button>
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
