import React, { useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import AllDonationData from '../AllData/AllData';

const Home = () => {
  const allData = useLoaderData();
  const [searchData, setSearchData] = useState('');

  const handleSearch = (inputValue) => {
    setSearchData(inputValue);
  };

  return (
    <div>
      <Banner handleSearch={handleSearch} />
      <AllDonationData allData={allData} searchData={searchData} />
    </div>
  );
};

export default Home;
