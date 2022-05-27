import React, { Fragment, useState, useEffect } from "react";
import "./ResetPassword.css";
import { styled } from "@mui/material/styles";

// import Loader from "../layout/Loader/Loader";
// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, resetPassword } from "../../actions/userAction";
// import { useAlert } from "react-alert";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { clearErrors, resetPassword } from "../../../redux/actions/userAction";
import { useNavigate, useParams } from "react-router-dom";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  //   const alert = useAlert();

  //   const history = useHistory();
  const navigate = useNavigate();
  const params = useParams();
  //   console.log(params);

  const { error, success, loading } = useAppSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(params.token, myForm));
  };

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors());
    }

    if (success) {
      window.alert("Password Updated Successfully");

      navigate("/login");
    }
  }, [dispatch, error, navigate, success]);

  return (
    <RootStyle>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Fragment>
          <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
              <h2 className="resetPasswordHeading">Update Profile</h2>

              <form
                className="resetPasswordForm"
                onSubmit={resetPasswordSubmit}
              >
                <div>
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="resetPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </RootStyle>
  );
};

export default ResetPassword;
