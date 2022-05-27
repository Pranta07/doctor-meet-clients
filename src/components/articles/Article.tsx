import React, { useState } from "react";
import { faArrowRight, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { Card } from "react-bootstrap";
import "./Article.css";
import { IArticle } from "./Articles";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const Article = (props: { key: number; article: IArticle }) => {
  const { img, author, title, _id } = props.article;

  return (
    <RootStyle>
      <Card
        className="m-2 h-100"
        style={{
          borderRadius: "8px",
          padding: "14px",
          display: "block",
        }}
      >
        <div className="position-relative">
          <Card.Img variant="top" src={img} style={{ borderRadius: "8px" }} />
          <span
            className="px-4 py-2 fw-bold"
            style={{
              position: "absolute",
              bottom: "-15px",
              right: "10px",
              borderRadius: "18px",
              backgroundColor: "#00acb1",
              color: "white",
              fontSize: "12px",
            }}
          >
            1 MAY, 2022
          </span>
        </div>
        <Card.Body className="px-0 pt-4 pb-0">
          <p>
            <FontAwesomeIcon className="mx-1 icon" icon={faUserAlt} />
            <span className="text-secondary">{author}</span>
          </p>
          <h5
            style={{
              color: "#005963",
              fontWeight: "bold",
            }}
          >
            {title}
          </h5>
          <Button className="mt-2 mb-0">
            <NavLink to={`/article/${_id}`}>
              Read more <FontAwesomeIcon className="mx-1" icon={faArrowRight} />
            </NavLink>
          </Button>
        </Card.Body>
      </Card>
    </RootStyle>
  );
};

export default Article;
