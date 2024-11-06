import React from 'react';
import { logo } from '../assets/icons';

const Hero: React.FC = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-b from-gray-400 via-white to-white flex items-center justify-center px-6">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-lg w-full mx-auto px-4 md:px-16">
                <div className="flex justify-center mb-6 md:mb-0 md:order-2 md:ml-8">
                    <img src={logo} alt="Hero Illustration" className="w-24 md:w-[200px] lg:w-[200px]" />
                </div>

                <div className="text-center md:text-left max-w-lg">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
                        Unleash Your Online Potential:{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-dark to-accent-dark">
                            Blazing Fast Performance, Robust Security, and More
                        </span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 mb-6 px-4 md:px-0">
                        Explore our VPS solutions designed for unparalleled performance,
                        fortified security, seamless integration, scalability,
                        and 24/7 expert assistance. Elevate your online presence effortlessly
                    </p>
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 px-4 md:px-0">
                        <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-accent">
                            Get Started
                        </button>
                        <button className="bg-transparent border border-green-500 text-green-500 py-2 px-6 rounded hover:bg-accent hover:text-white">
                            View All Plans
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
