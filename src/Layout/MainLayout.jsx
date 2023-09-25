import {Outlet} from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="lg:mx-20 mx-5">
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;