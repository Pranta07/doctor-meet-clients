import { Container, Box, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useRef, useState } from "react";
import "./ReportSection.css";
import Button from "@mui/material/Button";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import LinearProgress from "@mui/material/LinearProgress";
import Swal from "sweetalert2";

const ReportSection = () => {
  let nameRef = useRef<HTMLInputElement>(null!);
  let DrnameRef = useRef<HTMLInputElement>(null!);
  let emailRef = useRef<HTMLInputElement>(null!);
  let disRef = useRef<HTMLInputElement>(null!);
  let [isprogress,setIsProgress] = useState(false)

  let [url, setUrl] = useState("");
  let [progress, setProgress] = useState(0);
  let storage = getStorage();
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
          {
            setUrl(url);
            setIsProgress(false);
            console.log("done");
            
          }
        });
      }
    );
  };

  const handleReviewSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let name = nameRef.current?.value;
    let DrName = DrnameRef.current?.value;
    let email = emailRef.current?.value;
    let desc = disRef.current?.value;
    let img = url;
    const report = { name,DrName,email, img, desc };
    // console.log(review);

    //send review data to server
    fetch("http://localhost:5000/api/v1/report/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(report),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Review Successfully Submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        window.location.reload(); 
      }
      else{
        Swal.fire({
          title: "Error",
          text: "Some input is empty",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <Box>
      <Container>
        <h6
          style={{
            textAlign: "center",
            color: "#2c90b9",
          }}
        >
          {" "}
          Report{" "}
        </h6>
        <h1
          style={{
            textAlign: "center",
            color: "#2c90b9",
          }}
        >
          {" "}
          Report Post Section{" "}
        </h1>

        <Grid container spacing={2}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            item
            xs={12}
            lg={6}
            md={6}
          >
            <Box>
              <img
                className="img-fluid"
                src="https://i.ibb.co/JrXdmxJ/online-medical-prescription-digital-document-or-online-test-results-report-on-mobile-computer-screen.png"
                alt="report-img"
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <Box
              sx={{
                marginTop: "30px",
                padding: "30px",
              }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="Patient Name*"
                variant="outlined"
                inputRef={nameRef}
                sx={{
                  my: "15px",
                }}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Doctor Name*"
                variant="outlined"
                inputRef={DrnameRef}
                sx={{
                  my: "15px",
                }}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email*"
                inputRef={emailRef}
                variant="outlined"
                type="email"
                sx={{
                  my: "15px",
                }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Say Something"
                fullWidth
                inputRef={disRef}
                multiline
                rows={4}
                sx={{
                  my: "15px",
                }}
              />
              <label htmlFor="input-file">
                <div className="input-2">Click or drop something here</div>
                <input
                  onChange={getFile}
                  className="style-file-input"
                  type="file"
                  draggable
                  multiple
                  accept="image/*,application/pdf,application/txt"
                  name="file-uploder"
                  id="input-file"
                />
              </label>
              {isprogress && (
                <div>
                  <LinearProgress variant="determinate" value={progress} />
                </div>
              )}
              <Button
                onClick={handleReviewSubmit}
                variant="contained"
                sx={{ my: "15px" }}
              >
                {" "}
                Post{" "}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ReportSection;
