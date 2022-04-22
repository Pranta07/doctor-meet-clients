import React from "react";
import { PharmacyProducts, PharmacyBanner, PharmacySubscribe } from "./index";

const PharmacyHome = () => {
  return (
    <>
      <PharmacyBanner />
      <PharmacyProducts />
      <PharmacySubscribe />
    </>
  );
};

export default PharmacyHome;
