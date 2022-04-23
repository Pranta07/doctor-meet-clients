// @mui
import { styled } from "@mui/material/styles";
// components
import Page from "../components/Page.tsx";
// sections
import { HomeHero, HomeCleanInterfaces } from "./home";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <RootStyle>
        <HomeHero />
        <ContentStyle>
          <HomeCleanInterfaces />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
