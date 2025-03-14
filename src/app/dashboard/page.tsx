// src/app/dashboard/page.tsx
'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';
import DashboardHeader from '@/components/dashboard_header';
import StatCard from '@/components/state_card';
import AddGreeting from '@/components/add_greeting';
import MenuImage from '@/components/menu_image';
import MenuList from '@/components/MenuList'; // Import MenuList
import {
    DocumentTextIcon,
    ClipboardDocumentListIcon,
    CheckBadgeIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

interface MenuItem {
    id: number;
    name: string;
    price: number;
    available: boolean;
}

export default function Dashboard() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        { id: 1, name: 'Pizza', price: 12.99, available: true },
        { id: 2, name: 'Burger', price: 8.99, available: false },
        { id: 3, name: 'Salad', price: 7.99, available: true },
    ]);

    const [parsedMenuItems, setParsedMenuItems] = useState<MenuItem[]>([]); // Add this state


    const handleAddItem = () => {
        // Implement logic to add a new item (e.g., open a modal)
        console.log('Add item clicked');
    };

    const handleDeleteItem = (id: number) => {
        setMenuItems(menuItems.filter((item) => item.id !== id));
    };

    const handleEditItem = (id: number) => {
        // Implement logic to edit an item (e.g., open a modal)
        console.log(`Edit item ${id}`);
    };

    const handleAvailabilityChange = (id: number, available: boolean) => {
        setMenuItems(
            menuItems.map((item) =>
                item.id === id ? { ...item, available } : item
            )
        );
    };

    const handleMenuParsed = (newMenuItems: any[]) => {
        const convertedItems: MenuItem[] = newMenuItems
            .map((item, index) => ({
                id: menuItems.length + index + 1,
                name: item.name,
                price: item.price !== null ? item.price : 0,
                available: true,
            }))
            .filter((item) => item.price !== 0); // Filter out items with price 0

        setParsedMenuItems(convertedItems);
    };


    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            <Sidebar />
            <div className="flex-grow p-8">
                <DashboardHeader userName="ALI DAHO" userRole="Owner" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {/* Stat Cards */}
                    <StatCard
                        icon={<DocumentTextIcon className="h-6 w-6 text-gray-600" />}
                        value="134"
                        label="Total order"
                        comparisonText="Compare to yesterday"
                        comparisonValue="14%"
                    />
                    <StatCard
                        icon={<ClipboardDocumentListIcon className="h-6 w-6 text-gray-600" />}
                        value="21"
                        label="Order on process"
                        comparisonText="Compare to yesterday"
                        comparisonValue="14%"
                    />
                    <StatCard
                        icon={<CheckBadgeIcon className="h-6 w-6 text-gray-600" />}
                        value="113"
                        label="Order done"
                        comparisonText="Compare to yesterday"
                        comparisonValue="14%"
                    />
                    <StatCard
                        icon={<CurrencyDollarIcon className="h-6 w-6 text-gray-600" />}
                        value="$2.096"
                        label="Total income"
                        comparisonText="Compare to yesterday"
                        comparisonValue="14%"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Add Greeting and Menu Image */}
                    <AddGreeting />
                    <MenuImage onMenuParsed={handleMenuParsed}/>
                </div>
                <MenuList
                    items={parsedMenuItems.length > 0 ? parsedMenuItems : menuItems} // Use parsed items if available
                    onAddItem={handleAddItem}
                    onDeleteItem={handleDeleteItem}
                    onEditItem={handleEditItem}
                    onAvailabilityChange={handleAvailabilityChange}
                />
            </div>
        </div>
    );
}