import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewArticale = () => {
    let [articale,setArticale] = useState<any>({});
    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/article/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.Article[0]);
            setArticale(data.Article[0]);
          });
      }, [id]);

    return (
        <>
            <Container>
                
            </Container>
        </>
    );
};

export default ViewArticale;