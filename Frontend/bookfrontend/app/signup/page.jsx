"use client";
import Link from 'next/link';
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter()

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullname) newErrors.fullname = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };        
            

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            try {
                const res = await axios.post('http://localhost:8000/user/signup', formData);
                if (res.status === 200 || res.status === 201) {

                    const user = res.data.user; 
                    localStorage.setItem("Users", JSON.stringify(user));
    

                 toast.success('Account created successfully!')
                    setFormData({ fullname: '', email: '', password: '' }); // Fixed reset keys

                   setTimeout(() => {
                        window.location.reload();    
                    }, 3000);

                    router.push("/")
 
                }
            } catch (error) {
                toast.error('Something went wrong.');

            }
        }
    };


    return (
        <>
            <div className="flex items-center flex-col justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 m-2">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-center text-gray-700">
                        Create an Account
                    </h2>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your name"
                                value={formData.fullname} // Fixed key
                                onChange={handleChange}
                            />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            href={'/signup'}
                            className="text-blue-500 hover:text-blue-700 font-medium"
                            onClick={() => document.getElementById("my_modal_3").showModal()}
                        >
                            Login here
                        </Link>
                    </p>
                </div>
                <div>
                    <button className='py-2 px-4 bg-black text-white rounded-md m-6' >
                        <Link href={'/'}>
                        Home
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Page;
