import { useState, useEffect } from 'react';
import { useParams, useLoaderData} from 'react-router-dom';
import { Link } from 'react-router-dom';
const DonationDetails = () => {
    const [detail, setDetail]= useState({})
    const {id}= useParams()
    const details= useLoaderData()
    
    const handleDonation=()=>{
        const donationAmountAdded= [];
        const donationAmount= JSON.parse(localStorage.getItem("donation"))
        if(!donationAmount){
            donationAmountAdded.push(detail)
            localStorage.setItem("donation", JSON.stringify(donationAmountAdded))
            alert("Your Donation is Successfully")
        }
        else{
            donationAmountAdded.push(...donationAmount, detail)
            localStorage.setItem("donation", JSON.stringify(donationAmountAdded))
            alert("Your Donation is Successfully")
        }
        console.log(detail);

    }


    useEffect(()=>{
       const findDetails= details?.find(detail=> detail.id == id)
       setDetail(findDetails)
        console.log(findDetails);
    },[id, details])
    return (
        <div>
            
            <div className=''>
                <div >
                    <img src={detail.Picture} className='  w-full rounded-lg' alt="" />
                    
                </div>
                <div className='mt-20'>
                <h2 className='text-4xl font-bold mb-5'>{detail.Title}</h2>
                <p>{detail.Description}</p>
                </div>
                <div className='lg:h-24 rounded-b-lg lg:bg-black lg:bg-opacity-40 hover:bg-opacity-60 lg:-mt-64 -mt-52   lg:relative w-full lg:flex lg:items-center '>
                    <div className=' '>
                    <Link onClick={handleDonation} className="lg:ml-5 text-xl font-semibold rounded-md p-2 text-white bg-[#ff444a]">Donate: $ {detail.Price}</Link>
                    </div>
                    </div>
            </div>

        </div>
    );
};

export default DonationDetails;