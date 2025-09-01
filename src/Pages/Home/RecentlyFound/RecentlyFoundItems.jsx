
import { motion } from "motion/react"
const RecentlyFoundItems = () => {
  const reviews = [
   {
    id: 1,
    name: "Imran Khan",
    image: "https://i.ibb.co.com/QFBbPhGF/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray.jpg",
    review:
      "I lost my wallet, posted it here, and within two days someone returned it. Amazing platform!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rafiul Islam",
    image: "https://i.ibb.co.com/zWpVW2sj/cheerful-bearded-man-busines-clothes-showing-thumb-up-looking-camera-gray.jpg",
    review:
      "Found a phone in the park and was able to return it to the rightful owner easily. Highly recommend!",
    rating: 4,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    image: "https://i.ibb.co.com/JRXJp0yP/portrait-happy-smiling-cheerful-support-phone-operator-headset-isolated-white-wall.jpg",
    review:
      "This service is a lifesaver. It's great to see honesty and kindness still alive.",
    rating: 5,
  },
{
  id: 4,
    name: "Tamanna Akter",
    image: "https://i.ibb.co.com/hJwyCZvw/brooke-cagle-8jp-6-Sj-Vib-M-unsplash.jpg",
    review:
      "This service is a lifesaver. It's great to see honesty and kindness still alive.",
    rating: 5,
}
    
  ];

  return (
      <section className="p-6">
      <div className=" text-center">
        <motion.h2
       
          className="text-3xl  text-orange-500 md:text-5xl font-bold  mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          What People Say
        </motion.h2>
        <p className="text-gray-600 mb-10">
          Hear from our community members who’ve used our Lost & Found service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
               whileHover={{
                scale: [null, 1.1, 1.2],
                transition: {
                    duration: 0.3,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {review.name}
              </h3>
              <div className="flex justify-center text-yellow-400 mb-3">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="text-gray-600 text-sm">{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyFoundItems;
