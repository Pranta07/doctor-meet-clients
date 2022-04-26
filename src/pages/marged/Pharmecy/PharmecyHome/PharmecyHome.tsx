import React from "react";
import Pharmecy_Products from "../PharmecyProducts/Pharmecy_Products";
import Pharmecy_Banner from "../Pharmecy_Banner/Pharmecy_Banner";
import Pharmecy_subscribe from "../Pharmecy_subscribe/Pharmecy_subscribe";
// @mui
import { styled } from "@mui/material/styles";
// _mock_

// components
import Page from "../../../../components/Page";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  minHeight: "100%",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const PharmecyHome = () => {
  return (
    <Page title="Pharmacy">
      <RootStyle>
        <Pharmecy_Banner />
        <Pharmecy_Products />
        <Pharmecy_subscribe />
      </RootStyle>
    </Page>
  );
};

export default PharmecyHome;
