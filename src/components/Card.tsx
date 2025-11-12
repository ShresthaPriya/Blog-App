// import React from 'react'
import type {CardProps} from '../types/card'
// import img1 from '../assets/cards/img1.png'



const Card = ({ data }: {data:CardProps}) =>{
  return (
    
    <div className=' border-1 border-[#E8E8EA] rounded-2xl m-10 p-[1rem]'>
     
            {/* <img src={image} alt='profile' className='w-[32px]'/> */}
            <img src={data.image} alt="logo" className='w-200 h-50 rounded-xl'/>
            <button className='bg-[#4B6BFB0D] top-90 text-[#4B6BFB] mt-[2rem] p-2 rounded-md block'>Technology</button>
                       <h1 className='text-center font-[500] text-2xl top-100 text-black mt-[2rem] text-start'>The Impact of Technology on the Workplace:<br/>How Technology is Changing</h1>
                       <div className="flex justify-between gap-2">
                        <div className="flex items-center text-center gap-2 mt-[2rem]" >
                        <img src={data.profilePic} alt='profile' className='w-[32px] rounded-full'/>
                        <p className="font-[Work Sans] text-base font-medium text-[#696A75]">{data.profileName}</p>
                       
                        <p className="font-[Work Sans] text-base font-normal text-[#696A75] ml-[3rem]">{data.fullDate}</p>
                       </div>
                       </div>

    </div>
    
  )
}

export default Card;