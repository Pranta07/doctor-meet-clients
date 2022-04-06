import React from "react";

const DonorFilter = () => {
    const handleSearch = () => {
        console.log("clicked");
    };

    return (
        <>
            <section id="find-donors-section" className="container my-4">
                <h1 className="text-center">
                    Find <span className="text-danger">Donors</span>
                </h1>
                <hr
                    className="
                        w-50
                        mx-auto
                        text-danger
                        border border-2 border-danger
                        rounded
                    "
                />
                <div className="row justify-content-center gy-2">
                    <div className="col-10 col-md-4">
                        <h5 className="text-danger fw-bold">Blood group:</h5>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                        >
                            <option selected>Select Blood Group</option>
                            <option value="1">A+</option>
                            <option value="2">A-</option>
                            <option value="3">B+</option>
                            <option value="3">B-</option>
                            <option value="3">O+</option>
                            <option value="3">O-</option>
                            <option value="3">AB+</option>
                            <option value="3">AB-</option>
                        </select>
                    </div>
                    <div className="col-10 col-md-4">
                        <h5 className="text-danger fw-bold">District:</h5>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                        >
                            <option selected>Select District</option>
                            <option value="1">Dhaka</option>
                            <option value="2">Chittagong</option>
                            <option value="3">Comilla</option>
                            <option value="3">Rajshahi</option>
                            <option value="3">Khulna</option>
                            <option value="3">Jessore</option>
                            <option value="3">Sylhet</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        onClick={handleSearch}
                        className="btn btn-danger mt-3 px-4"
                    >
                        Search
                    </button>
                </div>
            </section>
        </>
    );
};

export default DonorFilter;
