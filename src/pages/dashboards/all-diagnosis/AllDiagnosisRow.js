import React from "react";
import { TableCell, tableCellClasses, TableRow, Button } from "@mui/material";
import styled from "@emotion/styled";

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

const AllDiagnosisRow = ({ diagnosis }) => {
    const intPrice = diagnosis.selectedDiagnosis.price;
    const intDiscount = diagnosis.selectedDiagnosis.discount;
    const floatDiscount = parseFloat(intDiscount).toFixed(2);

    const dd = floatDiscount / 100.0;
    // console.log(intPrice,dd);
    const floatPrice = intPrice - intPrice * dd;
    const deleteBookedDiagnosisAppointment = (e) => {
        e.preventDefault();
        const isConfirm = window.confirm(
            "Are you sure want to delete this data?"
        );
        if (isConfirm) {
            fetch(
                `https://floating-basin-02241.herokuapp.com/bookedDiagnosis/${diagnosis._id}`,
                {
                    method: "Delete",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert("Data is deleted successfully");
                        window.location.reload();
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
            <StyledTableCell align="center">{floatPrice} $</StyledTableCell>
            <StyledTableCell align="center">
                {diagnosis?.paymentStatus === "paid" ? (
                    <Button color="success">Paid</Button>
                ) : (
                    <Button color="warning">Unpaid</Button>
                )}
            </StyledTableCell>
            <StyledTableCell className="mx-auto text-center text-danger">
                <i
                    className="fas fa-trash-alt"
                    onClick={deleteBookedDiagnosisAppointment}
                ></i>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default AllDiagnosisRow;
