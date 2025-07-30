import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gray-100 p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800"
      >
        तूर्यनाद 25 Registration
      </motion.h1>
    </div>
  );
}
