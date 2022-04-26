import React, { useEffect } from "react";
import { ContextProvider } from "../../contexts/Context";
import Notifications from "./Notifications";
import Sidebar from "./Sidebar";
import VideoPlayer from "./VideoPlayer";
// @mui
import { styled } from "@mui/material/styles";
// _mock_

// components
import Page from "../Page";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  minHeight: "100%",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const VideoChatRoute = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.location.href = window.location + "#loaded";
      window.location.reload();
    }
  }, []);

  return (
    <ContextProvider>
      <Page title="Virtual Meet">
        <RootStyle>
          <div className="container">
            <h1 className="text-center">This is video chat route</h1>
            <VideoPlayer />
            <Sidebar>
              <Notifications />
            </Sidebar>
          </div>
        </RootStyle>
      </Page>
    </ContextProvider>
  );
};

export default VideoChatRoute;
