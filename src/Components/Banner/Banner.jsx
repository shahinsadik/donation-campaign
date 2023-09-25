import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero  -mt-20 min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/v4QydSd/3e0cd466-613e-4826-acf0-4406aa835dcb.png)",
        }}>
        <div className="hero-overlay -z-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-4xl font-bold text-white">
              I Grow By Helping People In Need
            </h1>
            <fieldset className="form-control ">
              <div className="relative mx-20">
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
    </div>
  );
};

export default Banner;
