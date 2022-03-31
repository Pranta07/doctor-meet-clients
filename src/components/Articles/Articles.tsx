import React from 'react';
import Article from '../Article/Article';
import './articles.css';

interface Article_If {
    id: number;
    img: string;
    title: string;
    description: string;
}

const articles: Article_If[] = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1550791871-0bcd47c97881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Disease detection, check up in the laboratory',
        description: 'A healthy lifestyle should start from now and also for your skin health.'
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1563233269-7e86880558a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Natural care for healthy facial skin',
        description: 'A healthy lifestyle should start from now and also for your skin health.'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1606166187734-a4cb74079037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Natural care for healthy facial skin',
        description: 'A healthy lifestyle should start from now and also for your skin health.'
    },
];

const Articles = () => {
    return (
        <>
            <h2 className='text-center mt-5'>Checkout Our Latest Articles</h2>
            <hr className="w-25 mx-auto" />

            <div className="container d-flex justify-content-center my-5">
                {
                    articles.map((article) =>
                        <Article key={article.id} article={article}></Article>
                    )
                }
            </div>
        </>
    );
};

export default Articles;