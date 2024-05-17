import React from 'react'

import logo from '../images/logo.png'
import { useParams } from 'react-router-dom'

const Track = () => {
    const {id} = useParams()

    const array = [
        {
            head: "Origin:",
            text: "China"
        },
        {
            head: "Status:",
            text: "On Hold"
        },
        {
            head: "Carrier:",
            text: "DHL"
        },
        {
            head: "Weight:",
            text: "33"
        },
        {
            head: "Carrier Refernce No.:",
            text: "12333233"
        },
        {
            head: "Qty:",
            text: "China"
        },
        {
            head: "Total Freight:",
            text: "4"
        },
        {
            head: "Departure Date:",
            text: "2024-04-22"
        },
        {
            head: "Package:",
            text: "China"
        },
        {
            head: "Destination:",
            text: "US"
        },
        {
            head: "Shipment Mode:",
            text: "Air"
        },
        {
            head: "Product",
            text: "A black big bag"
        },
        {
            head: "Payment Mode",
            text: "Cash"
        },
        {
            head: "Expected Delivery Date",
            text: "2024-05-22"
        },
      
        
    ]



  return (
    <div>
        <div className=' bg-white py-48 px-4 lg:px-20 flex justify-center ' >
            <div className=' flex flex-col  w-full'>
                <div className='flex flex-col items-center py-4'>
                    <img src={logo} alt='' />
                    <p>{id}</p>
                </div>

                <div className='w-full grid lg:grid-cols-2 justify-between '>
                    <div className=' flex flex-col items-center pb-6 lg:pb-0 '>
                        <div >
                            <p className='font-semibold underline  text-[20px] py-2'>Sipper's Information</p>
                            <p>Name: John Mark </p>
                            <p>Address: wishville</p>
                            <p>Phone: 1233333333</p>
                            <p>Email: john@mail.com</p>
 
                        </div>
                    </div>
                    <div className=' flex flex-col items-center'>
                        <div >
                            <p className='font-semibold underline  text-[20px] py-2'>Receiver's Information</p>
                            <p >Name: John Mark </p>
                            <p>Address: wishville</p>
                            <p>Phone: 1233333333</p>
                            <p>Email: john@mail.com</p>

                        </div>
                    </div>
                </div>
                <div className='flex items-center my-4 justify-center w-[100%] h-[60px] bg-gray-500 text-white text-[20px]'>
                    <p className='text-center'>SHIPMENT STATUS - {array[1].text}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-center  font-bold underline  text-[20px] py-6'>Shipment Information</p>

                    <div>
                        <div className='grid lg:grid-cols-2 items-center'>
                            {
                                array.map((item) => (
                                    <div className='flex flex-col gap-1 pb-4  items-center'>
                                        <p className='font-bold '>{item.head}</p>
                                        <p>{item.text}</p>
                                    </div>

                                ))
                            }
                        </div>

                        <div></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Track