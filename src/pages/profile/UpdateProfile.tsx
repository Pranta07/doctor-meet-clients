import React, { Fragment, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import "./UpdateProfile.css";
// import Loader from "../layout/Loader/Loader";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import { useAppSelector, useAppDispatch } from "../../redux/store";
// import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser, updateProfile } from "../../redux/actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../redux/constants/userConstants";

const RootStyle = styled("div")(({ theme }: any) => ({
    height: "100%",
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
}));
const UpdateProfile = () => {
    const dispatch = useAppDispatch();
    //   const alert = useAlert();

    const { user } = useAppSelector((state): any => state.user);
    const { error, isUpdated, loading }: any = useAppSelector((state) => state.profile);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    const updateProfileSubmit = (e: any) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("image", avatar);
        dispatch(updateProfile(myForm));
    };

    const updateProfileDataChange = (e: any) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                //@ts-ignore
                setAvatarPreview(reader.result);
                //@ts-ignore
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setAvatarPreview(user.image);
        }

        if (error) {
            window.alert(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            window.alert("Profile Updated Successfully");
            dispatch(loadUser());

            //   history.push("/account");

            dispatch({
                type: UPDATE_PROFILE_RESET,
            });
        }
    }, [dispatch, error, user, isUpdated]);
    return (
        <RootStyle>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Fragment>
                    {/* <MetaData title="Update Profile" /> */}

                    <div className="updateProfileContainer">

                        <h1>Update Profile functionality coming soon..</h1>
                    </div>

                    {/* <div className="updateProfileContainer">
                        <div className="updateProfileBox">
                            <h2 className="updateProfileHeading">Update Profile</h2>

                            <form
                                className="updateProfileForm"
                                encType="multipart/form-data"
                                onSubmit={updateProfileSubmit}
                            >
                                <div className="updateProfileName">
                                    <FaceIcon />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="updateProfileEmail">
                                    <MailOutlineIcon />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div id="updateProfileImage">
                                    <img src={avatarPreview} alt="Avatar Preview" />
                                    <input
                                        type="file"
                                        name="avatar"
                                        accept="image/*"
                                        onChange={updateProfileDataChange}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Update"
                                    className="updateProfileBtn"
                                />
                            </form>
                        </div>
                    </div> */}
                </Fragment>
            )}
        </RootStyle>
    );
};

export default UpdateProfile;
