import React, { useState } from 'react';

const Pricing: React.FC = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    const togglePricing = () => setIsMonthly(!isMonthly);

    const plans = [
        {
            name: 'Entry Plan',
            price: isMonthly ? '19' : '199',
            description: 'This plan is ideal for small web applications, personal blogs, or development projects requiring a secure and reliable server environment.',
            features: [
                '2 vCPU Cores',
                '8 GB RAM',
                '100 GB NVMe Disk space',
                '8 TB Bandwidth',
                '1 Snapshot',
                'Weekly Backup',
                'Dedicated IP Address'
            ],
        },
        {
            name: 'Medium Plan',
            price: isMonthly ? '39' : '399',
            description: 'This plan is suitable for growing business websites, medium-sized online stores, and web applications with moderate traffic.',
            features: [
                '4 vCPU Cores',
                '16 GB RAM',
                '200 GB NVMe Disk space',
                '16 TB Bandwidth',
                '2 Snapshots',
                'Weekly Backup',
                'Dedicated IP Address'
            ],
        },
        {
            name: 'Premium Plan',
            price: isMonthly ? '59' : '599',
            description: 'This plan is ideal for high-demand web applications, large databases, media streaming services, and other resource-intensive workloads.',
            features: [
                '8 vCPU Cores',
                '32 GB RAM',
                '500 GB NVMe Disk space',
                '32 TB Bandwidth',
                '4 Snapshots',
                'Hourly Backup',
                'Dedicated IP Address'
            ],
        },
    ];

    return (
        <div className="py-16 bg-gray-100">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Our Hosting Plans</h2>
                <p className="text-gray-600 mt-2">
                    Choose the perfect plan for your needs. Enjoy high performance, reliable support, and secure solutions.
                </p>
                <div className="mt-4 flex items-center justify-center space-x-4">
                    <span className={`${isMonthly ? 'font-bold' : 'text-gray-500'}`}>Monthly</span>
                    <button onClick={togglePricing} className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none bg-blue-500">
                        <span
                            className={`transform transition-transform ease-in-out duration-200 ${isMonthly ? 'translate-x-1' : 'translate-x-6'
                                } inline-block w-4 h-4 bg-white rounded-full`}
                        />
                    </button>
                    <span className={`${!isMonthly ? 'font-bold' : 'text-gray-500'}`}>Yearly</span>
                </div>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center relative flex flex-col justify-between">
                        <h3 className="text-xl font-semibold text-blue-800">{plan.name}</h3>
                        <p className="text-gray-600 mt-2 text-left mx-auto max-w-xs">{plan.description}</p>
                        <div className="mt-4">
                            <span className="text-4xl font-bold text-green-500">${plan.price}</span>
                            <span className="text-gray-500"> / {isMonthly ? 'month' : 'year'}</span>
                        </div>
                        <ul className="mt-6 space-y-2 text-left mx-auto max-w-xs">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-gray-700 flex items-center">
                                    <span className="mr-2 text-green-500">●</span>{feature}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors">
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
