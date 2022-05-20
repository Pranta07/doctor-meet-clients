import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Delete } from "@mui/icons-material";
import { Button, IconButton, Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ReviewModal from "./ReviewModal";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const SingleReport = (props: any) => {
    const { report, setIsUpdate } = props;

    const [mopen, setmOpen] = React.useState(false);
    const handleOpen = () => setmOpen(true);
    const handleClose = () => setmOpen(false);

    const handleDelete = (idr: string) => {
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
                fetch(
                    `http://localhost:5000/api/v1/report/${idr}/62604bc2ad329b3fee220aab`,
                    {
                        method: "DELETE",
                    }
                ).then((res) => {
                    if (res.status === 200) {
                        setIsUpdate(true);
                        Swal.fire(
                            "Deleted!",
                            "The report has been deleted.",
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
                <TableCell>{report?._id}</TableCell>
                <TableCell>{report?.patientId}</TableCell>

                <TableCell align="left">{report?.desc}</TableCell>

                <TableCell align="center">
                    <Tooltip title="Preview" placement="left-start">
                        <a href={report?.file} target="_blank">
                            <IconButton>
                                <RemoveRedEyeIcon />
                            </IconButton>
                        </a>
                    </Tooltip>
                </TableCell>

                <TableCell align="center">
                    <Tooltip title="Review" placement="left-start">
                        <IconButton onClick={handleOpen}>
                            <PostAddIcon></PostAddIcon>
                        </IconButton>
                    </Tooltip>
                    <ReviewModal
                        mopen={mopen}
                        handleClose={handleClose}
                        report={report}
                        setIsUpdate={setIsUpdate}
                    ></ReviewModal>
                </TableCell>

                <TableCell align="center">
                    {report?.status ? (
                        <Button color="success">Done</Button>
                    ) : (
                        <Button color="error">Pending</Button>
                    )}
                </TableCell>

                <TableCell align="center">
                    <Tooltip title="Delete" placement="left-start">
                        <IconButton onClick={() => handleDelete(report._id)}>
                            <Delete></Delete>
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </TableRow>
        </>
    );
};

export default SingleReport;
