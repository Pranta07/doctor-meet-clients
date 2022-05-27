import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import {
  Grid,
  LinearProgress,
  TablePagination,
  Typography,
} from "@mui/material";
import "./DoctorsTable.css";
import SingleRowData from "../single-row-data/SingleRowData";
import { Idoctor } from "../../favorite-doctors/FavoriteDoctors";

const DoctorsTable = () => {
  const [doctors, setDoctors] = useState<Idoctor[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count, setCount] = useState<number>(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  useEffect(() => {
    setLoading(true);

    const url = `https://doctor-meet-server.herokuapp.com/api/v1/doctors/all?specialist=All&&gender=All&&page=${
      page + 1
    }&&rows=${rowsPerPage}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDoctors(data.result);
        setCount(data.total);
      })
      .finally(() => setLoading(false));
  }, [isUpdate, page, rowsPerPage]);

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
            Manage Doctors
          </Typography>
          <hr />
          {loading && (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          )}

          {doctors?.length === 0 && !loading ? (
            <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}>
              No Doctors Added Yet!
            </Typography>
          ) : (
            <>
              <TableContainer component={Paper} sx={{ maxHeight: 424 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell>#ID</TableCell>
                      <TableCell>Avatar</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell align="left">Specialist</TableCell>
                      <TableCell align="left">Experience</TableCell>
                      <TableCell align="center">Rating</TableCell>
                      <TableCell align="left">Visit Count</TableCell>
                      <TableCell align="left">Gender</TableCell>
                      <TableCell align="left">Phone</TableCell>
                      <TableCell align="left">Email</TableCell>
                      <TableCell align="center">Approval</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {doctors?.map((doctor, index) => (
                      <SingleRowData
                        key={doctor._id}
                        doctor={doctor}
                        setIsUpdate={setIsUpdate}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        index={index}
                      ></SingleRowData>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default DoctorsTable;
