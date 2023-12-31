import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [notFound, setNotFound] = useState("");
  const [isShow, setIsShow]=useState(false);

  useEffect(() => {
    const donationAmount = JSON.parse(localStorage.getItem("donation"));
    if (donationAmount) {
      setDonation(donationAmount);
    } 
    else {
      setNotFound("No Data Found");
    
    }
  }, []);

  return (
    <div> { notFound ? <div className="flex justify-center items-center h-screen"><h1 className="text-4xl font-bold">{notFound}</h1></div>
       : 
        <div>
          <div className="grid mt-10 lg:grid-cols-2 grid-cols-1 gap-5">
            {isShow? donation?.map((donate) => (
              <div key={donate.id} className="">
                <div
                  style={{ backgroundColor: donate.Card_bg }}
                  className=" flex gap-2">
                  <div>
                    <img
                      className="h-48 w-52 object-cover rounded-l-lg "
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
            )):
            donation?.slice(0,4).map((donate) => (
              <div key={donate.id} className="">
                <div
                  style={{ backgroundColor: donate.Card_bg }}
                  className=" flex gap-2">
                  <div>
                    <img
                      className="h-48 w-52 object-cover rounded-l-lg "
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
      <div className="flex items-center justify-center my-10  ">
      <div>
          
          <Link className="">
            <button onClick={() => setIsShow(!isShow)} className={`${donation.length < 5 && "hidden"} ${isShow && "hidden"} font-semibold text-white p-2 bg-green-700 rounded-md mx-2` }>
              See more 
            </button>
          </Link>
          
        </div>
       
      </div>
    </div>
  );
};

export default Donation;
