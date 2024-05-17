import React from 'react'
import { CiMail } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";


const Footer = () => {
  return (
    <div>
        <div className='bg-[#eb0028] text-white lg:px-20 py-10'>
            <div className='flex lg:flex-row flex-col  justify-between items-center pb-10 '>
                <div className='flex gap-6 '>
           
                     <FcAbout size={50}/>
                     <div className='w-[300px]'>
                      <p className='font-bold t lg:text-[26px]'>About Us</p>
                      <p className='italic text-[13px] lg:text-[16px]'>Crest Courier is a global supplier of transport and logistics solutions. This site is only given to customers that are transporting their products through us </p>

                     </div>
                  </div>
          
                <div className='flex gap-4 text-[18px] items-center pt-6 lg:pt-0'>
                    <CiMail />
                    info@crestcourier.com
                </div>
            </div>
                <hr/>
                <div className='flex justify-center pt-2 text-[12px] lg:text-[16px] '>
                  <p>Crest Courier  &copy; 2023 / ALL RIGHTS RESERVED  </p>
                </div>
        </div>
    </div>
  )
}

export default Footer