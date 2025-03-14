'use client';

import React, { useState } from 'react';

const AddGreeting = () => {
    const [greeting, setGreeting] = useState('');

    const handleGreetingChange = (e) => {
        setGreeting(e.target.value);
    };

    const handleSaveGreeting = () => {
        // Implement your logic to save the greeting (e.g., API call)
        console.log('Saving greeting:', greeting);
    };

    return (
        <div className="bg-gray-800 rounded-lg shadow-md p-6 w-full">
            <h2 className="text-xl font-semibold mb-4 text-white">
                Add/Update Greeting
            </h2>
            <div className="mb-4">
                <label
                    htmlFor="greeting"
                    className="block text-gray-400 text-sm font-bold mb-2"
                >
                    Greeting Message
                </label>
                <textarea
                    id="greeting"
                    className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500"
                    rows={4}
                    placeholder="Enter the greeting message"
                    value={greeting}
                    onChange={handleGreetingChange}
                ></textarea>
            </div>
            <button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSaveGreeting}
            >
                Save Greeting
            </button>
        </div>
    );
};

export default AddGreeting;