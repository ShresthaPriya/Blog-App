// import React from 'react'
import type { CardProps } from '../types/card'
// import img1 from '../assets/cards/img1.png'

const Card = ({ data }: { data: CardProps }) => {
  return (

    <div className='flex flex-col gap-4 border border-[#E8E8EA] rounded-2xl m-10 p-4'>
      {/* <img src={image} alt='profile' className='w-[32px]'/> */}
      <div className="digg">
      <img src={data.image} alt="logo" className='w-200 h-50 rounded-xl object-cover' />
      </div>
      <div className="flex flex-col gap-4">
      <span className='bg-[#4B6BFB0D] text-[#4B6BFB] p-2 rounded-md w-30'>Technology</span>
      <h1 className='text-start font-medium text-2xl top-100 text-blac'>The Impact of Technology on the Workplace:<br />How Technology is Changing</h1>
      <div className="flex items-center justify-between" >
        <div className='flex items-center gap-2'>
          <img src={data.profilePic} alt='profile' className='w-8 rounded-full' />
          <p className=" text-base font-[1rem] text-[#696A75]">{data.profileName}</p>

        </div>
        <p className="text-base font-normal text-[#696A75] ml-8">{data.fullDate}</p>
        </div>
      </div>

    </div>

  )
}

export default Card;