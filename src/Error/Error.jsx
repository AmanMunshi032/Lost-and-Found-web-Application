import { motion } from "framer-motion";
import { Link } from "react-router";


export default function LostAndFoundErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Lost Item"
          className="w-28 mx-auto mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-3xl font-bold text-gray-800">Oops! Item Not Found</h1>
        <p className="text-gray-500 mt-2">
          The page or item you are looking for might have been lost or no longer exists.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-cyan-300"
          >
            🏠 Go Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
