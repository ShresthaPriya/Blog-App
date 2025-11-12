// import React from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/images/FooterLogo.png'
import { FaEnvelope } from "react-icons/fa"
const Footer = ()=> {
  return (
    
    <div className="flex flex-col mt-[2rem] bg-[#F6F6F7] border-t-[0.2rem] border-[#E8E8EA]">
        <div className="grid grid-cols-4 justify-around m-[1rem] gap-3">
            <div className="flex flex-col gap-[1rem]">
                <h1 className="Font-semibold text-lg text-[#181A2A]">About</h1>
                <p className="text-base font-regular text-[#696A75]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <p className="text-base font-regular text-[#181A2A]"><span className="font-semibold text-base text-black">Email</span> : info@jstemplate.net</p>
                <p className="text-base font-regular text-[#181A2A]"><span className="font-semibold text-base text-black">Phone</span>: 880 123 456 789</p>
            </div>
            <div className="flex flex-col gap-[1rem]">
                <h1 className="Font-semibold text-lg text-[#181A2A]">Quick Links</h1>
                <Link to="Home">Home</Link>
                <Link to="About">About</Link>
                <Link to="Blog">Blog</Link>
                <Link to="Archived">Archived</Link>
                <Link to="Author">Author</Link>
                <Link to="Contact">Contact</Link>
            </div>
             <div className="flex flex-col gap-[1rem]">
                <h1 className="Font-semibold text-lg text-[#181A2A]">Category</h1>
                <Link to="Home">Lifestyle</Link>
                <Link to="About">Technology</Link>
                <Link to="Blog">Travel</Link>
                <Link to="Archived">Business</Link>
                <Link to="Author">Economy</Link>
                <Link to="Contact">Sports</Link>
            </div>
            <div className="flex flex-col bg-white rounded-xl p-[2rem] gap-[1rem] relative">
                <h1 className="text-xl font-semibold">Weekly Newsletter</h1>
                <p className="">Get blog articles and offers via email</p>
                <input 
                type="email" 
                placeholder="Your Email"
                className="text-[#97989F] text-base border-[0.2rem] border-[#DCDDDF] rounded-md p-[0.5rem] "
                />
                 <FaEnvelope className="absolute right-10 bottom-30"/>
                <button className="text-center text-white text-base text-md bg-[#4B6BFB] p-[0.5rem] rounded-md">Subscribe</button>

            </div>
        </div>
        <div className="flex justify-between border-t-[1px] border-[#DCDDDF] m-[1rem] p-[1rem]">
        <div className="flex justify-center items-center gap-2">
            <img src={logo} alt="Footer Logo" className="text=[32px]"/>
            <div className="flex flex-col">
            <p className="font-bold text-lg">Meta<span className="font-extrabold">Blog</span></p>
            <p className="font-regular text-base">© JS Template 2023. All Rights Reserved.</p>
            </div>
        </div>
        <div className="flex justify-center items-center gap-[0.5rem]">
            <Link to="Terms" className="p-1.5 border-r-[1px] border-black">Terms of Use</Link>
            <Link to="Privacy" className="p-1.5 border-r-[1px] border-black">Privacy Policies</Link>
            <Link to="Cookie">Cookie Policies</Link>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
