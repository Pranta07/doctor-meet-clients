import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Delete, Edit } from "@mui/icons-material";
import Swal from "sweetalert2";
import {
    Avatar,
    Grid,
    IconButton,
    LinearProgress,
    TablePagination,
    Tooltip,
    Typography,
} from "@mui/material";
// import useAuth from "../../Hooks/useAuth";
import "./DonorsTable.css";

interface Idonor {
    _id: string;
    img: string;
    name: string;
    email: string;
    phone: string;
    group: string;
    district: string;
}

const DonorsTable = () => {
    // const { user } = useAuth();
    const [donors, setDonors] = useState<Idonor[]>([]);
    const [isUpdate, steIsUpdate] = useState(false);
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

    const handleEdit = (id: string) => {
        steIsUpdate(false);
        fetch(`http://localhost:5000/donor/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    steIsUpdate(true);
                }
            });
    };

    const handleDelete = (id: string) => {
        // console.log(id);
        steIsUpdate(false);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/donor/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((result) => {
                        // console.log(result);
                        if (result.deletedCount) {
                            steIsUpdate(true);
                            Swal.fire(
                                "Deleted!",
                                "Your order has been deleted.",
                                "success"
                            );
                        }
                    });
            }
        });
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
                    sx={{ fontFamily: "Monospace", py: 1, textAlign: "center" }}
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
                        No Orders Done Yet!
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
                                        <TableCell>Name</TableCell>
                                        <TableCell>Avatar</TableCell>
                                        <TableCell align="right">
                                            Group
                                        </TableCell>
                                        <TableCell align="right">
                                            District
                                        </TableCell>
                                        <TableCell align="right">
                                            Phone
                                        </TableCell>
                                        <TableCell align="right">
                                            Email
                                        </TableCell>
                                        <TableCell align="right">
                                            Actions
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {donors?.map((donor, index) => (
                                        <TableRow
                                            key={donor?._id}
                                            sx={{
                                                "&:last-child td, &:last-child th":
                                                    {
                                                        border: 0,
                                                    },
                                            }}
                                        >
                                            <TableCell>
                                                {index + 1 + page * rowsPerPage}
                                            </TableCell>
                                            <TableCell>{donor?.name}</TableCell>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={donor?.img}
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                {donor?.group}
                                            </TableCell>
                                            <TableCell align="right">
                                                {donor?.district}
                                            </TableCell>
                                            <TableCell align="right">
                                                {donor?.phone}
                                            </TableCell>
                                            <TableCell align="right">
                                                {donor?.email}
                                            </TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() =>
                                                            handleEdit(
                                                                donor._id
                                                            )
                                                        }
                                                    >
                                                        <Edit></Edit>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() =>
                                                            handleDelete(
                                                                donor._id
                                                            )
                                                        }
                                                    >
                                                        <Delete></Delete>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            // className="pagination"
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
    );
};

export default DonorsTable;
