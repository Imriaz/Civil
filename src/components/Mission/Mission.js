import React from 'react';
import Header from '../Header/Header';
import { useEffect } from 'react';
import Footers from '../Footers/Footers';

const Mission = () => {
    useEffect(() => {
        document.title = "Our Labs";
      }, []);
    return (
        <div>
            <Header />

            <h1>This Mission Page</h1>

            <Footers />
        </div>
    );
};

export default Mission;