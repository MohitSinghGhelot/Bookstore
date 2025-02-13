import React from 'react'

const page = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
        <div className="bg-blue-200 shadow-2xl rounded-2xl p-8 max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800">Get in Touch</h2>
          <p className="text-center text-gray-600 mt-2">We'd love to hear from you! Fill out the form below.</p>
          
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Full Name</label>
              <input type="text" className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input type="email" className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="johndoe@example.com" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5" placeholder="Write your message here..."></textarea>
            </div>
            
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default page




  