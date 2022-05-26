import { styled } from "@mui/material/styles";
import React, { Fragment, useEffect } from "react";
// import { useSelector } from "react-redux";
// import MetaData from "../layout/MetaData";
// import Loader from "../layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import "./Profile.css";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const Profile = () => {

  const navigate = useNavigate()

  //@ts-ignore
  const { user, loading, isAuthenticated } = useAppSelector((state): any => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated]);
  return (
    <RootStyle>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Fragment>
          {/* <MetaData title={`${user.name}'s Profile`} /> */}
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" alt="img" />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </RootStyle>
  );
};

export default Profile;
