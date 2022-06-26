import React from "react";
import Flip from "react-reveal/Flip";
import "./NewBanner.css";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({

  backgroundColor: theme.palette.background.default,
}))
const SingleBanner = (props) => {
    const { text1, text2, desc } = props.item;

    return (
        <RootStyle>
            <Flip left>
                <h1 className="font-open-sens fw-bold">
                    {text1}
                    <br />
                    <span style={{ color: "#e3376e" }}>{text2}</span>
                </h1>
                <p className="font-lora my-4">{desc}</p>
            </Flip>
        </RootStyle>
    );
};

export default SingleBanner;
