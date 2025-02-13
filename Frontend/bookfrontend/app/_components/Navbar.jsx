"use client"
import { useState } from 'react';
import Link from 'next/link';
import Login from './Login';
import { useAppContext } from '@/context/AppContext';
import Logout from './Logout';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useAppContext();

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold">
            <Link href="/" className="hover:text-gray-300">
              BookStore
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>
            <Link href="/courses" className="hover:text-gray-300 transition">
              Courses
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition">
              About
            </Link>
          </div>

          <div className="hidden md:block">

            {
              user ? (
                <Logout />
              ) : (
                <button className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
                onClick={()=>document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>    
              )
            }
            {/* <button className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
            onClick={()=>document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button> */}
          </div>

          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4 mt-4 bg-blue-900 py-4 rounded-lg shadow-lg">
              <Link href="/" className="hover:text-gray-300" onClick={handleMenuToggle}>
                Home
              </Link>
              <Link href="/courses" className="hover:text-gray-300" onClick={handleMenuToggle}>
                Courses
              </Link>
              <Link href="/contact" className="hover:text-gray-300" onClick={handleMenuToggle}>
                Contact
              </Link>
              <Link href="/about" className="hover:text-gray-300" onClick={handleMenuToggle}>
                About
              </Link>
              <Link href="?" className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition" onClick={()=>document.getElementById("my_modal_3").showModal()}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>

    <Login />
    </>
  );
}
