import React, { useState, useEffect } from "react";
import Article from "./Article";
import "./articles.css";

export interface IArticle {
    _id: number;
    author: string;
    img: string;
    title: string;
    description: string;
}

/* const articles: IArticle[] = [
    {
        id: 1,
        author: "Rebeca Gilbert",
        img: "https://images.unsplash.com/photo-1550791871-0bcd47c97881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Disease detection, Check up in the laboratory...",
        description:
            "A healthy lifestyle should start from now and also for your skin health.In this case, the role of the health laboratory is very important to ",
    },
    {
        id: 2,
        author: "Adam Smith",
        img: "https://images.unsplash.com/photo-1563233269-7e86880558a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Natural care for healthy facial skin...",
        description:
            "A healthy lifestyle should start from now and also for your skin health.In this case, the role of the health laboratory is very important to",
    },
    {
        id: 3,
        author: "Clerk Thompson",
        img: "https://images.unsplash.com/photo-1606166187734-a4cb74079037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Adjusting to life with a spinal cord injury...",
        description:
            "A healthy lifestyle should start from now and also for your skin health.In this case, the role of the health laboratory is very important to",
    },
]; */

const Articles = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/article")
            .then((res) => res.json())
            .then((data) => {
                setArticles(data.result);
            });
    }, []);

    return (
        <>
            <div className="dot-b-section">
                <div className="artical-section">
                    <p
                        className="text-center fw-bold mt-5"
                        style={{ color: "#00acb1" }}
                    >
                        Latest News
                    </p>
                    <h1
                        className="text-center fw-bold"
                        style={{ color: "#005963" }}
                    >
                        Our Insights & Articles
                    </h1>
                    <hr className="hr-w mx-auto" />

                    <div className="container my-5 dot-section p-3">
                        <div className="row mx-auto gx-4">
                            {articles.map((article) => (
                                <Article
                                    key={article._id}
                                    article={article}
                                ></Article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Articles;
