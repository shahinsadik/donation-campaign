/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const AllDonationData = ({ allData, searchTerm }) => {
  const filteredData = allData.filter((data) => {
    return data.Category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="my-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 rounded-lg">
        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <Link to={`/donation-details/${data.id}`} key={data.id}>
              <div style={{ backgroundColor: data.Card_bg }} className="rounded-lg">
                <div>
                  <img className="h-48 w-full rounded-t-lg" src={data.Picture} alt="" />
                </div>
                <div className="mx-2 p-3  ">
                  <span
                    style={{ backgroundColor: data.Category_bg, color: data.Text_button_bg }}
                    className="text-sm p-1 rounded-md">
                    {data.Category}
                  </span>
                  <h2 style={{ color: data.Text_button_bg }} className="text-xl my-1 font-semibold">
                    {data.Title}
                  </h2>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-center Search Item Not Found text-lg font-bold text-red-700">Search Item Not Found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDonationData;
