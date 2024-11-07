import React from 'react';

const Services: React.FC = () => {
    const services = [
        {
            title: "Optimal Performance",
            description: "Our servers are optimized to deliver maximum speed and efficiency for your projects.",
            icon: "/path/to/performance-icon.png", // Replace with the actual icon path
        },
        {
            title: "Robust Security",
            description: "We implement advanced security measures to protect your data and ensure the integrity of your information.",
            icon: "/path/to/security-icon.png", // Replace with the actual icon path
        },
        {
            title: "24/7 Support",
            description: "Our expert team is available 24/7 to assist you with all your needs.",
            icon: "/path/to/support-icon.png", // Replace with the actual icon path
        },
        {
            title: "Flexible Scalability",
            description: "Our solutions grow with your business, allowing for seamless scalability.",
            icon: "/path/to/scalability-icon.png", // Replace with the actual icon path
        },
        {
            title: "Easy Integration",
            description: "We provide tools that make integrating your applications and services efficient and straightforward.",
            icon: "/path/to/integration-icon.png", // Replace with the actual icon path
        },
        {
            title: "Free SSL Certificates",
            description: "We offer free SSL certificates to ensure the trust and security of your visitors.",
            icon: "/path/to/ssl-icon.png", // Replace with the actual icon path
        },
    ];

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
