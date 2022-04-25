import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Donors from "../Donors/Donors";

interface IFormInput {
    group: string;
    district: string;
}

export interface Idonor {
    _id: string;
    img: string;
    name: string;
    email: string;
    phone: string;
    group: string;
    district: string;
    gender: string;
}

const DonorFilter = () => {
    const [displayDonors, setDisplayDonors] = useState<Idonor[]>([]);
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [query, setQuery] = useState({
        group: "All",
        district: "All",
    });

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    useEffect(() => {
        setLoading(true);
        const url = `http://localhost:5000/donor?group=${
            query.group
        }&&district=${query.district}&&page=${page}&&rows=${6}`;
        // console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setDisplayDonors(data.result);
                setTotal(data.total);
            })
            .finally(() => setLoading(false));
    }, [page, query]);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const { group, district } = data;

        setPage(1);
        setQuery({ group, district });
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
                        my-3
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
                                <option value="All">All Group</option>
                                <option value="A%2B">A+</option>
                                <option value="A-">A-</option>
                                <option value="B%2B">B+</option>
                                <option value="B-">B-</option>
                                <option value="O%2B">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB%2B">AB+</option>
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
                                <option value="All">All District</option>
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
                            className="btn btn-danger mt-4 px-4"
                        >
                            Search
                        </button>
                    </div>
                </form>
                {!loading ? (
                    <Donors
                        donors={displayDonors}
                        page={page}
                        handleChange={handleChange}
                        total={total}
                    ></Donors>
                ) : (
                    <div className="d-flex justify-content-center py-5">
                        <div
                            className="spinner-border text-primary"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
export default DonorFilter;