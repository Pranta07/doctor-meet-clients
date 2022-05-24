import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { Icon } from "@iconify/react";
import { styled } from "@mui/material/styles";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "background.paper",
    border: "1px solid white",
    borderRadius: "10px",
    boxShadow: 10,
    p: 4,
};

const ColorLibConnector = styled(StepConnector)(({ theme }) => ({
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

const ColorLibStepIconRoot = styled("div")<{
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

function ColorLibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: <Icon icon="healthicons:health-data-sync" />,
        2: <Icon icon="healthicons:health-data-security" />,
    };

    return (
        <ColorLibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorLibStepIconRoot>
    );
}

const steps = ["Doctor Reviewing", "Review Done"];

const StatusModal = (props: any) => {
    const { smOpen, handlesClose, report } = props;

    return (
        <div>
            <Modal
                open={smOpen}
                onClose={handlesClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack sx={{ width: "100%" }} spacing={4}>
                        <Stepper
                            alternativeLabel
                            activeStep={report.status ? 1 : 0}
                            connector={<ColorLibConnector />}
                        >
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel
                                        StepIconComponent={ColorLibStepIcon}
                                    >
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Stack>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 3,
                        }}
                    >
                        <Button onClick={handlesClose} variant="contained">
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default StatusModal;
