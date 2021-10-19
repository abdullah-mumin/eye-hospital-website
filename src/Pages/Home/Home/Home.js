import React from 'react';
import Branches from '../../Branches/Branches';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Branches></Branches>
        </div>
    );
};

export default Home;