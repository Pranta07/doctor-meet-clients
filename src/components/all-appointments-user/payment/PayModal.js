import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import Pay from "./Pay";

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

const PayModal = (props) => {
    const { smOpen, handlesClose, appointment } = props;

    return (
        <Modal
            open={smOpen}
            onClose={handlesClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Pay appointment={appointment}></Pay>
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

export default PayModal;
