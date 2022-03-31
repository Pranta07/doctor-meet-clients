import React from 'react';
import { Button, Card } from 'react-bootstrap';

interface Article_If {
    id: number;
    img: string;
    title: string;
    description: string;
}

const Article = ({ article }: any) => {
    return (
        <div className="mx-3">
            <Card style={{ width: '18rem', borderRadius: '5px', boxShadow: '0px -3px 3px 3px whitesmoke' }}>
                <Card.Img variant="top" src={article.img} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>
                        {article.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Article;