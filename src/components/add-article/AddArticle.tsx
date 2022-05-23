import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SendIcon from "@mui/icons-material/Send";
import {
    Button,
    Container,
    Divider,
    LinearProgress,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import Page from "../Page";
import Swal from "sweetalert2";
import { useAppSelector } from "../../redux/store";
import "./AddArticle.css";

const AddArticle = () => {
    const { user }: any = useAppSelector((state) => state.user);
    const [text, setText] = useState("");
    let titleRef = useRef<HTMLInputElement>(null!);

    let [url, setUrl] = useState("");
    let [isProgress, setIsProgress] = useState(false);
    let [progress, setProgress] = useState(0);
    let storage = getStorage();

    const [fileName, setFileName] = useState("Add a cover image here...");

    const handleChange = (value: any) => {
        setText(value);
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
        setFileName(file.name);
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
                    // console.log(url);
                    setUrl(url);
                    setIsProgress(false);
                    // console.log("done");
                });
            }
        );
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let title = titleRef.current?.value;
        let img = url;
        const article = {
            author: user?.displayName || "",
            email: user?.email || "",
            img,
            title,
            description: text,
        };
        // console.log(article);

        //send article data to server
        fetch("http://localhost:5000/api/v1/article/add", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(article),
        }).then((res) => {
            if (res.status === 200) {
                Swal.fire({
                    title: "Success",
                    text: "Article Successfully Submitted!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                });
                window.location.reload();
            }
        });
    };

    return (
        <Page title="Favorite Doctors">
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto",
                    }}
                >
                    <Box
                        sx={{
                            border: "1px solid gray",
                            borderRadius: "5px",
                            backgroundColor: "#F4F8FF",
                            opacity: 0.9,
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ fontFamily: "Monospace", my: 2 }}
                        >
                            Create Your Article.
                        </Typography>
                        <Divider />
                        <form onSubmit={handleSubmit}>
                            <Box
                                sx={{
                                    width: {
                                        xs: "80%",
                                        md: "80%",
                                    },
                                    my: 2,
                                    mx: "auto",
                                }}
                            >
                                <label htmlFor="input-file" className="label1">
                                    <div className="input-2">{fileName}</div>
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
                                {isProgress && (
                                    <div>
                                        <LinearProgress
                                            variant="determinate"
                                            value={progress}
                                        />
                                    </div>
                                )}
                            </Box>

                            <TextField
                                inputRef={titleRef}
                                name="title"
                                label="Title"
                                multiline
                                rows={1}
                                sx={{
                                    width: {
                                        xs: "80%",
                                        md: "80%",
                                    },
                                    my: 1,
                                }}
                                InputProps={{
                                    style: {
                                        fontWeight: "bold",
                                        fontSize: "50px",
                                    },
                                }}
                            />

                            <Box
                                sx={{
                                    width: {
                                        xs: "80%",
                                        md: "80%",
                                    },
                                    my: 2,
                                    mx: "auto",
                                }}
                            >
                                <div>
                                    <ReactQuill
                                        value={text}
                                        onChange={handleChange}
                                        placeholder="Write your article content here..."
                                    />
                                </div>
                            </Box>

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    px: 4,
                                    mb: 2,
                                    width: "25%",
                                }}
                                endIcon={<SendIcon />}
                            >
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </Page>
    );
};

export default AddArticle;
