import React from "react";
import {
    Modal,
    Typography,
    Box,
    Button,
    IconButton,
    Tooltip,
    Alert,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import { IReport } from "../../all-reports/AllReports";
import StatusModal from "./StatusModal";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "background.paper",
    border: "1px solid white",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const SinglePatientReport = (props: { report: IReport }) => {
    const { report } = props;
    // const [date, setDate] = useState("dd/mm/yy");
    let dateDecode = new Date(report.createdAt);
    let dates =
        dateDecode.getDate() +
        "/" +
        dateDecode.getMonth() +
        "/" +
        dateDecode.getFullYear();

    const [modalOpen, setmOpen] = React.useState(false);
    const handleOpen = () => setmOpen(true);
    const handleClose = () => setmOpen(false);

    const [smOpen, setsmOpen] = React.useState(false);
    const handlesOpen = () => setsmOpen(true);
    const handlesClose = () => setsmOpen(false);

    return (
        <StyledTableRow key={report._id}>
            <StyledTableCell align="left">{report?.drName}</StyledTableCell>
            <StyledTableCell align="left">
                {report?.patientName}
            </StyledTableCell>
            <StyledTableCell align="center">{dates}</StyledTableCell>
            <StyledTableCell align="center">
                <Tooltip title="See Review" placement="left-start">
                    <IconButton
                        onClick={handleOpen}
                        color={report?.review ? "success" : "inherit"}
                    >
                        <PostAddIcon></PostAddIcon>
                    </IconButton>
                </Tooltip>
                <Modal
                    open={modalOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            Report Review
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <small>
                                {report.review ? (
                                    <div
                                        className="text-center"
                                        dangerouslySetInnerHTML={{
                                            __html: report.review,
                                        }}
                                    ></div>
                                ) : (
                                    <Alert severity="info">
                                        Not review yet.
                                    </Alert>
                                )}
                            </small>
                        </Typography>
                        <Button onClick={handleClose} sx={{ my: 2 }}>
                            Close
                        </Button>
                    </Box>
                </Modal>
            </StyledTableCell>
            <StyledTableCell align="center">
                <Button variant="text" color="info" onClick={handlesOpen}>
                    Track
                </Button>
                <StatusModal
                    report={report}
                    smOpen={smOpen}
                    handlesClose={handlesClose}
                ></StatusModal>
            </StyledTableCell>
            <StyledTableCell align="right">
                <a href={report?.file} rel="noreferrer" target="_blank">
                    <Button variant="text">Download</Button>
                </a>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default SinglePatientReport;
