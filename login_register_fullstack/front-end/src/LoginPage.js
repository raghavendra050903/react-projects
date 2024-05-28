import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', loginData);
            const { success, message } = response.data;

            if (success) {
                setMessage('Login successful');
                // Redirect user here
            } else {
                setMessage(message);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }

        setLoginData({
            username: '',
            password: ''
        });
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-6 text-center">Login Page</h1>
                <form onSubmit={handleLoginSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={loginData.username}
                            name="username"
                            placeholder="Username"
                            required
                            onChange={handleLoginChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            value={loginData.password}
                            name="password"
                            placeholder="Password"
                            required
                            onChange={handleLoginChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                    {message && (
                        <div className="mt-4 text-center text-red-500">
                            {message}
                        </div>
                    )}
                    <p className="mt-4 text-center">
                        Not Registered Yet?{' '}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register Here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
