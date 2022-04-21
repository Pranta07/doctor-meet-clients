import React from "react";
import "./Availability.css";

const Availability = () => {
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
                Appointment Availability
            </h5>
            <div className="av p-4">
                <p>Free doctors only</p>
                <p>Available doctors only</p>
            </div>
        </div>
    );
};

export default Availability;
