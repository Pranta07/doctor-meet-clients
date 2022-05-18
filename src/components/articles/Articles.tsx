import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Article from "./Article";
import "./articles.css";

export interface IArticle {
    _id: number;
    author: string;
    img: string;
    title: string;
    description: string;
}

const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,

    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

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
                        <Slider {...settings}>
                            {articles.map((article) => (
                                <Article
                                    key={article._id}
                                    article={article}
                                ></Article>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Articles;
