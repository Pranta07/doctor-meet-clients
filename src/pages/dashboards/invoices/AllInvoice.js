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
        </StyledTableRow>
    );
};

export default AllInvoice;
