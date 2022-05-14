import React from 'react';
import { useEffect } from 'react';
import Footers from '../Footers/Footers';
import Header from '../Header/Header';

const Achievements = () => {
    useEffect(() => {
        document.title = "Achievements";
      }, []);
    return (
        <div>
            <Header />

            <h1>This is Achievements Page</h1>

            <Footers />
        </div>
    );
};

export default Achievements;