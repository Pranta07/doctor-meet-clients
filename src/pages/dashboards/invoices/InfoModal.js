import React from "react";
import { Box, Button, Modal } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    backgroundColor: "background.paper",
    border: "1px solid white",
    borderRadius: "10px",
    boxShadow: 10,
    p: 4,
};

const InfoModal = (props) => {
    const { invoice, smOpen, handlesClose } = props;

    return (
        <Modal
            open={smOpen}
            onClose={handlesClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h2>Id : {invoice?._id}</h2>
                <div>
                    <h3>User Info</h3>
                    <hr />
                    <p>Name : {invoice?.category?.name}</p>
                    <p>Email : {invoice?.category?.email}</p>
                    <p>Contact Info : {invoice?.category?.mobileNumber}</p>
                    <p>Category Id : {invoice?.category?._id}</p>

                    <br />

                    <h3>Payment Info</h3>
                    <hr />
                    <p>Payment Method : {invoice?.paymentMethod?.type}</p>
                    <p>Payment Id : {invoice?.paymentMethod?.id}</p>
                    <p>Purchased Date : {invoice?.purchasedDate}</p>
                    <p>Amount : {invoice?.amount}</p>
                </div>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 3,
                    }}
                >
                    <Button onClick={handlesClose} variant="contained">
                        Close
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default InfoModal;
