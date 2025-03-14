// src/components/Sidebar.tsx
'use client';

import React from 'react';
import {
    HomeIcon,
    ChartPieIcon,
    UsersIcon,
    DocumentDuplicateIcon,
    PhoneIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'; // Using Heroicons for icons
import { Badge } from '@/components/ui/badge'; // Assuming you have a Badge component

const Sidebar = () => {
    return (
        <aside className="bg-gradient-to-b from-gray-900 to-gray-800 w-20 flex flex-col items-center py-8 rounded-r-lg shadow-lg">
            <nav className="flex flex-col space-y-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <HomeIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <ChartPieIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <UsersIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <DocumentDuplicateIcon className="h-6 w-6" />
                </a>
                <a href="#" className="relative text-gray-400 hover:text-white transition-colors duration-200">
                    <PhoneIcon className="h-6 w-6" />
                    <Badge className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full text-xs px-2">2</Badge>
                </a>
                <div className="flex-grow"></div> {/* Spacer to push bottom icons down */}
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <Cog6ToothIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <ArrowRightOnRectangleIcon className="h-6 w-6" />
                </a>
            </nav>
        </aside>
    );
};

export default Sidebar;