import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./ReportStatus.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "../../../redux/store";
import { IReport } from "../../all-reports/AllReports";
import SinglePatientReport from "./SinglePatientReport";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const ReportStatus = () => {
    const [reports, setReports] = useState<IReport[]>([]);
    const { user }: any = useAppSelector((state) => state.user);

    useEffect(() => {
        // setLoading(true);
        const url = `http://localhost:5000/api/v1/report/patient/${user?.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setReports(data.result);
            });
        // .finally(() => setLoading(false));
    }, [user?.email]);

    return (
        <Container>
            <h5 style={{ marginBottom: "30px", color: "gray" }}>
                Reports Status Tracking
            </h5>
            <div className="report-card-shadow">
                <div className="">
                    <h6
                        style={{
                            fontWeight: "500",
                            lineHeight: "10px",
                            marginTop: "40px",
                        }}
                    >
                        Reports
                    </h6>
                    <hr />
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 700 }}
                            aria-label="customized table"
                        >
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">
                                        Doctor Name
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        Patient Name
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        Date
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        Comments
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        Status
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        Download
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {reports.map((report) => (
                                    <SinglePatientReport
                                        key={report._id}
                                        report={report}
                                    ></SinglePatientReport>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </Container>
    );
};

export default ReportStatus;
