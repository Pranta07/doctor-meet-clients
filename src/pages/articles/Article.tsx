import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import "./Article.css";
interface Article_If {
  id: number;
  img: string;
  title: string;
  description: string;
}

const Article = ({ article }: any) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-3 d-flex justify-content-center">
      <Card style={{ width: "18rem", borderRadius: "5px" }}>
        <Card.Img variant="top" src={article.img} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.description}</Card.Text>
          <button className="btn btn-color">
            Read more <FontAwesomeIcon className="mx-1" icon={faArrowRight} />
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Article;
