import React, { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Delete, Edit } from "@mui/icons-material";
import { Avatar, IconButton, Rating, Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import DoctorEditModal from "../DoctorEditModal/DoctorEditModal";
import { Idoctor } from "../../UserDashboard/FavoriteDoctors/FavoriteDoctors";

const SingleRowData = (props: {
    key: string;
    doctor: Idoctor;
    setIsUpdate: any;
    page: number;
    rowsPerPage: number;
    index: number;
}) => {
    const { doctor, setIsUpdate, page, rowsPerPage, index } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = (id: string) => {
        handleShow();
    };

    const handleDelete = (id: string) => {
        // console.log(id);
        setIsUpdate(false);
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
                fetch(`http://localhost:5000/doctors/${id}`, {
                    method: "DELETE",
                }).then((res) => {
                    if (res.status === 200) {
                        setIsUpdate(true);
                        Swal.fire(
                            "Deleted!",
                            "The doctor has been deleted.",
                            "success"
                        );
                    }
                });
            }
        });
    };

    return (
        <>
            <TableRow
                sx={{
                    "&:last-child td, &:last-child th": {
                        border: 0,
                    },
                }}
            >
                <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell component="th" scope="row">
                    <Avatar alt="Remy Sharp" src={doctor?.img} />
                </TableCell>
                <TableCell>{doctor?.name}</TableCell>
                <TableCell align="left">{doctor?.specialist}</TableCell>
                <TableCell align="left">{doctor?.experience} Years</TableCell>
                <TableCell align="left">
                    <Rating
                        name="read-only"
                        value={doctor?.review}
                        readOnly
                        size="small"
                        precision={0.5}
                    />
                </TableCell>
                <TableCell align="left">{doctor?.visit}</TableCell>
                <TableCell align="left">{doctor?.gender}</TableCell>
                <TableCell align="left">{doctor?.phone}</TableCell>
                <TableCell align="left">{doctor?.email}</TableCell>
                <TableCell align="left">
                    <Tooltip title="Edit">
                        <IconButton onClick={() => handleEdit(doctor._id)}>
                            <Edit></Edit>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton onClick={() => handleDelete(doctor._id)}>
                            <Delete></Delete>
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </TableRow>
            <DoctorEditModal
                show={show}
                handleClose={handleClose}
                doctor={doctor}
                setIsUpdate={setIsUpdate}
            ></DoctorEditModal>
        </>
    );
};

export default SingleRowData;
