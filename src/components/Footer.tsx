// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/images/FooterLogo.png";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col mt-8 bg-[#F6F6F7] border-t-[0.2rem] border-[#E8E8EA]">
      <div className="grid grid-cols-1 justify-center text-center gap-12 p-15 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg text-[#181A2A]">About</h1>
          <p className="text-base font-regular text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="text-base font-regular text-[#181A2A]">
            <span className="font-semibold text-base text-black">Email</span> :
            info@jstemplate.net
          </p>
          <p className="text-base font-regular text-[#181A2A]">
            <span className="font-semibold text-base text-black">Phone</span>:
            880 123 456 789
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg text-[#181A2A]">Quick Links</h1>
          <Link to="Home">Home</Link>
          <Link to="About">About</Link>
          <Link to="Blog">Blog</Link>
          <Link to="Archived">Archived</Link>
          <Link to="Author">Author</Link>
          <Link to="Contact">Contact</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-lg text-[#181A2A]">Category</h1>
          <Link to="Home">Lifestyle</Link>
          <Link to="About">Technology</Link>
          <Link to="Blog">Travel</Link>
          <Link to="Archived">Business</Link>
          <Link to="Author">Economy</Link>
          <Link to="Contact">Sports</Link>
        </div>
        <div className="flex flex-col bg-white rounded-xl p-8 gap-4 relative">
          <h1 className="text-xl font-semibold">Weekly Newsletter</h1>
          <p className="">Get blog articles and offers via email</p>
          <input
            type="email"
            placeholder="Your Email"
            className="text-[#97989F] text-base border-[0.2rem] border-[#DCDDDF] rounded-md p-2 "
          />
          <FaEnvelope className="absolute right-10 bottom-26 md:bottom-26 md:b xl:bottom-26" />
          <button className="text-center text-white text-base text-md bg-[#4B6BFB] p-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-between border-t border-[#DCDDDF] m-4 p-4">
        <div className="flex justify-center items-center gap-2">
          <img src={logo} alt="Footer Logo" className="text=[32px]" />
          <div className="flex flex-col">
            <h1 className="fond-semibold text-2xl">
              <span className="font-regular">Meta</span>
              <span className="font-bold">Blog</span>
            </h1>
            <p className="font-regular text-base">
              © JS Template 2023. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 ">
          <Link
            to="Terms"
            className="p-0.5 border-b border-black md:p-1.5 md:border-b-0 md:border-r"
          >
            Terms of Use
          </Link>
          <Link
            to="Privacy"
            className="p-0.5 border-b border-black md:p-1.5 md:border-b-0 md:border-r"
          >
            Privacy Policies
          </Link>
          <Link to="Cookie">Cookie Policies</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
