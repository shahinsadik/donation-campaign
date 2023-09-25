import React from 'react';

import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import AllDonationData from '../AllData/AllData';


const Home = () => {
    const datas= useLoaderData()
// console.log(datas);
    return (
        <div>
            <Banner></Banner>   
            <AllDonationData datas={datas}></AllDonationData>
            
            
        </div>
    );
};

export default Home;