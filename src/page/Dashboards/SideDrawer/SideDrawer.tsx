import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import logo from "../../../Assets/img/logo.png";

const SideDrawer = (props: { show: boolean; backDropClickHandler: any }) => {
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    }
    return (
        <div className={drawerClasses}>
            <div>
                <img className="img-fluid" src={logo} alt="" />
            </div>
            <Link
                to="/dashboard/dashboarHome"
                onClick={props.backDropClickHandler}
            >
                Dashboard
            </Link>
            <Link to="/dashboard/doctors" onClick={props.backDropClickHandler}>
                Doctors
            </Link>
            <Link to="/dashboard/favdoc" onClick={props.backDropClickHandler}>
                Favorite Doctors
            </Link>
            <Link to="/dashboard/admin" onClick={props.backDropClickHandler}>
                Admin
            </Link>
        </div>
    );
};

export default SideDrawer;
