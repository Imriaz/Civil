import React from 'react';
import Header from '../Header/Header';
import { useEffect } from 'react';
import Footers from '../Footers/Footers';

const Undergraduate = () => {
    useEffect(() => {
        document.title = "Undergraduate";
      }, []);
    return (
        <div>
            <Header />
        `      <h1>Undergraduate Course Details</h1>`
            <Footers />
        </div>
    );
};

export default Undergraduate;