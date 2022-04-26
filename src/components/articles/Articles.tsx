import React from "react";
import Article from "./Article";
import "./articles.css";

interface Article_If {
  id: number;
  img: string;
  title: string;
  description: string;
}

const articles: Article_If[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1550791871-0bcd47c97881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Disease detection, check up in the laboratory",
    description:
      "A healthy lifestyle should start from now and also for your skin health.In this case, the role of the health laboratory is very important to ",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1563233269-7e86880558a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Natural care for healthy facial skin",
    description:
      "A healthy lifestyle should start from now and also for your skin health.In this case, the role of the health laboratory is very important to",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1606166187734-a4cb74079037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Natural care for healthy facial skin",
    description:
      "A healthy lifestyle should start from now and also for your skin health.In this case, the role of the health laboratory is very important to",
  },
];

const Articles = () => {
  return (
    <>
      <div className="dot-b-section">
        <div className="artical-section">
          <h2 className="text-center fw-bold mt-5">
            Checkout Our Latest Articles
          </h2>
          <hr className="hr-w mx-auto" />

          <div className="container my-5 dot-section p-3">
            <div className="row mx-auto  ">
              {articles.map((article) => (
                <Article key={article.id} article={article}></Article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
