import logo from "../assets/images/Union.png";
import { Link } from "react-router-dom";
import { FaBars, FaSearch} from "react-icons/fa";
import { useState } from "react";
import clsx from "clsx";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleHamburger = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex justify-between mt-9 mb-9 items-center ">
      <div className="flex gap-2 justify-center items-center">
        <img src={logo} alt="logo" />
        <h1 className="fond-semibold text-2xl">
          <span className="">Meta</span>
          <span className="font-bold">Blog</span>
        </h1>
      </div>
      <nav className="hidden xl:flex justify-around gap-6 font-regular text-base text-[#3B3C4A]">
        <Link to="/home">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/singlepost">Single Post</Link>
      </nav>
      <div className=" hidden xl:block xl:bg-[#F4F4F5] relative rounded-sm m-20">
        <input type="text" placeholder="search" className="p-2" />
        <FaSearch className="absolute right-5 top-3.5 text-[#52525B]" />
      </div>

      <button className="xl:hidden text-2xl mr-20" onClick={toggleHamburger}>
        {<FaBars />}
      </button>

      {menu && (
        <div   className={clsx(
          "absolute mt-9 top-20 right-0 shadow-md flex flex-col items-center gap-4 py-6 text-[#3B3C4A] font-medium xl:hidden z-50 bg-white transition-all duration-300",
          menu ? "w-[250px] opacity-100" : "w-0 opacity-0 overflow-hidden"
        )}>
          <Link to="/home">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/singlepost">Single Post</Link>

          <div className="relative bg-[#F4F4F5] rounded-sm px-3 py-2 w-11/12">
            <input
              type="text"
              placeholder="search"
              className="bg-transparent outline-none w-full"
            />
            <FaSearch className="absolute right-3 top-3 text-[#52525B]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
