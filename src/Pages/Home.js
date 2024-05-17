import React, { useState } from 'react'
import heropics from '../images/heropics.jpg'
import { SlPlane } from "react-icons/sl";
import { GiTowTruck } from "react-icons/gi";
import { GiCargoShip } from "react-icons/gi";
import { TbTrain } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import welcomePic from "../images/welcome.jpg"
import service1 from "../images/service-1.jpg"
import service2 from "../images/service-2.jpg"
import service3 from "../images/service-3.jpg"
import service4 from "../images/service-4.jpg"
import service5 from "../images/service-5.jpg"
import service6 from "../images/service-6.jpg"
import { useNavigate } from 'react-router-dom';




const Home = () => {
 const [text, setText] = useState('')
 const navigate = useNavigate()

 const handleSubmit = (e) => {
    e.preventDefault()
    if(text !== "123892799"){
        alert("Invalid tracking number")
        navigate('/')
    

    } else {
        navigate(`/track/${text}`)

    }

    

 }

    const icons = [
        {id:1, text: "Book Your Air Freight", icon: <SlPlane size={70}/>},
        {id:2, text: "Book Your Road Freight", icon: <GiTowTruck size={70}/>},
        {id:3, text: "Book Your Sea Freight", icon: <GiCargoShip size={70}/>},
        {id:4, text: "Book Your Train Freight", icon: <TbTrain size={70}/>},
 ]

 const welcome = [
    {id:5, head: "100% Safe Delivery", text: "We ensure the safe delivery of packages is my top priority. We take every possible measure to ensure that the packages we deliver arrive at their destination safely and intact.To achieve 100% safe delivery, we use high-quality packaging materials to protect the items from damage during transit. We also make sure to handle the packages carefully and avoid any rough handling that could cause harm."},
    {id:6, head: "Weather Insurance", text: "we understand that weather can be a significant factor in the safe and timely delivery of shipments. Even with careful planning, unexpected weather events can impact delivery schedules and potentially cause damage to shipments.To address this issue, we offer weather insurance as an additional option to our clients. This insurance covers losses or damages resulting from unforeseen weather conditions such as hurricanes, floods, heavy snow, and other severe weather events."},
    {id:7, head: "Fast & On Time Delivery", text: "We also understand the importance of fast and on-time delivery for our clients. Our mission is to provide reliable and efficient shipping services that meet the expectations of our clients and exceed industry standards.To achieve fast and on-time delivery, we utilize the latest technologies and employ highly skilled professionals who are trained to handle shipments of all sizes and types. We work with a network of trusted partners and carriers to ensure that we can deliver to any location in a timely manner."},

]

const services = [
    {id:8, image:service1, text: "Air Freight"},
    {id:9, image:service2, text: "Sea Freight"},
    {id:10, image:service3, text: "Road Freight"},
    {id:11, image:service4, text: "Customer Services"},
    {id:12, image:service5, text: "Fast Freight"},
    {id:13, image:service6, text: "Track Cargo"},

]
  return (
    <div>
        <div className='pt-28'>
             {/* hero page */}
            <div className='flex lg:flex-row flex-col px-4 lg:px-20 lg:justify-between items-center py-12'>
                <div>
                    <img src={heropics} alt="" className='lg:h-[500px] lg:w-[600px] rounded-2xl'/>
                </div>
                <div className='lg:w-1/2 flex flex-col gap-28'>
                    <div className='flex flex-col  lg:gap-8 text-center lg:text-start pt-6 lg:pt-0'>
                        <p className='lg:text-[60px] text-[30px] font-bold text-[#eb0028]'>WE DELIVER ON TIME</p>
                        <p className='font-medium text-[20px] text-center'>Join the millions getting bargain deals on shipping cars, furniture, freight, and more..</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type='number' placeholder='Enter Your Track ID' value={text} onChange={(e) => setText(e.target.value)} className='w-[100%] shadow-xl border lg:w-[400px] h-[50px] px-4' required/>
                        <button  type='submit' className='lg:w-[200px] w-[100%] bg-[#eb0028] text-white text-[20px] mt-2 lg:mt-0 h-[50px] lg:ml-4'> TRACK NOW</button>
                    </form>
                </div>
            </div>

            {/* icons page */}

            <div className='grid lg:grid-cols-4 py-10 px-4 lg-px-0 gap-4 lg:gap-0'>
                {
                    icons.map((icon) => (
                        <div className='flex ' key={icon.id} >
                            <div className='bg-[#eb0028] h-[155px] w-[155px] justify-center items-center flex  text-white'>
                                {icon.icon}
                            </div>
                            <div className='bg-gray-100 px-4 flex justify-center items-center w-[100%]'> 
                                <p className='text-[18px] font-semibold'>{icon.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>


            {/* welcome */}
                <div>
                    <div className='flex lg:flex-row flex-col px-4 lg:px-20 w-screen justify-between items-center py-16'>
                       <div className='lg:w-1/2'>
                            <div>
                                <p className='text-[30px]  lg:text-[45px] font-bold pb-8'><span className='text-[#eb0028]'>Welcome</span> To Crest Courier</p>
                                <div>
                                    {
                                        welcome.map((item) => (
                                            <div key={item.id} className='flex gap-4'>
                                                <div className='text-[#eb0028]'>
                                                    <GrStatusGood size={35}/>
                                                </div>
                                                <div className='flex flex-col gap-4 pb-6'>
                                                    <p className=' font-medium text-[25px]' >{item.head}</p>
                                                    <p className=' text-gray-500'>{item.text}</p>
                                                </div>
                                            </div>
                                         ) )
                                    }
                                </div>
                            </div>
                        </div> 
                       <div >
                            <img src={welcomePic} alt="" className='rounded-2xl '/>
                       </div>
                    </div>
                </div>
            
            {/* awesome services */}
            <div className='px-4 lg:px-28 py-10 flex flex-col items-center gap-10'>
                <div><p className='text-[30px] lg:text-[45px] font-bold'>Our Awesome <span className='text-[#eb0028]'>Services</span></p></div>
                <div className=' grid lg:grid-cols-3 gap-8'>
                    {
                        services.map((service) => (
                        <div className='relative h-fit w-[350px] ' key={service.id}>
                            <img src={service.image} alt="" className=' hover:w-[500px]'/>
                            <div className=' bg-[#eb0028] text-white w-fit px-10 py-2 text-[18px] font-medium absolute bottom-6'>{service.text}</div>
                        </div>
                        ))
                    }
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Home