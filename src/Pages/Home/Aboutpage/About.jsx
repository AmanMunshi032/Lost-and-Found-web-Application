
import React from 'react';

const About = () => {
    return (
        <div className='lg:flex bg-gray-100 '>
                <div className="min-h-screen gap-4 lg:flex items-center justify-center p-6">
                     <div className='flex-1  shadow-xl '>
                <img className='rounded-2xl w-full lg:h-156' src="https://i.ibb.co.com/tM79NqFL/3775023.jpg" alt="" />
            </div>
      <div className="flex-1 bg-white shadow-xl rounded-2xl p-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Lost & Found
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
          Lost & Found is a community-driven platform designed to help people 
          recover their lost belongings and return found items to their rightful owners. 
          Our mission is to create a secure and reliable space where honesty and trust 
          come first. Whether you’ve lost something valuable or found an item, our 
          platform connects people and ensures belongings are safely returned.  
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              🎯 Our Mission
            </h3>
            <p className="text-gray-700">
              To build a simple yet effective platform that bridges the gap 
              between those who have lost items and those who have found them. 
              We aim to make the process quick, transparent, and trustworthy.
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              🌍 Our Vision
            </h3>
            <p className="text-gray-700">
              To become the most reliable global hub for lost and found services, 
              fostering a culture of kindness, honesty, and community support.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-gray-500">
          <p>🤝 Together, we can help lost things find their way home.</p>
        </div>
      </div>
    </div>
           
       
    </div>
    );
};

export default About;