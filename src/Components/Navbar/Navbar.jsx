import { NavLink } from "react-router-dom";
const Navbar = () => {
  const links = (
    <>
      <li className="font-bold text-lg">
        <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-600" : ""
  }>Home</NavLink>
      </li>
      <li className="font-bold text-lg hover:underline hover:text-red-600">
        <NavLink to="/donation " className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-600" : ""
  }>Donation</NavLink>
      </li>
      <li className="font-bold text-lg ">
        <NavLink to="/statistics" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-600" : ""
  }>Statistics</NavLink>
      </li>
    </>
  );
  return (
    <div className="my-5">
      <nav className="lg:flex lg:justify-between">
        <div className=" flex justify-center">
            <img className="w-36" src="../Logo.png" alt="" />
        </div>
        <div className="mt-2">
        <ul className="flex gap-5 justify-center ">{links}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
