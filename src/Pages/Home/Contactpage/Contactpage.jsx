import React from 'react';

const Contactpage = () => {
    return (
          <div className="min-h-screen lg:p-12 p-6 lg:flex items-center justify-center bg-gray-100 gap-12">
      <div className="max-w-xl  w-full bg-white shadow-xl rounded-2xl p-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions or found something? Reach out to us!
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
       
      </div>
      <div>
        <img className='w-xl' src="https://i.ibb.co.com/MywXKmRr/Adobe-Express-file-1.png" alt="" />
      </div>
    </div>
    );
};

export default Contactpage;