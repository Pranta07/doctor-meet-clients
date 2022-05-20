import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Page from "../Page";
import Articles from "./Articles";
import "./ViewArticale.css";

const ViewArticale = () => {
  let [articale, setArticale] = useState<any>({});
  let [dateDecode, setDate] = useState<string | number>(0);
  let [dateDay, setDateDay] = useState<string | number>(0);
  let [dateMount, setDateMounth] = useState<string | number>(0);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/article/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Article[0]);
        setArticale(data.Article[0]);
        let dateDecode = new Date(data.Article[0].createdAt);
        setDate(dateDecode.getFullYear());
        setDateDay(dateDecode.getDate());
        setDateMounth(dateDecode.getMonth());
      });
  }, [id]);

  const RootStyle = styled("div")(() => ({
    height: "100%",
    marginTop: "200px",
    marginBottom: "200px",
  }));

  return (
    <Page title="Article">
      <RootStyle>
        <div
          className="my-5 text-center"
          style={{
            backgroundColor: "#f5f5f5",
            padding: "100px",
            marginBottom: "50px",
          }}
        >
          <h1> Articale </h1>
          <span>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </span>
          {" > "} <span> Articale </span>
        </div>

        <Container sx={{ marginTop: "120px" }}>
          <Grid
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
              boxShadow:
                "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
            }}
          >
            <Grid lg={6} md={6} sm={6}>
              <div className="p-5">
                <h2 style={{ color: "#2c90b9" }}> {articale.title} </h2>
                <h6 style={{ color: "#e3366d" }}> {articale.author} </h6>
                <div
                  className="desc"
                  dangerouslySetInnerHTML={{ __html: articale.description }}
                ></div>
              </div>
            </Grid>
            <Grid lg={6} md={6} sm={6}>
              <img className="responsive-img" src={articale.img} alt="" />
            </Grid>
          </Grid>
          <div className="date-fuild">
            <p className="my-auto">
              {dateDecode} / {dateDay} / {dateMount}
            </p>
          </div>
        </Container>
        <Articles />
      </RootStyle>
    </Page>
  );
};

export default ViewArticale;
