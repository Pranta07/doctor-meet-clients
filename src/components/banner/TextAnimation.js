import React from "react";
import Flip from "react-reveal/Flip";
import { NavLink } from "react-router-dom";
import "./TextAnimation.css";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({

  backgroundColor: theme.palette.background.default,
}));
const TextAnimation = ({ item }) => {
    const { text1, text2, desc, btnText, to } = item;

    return (
        <RootStyle>
            <Flip left>
                <h1 className="font-open-sens fw-bold">
                    {text1}
                    <br />
                    <span style={{ color: "#e3376e" }}>{text2}</span>
                </h1>
                <p className="font-lora my-4">{desc}</p>
                <NavLink
                    to={to}
                    style={{
                        textDecoration: "none",
                        color: "white",
                    }}
                >
                    <button className="btn-consult-banner font-anek-bangla">
                        {btnText}
                    </button>
                </NavLink>
            </Flip>
        </RootStyle>
    );
};

export default TextAnimation;
