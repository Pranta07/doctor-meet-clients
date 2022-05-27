import React, { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Delete, Edit } from "@mui/icons-material";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import DonorEditModal from "../donor-edit-modal/DonorEditModal";
import { Idonor } from "../../blood-donor/donor-filter/DonorFilter";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SingleRow = (props: {
  key: string;
  donor: Idonor;
  setIsUpdate: any;
  page: number;
  rowsPerPage: number;
  index: number;
}) => {
  const { donor, setIsUpdate, page, rowsPerPage, index } = props;
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
        fetch(`https://doctor-meet-server.herokuapp.com/api/v1/donor/${id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.status === 200) {
            setIsUpdate(true);
            Swal.fire("Deleted!", "The donor has been deleted.", "success");
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
          <Avatar alt="Remy Sharp" src={donor?.img} />
        </TableCell>
        <TableCell>{donor?.name}</TableCell>
        <TableCell align="left">{donor?.group}</TableCell>
        <TableCell align="left">{donor?.district}</TableCell>
        <TableCell align="left">{donor?.gender}</TableCell>
        <TableCell align="left">{donor?.phone}</TableCell>
        <TableCell align="left">{donor?.email}</TableCell>
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
          >
            <MenuItem>
              <Tooltip title="Edit" placement="left-start">
                <IconButton onClick={() => handleEdit(donor._id)}>
                  <Edit></Edit>
                </IconButton>
              </Tooltip>
            </MenuItem>
            <MenuItem>
              <Tooltip title="Delete" placement="left-start">
                <IconButton onClick={() => handleDelete(donor._id)}>
                  <Delete></Delete>
                </IconButton>
              </Tooltip>
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
      <DonorEditModal
        show={show}
        handleClose={handleClose}
        donor={donor}
        setIsUpdate={setIsUpdate}
      ></DonorEditModal>
    </>
  );
};

export default SingleRow;
