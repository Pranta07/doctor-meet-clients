import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
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
))(({ theme }) => ({
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(3),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
    color: theme.palette.mode === "dark" ? "white" : "#005963",
}));

const questions = [
    {
        id: "panel1",
        summery: "Can I Make An Appointment Online?",
        details:
            "Torem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.Amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.",
    },
    {
        id: "panel2",
        summery: "Does Doctor Meet Provide Telehealth?",
        details:
            "Torem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.Torem ipsum dolor sit amet. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.",
    },
    {
        id: "panel3",
        summery: "Can I Make An Appointment Offline?",
        details:
            "Forem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam.",
    },
    {
        id: "panel4",
        summery: "Does Doctor Meet Provide Health Insurance?",
        details:
            "Aorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.",
    },
    {
        id: "panel5",
        summery: "How Can I Find a Blood Donor?",
        details:
            "Qorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime Worem ipsum dolor sit amet consectetur adipisicing elit atque sit.",
    },
    {
        id: "panel6",
        summery: "How COVID Patients Are Treated?",
        details:
            "Worem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam,Worem ipsum dolor sit amet consectetur adipisicing elit. voluptatem doloribus reiciendis dolore quis maxime atque sit.",
    },
];

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>("panel1");

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            {questions.map((ques) => (
                <Accordion
                    expanded={expanded === ques.id}
                    onChange={handleChange(ques.id)}
                >
                    <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
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
        </div>
    );
}
