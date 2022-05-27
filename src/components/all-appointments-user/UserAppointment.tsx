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
import TableRow from "@mui/material/TableRow";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Swal from "sweetalert2";

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

const formatAMPM = (date: any) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes.toString().padStart(2, "0");
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

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

let handlePaymentsSubmit = () => {
  let total_amount = 20;
  let currency = "BDT";
  let tran_id = "123233455";
  let payment_status = false;
  let product_name = "moonmoon";
  let ordered_products = { doctorName: "moonmoon", visit: 20 };
  let cus_name = "Mahim";
  let cus_email = "mdmahim924214@gmail.com";
  let ship_country = "Bangladesh";
  let success_url = "http://localhost:5000/api/v1/success"
  let fail_url = "http://localhost:5000/api/v1/fail"
  let cancel_url = "http://localhost:5000/api/v1/cancel"

  const data = {
    total_amount,
    currency,
    tran_id,
    success_url,
    fail_url,
    cancel_url,
    payment_status,
    product_name,
    ordered_products,
    cus_name,
    cus_email,
    ship_country,
  };

  // console.log(data);

  const url = `http://localhost:5000/api/v1/payment/init`;
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status === 200) {
      Swal.fire({
        title: "Well done!",
        text: "Your Information Saved Successfully!",
        icon: "success",
        timer: 1500,
      });
      window.location.reload();
    } else {
      Swal.fire({
        title: "Warning!",
        text: "Some error occured!",
        icon: "warning",
        timer: 2000,
      });
    }
  });
};

const UserAppointment = (props: any) => {
  const { appointment, setUpdate } = props;

  const time = formatAMPM(new Date(appointment?.appointmentTime));

  const [modalOpen, setmOpen] = React.useState(false);
  const handleOpen = () => setmOpen(true);
  const handleClose = () => setmOpen(false);

  return (
    <StyledTableRow>
      <StyledTableCell align="center">
        {appointment?.doctorInfo?.name}
      </StyledTableCell>
      <StyledTableCell align="center">
        {appointment?.patientName}
      </StyledTableCell>
      <StyledTableCell align="center">
        <Tooltip title="View!" placement="left-start">
          <IconButton
            onClick={handleOpen}
            color={appointment?.healthIssues ? "primary" : "secondary"}
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
              Patient Health Condition
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <small>
                {appointment?.healthIssues ? (
                  <div className="text-center">{appointment?.healthIssues}</div>
                ) : (
                  <Alert severity="info">Not added yet.</Alert>
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
        {appointment?.appointmentDate?.split("T")[0]}
      </StyledTableCell>
      <StyledTableCell align="center">{time}</StyledTableCell>
      <StyledTableCell align="center">
        {appointment?.payment ? (
          <Button>Paid</Button>
        ) : (
          <Tooltip title="Pay Now!" placement="left-start">
            <Button onClick={handlePaymentsSubmit} color="warning">
              Unpaid
            </Button>
          </Tooltip>
        )}
      </StyledTableCell>
      <StyledTableCell align="center">
        {appointment?.payment ? (
          <Tooltip title="Meet Now!" placement="left-start">
            <NavLink to="/virtual-meet">
              <IconButton color="primary" disabled>
                <VideocamOutlinedIcon />
              </IconButton>
            </NavLink>
          </Tooltip>
        ) : (
          <Tooltip title="Pay First!" placement="left-start">
            <IconButton>
              <VideocamOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default UserAppointment;
