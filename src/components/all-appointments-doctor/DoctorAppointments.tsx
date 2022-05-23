import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useAppSelector } from "../../redux/store";
import DoctorAppointment from "./DoctorAppointment";
import "../all-appointments/Appointments.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const DoctorAppointments = () => {
    const [appointments, setAppointments] = useState<any>([]);
    const [update, setUpdate] = useState(false);
    const { user }: any = useAppSelector((state) => state.user);

    useEffect(() => {
        // setLoading(true);
        const url = `http://localhost:5000/api/v1/appointments-doctor/${user?.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAppointments(data.result);
            });
        // .finally(() => setLoading(false));
    }, [update, user?.email]);

    return (
        <Container>
            <h5 style={{ marginBottom: "30px", color: "gray" }}>
                My Appointments
            </h5>
            <div className="appointment-card-shadow">
                <div>
                    <h6
                        style={{
                            fontWeight: "500",
                            lineHeight: "10px",
                            marginTop: "40px",
                        }}
                    >
                        Appointments
                    </h6>
                    <hr />
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 700 }}
                            aria-label="customized table"
                        >
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">
                                        Doctor Name
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        Patient Name
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        Health Condition
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        Date
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        Time
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        Payment Status
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        Meet
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {appointments.map((appointment: any) => (
                                    <DoctorAppointment
                                        key={appointment._id}
                                        appointment={appointment}
                                        setUpdate={setUpdate}
                                    ></DoctorAppointment>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </Container>
    );
};

export default DoctorAppointments;
