"use client"
import React, { useEffect, useState } from "react";
// import list from '../../public/list.json'
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";



export default function CardsSection() {

    const [books , setBooks] = useState([])

    useEffect(()=>{
      const getsbooks =async()=> {
  
        try {
          const res = await axios.get("https://bookstore-backend-kc1u.onrender.com/books")
          setBooks(res.data.filter((item) => item.category === "Free"))
        } catch (error) {
          console.log(error)
        }
  
      }
  
      getsbooks();
  
    },[])
  

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-900">
                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
                    <div className="text-center mb-10">
                        <h1 className="font-extrabold text-3xl text-gray-800 dark:text-white mb-4">
                            Free Offered Courses
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            Discover a range of free courses designed to help you learn and grow.
                            Whether you're exploring a new hobby or upskilling, we’ve got something
                            for everyone!
                        </p>
                    </div>
                    <div className="relative">
                        <Slider {...settings}>
                            {books.map((item) => (
                                <div key={item.id} className="px-2">
                                    <Card item={item} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

        </>

    );
}
