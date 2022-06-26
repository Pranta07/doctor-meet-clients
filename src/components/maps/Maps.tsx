import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));

const containerStyle = {
  width: "100vw",
  height: "500px",
};

const center = {
  lat: 23.7861979,
  lng: 90.4026151,
};

const Maps = () => {
  return (
    <RootStyle>
      <div className="text-center mb-5">
        <h4>Also Feel Free To Visit Our Head Office.</h4>
        <h6>Motijheel, Dhaka,Bangladesh.</h6>
      </div>
    </RootStyle>
  );
};

export default Maps;
