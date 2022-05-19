import React from 'react';
import { Container } from 'react-bootstrap';
import './BookCovidTest.css';
const BookCovidTest = () => {
    return (
        <div className='book-covid-test-container my-5'>
            <Container>
                <div className='d-flex flex-column'>
                    <div className="mt-5 book-covid-new-container">
                        <h6 className='book-covid-subtitle fw-bold'>New</h6>
                    </div>
                    <h1 className="my-3 book-covid-title">Now offering Covid-19 tests <br/>both at lab and home collection.</h1>
                    <button className='btn book-covid-btn'>Book Covid Test</button>
                </div>
            </Container>
        </div>
    );
};

export default BookCovidTest;