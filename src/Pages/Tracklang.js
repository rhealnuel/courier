import React from 'react';

import logo from '../images/logo.png';
import { useParams } from 'react-router-dom';

const Tracklang = () => {
    const { id } = useParams();

    const array = [
        {
            head: "Происхождение:",
            text: "Йемен"
        },
        {
            head: "Статус:",
            text: "На удержании"
        },
        {
            head: "Перевозчик:",
            text: "DHL"
        },
        {
            head: "Вес:",
            text: "36кг"
        },
        {
            head: "Номер ссылки перевозчика:",
            text: "123442345"
        },
        {
            head: "Количество:",
            text: "1"
        },
        {
            head: "Общий груз:",
            text: "1"
        },
        {
            head: "Дата отправления:",
            text: "2023-03-15"
        },
        {
            head: "Упаковка:",
            text: "Красная коробка"
        },
        {
            head: "Пункт назначения:",
            text: "Узбекистан"
        },
        {
            head: "Режим отправки:",
            text: "Корабль"
        },
        {
            head: "Продукт",
            text: "Красная коробка"
        },
        {
            head: "Способ оплаты",
            text: "Наличные"
        },
        {
            head: "Ожидаемая дата доставки",
            text: "2023-04-03"
        },
    ];

    return (
        <div>
            <div className='bg-white py-48 px-4 lg:px-20 flex justify-center'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col items-center py-4'>
                        <img src={logo} alt='' />
                        <p>{id}</p>
                    </div>

                    <div className='w-full grid lg:grid-cols-2 justify-between'>
                        <div className='flex flex-col items-center pb-6 lg:pb-0'>
                            <div>
                                <p className='font-semibold underline text-[20px] py-2'>Информация об отправителе</p>
                                <p>Имя: Ким Сонг</p>
                                <p>Адрес: Майами, Флорида</p>
                                <p>Телефон: +998881070368</p>
                                <p>Email: kimsoung612@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div>
                                <p className='font-semibold underline text-[20px] py-2'>Информация о получателе</p>
                                <p>Имя: Анжела Викторовна</p>
                                <p>Адрес: район Юнусабад, дом 9, корпус 5а, квартира 19</p>
                                <p>Телефон: +998909509230</p>
                                <p>Email: </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center my-4 justify-center w-[100%] h-[60px] bg-gray-500 text-white text-[20px]'>
                        <p className='text-center'>СТАТУС ОТПРАВЛЕНИЯ - {array[1].text}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-center font-bold underline text-[20px] py-6'>Информация об отправлении</p>

                        <div>
                            <div className='grid lg:grid-cols-2 items-center'>
                                {
                                    array.map((item) => (
                                        <div key={item.head} className='flex flex-col gap-1 pb-4 items-center'>
                                            <p className='font-bold'>{item.head}</p>
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

export default Tracklang;
