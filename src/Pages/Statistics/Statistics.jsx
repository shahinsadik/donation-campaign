import { useEffect, useState } from 'react';
import { PieChart, pieArcLabelClasses } from "@mui/x-charts"
const Statistics = () => {
  const [donation, setDonation] = useState([]);
  useEffect(()=>{
    const donationAmount = JSON.parse(localStorage.getItem("donation"));
    setDonation(donationAmount || [])
  },[])
  const totalDonations = 12; 
  const yourDonations = donation.length;
  const remainingDonations = totalDonations - yourDonations;

  const data = [
    { value: yourDonations, color: "#00C49F" },
    { value: remainingDonations, color: "#FF444A" },
  ];

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(2)}%`;
  };


    return (
        <div className='border'>
          <div className='border'>
          <div className='lg:flex my-10 lg:justify-center lg:items-center'>
        {donation.length === 0 ? (
          <div className=''>
            <div>
            <PieChart
              series={[
                {
                  outerRadius: 160,
                  data,
                  arcLabel: getArcLabel,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontSize: 20,
                },
              }}
              width={600}
              height={400}
            />
          </div>
          </div>
        ) : (
          <div>
            <PieChart
              series={[
                {
                  outerRadius: 160,
                  data,
                  arcLabel: getArcLabel,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontSize: 20,
                },
              }}
              width={500}
              height={400}
            />
            
          </div>
        )}
      </div>
          </div>
          <div className='bg-slate-500 lg:flex gap-10 justify-center items-center'>
            <div className='flex gap-2 justify-center items-center'>
              <h3 className='font-semibold'>Your Donation</h3>
              <h6 className='p-1 w-20 font-semibold bg-[#00C49F]'></h6>
            </div>
            <div className='flex gap-2 justify-center items-center'>
              <h3 className='font-semibold'>Total Donation</h3>
              <h6 className='p-1 w-20  bg-[#FF444A]'></h6>
            </div>
          </div>
        </div>
    );
};

export default Statistics;