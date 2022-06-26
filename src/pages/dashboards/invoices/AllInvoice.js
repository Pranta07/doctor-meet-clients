import React from "react";
import { styled } from "@mui/material/styles";
import {
    IconButton,
    TableCell,
    tableCellClasses,
    TableRow,
    Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import "./AllInvoices.css";
import InfoModal from "./InfoModal";
import Swal from "sweetalert2";
import { Delete } from "@mui/icons-material";

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

const AllInvoice = ({ invoice, setUpdate }) => {
    const [smOpen, setsmOpen] = React.useState(false);
    const handlesOpen = () => setsmOpen(true);
    const handlesClose = () => setsmOpen(false);

    const amount = parseInt(invoice?.amount);

    const handleDelete = (id) => {
        // console.log(id);
        setUpdate(false);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://floating-basin-02241.herokuapp.com/allInvoices/${id}`,
                    {
                        method: "DELETE",
                    }
                ).then((res) => {
                    if (res.status === 200) {
                        setUpdate(true);
                        Swal.fire(
                            "Deleted!",
                            "Invoice has been deleted.",
                            "success"
                        );
                    }
                });
            }
        });
    };

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
                BDT{" "}
                {invoice.invoiceName === "Diagnostic Center"
                    ? amount * 100
                    : amount}
            </StyledTableCell>
            <StyledTableCell align="center">
                <>
                    <Tooltip title="View" placement="left-start">
                        <IconButton onClick={handlesOpen} color="primary">
                            <InfoIcon></InfoIcon>
                        </IconButton>
                    </Tooltip>

                    <InfoModal
                        invoice={invoice}
                        smOpen={smOpen}
                        handlesClose={handlesClose}
                    />
                </>
            </StyledTableCell>
            <StyledTableCell align="center">
                <Tooltip title="Move to Trash!" placement="left-start">
                    <IconButton
                        onClick={() => handleDelete(invoice._id)}
                        color="error"
                    >
                        <Delete></Delete>
                    </IconButton>
                </Tooltip>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default AllInvoice;
