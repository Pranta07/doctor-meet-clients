import React, { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import PremiumMembership from "./PremiumMembership";
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
    fetch("./premiumMembership.json")
      .then((res) => res.json())
      .then((data) => setPremiumMemberships(data));
  }, []);
  return (
    <Page title="Premium Membership" sx={{ height: 1 }}>
      <RootStyle>
        <Container>
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
