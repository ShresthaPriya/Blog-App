import logo from "../assets/images/Union.png";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";
import clsx from "clsx";
import { useAuth } from "../context/authContext";
import profile from "../assets/profile/profile.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { user, logout } = useAuth();
  const isAuthenticated = !!user;

  const toggleHamburger = () => setMenu(!menu);

  return (
    <div className="flex justify-between items-center mt-9 mb-9 relative">
      {/* Left: Logo */}
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="h-10" />
        <h1 className="font-semibold text-2xl">
          <span>Meta</span>
          <span className="font-bold">Blog</span>
        </h1>
      </div>

      {/* Middle: Nav Links */}
      <nav className="hidden xl:flex gap-6 items-center text-[#3B3C4A] font-medium">
        <Link to="/home">Home</Link>
        <Link to="/blog">Blog</Link>
        {/* <Link to="/singlepost">Single Post</Link> */}
        {isAuthenticated && user?.role === "author" && (
          <Link to="/add-post" className="text-blue-600 font-semibold">Add Post</Link>
        )}
      </nav>

      <div className="flex items-center gap-4">
        <div className="relative bg-[#F4F4F5] rounded-sm px-3 py-2">
          <input type="text" placeholder="Search" className="bg-transparent outline-none w-48" />
          <FaSearch className="absolute right-3 top-3 text-[#52525B]" />
        </div>

        {!isAuthenticated && <Link to="/login" className="text-[#3B3C4A] font-medium">Login</Link>}

        {isAuthenticated && (
          <div className="relative group">
            <img src={user.profile ? `/uploads/${user.profile}` : profile} alt="profile" className="w-8 h-8 rounded-full cursor-pointer" />
            <div className="absolute right-0 mt-2 w-48 bg-[#ffffff] rounded shadow-md hidden group-hover:block z-50">
              <div className="p-2">
                <p className="font-semibold truncate">{user.name}</p>
                <p className="text-sm text-gray-600 truncate">{user.email}</p>
              </div>
              <div className="border-t mt-2 pt-2 pl-2">
                {user.role === "author" && <Link to="/my-posts" className="block py-1 text-blue-600 hover:underline">My Posts</Link>}
                <Link to="/profile" className="block py-1 hover:underline">Profile</Link>
                <button onClick={logout} className="w-full text-left py-1 text-red-500 hover:underline">Logout</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Hamburger */}
      <button className="xl:hidden text-2xl ml-4" onClick={toggleHamburger}><FaBars /></button>

      {/* Mobile Menu */}
      {menu && (
        <div className={clsx("absolute mt-9 top-20 right-0 shadow-md flex flex-col items-center gap-4 py-6 text-[#3B3C4A] font-medium xl:hidden z-50 bg-white transition-all duration-300", menu ? "w-[250px] opacity-100" : "w-0 opacity-0 overflow-hidden")}>
          <Link to="/home">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/singlepost">Single Post</Link>
          {isAuthenticated && user?.role === "author" && <Link to="/add-post">Add Post</Link>}

          <div className="relative bg-[#F4F4F5] rounded-sm px-3 py-2 w-11/12">
            <input type="text" placeholder="Search" className="bg-transparent outline-none w-full" />
            <FaSearch className="absolute right-3 top-3 text-[#52525B]" />
          </div>

          {!isAuthenticated && <Link to="/login">Login</Link>}
          {isAuthenticated && (
            <>
              {user.role === "author" && <Link to="/my-posts">My Posts</Link>}
              <Link to="/profile">Profile</Link>
              <button onClick={logout} className="text-red-500">Logout</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
