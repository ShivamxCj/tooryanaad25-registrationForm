import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gray-100 p-1">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 mb-2 mt-2"
      >
        <img
          src="/imgLogoXL.png" // 🔁 Replace with your small icon
          alt="Small Logo"
          className="w-16 sm:w-24 md:w-24 h-auto"
        />
        <img
          src="/tooryanaad25.png"
          alt="तूर्यनाद 25 Logo"
          className="w-48 sm:w-64 md:w-72 h-auto"
        />
      </motion.div>
    </div>
  );
}
