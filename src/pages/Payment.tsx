// @mui
import { styled } from "@mui/material/styles";
// // hooks
// import useResponsive from '../hooks/useResponsive';
// components
import Page from "../components/Page.tsx";
// sections

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  minHeight: "100%",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Payment() {
  // const isDesktop = useResponsive('up', 'md');

  return (
    <Page title="Payment">
      <RootStyle>payment</RootStyle>
    </Page>
  );
}
