'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSignupClick = () => {
        router.push('/signup');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccess(null); // Clear previous success messages
        setLoading(true);

        try {
            const response = await axios.post('http://127.0.0.1:8000/login', { // Ensure the correct route is used
                email,
                password,
            });

            // Store the access token (or handle cookie setup if you switch to cookies)
            localStorage.setItem('accessToken', response.data.access_token);

            setSuccess('Sign-in successful!'); // Set success message
            setLoading(false);
            router.push('/dashboard');
        } catch (err) {
            setLoading(false);
            if (err.response) {
                setError(err.response.data.detail || 'Sign-in failed.');
            } else if (err.request) {
                setError('No response from server.');
            } else {
                setError('An unexpected error occurred.');
            }
            console.error('Sign-in error:', err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-3xl font-semibold mb-6 text-center text-white">AI Sign In</h2>
                <form onSubmit={handleSubmit}>
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
                    <div className="flex items-center justify-between">
                        <button
                            className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </div>
                </form>
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
                <br />
                <div className="mt-4 text-center">
                    <p className="text-gray-400">
                        Don't have an account?{' '}
                        <button onClick={handleSignupClick} className="text-blue-500 hover:underline">
                            Sign up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}