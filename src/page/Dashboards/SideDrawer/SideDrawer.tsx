import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';
import logo from '../../../Assets/img/logo.png'


const SideDrawer = (props: { show: boolean, backDropClickHandler: any }) => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <div className={drawerClasses}>
            <img src={logo} alt="" />
            <Link to="/dashboard/dashboarHome" onClick={props.backDropClickHandler}>Dashboard</Link>
            <Link to="/dashboard/doctor" onClick={props.backDropClickHandler}>Doctors</Link>
            <Link to="/dashboard/admin" onClick={props.backDropClickHandler}>Admin</Link>
            <Link to="/" >
                Back To Home
            </Link>
        </div>
    );
};

export default SideDrawer;