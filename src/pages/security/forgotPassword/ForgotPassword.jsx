import React, { Fragment, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { clearErrors, forgotPassword } from "../../../redux/actions/userAction";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "./ForgotPassword.css";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  // const alert = useAlert();

  const { error, message, loading } = useAppSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors());
    }

    if (message) {
      window.alert(message);
    }
  }, [dispatch, error, message]);

  return (
    <RootStyle>
      <Fragment>
        {loading ? (
          <h1>Loading.....</h1>
        ) : (
          <Fragment>
            <div className="forgotPasswordContainer">
              <div className="forgotPasswordBox">
                <h2 className="forgotPasswordHeading">Forgot Password</h2>

                <form
                  className="forgotPasswordForm"
                  onSubmit={forgotPasswordSubmit}
                >
                  <div className="forgotPasswordEmail">
                    <MailOutlineIcon />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <input
                    type="submit"
                    value="Send"
                    className="forgotPasswordBtn"
                  />
                </form>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    </RootStyle>
  );
};

export default ForgotPassword;
