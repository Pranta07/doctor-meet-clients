import React from "react";
import { ContextProvider } from "../../contexts/Context";
import Notifications from "./Notifications";
import Sidebar from "./Sidebar";
import VideoPlayer from "./VideoPlayer";
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

const VideoChatRoute = () => {
 

  return (
    <ContextProvider>
      <Page title="Virtual Meet">
        <RootStyle>
          <div className="container">
            <h4 className="text-center">This is video chat route</h4>
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
