import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const MakeModerator = () => {
  const [users, setUsers] = useState<any>([]);
  let userRef = useRef<HTMLInputElement>(null!);
  let roleRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    const url1 = `https://doctor-meet-server.herokuapp.com/api/v1/admin/users`;
    fetch(url1)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  const defaultProps1 = {
    options: users,
    getOptionLabel: (option: any) => option.email + " # " + option._id,
  };

  const roles = [{ role: "admin" }, { role: "modaretor" }];

  const defaultProps3 = {
    options: roles,
    getOptionLabel: (roles: any) => roles.role,
  };
  const handleMakeAdmin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let id = userRef.current?.value.split("# ")[1];
    let role = roleRef.current?.value;

    const roles = { role };

    //send review data to server
    fetch(`https://doctor-meet-server.herokuapp.com/api/v1/admin/user/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roles),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Admin Or Modaretor Successfully Added",
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
        Make admin Or Modaretor{" "}
      </h2>
      <div className="row">
        <div className="col-lg-6">
          <img
            src="https://i.ibb.co/NKSmq0T/ezgif-3-7c2aec2496-removebg-preview.png"
            alt=""
          />
        </div>
        <div
          className="col-lg-6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <form onSubmit={handleMakeAdmin}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              {...defaultProps1}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="Make admin or Modaretor"
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
              {...defaultProps3}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="Role"
                  variant="outlined"
                  inputRef={roleRef}
                  sx={{
                    my: "15px",
                  }}
                />
              )}
            />
            <Button type="submit" variant="contained">
              {" "}
              Send{" "}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeModerator;
