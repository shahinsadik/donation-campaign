import React from 'react';

import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import AllDonationData from '../AllData/AllData';


const Home = () => {
    const allData= useLoaderData()

    return (
        <div>
            <Banner></Banner>   
            <AllDonationData allData={allData}></AllDonationData>
            
            
        </div>
    );
};

export default Home;