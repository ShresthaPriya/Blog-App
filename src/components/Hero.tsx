import React from 'react'
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/images/backgroundImg.jpg'
import profile from '../assets/images/profile.png'

const Hero : React.FC = ()=>{
  return (
    <div className="">
        
            <h1 className='text-center font-[500] text-2xl'>Page Title</h1>
            <div className="flex justify-center items-center gap-2 mt-5">
             <Link to="/Home">Home</Link>
             <span>|</span>
             

             <Link to="/link">Link to</Link>
            </div>
        
        <div className="flex justify-center items-center mt-10 relative">
           <img src={backgroundImg} alt="logo" className='w-400 h-200 rounded-md'/>
           <div className='flex-col absolute left-20'>
           <button className='bg-[#4B6BFB] top-90 text-white p-2 rounded-md block'>Technology</button>
           <h1 className='text-center font-[500] text-2xl top-100 text-white mt-[2rem] text-start'>The Impact of Technology on the Workplace:<br/>How Technology is Changing</h1>
           <div className="flex justify-between gap-2">
            <div className="flex items-center text-center gap-2 mt-[2rem]" >
            <img src={profile} alt='profile' className='w-[32px]'/>
            <p className="font-[Work Sans] text-white">Tracey Wilson</p>
           
            <p className="font-[Work Sans] text-white ml-[2rem]">August 20, 2022</p>
           </div>
           </div>

          
           </div>
        </div>
    </div>
    
  );
}

export default Hero
