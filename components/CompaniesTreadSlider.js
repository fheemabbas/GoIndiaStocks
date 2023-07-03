import Image from 'next/image';
import { useEffect, useRef } from 'react';

const featuredCompanies = [
    {
        id: 1,
        name: 'Nifty 50',
        price: "15092",
        change: "0.45%",
        changeType: "red"
    },
    {
        id: 2,
        name: 'Nifty Bank',
        price: "28750",
        change: "0.65%",
        changeType: "red"
    },
    {
        id: 3,
        name: 'Bajaj fin',
        price: "5875",
        change: "0.45%",
        changeType: "green"
    },
    {
        id: 4,
        name: 'Nifty 50',
        price: "15092",
        change: "0.45%",
        changeType: "red"
    },
    {
        id: 5,
        name: 'Nifty Bank',
        price: "28750",
        change: "0.65%",
        changeType: "red"
    },
    {
        id: 6,
        name: 'Bajaj fin',
        price: "5875",
        change: "0.45%",
        changeType: "green"
    },
];

const CompaniesTreadSlider = () => {
    return (
        <div className="bg-[#1D2226]">
            <div className="text-white relative overflow-hidden">

                <marquee width="100%" direction="left">
                    <div
                        className="flex transition-transform duration-500"
                    >
                        {featuredCompanies.map((company) => (
                            <div
                                key={company.id}
                                className="flex-shrink-0 w-56 mx-4"
                            >
                                <span className='m-4'>{company.name}</span>
                                <span className=''>{company.price}</span>
                                <span className={`m-4 ${company.changeType === 'red' ? "text-red-500" : "text-green-400"}`}>{company.change}</span>
                            </div>
                        ))}
                    </div>
                </marquee>
            </div>
        </div>
    );
};


export default CompaniesTreadSlider;
