import React, { useEffect, useState } from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import DonorPagination from "../DonorPagination/DonorPagination";
import DonorSingle from "../DonorSingle/DonorSingle";

const Donors = (props: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { donors } = props;

    return (
        <>
            <Container>
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
                    {donors.length === 0 && (
                        <p className="alert alert-danger p-2 mt-2 text-center">
                            <FontAwesomeIcon
                                icon={faExclamationCircle}
                            ></FontAwesomeIcon>{" "}
                            Ooops! No donors matches!
                        </p>
                    )}
                    {donors.map((donor: any) => (
                        <DonorSingle
                            key={donor._id}
                            donor={donor}
                        ></DonorSingle>
                    ))}
                </div>
                <DonorPagination
                    count={donors.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></DonorPagination>
            </Container>
        </>
    );
};

export default Donors;
