import React from "react";
import Flip from "react-reveal/Flip";
import { NavLink } from "react-router-dom";
import "./TextAnimation.css";

const TextAnimation = ({ item }) => {
    const { text1, text2, desc, btnText, to } = item;

    return (
        <div>
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
        </div>
    );
};

export default TextAnimation;
