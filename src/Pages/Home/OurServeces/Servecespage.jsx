import React from 'react';
 const services = [
    {
      id: 1,
      title: "Post Lost Items",
      description:
        "Easily create a post for your lost items with details and images to help others identify them.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Report Found Items",
      description:
        "If you find something, quickly report it so the rightful owner can claim it.",
      icon: "📦",
    },
    {
      id: 3,
      title: "Smart Search",
      description:
        "Search lost and found items by category, date, location, or keywords.",
      icon: "⚡",
    },
    {
      id: 4,
      title: "Secure Claim System",
      description:
        "Owners must verify details before claiming items to prevent fraud.",
      icon: "🛡️",
    },
    {
      id: 5,
      title: "Notifications",
      description:
        "Get instant alerts when a similar lost or found item is posted.",
      icon: "🔔",
    },
    {
      id: 6,
      title: "Community Support",
      description:
        "Join a community built on trust and honesty, helping people recover their belongings.",
      icon: "🤝",
    },
  ];
const Servecespage = () => {
    return (
         <div className="bg-gray-50 py-16 px-6">
      <div className=" text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-orange-500 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We provide a simple, secure, and effective way to connect lost items with their owners.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Servecespage;