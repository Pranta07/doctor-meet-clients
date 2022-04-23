// @mui
import { styled } from "@mui/material/styles";
// _mock_

// components
import Page from "../components/Page.tsx";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  minHeight: "100%",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Pricing() {
  return (
    <Page title="Pricing">
      <RootStyle>Pricing</RootStyle>
    </Page>
  );
}
