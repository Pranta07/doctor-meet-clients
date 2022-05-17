import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AccountCircle, MailOutline } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import {
    Button,
    Container,
    Divider,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Page from "../Page";
import useAuth from "../../hooks/useAuth";
import "./AddArticle.css";

const AddArticle = () => {
    const { user } = useAuth();
    const [text, setText] = React.useState("");

    const handleChange = (value: any) => {
        setText(value);
    };

    return (
        <Page title="Favorite Doctors">
            <Container>
                <Box
                    sx={{
                        width: {
                            xs: "90%",
                            md: "80%",
                        },
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
                        <form onSubmit={() => {}}>
                            <TextField
                                defaultValue={user?.displayName || ""}
                                label="Name"
                                name="name"
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    width: {
                                        xs: "80%",
                                        md: "60%",
                                    },
                                    my: 2,
                                }}
                            />
                            <TextField
                                defaultValue={user?.email || ""}
                                label="Email"
                                name="email"
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutline></MailOutline>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    width: {
                                        xs: "80%",
                                        md: "60%",
                                    },
                                    mb: 2,
                                }}
                            />
                            <TextField
                                name="title"
                                label="Title"
                                multiline
                                rows={1}
                                sx={{
                                    width: {
                                        xs: "80%",
                                        md: "60%",
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
                                        md: "60%",
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

                            <br />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ px: 4, my: 2, width: "20%" }}
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
{
    /* <div className="desc" dangerouslySetInnerHTML={{ __html: text }}></div>; */
}
