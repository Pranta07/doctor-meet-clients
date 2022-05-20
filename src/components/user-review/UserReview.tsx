import React from "react";
import { AccountCircle, MailOutline } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import {
    Button,
    Container,
    Divider,
    InputAdornment,
    Rating,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useAppSelector } from "../../redux/store";
import Page from "../Page";

export interface IReview {
    name: string;
    email: string;
    img: string;
    rating: number;
    desc: string;
}

const UserReview = () => {
    const { user }: any = useAppSelector((state) => state.user);

    const [rating, setRating] = React.useState<number | null>(5);

    const handleReviewSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            desc: { value: string };
        };
        const name = target.name?.value;
        const email = target.email?.value;
        const img = user?.photoURL;
        const desc = target.desc?.value;
        const review = { name, email, img, rating, desc };
        // console.log(review);

        //send review data to server
        fetch("http://localhost:5000/api/v1/review/add", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        }).then((res) => {
            if (res.status === 200) {
                target.desc.value = "";
                Swal.fire({
                    title: "Success",
                    text: "Review Successfully Submitted!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        });
    };
    return (
        <Page title="Add Review">
            <Container>
                <Box
                    sx={{
                        height: "500px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
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
                            Share Your Experience.
                        </Typography>
                        <Divider />
                        <form onSubmit={handleReviewSubmit}>
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
                                name="desc"
                                label="Review"
                                multiline
                                rows={4}
                                sx={{
                                    width: {
                                        xs: "80%",
                                        md: "60%",
                                    },
                                    my: 1,
                                }}
                            />
                            <br />
                            <Typography component="legend">Rate Us</Typography>
                            <Rating
                                name="rating"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
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

export default UserReview;
