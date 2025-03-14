// src/components/StatCard.tsx
'use client';

import React from 'react';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'; // Install @heroicons/react

interface StatCardProps {
    icon: React.ReactNode;
    value: string | number;
    label: string;
    comparisonText: string;
    comparisonValue: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, comparisonText, comparisonValue }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md w-full">
            <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-lg mr-4">
                    {icon}
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">{value}</h2>
                    <p className="text-sm text-gray-500">{label}</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-700">{comparisonText}</p>
                <div className="flex items-center bg-green-100 text-green-600 rounded-full px-3 py-1 text-xs">
                    <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                    <span>{comparisonValue}</span>
                </div>
            </div>
        </div>
    );
};

export default StatCard;