import React from "react";
import PharmacyProducts from "../pharmacy-product/PharmacyProducts";
import PharmacyBanner from "../pharmacy-banner/PharmacyBanner";
import PharmacySubscribe from "../pharmacy-subscribe/PharmacySubscribe";
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

const PharmacyHome = () => {
  return (
    <Page title="Pharmacy">
      <RootStyle>
        <PharmacyBanner />
        <PharmacyProducts />
        <PharmacySubscribe />
      </RootStyle>
    </Page>
  );
};

export default PharmacyHome;
