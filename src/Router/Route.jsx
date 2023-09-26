import MainLayout from "../Layout/MainLayout";
import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import DonationDetails from "../Pages/DonationDetails/DonationDetails"
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Error/Error";
const myCratedRoute= createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path:"/",
                element: <Home></Home>,
                loader:()=>fetch("../data.json")
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element: <Statistics></Statistics>
            },
            {
                path:"/donation-details/:id",
                element: <DonationDetails></DonationDetails> ,
                loader: ()=>fetch("../data.json")
            },
        ]
    }
])   

export default myCratedRoute;