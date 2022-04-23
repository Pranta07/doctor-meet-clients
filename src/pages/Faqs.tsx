// @mui
import { styled } from "@mui/material/styles";
// components
import Page from "../components/Page.tsx";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Faqs() {
  return (
    <Page title="Faqs">
      <RootStyle>faq</RootStyle>
    </Page>
  );
}
