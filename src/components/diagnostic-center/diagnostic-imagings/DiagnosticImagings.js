import React, { useEffect, useState } from "react";
import "./DiagnosticImagings.css";
import DiagnosticImaging from "./diagnostic-imaging/DiagnosticImaging";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
}));
const DiagnosticImagings = () => {
    const [imagings, setImagings] = useState([]);
    useEffect(() => {
        fetch("https://floating-basin-02241.herokuapp.com/imaging")
            .then((res) => res.json())
            .then((data) => setImagings(data));
    }, []);
    return (
        <RootStyle className="px-3">
            <div className="mb-3">
                <h3 className="services-title">Imaging</h3>
                <hr className="services-hr" />
            </div>
            <Row className="d-flex align-items-center justify-content-between">
                <Col item xs={12} md={4} lg={3}>
                    <div className="d-flex justify-content-center py-3">
                        <div className="imaging-icon-holder d-flex justify-content-center align-items-center flex-column">
                            <Icon
                                className="diagnosis"
                                icon="medical-icon:i-imaging-root-category"
                            />
                        </div>
                    </div>
                </Col>
                <Col item xs={12} md={8} lg={9} className="">
                    <div className="imaging-services-holder pb-5">
                        {imagings?.map((imaging) => (
                            <DiagnosticImaging
                                imaging={imaging}
                            ></DiagnosticImaging>
                        ))}
                    </div>
                </Col>
            </Row>
        </RootStyle>
    );
};

export default DiagnosticImagings;
