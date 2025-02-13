"use client";

import React, { useEffect, useState } from "react";
import Cards from "../_components/Card";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

const Page = () => {
  const [books, setBooks] = useState([]);
  const { user, loading } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signup");
      return; 
    }

    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchBooks();
    }
  }, [loading, user, router]); 

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      {/* Header Section */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-extrabold text-4xl text-gray-800 dark:text-white mb-6">
            Explore Our Courses
          </h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Discover a curated selection of courses designed to help you achieve your goals.
            Whether you're delving into a new passion or advancing your career, our courses
            offer the tools you need to succeed.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((item) => (
            <div key={item.id} className="transform hover:scale-105 transition-transform">
              <Cards item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Call-to-Action */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-12">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-6">
            Unlock new opportunities and skills with our carefully crafted courses. Don’t wait— 
            start your learning journey today!
          </p>
          <button className="bg-white text-purple-600 hover:text-white hover:bg-purple-800 px-6 py-3 rounded-lg font-semibold shadow-lg transition">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
