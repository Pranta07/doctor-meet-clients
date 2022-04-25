import React from 'react';
import Pharmecy_Products from '../PharmecyProducts/Pharmecy_Products';
import Pharmecy_Banner from '../Pharmecy_Banner/Pharmecy_Banner';
import Pharmecy_subscribe from '../Pharmecy_subscribe/Pharmecy_subscribe';

const PharmecyHome = () => {
    return (
        <>
         <Pharmecy_Banner/>         
         <Pharmecy_Products/>
         <Pharmecy_subscribe/>   
        </>
    );
};

export default PharmecyHome;