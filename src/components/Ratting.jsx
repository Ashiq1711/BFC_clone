import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
function Ratting() {
  return (
    <div className=' relative h-[448px] w-full bg-red-400 flex justify-center flex-col overflow-hidden'>
        <div className='  '>

        <div className=' '>
            <img className=' w-full  bg-contain bg-center' src="public/banner3.jpg" alt="" />
       
        </div>
        </div>
        <div className='h-[448px] opacity-80  absolute bg-black w-full'>
        <div className='  h-[448px]'>

        <h1 className='text-white mx-auto text-center text-[25px] font-font font-medium tracking-[2px] mt-44'>MR. SAKLAINE</h1>
        <div className='flex mt-3 justify-center'>

        <FaStar className='  mr-3 text-[#ffc80a] text-[14px]' />
        <FaStar className='  mr-3 text-[#ffc80a] text-[14px]' />
        <FaStar className='  mr-3 text-[#ffc80a] text-[14px]' />
        <FaStar className='  mr-3 text-[#ffc80a] text-[14px]' />
        <FaStar className='  mr-3 text-[#ffc80a] text-[14px]' />
        
        </div>
        <div className=' flex justify-center items-baseline mt-5'>
        <FaQuoteLeft className='text-[30px] text-white'/>
            <h1 className='text-white text-[18px]  font-font  tracking-[2px]'>Best Fried Chicken Items in the Town</h1>
            <FaQuoteRight className='text-[30px] text-white ' />
    
    </div>
        </div>
        </div>
    </div>
  )
}

export default Ratting