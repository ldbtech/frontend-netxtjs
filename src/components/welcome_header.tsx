// src/components/WelcomeHeader.tsx
'use client';

import React from 'react';

const WelcomeHeader = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className="bg-gray-800 bg-opacity-5 rounded-lg p-6 backdrop-blur-md shadow-md">
            {/* Darker background */}
            <div className="flex justify-between items-start mb-6">
                <span className="text-gray-400 text-sm">{currentDate}</span>
                {/* Maintained light text */}
            </div>
            <div className="mb-6">
                <h1 className="text-3xl font-semibold text-white">Hello, ALI DAHO</h1>
                {/* White text for heading */}
                <p className="text-2xl text-gradient from-cyan-400 to-purple-400 font-medium">
                    {/* Slightly adjusted gradient */}
                    How can I help you today?
                </p>
            </div>
            <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                    {/* Brighter gradient */}
                    * Ask AI
                </button>
                <button className="bg-gray-700 bg-opacity-20 text-gray-300 py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-md">
                    {/* Darker button, lighter text */}
                    Get tasks updates
                </button>
                <button className="bg-gray-700 bg-opacity-20 text-gray-300 py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-md">
                    {/* Darker button, lighter text */}
                    Add A New Restaurant
                </button>
                <button className="bg-gray-700 bg-opacity-20 text-gray-300 py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-md">
                    {/* Darker button, lighter text */}
                    Manage Team
                </button>
            </div>
        </div>
    );
};

export default WelcomeHeader;