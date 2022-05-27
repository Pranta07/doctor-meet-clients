import React from "react";
import { Button, Modal } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import { Box, TableCell, tableCellClasses, TableRow } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import "./AllInvoices.css";

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: "#F2F2F2",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "black",
        color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function MyVerticallyCenteredModal(props) {
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
}
const AllInvoice = ({ invoice }) => {
    const [smOpen, setsmOpen] = React.useState(false);
    const handlesOpen = () => setsmOpen(true);
    const handlesClose = () => setsmOpen(false);

    return (
        <StyledTableRow>
            <StyledTableCell component="th" scope="row">
                {invoice?._id}
            </StyledTableCell>
            <StyledTableCell align="center">
                {invoice?.invoiceName}
            </StyledTableCell>
            <StyledTableCell align="center">
                {invoice?.purchasedDate}
            </StyledTableCell>
            <StyledTableCell align="center">
                $ {invoice?.amount}
            </StyledTableCell>
            <StyledTableCell align="center">
                <>
                    <Button onClick={handlesOpen}>
                        <InfoIcon></InfoIcon>
                    </Button>

                    <MyVerticallyCenteredModal
                        invoice={invoice}
                        smOpen={smOpen}
                        handlesClose={handlesClose}
                    />
                </>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default AllInvoice;
