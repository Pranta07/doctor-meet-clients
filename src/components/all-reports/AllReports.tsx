import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Grid, LinearProgress, Typography } from "@mui/material";
import SingleReport from "./SingleReport";

export interface IReport {
    _id: string;
    file: string;
    patientId: string;
    desc: string;
    status: boolean;
}

const AllReports = () => {
    const [reports, setReports] = useState<IReport[]>([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const url = `http://localhost:5000/api/v1/doctors/single/62604bc2ad329b3fee220aab`;

        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setReports(result.data[0].reports);
                // setCount(data.total);
            })
            .finally(() => setLoading(false));
    }, [isUpdate]);

    return (
        <>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        margin: "26px",
                        border: "1px solid gray",
                        borderRadius: "5px",
                        backgroundColor: "#d7e8f7",
                        opacity: 0.93,
                        overflowX: "scroll",
                        width: {
                            xs: "315px!important",
                            sm: "500px!important",
                            md: "100%!important",
                        },
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "Monospace",
                            py: 1,
                            textAlign: "center",
                        }}
                    >
                        Review Reports
                    </Typography>
                    <hr />
                    {loading && (
                        <Box sx={{ width: "100%" }}>
                            <LinearProgress />
                        </Box>
                    )}

                    {reports?.length === 0 && !loading ? (
                        <Typography
                            variant="h4"
                            sx={{ my: 2, textAlign: "center" }}
                        >
                            No Reports!
                        </Typography>
                    ) : (
                        <>
                            <TableContainer
                                component={Paper}
                                sx={{ maxHeight: 424 }}
                            >
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#ID</TableCell>
                                            <TableCell>Patient Name</TableCell>
                                            <TableCell align="left">
                                                Comments
                                            </TableCell>
                                            <TableCell align="center">
                                                Report
                                            </TableCell>
                                            <TableCell align="center">
                                                Review
                                            </TableCell>
                                            <TableCell align="center">
                                                Status
                                            </TableCell>
                                            <TableCell align="center">
                                                Delete
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {reports?.map((report) => (
                                            <SingleReport
                                                key={report._id}
                                                report={report}
                                                setIsUpdate={setIsUpdate}
                                            ></SingleReport>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    )}
                </Box>
            </Grid>
        </>
    );
};

export default AllReports;