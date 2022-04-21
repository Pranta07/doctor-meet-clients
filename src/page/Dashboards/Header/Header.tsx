import React from "react";
import "./Header.css";
import user from "../../../Assets/Dashboard Images/user.png";

const Header = (props: { drawerTogglerClickHandler: any }) => {
    return (
        <div className="Header">
            <div
                className="drawerToggleButton"
                onClick={props.drawerTogglerClickHandler}
            >
                <button className="toggle_button">
                    <div className="toggle_button__line"></div>
                    <div className="toggle_button__line"></div>
                    <div className="toggle_button__line"></div>
                </button>
            </div>
            <div className="box">
                <input type="text" placeholder="Type to search" />
                <i className="fas fa-search"></i>
            </div>
            <div className="d-flex align-items-center">
                <div className="pe-2">
                    <button
                        type="button"
                        className="btn btn-light position-relative"
                    >
                        <i className="fas fa-bell"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            5+
                            <span className="visually-hidden">
                                unread messages
                            </span>
                        </span>
                    </button>
                </div>
                <div className="d-flex align-items-center me-3">
                    <img src={user} alt="" className="mx-3" />
                    <div>
                        <i className="fas fa-angle-down text-primary"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
