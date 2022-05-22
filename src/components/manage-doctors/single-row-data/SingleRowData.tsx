import React, { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Delete, Edit } from "@mui/icons-material";
import { Avatar, IconButton, Rating, Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import DoctorEditModal from "../doctor-edit-modal/DoctorEditModal";
import { Idoctor } from "../../favorite-doctors/FavoriteDoctors";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu = () => {
    setAnchorEl(null);
  };

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
        fetch(`http://localhost:5000/api/v1/doctors/${id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.status === 200) {
            setIsUpdate(true);
            Swal.fire("Deleted!", "The doctor has been deleted.", "success");
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
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenu}
                        onClick={handleMenu}
                    >
                        <MenuItem>
                            <Tooltip title="Edit" placement="left-start">
                                <IconButton
                                    onClick={() => handleEdit(doctor._id)}
                                >
                                    <Edit></Edit>
                                </IconButton>
                            </Tooltip>
                        </MenuItem>
                        <MenuItem>
                            <Tooltip title="Delete" placement="left-start">
                                <IconButton
                                    onClick={() => handleDelete(doctor._id)}
                                >
                                    <Delete></Delete>
                                </IconButton>
                            </Tooltip>
                        </MenuItem>
                    </Menu>
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
