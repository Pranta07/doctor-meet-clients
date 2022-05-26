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
import { useAppSelector } from "../../redux/store";

export interface IReport {
  _id: string;
  file: string;
  patientName: string;
  patientEmail: string;
  drEmail: string;
  drName: string;
  desc: string;
  status: boolean;
  review: string;
  createdAt: string;
}

const AllReports = () => {
  const { user }: any = useAppSelector((state) => state.user);
  const [reports, setReports] = useState<IReport[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const url = `https://doctor-meet-server.herokuapp.com/api/v1/report/doctor/${user?.email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setReports(data.result);
      })
      .finally(() => setLoading(false));
  }, [isUpdate, user?.email]);

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
            <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}>
              No Reports!
            </Typography>
          ) : (
            <>
              <TableContainer component={Paper} sx={{ maxHeight: 424 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell>#ID</TableCell>
                      <TableCell>Doctor</TableCell>
                      <TableCell>Patient</TableCell>
                      <TableCell align="left">Comments</TableCell>
                      <TableCell align="center">Report</TableCell>
                      <TableCell align="center">Review</TableCell>
                      <TableCell align="center">Status</TableCell>
                      <TableCell align="center">Delete</TableCell>
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
