import React from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import DonorSingle from "../DonorSingle/DonorSingle";
import DonorPagination from "../DonorPagination/DonorPagination";
import { Idonor } from "../DonorFilter/DonorFilter";

const Donors = (props: any) => {
    const { donors, page, setPage, total } = props;
    // console.log(donors);

    return (
        <>
            <Container>
                {donors.length === 0 && (
                    <p className="alert alert-danger p-2 mt-5 text-center">
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                        ></FontAwesomeIcon>{" "}
                        Ooops! No donors matched! Try Again!
                    </p>
                )}
                <div
                    className="
                        row row-cols-1 row-cols-md-2 row-cols-lg-3
                        gx-4
                        gy-5
                        my-4
                        d-flex
                        justify-content-center
                    "
                >
                    {donors?.map((donor: Idonor) => (
                        <DonorSingle
                            key={donor._id}
                            donor={donor}
                        ></DonorSingle>
                    ))}
                </div>
                <DonorPagination
                    total={total}
                    currentPage={page}
                    setCurrentPage={setPage}
                ></DonorPagination>
            </Container>
        </>
    );
};

export default Donors;
