// import React from 'react';
// import { Link } from "react-router-dom";
// const DonationCart = ({donate}) => {
//     return (
//         <div>
//             <div>
//           <div className="grid mt-10 lg:grid-cols-2 grid-cols-1 gap-5">
//             {donate?.map((donated) => (
//               <div key={donated.id} className="">
//                 <div
//                   style={{ backgroundColor: donated.Card_bg }}
//                   className=" flex gap-2">
//                   <div>
//                     <img
//                       className="h-48 w-52 rounded-l-lg "
//                       src={donated.Picture}
//                       alt=""
//                     />
//                   </div>
//                   <div className="mx-2  ">
//                     <p className="my-5">
//                       <span
//                         style={{
//                           backgroundColor: donated.Category_bg,
//                           color: donated.Text_button_bg,
//                         }}
//                         className=" text-sm p-1 rounded-md">
//                         {donated.Category}
//                       </span>
//                     </p>
//                     <h2
//                       style={{ color: donated.Text_button_bg }}
//                       className=" lg:text-xl my-2 font-bold ">
//                       {donated.Title}
//                     </h2>
//                     <p
//                       style={{ color: donate.Text_button_bg }}
//                       className="text-base font-bold ">
//                       $ {donated.Price}.00
//                     </p>
//                     <br />
//                     <Link
//                       className="p-1  text-base px-2 rounded-md font-semibold text-white"
//                       style={{ backgroundColor: donated.Text_button_bg }}>
//                       ViewDetails
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         </div>
//     );
// };

// export default DonationCart;