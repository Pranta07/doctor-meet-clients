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
  IconButton,
  LinearProgress,
  TablePagination,
  Typography,
} from "@mui/material";
import "./DonorsTable.css";
import SingleRow from "../signle-row/SingleRow";
import { Idonor } from "../../blood-donor/donor-filter/DonorFilter";

const DonorsTable = () => {
  const [donors, setDonors] = useState<Idonor[]>([]);
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
    const url = `http://localhost:5000/donor?group=All&&district=All&&page=${
      page + 1
    }&&rows=${rowsPerPage}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDonors(data.result);
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
            backgroundColor: "#FAEEEC",
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
            Manage Donors
          </Typography>
          <hr />
          {loading && (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          )}

          {donors?.length === 0 && !loading ? (
            <Typography variant="h3" sx={{ my: 2 }}>
              No Donors Added Yet!
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
                      <TableCell align="left">Group</TableCell>
                      <TableCell align="left">District</TableCell>
                      <TableCell align="left">Gender</TableCell>
                      <TableCell align="left">Phone</TableCell>
                      <TableCell align="left">Email</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {donors?.map((donor, index) => (
                      <SingleRow
                        key={donor._id}
                        donor={donor}
                        setIsUpdate={setIsUpdate}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        index={index}
                      ></SingleRow>
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

export default DonorsTable;
