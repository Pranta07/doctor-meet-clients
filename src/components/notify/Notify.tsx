import { Autocomplete, Box, Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import Swal from "sweetalert2";

const Notify = () => {
  const [doctors, setDoctors] = useState<any>([]);
  const [admin, setAdmin] = useState<any>([]);
  const [moderator, setModerator] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  let userRef = useRef<HTMLInputElement>(null!);
  let moderatorRef = useRef<HTMLInputElement>(null!);
  let adminRef = useRef<HTMLInputElement>(null!);
  let DrnameRef = useRef<HTMLInputElement>(null!);
  let messageRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    const url1 = `https://doctor-meet-server.herokuapp.com/api/v1/admin/users/role?role=user`;
    fetch(url1)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.user);
      });
  }, [admin, moderator, users]);

  useEffect(() => {
    const url2 = `https://doctor-meet-server.herokuapp.com/api/v1/admin/users/role?role=doctor`;
    fetch(url2)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data.user);
      });
  }, []);

  useEffect(() => {
    const url3 = `https://doctor-meet-server.herokuapp.com/api/v1/admin/users/role?role=modaretor`;
    fetch(url3)
      .then((res) => res.json())
      .then((data) => {
        setModerator(data.user);
      });
  }, []);

  useEffect(() => {
    const url4 = `https://doctor-meet-server.herokuapp.com/api/v1/admin/users/role?role=admin`;
    fetch(url4)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.user);
      });
  }, []);

  const defaultProps = {
    options: doctors,
    getOptionLabel: (option: any) => option.email + "#" + option._id,
  };
  const defaultProps1 = {
    options: users || [],
    getOptionLabel: (option: any) => option.email + "#" + option._id,
  };
  const defaultProps2 = {
    options: moderator || [],
    getOptionLabel: (option: any) => option.email + "#" + option._id,
  };
  const defaultProps4 = {
    options: admin || [],
    getOptionLabel: (option: any) => option.email + "#" + option._id,
  };

  const handleSendNotify = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let id =
      userRef.current?.value.split("#")[1] ||
      moderatorRef.current?.value.split("#")[1] ||
      adminRef.current?.value.split("#")[1] ||
      DrnameRef.current?.value.split("#")[1];
    let message = messageRef.current?.value;
    let date = new Date();
    let status = "unRead";

    const notify = { message, date, status };

    //send review data to server
    fetch(
      `https://doctor-meet-server.herokuapp.com/api/v1/admin/users/notify/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(notify),
      }
    ).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "Success",
          text: "notification send Successfully ",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        window.location.reload();
      } else {
        Swal.fire({
          title: "Error",
          text: "for some error we are not able to added admin or modaretor Added",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="container">
      <h2 className="text-center my-5" style={{ color: "#0783b5" }}>
        {" "}
        Notify Everyone{" "}
      </h2>
      <div className="row">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="https://i.ibb.co/s3Q5SpT/aa8c323b10ccbcb38dc8c3aba776b90c.png"
            alt=""
          />
        </div>
        <div
          className="col-lg-6 "
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <form action="">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              {...defaultProps1}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  fullWidth
                  label="User email & id"
                  variant="outlined"
                  inputRef={userRef}
                  sx={{
                    my: "15px",
                  }}
                />
              )}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              {...defaultProps}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  fullWidth
                  label="Doctor Email & id"
                  variant="outlined"
                  inputRef={DrnameRef}
                  sx={{
                    my: "15px",
                  }}
                />
              )}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              {...defaultProps2}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  fullWidth
                  label="Modaretor email & id"
                  variant="outlined"
                  inputRef={moderatorRef}
                  sx={{
                    my: "15px",
                  }}
                />
              )}
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              {...defaultProps4}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  fullWidth
                  label="admin email & id"
                  variant="outlined"
                  inputRef={adminRef}
                  sx={{
                    my: "15px",
                  }}
                />
              )}
            />
            <TextField
              required
              fullWidth
              label="Send a message"
              variant="outlined"
              rows={4}
              multiline
              inputRef={messageRef}
              sx={{
                my: "15px",
              }}
            />
            <Button
              onClick={handleSendNotify}
              className="my-3"
              variant="contained"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Notify;
