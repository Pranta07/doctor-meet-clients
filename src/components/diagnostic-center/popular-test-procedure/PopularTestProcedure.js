import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PopularTestProcedure.css";

const PopularTestProcedure = ({ testProcedure }) => {
    //    console.log(testProcedure)
    const navigate = useNavigate();
    const intPrice = testProcedure.price;
    const intDiscount = testProcedure.discount;
    const floatDiscount = parseFloat(intDiscount).toFixed(2);

    const dd = floatDiscount / 100.0;
    // console.log(intPrice,dd);
    const floatPrice = intPrice - intPrice * dd;
    const { title, content, price, discount } = testProcedure;
    const goToForm = (e) => {
        e.preventDefault();
        navigate(
            `/diagnostic-appointment-form/testProcuders/${testProcedure._id}`
        );
    };

    return (
        <Card style={{ width: "18rem" }} onClick={goToForm}>
            <div className="discount-amount-holder">
                <p style={{ color: "#427CC5" }}>- {discount}%</p>
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                    {content}
                </Card.Subtitle>

                <div className="d-flex  mt-3">
                    <p className="mx-2 discounted-price">${floatPrice}</p>
                    <p className="text-decoration-line-through undiscounted-price">
                        ${price}
                    </p>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PopularTestProcedure;
