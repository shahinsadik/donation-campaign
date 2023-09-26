import React, { useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import AllDonationData from '../AllData/AllData';

const Home = () => {
  const allData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (inputValue) => {
    setSearchTerm(inputValue);
  };

  return (
    <div>
      <Banner handleSearch={handleSearch} />
      <AllDonationData allData={allData} searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
