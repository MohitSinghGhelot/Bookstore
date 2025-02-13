import React from 'react'
import Navbar from './_components/Navbar'
import Image from 'next/image'
import img from '../public/img11.avif'
import Footer from './_components/Footer'
import CardsSection from './_components/CardsSection'

const Home = () => {
  return (
    <>

    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Boundless Books & Beyond
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Step into a realm where stories know no limits. From timeless classics to modern masterpieces, our collection promises something for every curious mind.


          </p>
          <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src={img}
            alt="Banner Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <CardsSection />


    </>
  )
}

export default Home