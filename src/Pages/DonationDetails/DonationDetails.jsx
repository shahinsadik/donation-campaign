import { useState, useEffect } from 'react';
import { useParams, useLoaderData} from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
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
            swal("Thanks!", "Your donation is successfully!", "success");
        }
        else{
            const isExist=donationAmount.find(amount=>amount.id==id)
            if(!isExist){

                donationAmountAdded.push(...donationAmount, detail)
                localStorage.setItem("donation", JSON.stringify(donationAmountAdded))
                swal("Thanks!", "Your donation is successfully!", "success")
            }
            else{
                sweetAlert("Already Donated", "Please try another donation!", "error");
            }
            // console.log(isExist);

        }
        // console.log(detail);

    }


    useEffect(()=>{
       const findDetails= details?.find(detail=> detail.id == id)
       setDetail(findDetails)
        // console.log(findDetails);
    },[id, details])
    return (
        <div>
            
            <div className=''>
                <div >
                    <img src={detail.Picture} className='  w-full rounded-lg' alt="" />
                    
                </div>
                <div className='lg:h-20 rounded-b-lg lg:bg-black lg:bg-opacity-40 hover:bg-opacity-60  lg:-mt-20 -mt-16 relative w-full lg:flex lg:items-center '>
                    <div className=' '>
                    <Link onClick={handleDonation} style={{backgroundColor:detail.Text_button_bg}} className="lg:ml-5 ml-2 lg:text-xl font-semibold rounded-md lg:p-2 p-1 text-white">Donate: $ {detail.Price}</Link>
                    </div>
                    </div>
                <div className='mt-20'>
                <h2 className='text-4xl font-bold mb-5'>{detail.Title}</h2>
                <p>{detail.Description}</p>
                </div>
                
            </div>

        </div>
    );
};

export default DonationDetails;