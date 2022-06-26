import React, { useEffect, useState } from "react";
import AllInvoice from "./AllInvoice";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import "./AllInvoices.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const AllInvoices = () => {
    const [invoices, setInvoices] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        fetch("https://floating-basin-02241.herokuapp.com/allInvoices")
            .then((res) => res.json())
            .then((data) => {
                setInvoices(data);
            });
    }, [update]);

    return (
        <Container>
            <h5 style={{ marginBottom: "30px", color: "gray" }}>
                All Invoices
            </h5>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">
                                Invoice Id
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Category
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Billing Date
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Amount
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                History
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Action
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {invoices?.map((invoice) => (
                            <AllInvoice
                                key={invoice._id}
                                invoice={invoice}
                                setUpdate={setUpdate}
                            ></AllInvoice>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AllInvoices;
