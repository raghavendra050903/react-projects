import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RegistrationPage() {

    const [registerData, setRegisterData] = useState({
        username: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', registerData);
            const { success, message } = response.data;

            if (success) {
                setMessage('Registration successful');
            } else {
                setMessage(message);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }

        setRegisterData({
            username: '',
            password: ''
        });
    }

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-6 text-center">Registration Page</h1>
                <form onSubmit={handleRegistrationSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={registerData.username}
                            name="username"
                            placeholder="Username"
                            required
                            onChange={handleRegisterChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            value={registerData.password}
                            name="password"
                            placeholder="Password"
                            required
                            onChange={handleRegisterChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Register
                    </button>
                    {message && (
                        <div className="mt-4 text-center text-red-500">
                            {message}
                        </div>
                    )}
                    <p className="mt-4 text-center">
                        Already Registered?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login Here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;
