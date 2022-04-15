import React from "react";
import "./Gender.css";

const Gender = () => {
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
                Gender
            </h5>
            <div className="gen p-4">
                <p>No Preference</p>
                <p>Male</p>
                <p>Female</p>
            </div>
        </div>
    );
};

export default Gender;
