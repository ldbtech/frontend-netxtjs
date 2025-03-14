// src/components/DashboardHeader.tsx
'use client';

import React from 'react';

interface DashboardHeaderProps {
    userName: string;
    userRole: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName, userRole }) => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">Good Morning, {userName}!</h1>
                <p className="text-sm text-gray-500">Start your day by checking today's tasks and updates.</p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-700">
                    {currentDate}
                </div>
                <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-gray-300 w-8 h-8">
                        {/* Replace with user avatar */}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">{userName}</span>
                        <span className="text-xs text-gray-500">{userRole}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;