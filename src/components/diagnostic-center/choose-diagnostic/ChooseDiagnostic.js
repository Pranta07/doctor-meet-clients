import { Button, Grid } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ChooseDiagnostic.css";
import { m } from "framer-motion";

const ChooseDiagnostic = ({ section }) => {
    const intPrice = section.price;
    const intDiscount = section.discount;
    const floatDiscount = parseFloat(intDiscount).toFixed(2);

    const dd = floatDiscount / 100.0;
    // console.log(intPrice,dd);
    const off = (intPrice * dd).toFixed(2);
    const floatPrice = intPrice - intPrice * dd;
    const navigate = useNavigate();
    const goToForm = (e) => {
        e.preventDefault();
        navigate(`/diagnostic-appointment-form/sections/${section._id}`);
    };
    return (
        <m.div className="col-10">
            <div className="card h-100 border-0 p-2">
                <Card.Img variant="top" src={section.img} />
                <Card.Body>
                    <Card.Title>{section.title}</Card.Title>
                    <Card.Text>
                        {section.content}
                        <br />
                        <h6>
                            BDT {floatPrice.toFixed(0) * 100} (included BDT{" "}
                            {off * 100} discount)
                        </h6>
                    </Card.Text>
                    <Button variant="contained" onClick={goToForm}>
                        Book Now
                    </Button>
                </Card.Body>
            </div>
        </m.div>
    );
};

export default ChooseDiagnostic;
