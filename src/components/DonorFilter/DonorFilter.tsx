import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Donors from "../Donors/Donors";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

interface IFormInput {
    group: string;
    district: string;
}

interface Idonor {
    _id: number;
    img: string;
    name: string;
    email: string;
    phone: string;
    district: string;
    group: string;
}

const donorData: Idonor[] = [
    {
        _id: 1,
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Random Donor1",
        email: "random1@gmail.com",
        phone: "02297335397",
        district: "Dhaka",
        group: "B+",
    },
    {
        _id: 2,
        img: "https://randomuser.me/api/portraits/men/29.jpg",
        name: "Random Donor1",
        email: "random1@gmail.com",
        phone: "02297331753",
        district: "Chittagong",
        group: "B+",
    },
    {
        _id: 3,
        img: "https://randomuser.me/api/portraits/men/28.jpg",
        name: "Random Donor1",
        email: "random1@gmail.com",
        phone: "02297331753",
        district: "Khulna",
        group: "B+",
    },
    {
        _id: 4,
        img: "https://randomuser.me/api/portraits/men/10.jpg",
        name: "Random Donor2",
        email: "random2@gmail.com",
        phone: "02297331753",
        district: "Dhaka",
        group: "A+",
    },
    {
        _id: 5,
        img: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Random Donor3",
        email: "random3@gmail.com",
        phone: "02297331753",
        district: "Dhaka",
        group: "O+",
    },
    {
        _id: 6,
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Random Donor4",
        email: "random4@gmail.com",
        phone: "02297331753",
        district: "Dhaka",
        group: "AB+",
    },
    {
        _id: 7,
        img: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Random Donor5",
        email: "random5@gmail.com",
        phone: "02297331753",
        district: "Dhaka",
        group: "O-",
    },
    {
        _id: 8,
        img: "https://randomuser.me/api/portraits/men/17.jpg",
        name: "Random Donor2",
        email: "random2@gmail.com",
        phone: "02297331753",
        district: "Chittagong",
        group: "A+",
    },
    {
        _id: 9,
        img: "https://randomuser.me/api/portraits/men/18.jpg",
        name: "Random Donor2",
        email: "random2@gmail.com",
        phone: "02297331753",
        district: "Khulna",
        group: "A+",
    },
    {
        _id: 10,
        img: "https://randomuser.me/api/portraits/men/31.jpg",
        name: "Random Donor3",
        email: "random3@gmail.com",
        phone: "02297331753",
        district: "Chittagong",
        group: "O+",
    },
    {
        _id: 11,
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Random Donor3",
        email: "random3@gmail.com",
        phone: "02297331753",
        district: "Khulna",
        group: "O+",
    },
];

const DonorFilter = () => {
    const [displayDonors, setDisplayDonors] = useState<Idonor[]>(donorData);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        // console.log(data);
        const filterDonors = donorData.filter(
            (donor) =>
                donor.group === data.group && donor.district === data.district
        );
        // console.log(filterDonors);
        setDisplayDonors(filterDonors);
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row justify-content-center gy-2">
                        <div className="col-10 col-md-4">
                            <h5 className="text-danger fw-bold">
                                Blood group:
                            </h5>
                            <select
                                {...register("group", { required: true })}
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
                            {errors.group && (
                                <p className="alert alert-danger p-1 mt-2">
                                    <FontAwesomeIcon
                                        icon={faExclamationCircle}
                                    ></FontAwesomeIcon>{" "}
                                    This field is required
                                </p>
                            )}
                        </div>
                        <div className="col-10 col-md-4">
                            <h5 className="text-danger fw-bold">District:</h5>
                            <select
                                {...register("district", { required: true })}
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
                            {errors.district && (
                                <p className="alert alert-danger p-1 mt-2">
                                    <FontAwesomeIcon
                                        icon={faExclamationCircle}
                                    ></FontAwesomeIcon>{" "}
                                    This field is required
                                </p>
                            )}
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
                <Donors donors={displayDonors}></Donors>
            </section>
        </>
    );
};

export default DonorFilter;
