import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import "./ProfileSection.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const ProfileSection = () => {
  const { user }: any = useAppSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [url, setUrl] = useState("");
  let [isProgress, setIsProgress] = useState(false);
  let [progress, setProgress] = useState(0);
  let storage = getStorage();

  const handleEditProfile = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      userId: { value: string };
      about: { value: string }
      phoneNumber: { value: number }
      email: { value: string }
    };


    // console.log(newProduct);

    //     //send review data to server
    //     fetch("https://ancient-inlet-17554.herokuapp.com/api/v1/product/add", {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //         body: JSON.stringify(newProduct),
    //     }).then((res) => {
    //       if (res.status === 200) {
    //         Swal.fire({
    //           title: "Success",
    //           text: "Review Successfully Submitted!",
    //           icon: "success",
    //           showConfirmButton: false,
    //           timer: 2000,
    //         });
    //         window.location.reload();
    //       }
    //     });
  };


  let getFile = (e: any) => {
    let files = e.currentTarget.files[0];
    UploadFiles(files);
  };

  const UploadFiles = (file: any) => {
    setIsProgress(true);
    if (!file) {
      return;
    }
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
          console.log(url);
          setIsProgress(false);
          // console.log("done");
        });
      }
    );
  };

  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              {user?.image ? (
                <img
                  className=""
                  src={user.photoURL}
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
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input
                  onChange={getFile}
                  type="file"
                  draggable
                  multiple
                  accept="image/*,application/pdf,application/txt"
                  name="file-uploder"
                  id="input-file"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{user?.name}</h5>
              <p className="proile-rating">
                Email : <span>{user?.email}</span>
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
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <Button
              variant="text"
              onClick={handleOpen}
              className="profile-edit-btn"
              name="btnAddMore"
            > Edit Profile</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>Option</p>
              <a href="">
                <NavLink to="/deshboard">Deshboard</NavLink>
              </a>
              <br />
              <a href="">
                <NavLink to="/timeTable">Time Table</NavLink>
              </a>
              <br />
              <a href="">
                <NavLink to="/Blood_Dooner">Blood Doner Info</NavLink>
              </a>
              <br />
              <a href="">
                <NavLink to="/delivery">Delivery Tracking</NavLink>
              </a>
              <br />
              <a href="">
                <NavLink to="/fev-doctor">Personal Doctor</NavLink>
              </a>
              <br />
              <a href="">
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
                    <p>{user?._id}</p>
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
                  <div className="col-md-6">
                    {user?.phoneNumber ? (
                      <p>{user?.phoneNumber}</p>
                    ) : (
                      <p> Add phone number </p>
                    )}
                  </div>
                </div>
                <div className="row my-4">
                  <h4> About Me </h4>
                  <div>
                    <p>{user?.about}</p>
                  </div>
                </div>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} >
                  <form className="row" onSubmit={handleEditProfile}>
                    <div className="col-lg-6 my-2">
                      <TextField
                        id="outlined-basic"
                        label="userId"
                        name="userId"
                        fullWidth
                        variant="outlined"
                      />
                    </div>
                    <div className="col-lg-6 my-2">
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        name="name"
                        fullWidth
                        variant="outlined"
                      />
                    </div>
                    <div className="col-lg-6 my-2">
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        fullWidth
                        variant="outlined"
                      />
                    </div>
                    <div className="col-lg-6 my-2">
                      <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        name="phoneNumber"
                      />
                    </div>
                    <div className="col-lg-12 my-2">
                      <TextField
                        id="outlined-basic"
                        label="About"
                        rows={4}
                        multiline
                        fullWidth
                        name="about"
                        variant="outlined"
                      />
                    </div>
                    <Button type="submit" variant="contained"> Save </Button>
                  </form>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSection;
