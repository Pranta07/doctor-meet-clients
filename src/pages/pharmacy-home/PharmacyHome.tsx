import React from "react";
import PharmacyProducts from "../../components/pharmacy/pharmacy-products/PharmacyProducts";
import PharmacyBanner from "../../components/pharmacy/pharmacy-banner/PharmacyBanner";
import PharmacySubscribe from "../../components/pharmacy/pharmacy-subscribe/PharmacySubscribe";
// @mui
import { styled } from "@mui/material/styles";
// _mock_

// components
import Page from "../../components/Page";

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
