import React from "react";

const Banner = () => {
  return (
    <div>
      <div  className="">
        
        <div className="hero-content  text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 mt-7 text-lg lg:text-4xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>
            <fieldset className=" form-control ">
              <div className="relative lg:mx-20">
                <input
                  type="text"
                  placeholder="Search here"
                  className="input input-bordered w-full text-gray-700"
                />
                <button className="btn hover:bg-[#511e20] bg-[#ff444a] border-none font-semibold text-white absolute top-0 right-0 rounded-l-none">
                  Search
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div  className="bg-cover to-65% md::hidden  relative -z-10 -mt-72  h-[400px] opacity-10"
        style={{
          backgroundImage:
            "url(./banner.png)",
        }}>
        
      </div>
    </div>
  );
};

export default Banner;
