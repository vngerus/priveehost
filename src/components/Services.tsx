import React from 'react';
import { services } from '../data';

const Services: React.FC = () => {

    return (
        <div className="py-16 bg-gray-100 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Services</h2>
                <p className="text-gray-600">
                    Discover the solutions we offer to boost your online presence with security and efficiency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-300">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 border-r border-b border-gray-300"
                    >
                        <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
