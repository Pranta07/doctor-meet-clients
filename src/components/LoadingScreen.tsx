import PropTypes from "prop-types";
import { m } from "framer-motion";
// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import ProgressBar from "./ProgressBar";

//
import loadingGif from "../assets/loading-sc2.gif";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }: any) => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: "100%",
  height: "100%",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

LoadingScreen.propTypes = {
  isDashboard: PropTypes.bool,
};

export default function LoadingScreen({ isDashboard, ...other }: any) {
  return (
    <RootStyle>
      <img src={loadingGif} alt="" />
    </RootStyle>
  );
}
