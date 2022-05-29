import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PayForm from "./PayForm";

const stripePromise = loadStripe(
    "pk_test_51JxEP3G2Q6NIMWKgyocynBOfS4ZCyR4h0d4wRN9okYqGu9xzy43wt2IrGwPRg8QsejYCMD43xc82JqHy3VD9rp6F005hWMtXsW"
);

const Pay = (props) => {
    const { appointment } = props;

    return (
        <Box sx={{ backgroundColor: "white", p: 5 }}>
            <Typography
                variant="h4"
                sx={{ fontFamily: "Monospace", py: 3, color: "black" }}
            >
                Pay for Price ${appointment?.doctorInfo?.visit}
            </Typography>
            {appointment?.doctorInfo?.visit && (
                <Elements stripe={stripePromise}>
                    <PayForm appointment={appointment} />
                </Elements>
            )}
        </Box>
    );
};

export default Pay;
