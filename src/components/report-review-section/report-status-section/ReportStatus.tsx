import { Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import React from "react";
import "./ReportStatus.css";
import { Icon } from "@iconify/react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(135deg, rgb(42, 39, 218), rgb(0, 204, 255))",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(135deg, rgb(42, 39, 218), rgb(0, 204, 255))",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  fontSize: "22px",
  display: "flex",
  padding: "16px",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(135deg, rgb(42, 39, 218), rgb(0, 204, 255))",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(135deg, rgb(42, 39, 218), rgb(0, 204, 255))",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Icon icon="carbon:report" />,
    2: <Icon icon="entypo:lab-flask" />,
    3: <Icon icon="healthicons:health-data-sync" />,
    4: <Icon icon="healthicons:health-data-security" />,
    5: <Icon icon="carbon:task-complete" />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  "Recive Report",
  "Lab Specialist",
  "Doctor Read The Report",
  "Dr. Give Review and Prescription",
  "Upload The Review and Prescription",
];

const ReportStatus = () => {
  return (
    <Container>
      <h5 style={{ marginBottom: "30px", color: "gray" }}>
        {" "}
        My Report Status{" "}
      </h5>
      <div className="report-card-shedow">
        <Grid container spacing={2}>
          <Grid lg={6} md={6} xs={12}>
            <h3> Paitent Name </h3>
            <p style={{ fontWeight: "500", lineHeight: "10px" }}> Email </p>
            <p style={{ fontWeight: "500", lineHeight: "10px" }}>
              {" "}
              Task: Report Review{" "}
            </p>
          </Grid>
          <Grid
            lg={6}
            md={6}
            xs={12}
            sx={{ display: "flex", justifyContent: "right" }}
          >
            <div>
              <h5> Expected Completion </h5>
              <p className="" style={{ fontWeight: "500", lineHeight: "10px" }}>
                {" "}
                Data{" "}
              </p>
              <p className="" style={{ fontWeight: "500", lineHeight: "10px" }}>
                {" "}
                left time or date{" "}
              </p>
            </div>
          </Grid>
        </Grid>
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={1}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
        <div className="">
          <h6
            style={{ fontWeight: "500", lineHeight: "10px", marginTop: "40px" }}
          >
            {" "}
            Report{" "}
          </h6>
          <hr />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Doctor Name</StyledTableCell>
                  <StyledTableCell align="right">Paitant Name</StyledTableCell>
                  <StyledTableCell align="right">
                    Date
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Download
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Button> Download </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Container>
  );
};

export default ReportStatus;
