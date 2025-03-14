'use client';

import React, { useState } from 'react';
import { PencilIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline'; // Install @heroicons/react

interface MenuItem {
    id: number;
    name: string;
    price: number;
    available: boolean;
}

interface MenuListProps {
    items: MenuItem[]; // Change to MenuItem[]
    onAddItem: () => void;
    onDeleteItem: (id: number) => void;
    onEditItem: (id: number) => void;
    onAvailabilityChange: (id: number, available: boolean) => void;
}

const MenuList: React.FC<MenuListProps> = ({
                                               items, // Now it's an array
                                               onAddItem,
                                               onDeleteItem,
                                               onEditItem,
                                               onAvailabilityChange,
                                           }) => {
    return (
        <div className="bg-slate-800 rounded-lg shadow-md p-6 w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Menu List</h2>
                <div>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                        onClick={onAddItem}
                    >
                        Add New Item
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => {
                            // Basic delete all - refine as needed
                            items.forEach((item) => onDeleteItem(item.id));
                        }}
                    >
                        Delete All
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-slate-700">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                            Price
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                            Availability
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-slate-700 divide-y divide-gray-200">
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                ${item.price.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-blue-600"
                                        checked={item.available}
                                        onChange={(e) =>
                                            onAvailabilityChange(item.id, e.target.checked)
                                        }
                                    />
                                    <span className="ml-2">
                                            {item.available ? 'Available' : 'Unavailable'}
                                        </span>
                                </label>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                    className="text-indigo-600 hover:text-indigo-900 mr-2"
                                    onClick={() => onEditItem(item.id)}
                                >
                                    <PencilIcon className="h-5 w-5" />
                                </button>
                                <button
                                    className="text-gray-600 hover:text-gray-900 mr-2"
                                    onClick={() => {
                                        // Implement "View Details" logic
                                        console.log(`View details for item ${item.id}`);
                                    }}
                                >
                                    <EyeIcon className="h-5 w-5" />
                                </button>
                                <button
                                    className="text-red-600 hover:text-red-900"
                                    onClick={() => onDeleteItem(item.id)}
                                >
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MenuList;