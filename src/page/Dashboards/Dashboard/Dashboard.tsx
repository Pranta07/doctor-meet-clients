import React, { useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./Dashboar.css";
import { Outlet } from "react-router";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";

const Dashboard = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerTogglerClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen);
    };
    const backDropClickHandler = () => {
        setSideDrawerOpen(false);
    };

    let backDrop;
    if (sideDrawerOpen) {
        backDrop = (
            <BackDrop backDropClickHandler={backDropClickHandler}></BackDrop>
        );
    }
    return (
        <div className="Dashboard-Home">
            <SideBar></SideBar>
            <SideDrawer
                show={sideDrawerOpen}
                backDropClickHandler={backDropClickHandler}
            ></SideDrawer>
            {backDrop}
            <div>
                <Header
                    drawerTogglerClickHandler={drawerTogglerClickHandler}
                ></Header>
                <div className="main-content">
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
