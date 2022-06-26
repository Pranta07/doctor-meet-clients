import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import DiagnosticPathology from "../diagnostic-pathology/DiagnosticPathology";
import { Icon } from "@iconify/react";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
}));
const DiagnosticPathologies = () => {
    const [pathologies, setPathologies] = useState([]);
    useEffect(() => {
        fetch("https://floating-basin-02241.herokuapp.com/pathology")
            .then((res) => res.json())
            .then((data) => setPathologies(data));
    }, []);
    return (
        <RootStyle className="px-3">
            <div className="mb-3 mt-5">
                <h3 className="services-title">Pathology</h3>
                <hr className="services-hr" />
            </div>
            <Row className="d-flex align-items-center justify-content-between">
                <Col item xs={12} md={4} lg={3}>
                    <div className="d-flex justify-content-center py-3">
                        <div className="imaging-icon-holder d-flex justify-content-center align-items-center flex-column">
                            <Icon
                                className="diagnosis"
                                icon="medical-icon:i-pathology"
                            />
                        </div>
                    </div>
                </Col>
                <Col item xs={12} md={8} lg={9} className="">
                    <div className="imaging-services-holder pb-5">
                        {pathologies.map((pathology) => (
                            <DiagnosticPathology
                                pathology={pathology}
                                key={pathology._id}
                            ></DiagnosticPathology>
                        ))}
                    </div>
                </Col>
            </Row>
        </RootStyle>
    );
};

export default DiagnosticPathologies;
