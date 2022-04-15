import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideBar.css';
import logo from '../../../Assets/img/logo.png'

const SideBar = () => {
    const { pathname } = useLocation();
    const firstPath = pathname.split("/dashboard/")[1];
    return (

        <div className='sidebar'>
            <img src={logo} alt="" />
            <div className="nav-content">
                <Link to="/dashboard/dashboarHome" className={firstPath === "dashboarHome" ? "active" : ""}>
                    Dashboard
                </Link>
                <Link to="/dashboard/doctor" className={firstPath === "doctor" ? "active" : ""}>
                    Doctor
                </Link>
                <Link to="/dashboard/admin" className={firstPath === "admin" ? "active" : ""}>
                    Admin
                </Link>
                <Link to="/" >
                    Back To Home
                </Link>
            </div>
        </div>

    );
};

export default SideBar;