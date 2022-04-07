import React from "react";
import { Container } from "react-bootstrap";
import DonorSingle from "../DonorSingle/DonorSingle";

const Donors = (props: any) => {
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
                    {donors.map((donor: any) => (
                        <DonorSingle
                            key={donor._id}
                            donor={donor}
                        ></DonorSingle>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Donors;
