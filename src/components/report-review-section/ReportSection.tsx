import { Container, Box, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useRef, useState, useEffect } from "react";
import "./ReportSection.css";
import Button from "@mui/material/Button";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
    deleteObject,
} from "firebase/storage";
import LinearProgress from "@mui/material/LinearProgress";
import Autocomplete from "@mui/material/Autocomplete";
import Swal from "sweetalert2";

const ReportSection = () => {
    let nameRef = useRef<HTMLInputElement>(null!);
    let DrnameRef = useRef<HTMLInputElement>(null!);
    let disRef = useRef<HTMLInputElement>(null!);
    let [isprogress, setIsProgress] = useState(false);
    const [text, setText] = useState("Click or drop something here...");

    let [url, setUrl] = useState("");
    let [progress, setProgress] = useState(0);
    let storage = getStorage();

    const [doctors, setDoctors] = useState<any>([]);

    useEffect(() => {
        const url = `http://localhost:5000/api/v1/doctors/all?specialist=All&&gender=All&&page=1&&rows=${1000}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setDoctors(data.result);
            });
    }, []);

    let getFile = (e: any) => {
        if (text !== "Click or drop something here...") {
            const desertRef = ref(storage, "/files/" + text);

            deleteObject(desertRef)
                .then(() => {
                    // console.log("deleted");
                })
                .catch((error) => {
                    // console.log(error);
                });
        }

        let files = e.currentTarget.files[0];
        UploadFiles(files);
    };

    const UploadFiles = (file: any) => {
        setIsProgress(true);
        if (!file) {
            return;
        }
        setText(file.name);
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
                    setIsProgress(false);
                    // console.log("done");
                });
            }
        );
    };

    const handleReportSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let patientId = nameRef.current?.value;
        let id = DrnameRef.current?.value.split("#")[1];
        // let email = emailRef.current?.value;
        let desc = disRef.current?.value;
        let file = url;
        let status = false;
        let review = "";
        const report = { file, patientId, desc, review, status };
        // console.log(report);

        //send review data to server
        fetch(`http://localhost:5000/api/v1/report/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(report),
        }).then((res) => {
            if (res.status === 200) {
                Swal.fire({
                    title: "Success",
                    text: "Report Successfully Submitted!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                });
                window.location.reload();
            } else {
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

    const defaultProps = {
        options: doctors,
        getOptionLabel: (option: any) => option.name + "#" + option._id,
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
                                required
                                fullWidth
                                id="outlined-basic"
                                label="Patient Name"
                                variant="outlined"
                                inputRef={nameRef}
                                sx={{
                                    my: "15px",
                                }}
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
                                        label="Doctor Name"
                                        variant="outlined"
                                        inputRef={DrnameRef}
                                        sx={{
                                            my: "15px",
                                        }}
                                    />
                                )}
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
                            <label htmlFor="input-file" className="label1">
                                <div className="input-2">{text}</div>
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
                                    <LinearProgress
                                        variant="determinate"
                                        value={progress}
                                    />
                                </div>
                            )}
                            {isprogress ? (
                                <Button
                                    variant="contained"
                                    sx={{ my: "15px" }}
                                    disabled
                                >
                                    Post
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleReportSubmit}
                                    variant="contained"
                                    sx={{ my: "15px" }}
                                >
                                    Post
                                </Button>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ReportSection;