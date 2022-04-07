import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Donors from "../Donors/Donors";

interface IFormInput {
    group: string;
    district: string;
}

const DonorFilter = () => {
    const [data, setData] = useState<IFormInput>({ group: "", district: "" });

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        // console.log(data);
        setData(data);
    };
    // console.log(data);

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row justify-content-center gy-2">
                        <div className="col-10 col-md-4">
                            <h5 className="text-danger fw-bold">
                                Blood group:
                            </h5>
                            <select
                                {...register("group")}
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div className="col-10 col-md-4">
                            <h5 className="text-danger fw-bold">District:</h5>
                            <select
                                {...register("district")}
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option value="">Select District</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Comilla">Comilla</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Jessore">Jessore</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            // onClick={handleSearch}
                            className="btn btn-danger mt-3 px-4"
                        >
                            Search
                        </button>
                    </div>
                </form>
                <Donors data={data}></Donors>
            </section>
        </>
    );
};

export default DonorFilter;
