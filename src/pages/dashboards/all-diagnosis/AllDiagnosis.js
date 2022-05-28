import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
    Paper,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Table,
} from "@mui/material";
import AllDiagnosisRow from "./AllDiagnosisRow";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const AllDiagnosis = () => {
    const [diagnosis, setDiagnosis] = useState([]);
    useEffect(() => {
        fetch("https://floating-basin-02241.herokuapp.com/bookedDiagnosis")
            .then((res) => res.json())
            .then((data) => setDiagnosis(data));
    }, []);
    return (
        <TableContainer component={Paper} className="mt-5">
            <Table className="w-100" aria-label="customized table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="center">
                            Diagnosis Code
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            Diagnosis Date
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            Total Cost
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            Payment Status
                        </StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {diagnosis.map((diagnosis) => (
                        <AllDiagnosisRow
                            diagnosis={diagnosis}
                            key={diagnosis._id}
                        ></AllDiagnosisRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AllDiagnosis;
