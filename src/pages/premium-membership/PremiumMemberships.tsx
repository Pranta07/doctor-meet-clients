import React, { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import PremiumMembership from "./PremiumMembership";
import banner from '../../assets/img/premium-membership-banner.jpg'
// components
import Page from "../../components/Page";
import styled from "@emotion/styled";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const PremiumMemberships = () => {
  const [premiumMemberships, setPremiumMemberships] = useState([]);
  useEffect(() => {
    fetch("https://floating-basin-02241.herokuapp.com/premiumFacilities")
      .then((res) => res.json())
      .then((data) => setPremiumMemberships(data));
  }, []);
  return (
    <Page title="Premium Membership" sx={{ height: 1 }}>
      <div className="premium-membership-banner-container">
      <img src={banner} alt="banner" className="w-100" style={{height:"400px"}} />
      {/* <div className="premium-image-transparent-bg"></div> */}
      </div>
      
      <RootStyle>

        <Container>
          <h1 className="text-center" style={{fontWeight:"600",fontFamily: "'Inter', sans-serif",color:"#576574"}}>Choose a </h1>
          <h1 style={{fontWeight:"600",fontFamily: "'PT Sans', sans-serif"}} className="text-center mb-5">
            Subcription Box
          </h1>
          <CardGroup>
            {premiumMemberships.map((premiumMembership: any, index: number) => (
              <PremiumMembership
                key={index}
                premiumMembership={premiumMembership}
              ></PremiumMembership>
            ))}
          </CardGroup>
        </Container>
      </RootStyle>
    </Page>
  );
};

export default PremiumMemberships;
