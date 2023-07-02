import Image from 'next/image';
import { useEffect, useRef } from 'react';

const featuredCompanies = [
    {
        id: 1,
        name: 'Amul',
        logo: "/images/logos/amul.jpg", // Path to the company's logo image
    },
    {
        id: 2,
        name: 'adani',
        logo: "/images/logos/adani.png", // Path to the company's logo image
    },
    {
        id: 3,
        name: 'asianpaints',
        logo: "/images/logos/asianpaints.jpg", // Path to the company's logo image
    },
    {
        id: 4,
        name: 'axis',
        logo: "/images/logos/axis.png", // Path to the company's logo image
    },
    {
        id: 5,
        name: 'hdfc',
        logo: "/images/logos/hdfc.png", // Path to the company's logo image
    },
    {
        id: 6,
        name: 'hp',
        logo: "/images/logos/hp.jpg", // Path to the company's logo image
    },
    {
        id: 7,
        name: 'itc',
        logo: "/images/logos/itc.jpg", // Path to the company's logo image
    },
    {
        id: 8,
        name: 'tata',
        logo: "/images/logos/tata.png", // Path to the company's logo image
    },
    {
        id: 9,
        name: 'title',
        logo: "/images/logos/title.png", // Path to the company's logo image
    },
    {
        id: 10,
        name: 'vi',
        logo: "/images/logos/vi.jpg", // Path to the company's logo image
    },
    {
        id: 11,
        name: 'wipro',
        logo: "/images/logos/wipro.jpg", // Path to the company's logo image
    },
    // Add more companies...
];
const FeaturedCompaniesSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        let intervalId;

        const startSlider = () => {
            intervalId = setInterval(() => {
                slideNext();
            }, 1000);
        };

        const stopSlider = () => {
            clearInterval(intervalId);
        };

        startSlider();

        // Stop the slider when the component unmounts
        return () => {
            stopSlider();
        };
    }, []);

    const slideNext = () => {
        const slider = sliderRef.current;

        if (slider) {
            slider.scrollBy({
                left: slider.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="pt-4">
            <div className=' text-lg text-bold uppercase ml-10'>
                Featured Companies
            </div>
            <div className="bg-blue-100 relative overflow-hidden">
                <marquee width="100%" direction="left">

                    <div
                        ref={sliderRef}
                        className="flex transition-transform duration-500"
                    >
                        {featuredCompanies.map((company) => (
                            <div
                                key={company.id}
                                className="flex-shrink-0 w-32 h-16 ml-4"
                            >
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={100}
                                    height={64}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </marquee>
            </div>
        </div>
    );
};


export default FeaturedCompaniesSlider;
