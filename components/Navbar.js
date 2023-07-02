import React, { useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Navbar = ({ isExpanded, setIsExpanded }) => {

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (

        <nav className={`flex flex-row  `}>
            {isExpanded && (
                <div className="lg:flex flex-col lg:items-center w-40 bg-gray-800 text-white px-4 py-2">
                    <a
                        href="#"
                        className="block px-2 py-1 mt-2 text-sm font-medium text-white transition-colors duration-200 rounded hover:bg-gray-700"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block px-2 py-1 mt-2 text-sm font-medium text-white transition-colors duration-200 rounded hover:bg-gray-700"
                    >
                        About
                    </a>
                    <div className="relative">
                        <button className="block px-2 py-1 mt-2 text-sm font-medium text-white transition-colors duration-200 rounded hover:bg-gray-700">
                            Services
                        </button>
                        <div className="absolute z-10 top-full left-0 bg-gray-800 text-white rounded-lg shadow-md hidden">
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm hover:bg-gray-700"
                            >
                                Service 1
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm hover:bg-gray-700"
                            >
                                Service 2
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm hover:bg-gray-700"
                            >
                                Service 3
                            </a>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="block px-2 py-1 mt-2 text-sm font-medium text-white transition-colors duration-200 rounded hover:bg-gray-700"
                    >
                        Contact
                    </a>
                </div>
            )}
            {<div className={`bg-gray-800 text-white ${!isExpanded ? "flex m-auto" : "flex m-auto"}`}>
                <button
                    className="py-5"
                    onClick={toggleExpand}
                >
                    {isExpanded ? (
                        <ArrowLeftIcon className=' text-white' />
                    ) : (
                        <ArrowRightIcon className='text-white' />
                    )}
                </button>
            </div>}
        </nav>
    );
};

export default Navbar;
