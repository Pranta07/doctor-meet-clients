import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

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
    <>
      <div className="text-center mb-5">
        <h4>Also Fell Free To Visit Our Head Office.</h4>
        <h6>Mothijhil Dhaka,Bangladesh.</h6>
      </div>
    </>
  );
};

export default Maps;
