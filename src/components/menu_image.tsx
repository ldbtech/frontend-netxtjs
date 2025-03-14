'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

interface MenuImageProps {
    onMenuParsed: (menuItems: any[]) => void; // Add this prop
}

const MenuImage: React.FC<MenuImageProps> = ({ onMenuParsed }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [apiResponse, setApiResponse] = useState(null); // Store api response
    const [isLoading, setIsLoading] = useState(false) // For loading state

    const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
            setSelectedFile(file);
        }
    };

    const handleSaveImage = async () => {
        // Implement your logic to save the image (e.g., API upload)
        if (!selectedFile){
            console.error('No image selected');
            return;
        }
        const formData = new FormData();
        formData.append('file', selectedFile);

        setIsLoading(true); // Start Loading

        try{
            const response = await axios.post(
                'http://127.0.0.1:8000/upload-image',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            setApiResponse(response.data);
            onMenuParsed(response.data.menu_items); // Call the callback

        }catch (error){
            console.error('API Image Processing: ', error);
            setApiResponse({ error: error.message });
        }finally {
            setIsLoading(false);
        }

    };

    return (
        <div className="bg-gray-800 rounded-lg shadow-md p-6 w-full">
            <h2 className="text-xl font-semibold mb-4 text-white">
                Add/Update Menu Image
            </h2>
            <div className="mb-4">
                <label
                    htmlFor="image"
                    className="block text-gray-400 text-sm font-bold mb-2"
                >
                    Select Menu Image
                </label>
                <input
                    type="file"
                    id="image"
                    className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleImageChange}
                />
            </div>
            {selectedImage && (
                <div className="mb-4">
                    <img
                        src={selectedImage}
                        alt="Menu Preview"
                        className="max-w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            )}
            <button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isLoading} // Disable button while loading
                onClick={handleSaveImage}
            >
                {isLoading ? 'Processing...' : 'Save Image'}
            </button>
            {apiResponse && (
                <div className="mt-4 text-white">
                    {apiResponse.error ? (
                        <p className="text-red-500">Error: {apiResponse.error}</p>
                    ) : (
                        <p className="bg-green-500">Success</p>
                    )}
                </div>
            )}
            {isLoading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <ClipLoader color="#ffffff" loading={true} size={40} />
                </div>
            )}
        </div>
    );
};

export default MenuImage;