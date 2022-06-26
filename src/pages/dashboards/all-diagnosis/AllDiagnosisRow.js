import React from "react";
import {
    TableCell,
    tableCellClasses,
    TableRow,
    Button,
    Tooltip,
    IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Delete } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "black",
        color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: "#F2F2F2",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const AllDiagnosisRow = ({ diagnosis, setDelete }) => {
    const intPrice = diagnosis.selectedDiagnosis?.price;
    const intDiscount = diagnosis.selectedDiagnosis?.discount;
    const floatDiscount = parseFloat(intDiscount).toFixed(0);

    const dd = floatDiscount / 100;
    // console.log(intPrice,dd);
    const floatPrice = intPrice - intPrice * dd;
    const deleteBookedDiagnosisAppointment = (e) => {
        e.preventDefault();
        const isConfirm = window.confirm(
            "Are you sure want to delete this data?"
        );
        if (isConfirm) {
            setDelete(false);
            fetch(
                `https://floating-basin-02241.herokuapp.com/bookedDiagnosis/${diagnosis._id}`,
                {
                    method: "Delete",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data.deletedCount) {
                        alert("Data is deleted successfully");
                        setDelete(true);
                    }
                });
        }
    };
    return (
        <StyledTableRow>
            <StyledTableCell component="th" scope="row">
                {diagnosis.name}
            </StyledTableCell>
            <StyledTableCell align="center">
                {diagnosis.selectedDiagnosis.code}
            </StyledTableCell>
            <StyledTableCell align="center">
                {diagnosis.bookingDate}
            </StyledTableCell>
            <StyledTableCell align="center">
                BDT {floatPrice * 100}
            </StyledTableCell>
            <StyledTableCell align="center">
                {diagnosis?.paymentStatus === "paid" ? (
                    <Button color="success">Paid</Button>
                ) : (
                    <Button color="warning">Unpaid</Button>
                )}
            </StyledTableCell>
            <StyledTableCell className="mx-auto text-center">
                <Tooltip title="Delete" placement="left-start">
                    <IconButton
                        onClick={deleteBookedDiagnosisAppointment}
                        color="error"
                    >
                        <Delete></Delete>
                    </IconButton>
                </Tooltip>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default AllDiagnosisRow;
