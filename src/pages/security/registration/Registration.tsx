import React, { useRef, useState, useEffect } from "react";
import {
  NavLink,
  useNavigate,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { register } from "../../../redux/actions/userAction";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

import { createBrowserHistory } from "history";
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import signUp from "../../../assets/img/undraw_my_password_re_ydq7.svg";
import { useSnackbar } from "notistack";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));

const history: any = createBrowserHistory({ window });

const Registration = () => {
  const { user }: any = useAppSelector((state) => state);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {}, [user]);
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
        console.log(user.success);
        enqueueSnackbar("Registration complete successfully!");
        if (history.location.pathname === "/login") {
          navigate("/");
        } else {
          navigate(history.back());
        }
      }
    }
  };
  return (
    <RootStyle className="container my-5">
      <div className="row my-5 py-5">
        <div className="col-lg-6">
          <img className="my-5 py-5 img-fluid" src={signUp} alt="" />
        </div>
        <div className="col-lg-6 my-auto py-5">
          <h3
            style={{
              color: "#0074ff",
            }}
          >
            {" "}
            Registration{" "}
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
              label="Name"
              variant="outlined"
              fullWidth
              required
              inputRef={Name}
              type="text"
              sx={{
                marginY: "10px",
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              type="email"
              required
              inputRef={Email}
              variant="outlined"
              sx={{
                marginY: "10px",
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              type="password"
              required
              inputRef={pass}
              sx={{
                marginY: "10px",
              }}
              variant="outlined"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Confirm Password"
              type="password"
              required
              inputRef={Cpass}
              sx={{
                marginY: "10px",
              }}
              variant="outlined"
            />
            <Button type="submit" sx={{ marginY: "10px" }} variant="contained">
              {" "}
              Sign up{" "}
            </Button>

            <p>
              {" "}
              <span style={{ fontWeight: "600", color: "gray" }}>
                Already have an account?
              </span>
              <NavLink to="/login">
                <Button variant="text">Log in </Button>{" "}
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </RootStyle>
  );
};

export default Registration;
