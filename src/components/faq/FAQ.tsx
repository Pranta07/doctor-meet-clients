import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }: any) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "20px" }} />}
    {...props}
  />
))(({ theme }: any) => ({
  padding: theme.spacing(2),
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "white",
  color: theme.palette.mode === "dark" ? "white" : "#005963",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }: any) => ({
  padding: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  color: theme.palette.mode === "dark" ? "white" : "#005963",
}));

const questions = [
  {
    id: "panel1",
    summery: "Can I Make An Appointment Online?",
    details:
      "Yes, it is our one of the main features. With a simple steps you can take appointment online",
  },
  {
    id: "panel2",
    summery: "Does Doctor Meet Provide Teli-health?",
    details:
      "Yes, at Doctor Meet you can have your virtual meeting with our specialists",
  },
  {
    id: "panel3",
    summery: "Can I Make An Appointment Offline?",
    details: "It yes available only if physically visit our respected branch",
  },
  {
    id: "panel4",
    summery: "Does Doctor Meet Provide Health Insurance?",
    details:
      "Not now, but we are thinking about it. Hopefully can make it out in future",
  },
  {
    id: "panel5",
    summery: "How Can I Find a Blood Donor?",
    details: "Navigating the donor section you can find blood donors.",
  },
  {
    id: "panel6",
    summery: "How COVID Patients Are Treated?",
    details: "They are treated with proper medication, food and rest",
  },
];

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <RootStyle>
      {questions.map((ques) => (
        <Accordion
          expanded={expanded === ques.id}
          onChange={handleChange(ques.id)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {ques.summery}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{ques.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}{" "}
    </RootStyle>
  );
}
