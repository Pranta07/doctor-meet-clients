import React from "react";
import "./Departments.css";

const Departments = () => {
    return (
        <div className="my-5 border rounded-3">
            <h5
                className="p-4 m-0"
                style={{
                    backgroundColor: "#e6f1ff",
                    letterSpacing: "1px",
                    color: "#23448c",
                    fontWeight: "bold",
                }}
            >
                Departments
            </h5>
            <div className="dep p-4">
                <p>Orthopedics</p>
                <p>Gynaecology</p>
                <p>Obstetrics</p>
                <p>Dermatology</p>
                <p>Surgery</p>
            </div>
        </div>
    );
};

export default Departments;
