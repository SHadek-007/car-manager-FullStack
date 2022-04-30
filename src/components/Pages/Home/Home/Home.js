import React from 'react';
import ManageInventory from '../../ManageInventory/ManageInventory';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ManageInventory></ManageInventory>
        </div>
    );
};

export default Home;