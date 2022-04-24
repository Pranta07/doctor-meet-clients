import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  Stack,
} from "@mui/material";
// routes
import { PATH_PAGE } from "../../routes/paths";
// components
import Logo from "../../components/Logo";
import Footer from "../../components/footer/Footer";

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "Minimal",
    children: [
      { name: "About us", href: PATH_PAGE.about },
      { name: "Contact us", href: PATH_PAGE.contact },
      { name: "FAQs", href: PATH_PAGE.doctors },
    ],
  },
  {
    headline: "Legal",
    children: [
      { name: "Terms and Condition", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    headline: "Contact",
    children: [
      { name: "support@minimals.cc", href: "#" },
      { name: "Los Angeles, 359  Hidden Valley Road", href: "#" },
    ],
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Footer />
      </Container>
    </RootStyle>
  );
}
