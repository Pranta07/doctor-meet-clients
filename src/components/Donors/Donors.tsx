import React from "react";
import { Container } from "react-bootstrap";
import DonorSingle from "../DonorSingle/DonorSingle";

const Donors = () => {
    return (
        <>
            <Container>
                <div
                    className="
                        row row-cols-1 row-cols-md-3
                        g-4
                        my-4
                        d-flex
                        justify-content-center
                    "
                >
                    <DonorSingle></DonorSingle>
                </div>
            </Container>
        </>
    );
};

export default Donors;
