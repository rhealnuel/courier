import React, { useState } from 'react';
import heropics from '../images/heropics.jpg';
import { SlPlane } from "react-icons/sl";
import { GiTowTruck } from "react-icons/gi";
import { GiCargoShip } from "react-icons/gi";
import { TbTrain } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import welcomePic from "../images/welcome.jpg";
import service1 from "../images/service-1.jpg";
import service2 from "../images/service-2.jpg";
import service3 from "../images/service-3.jpg";
import service4 from "../images/service-4.jpg";
import service5 from "../images/service-5.jpg";
import service6 from "../images/service-6.jpg";
import { useNavigate } from 'react-router-dom';

const Homelang = () => {
 const [text, setText] = useState('');
 const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "123892799") {
        alert("Недействительный номер для отслеживания");
        navigate('/');
    } else {
        navigate(`/track/${text}`);
    }
 }

 const icons = [
    { id: 1, text: "Забронируйте ваш авиаперевозку", icon: <SlPlane size={70} /> },
    { id: 2, text: "Забронируйте ваш автоперевозку", icon: <GiTowTruck size={70} /> },
    { id: 3, text: "Забронируйте ваш морской груз", icon: <GiCargoShip size={70} /> },
    { id: 4, text: "Забронируйте ваш железнодорожный груз", icon: <TbTrain size={70} /> },
 ]

 const welcome = [
    { id: 5, head: "100% безопасная доставка", text: "Мы обеспечиваем безопасную доставку посылок, что является нашим главным приоритетом. Мы принимаем все возможные меры, чтобы посылки, которые мы доставляем, прибыли в целости и сохранности. Для достижения 100% безопасной доставки мы используем высококачественные упаковочные материалы для защиты товаров от повреждений во время транспортировки. Мы также стараемся бережно обращаться с посылками и избегаем грубого обращения, которое может причинить вред." },
    { id: 6, head: "Страхование от погодных условий", text: "Мы понимаем, что погода может быть значительным фактором в безопасной и своевременной доставке грузов. Даже при тщательном планировании неожиданные погодные условия могут повлиять на график доставки и потенциально повредить грузы. Для решения этой проблемы мы предлагаем страхование от погодных условий в качестве дополнительной опции для наших клиентов. Эта страховка покрывает убытки или повреждения, вызванные непредвиденными погодными условиями, такими как ураганы, наводнения, сильный снег и другие неблагоприятные погодные явления." },
    { id: 7, head: "Быстрая и своевременная доставка", text: "Мы также понимаем важность быстрой и своевременной доставки для наших клиентов. Наша миссия — предоставлять надежные и эффективные услуги по доставке, которые соответствуют ожиданиям наших клиентов и превышают отраслевые стандарты. Для достижения быстрой и своевременной доставки мы используем новейшие технологии и привлекаем высококвалифицированных специалистов, обученных работать с грузами любого размера и типа. Мы сотрудничаем с сетью надежных партнеров и перевозчиков, чтобы обеспечить возможность доставки в любое место вовремя." },
 ]

 const services = [
    { id: 8, image: service1, text: "Авиаперевозки" },
    { id: 9, image: service2, text: "Морские перевозки" },
    { id: 10, image: service3, text: "Автоперевозки" },
    { id: 11, image: service4, text: "Обслуживание клиентов" },
    { id: 12, image: service5, text: "Быстрая доставка" },
    { id: 13, image: service6, text: "Отслеживание груза" },
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
                    <div className='flex flex-col lg:gap-8 text-center lg:text-start pt-6 lg:pt-0'>
                        <p className='lg:text-[60px] text-[30px] font-bold text-[#eb0028]'>МЫ ДОСТАВЛЯЕМ ВОВРЕМЯ</p>
                        <p className='font-medium text-[20px] text-center'>Присоединяйтесь к миллионам, получающим выгодные предложения на перевозку автомобилей, мебели, грузов и многое другое..</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type='number' placeholder='Введите ваш идентификатор для отслеживания' value={text} onChange={(e) => setText(e.target.value)} className='w-[100%] shadow-xl border lg:w-[400px] h-[50px] px-4' required/>
                        <button type='submit' className='lg:w-[200px] w-[100%] bg-[#eb0028] text-white text-[20px] mt-2 lg:mt-0 h-[50px] lg:ml-4'> ОТСЛЕДИТЬ СЕЙЧАС</button>
                    </form>
                </div>
            </div>

            {/* icons page */}

            <div className='grid lg:grid-cols-4 py-10 px-4 lg-px-0 gap-4 lg:gap-0'>
                {
                    icons.map((icon) => (
                        <div className='flex' key={icon.id}>
                            <div className='bg-[#eb0028] h-[155px] w-[155px] justify-center items-center flex text-white'>
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
                            <p className='text-[30px] lg:text-[45px] font-bold pb-8'><span className='text-[#eb0028]'>Добро пожаловать</span> в Crest Courier</p>
                            <div>
                                {
                                    welcome.map((item) => (
                                        <div key={item.id} className='flex gap-4'>
                                            <div className='text-[#eb0028]'>
                                                <GrStatusGood size={35}/>
                                            </div>
                                            <div className='flex flex-col gap-4 pb-6'>
                                                <p className='font-medium text-[25px]'>{item.head}</p>
                                                <p className='text-gray-500'>{item.text}</p>
                                            </div>
                                        </div>
                                     ))
                                }
                            </div>
                        </div>
                    </div>
                   <div>
                        <img src={welcomePic} alt="" className='rounded-2xl'/>
                   </div>
                </div>
            </div>
        
            {/* awesome services */}
            <div className='px-4 lg:px-28 py-10 flex flex-col items-center gap-10'>
                <div><p className='text-[30px] lg:text-[45px] font-bold'>Наши замечательные <span className='text-[#eb0028]'>услуги</span></p></div>
                <div className='grid lg:grid-cols-3 gap-8'>
                    {
                        services.map((service) => (
                            <div className='relative h-fit w-[350px]' key={service.id}>
                                <img src={service.image} alt="" className='hover:w-[500px]'/>
                                <div className='bg-[#eb0028] text-white w-fit px-10 py-2 text-[18px] font-medium absolute bottom-6'>{service.text}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homelang;
