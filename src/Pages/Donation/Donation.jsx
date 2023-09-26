import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import DonationCart from "../DonationCart/DonationCart";

const Donation = () => {
  const [donation, setDonation] = useState(null);
  const [notFound, setNotFound] = useState("");
  const [isShow, setIsShow]=useState(false);

  useEffect(() => {
    const donationAmount = JSON.parse(localStorage.getItem("donation"));
    if (donationAmount) {
      setDonation(donationAmount);
    } 
    else {
      setNotFound("No Data Found");
    // console.log("No data");
    }
  }, []);

  return (
    <div> { notFound ? <p>{notFound}</p>
       : 
        <div>
          <div className="grid mt-10 lg:grid-cols-2 grid-cols-1 gap-5">
            {donation?.map((donate) => (
              <div key={donate.id} className="">
                <div
                  style={{ backgroundColor: donate.Card_bg }}
                  className=" flex gap-2">
                  <div>
                    <img
                      className="h-48 w-52 rounded-l-lg "
                      src={donate.Picture}
                      alt=""
                    />
                  </div>
                  <div className="mx-2  ">
                    <p className="my-5">
                      <span
                        style={{
                          backgroundColor: donate.Category_bg,
                          color: donate.Text_button_bg,
                        }}
                        className=" text-sm p-1 rounded-md">
                        {donate.Category}
                      </span>
                    </p>
                    <h2
                      style={{ color: donate.Text_button_bg }}
                      className=" lg:text-xl my-2 font-bold ">
                      {donate.Title}
                    </h2>
                    <p
                      style={{ color: donate.Text_button_bg }}
                      className="text-base font-bold ">
                      $ {donate.Price}.00
                    </p>
                    <br />
                    <Link to={`/donation-details/${donate.id}`}
                      className="p-1  text-base px-2 rounded-md font-semibold text-white"
                      style={{ backgroundColor: donate.Text_button_bg }}>
                      ViewDetails
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
      <div className="flex items-center justify-center">
       <div>
       
        <button onClick={()=>setIsShow(!isShow)} className="btn btn-primary">See More</button>
       </div>
      </div>
    </div>
  );
};

export default Donation;
