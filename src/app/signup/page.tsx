// src/app/signup/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSignup = async (e: any) => {
        e.preventDefault();
        // Basic validation (add more robust validation)
        if (!email || !password || !ownerName || !restaurantName || !restaurantAddress) {
            setError('Please fill all fields');
            return;
        }

        // Replace with your actual signup logic (API call)
        try {
            // Example: Making a POST request to your API
            const response = await axios.post('http://127.0.0.1:8000/signup', {
                email,
                password,
                ownerName,
                restaurantName,
                restaurantAddress
            });

            setSuccess('SignUp Successfully! Redirecting to signIn...');
            setLoading(false);
            setTimeout(() => router.push('/signin'), 2000); // Redirect in two seconds.
        } catch (err) {
            console.error('Error during signup:', err);
            setLoading(false);
            if (err.response){
                setError(err.response.data.detail || 'SignUp failed, Please try again!');
            }else if (err.request){
                setError('No Response from server.');
            }else{
                setError('An unexpected error occured.');
            }

            console.error('Error during signup', err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-3xl font-semibold mb-6 text-center text-white">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="ownerName">
                            Owner Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="ownerName"
                            type="text"
                            placeholder="Owner Name"
                            value={ownerName}
                            onChange={(e) => setOwnerName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="restaurantName">
                            Restaurant Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="restaurantName"
                            type="text"
                            placeholder="Restaurant Name"
                            value={restaurantName}
                            onChange={(e) => setRestaurantName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="restaurantAddress">
                            Restaurant Address
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="restaurantAddress"
                            type="text"
                            placeholder="Restaurant Address"
                            value={restaurantAddress}
                            onChange={(e) => setRestaurantAddress(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                </form>
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
                <br />
                <div className="mt-4 text-center">
                    <p className="text-gray-400">
                        Already have an account?{' '}
                        <button onClick={() => router.push('/signin')} className="text-blue-500 hover:underline">
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}