import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import "./Profile.css";

interface User {
  name: string;
  image: string;
  role: string;
  _id: string;
}

const Profile = () => {
  // let { user } = useAuth();
  const { user, loading, isAuthenticated }: any = useAppSelector(
    (state) => state.user
  );

  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              {user.name ? (
                <img
                  className=""
                  //@ts-ignore
                  src={user?.image}
                  alt=""
                  height="100px"
                  width="100px"
                />
              ) : (
                <img
                  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                  alt=""
                />
              )}
              {/* <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{user?.name}</h5>
              <p className="profile-rating">
                RANKINGS : <span>8/10</span>
              </p>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              className="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>Option</p>
              <a href="/">
                <NavLink to="/deshboard">Deshboard</NavLink>
              </a>
              <br />
              <a href="/">
                <NavLink to="/timeTable">Time Table</NavLink>
              </a>
              <br />
              <a href="/">
                <NavLink to="/Blood_Dooner">Blood Doner Info</NavLink>
              </a>
              <br />
              <a href="/">
                <NavLink to="/delivery">Delivery Tracking</NavLink>
              </a>
              <br />
              <a href="/">
                <NavLink to="/fev-doctor">Personal Doctor</NavLink>
              </a>
              <br />
              <a href="/">
                <NavLink to="/report">My Report</NavLink>
              </a>
              <br />
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                      {user?.name}#{user?.name?.length}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user?.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user?.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  {/* <div className="col-md-6">
                    {user?.phoneNumber ? (
                      <p>{user?.phoneNumber}</p>
                    ) : (
                      <p> Add phone number </p>
                    )}
                  </div> */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div className="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
