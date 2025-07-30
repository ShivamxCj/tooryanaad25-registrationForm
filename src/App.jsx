import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gray-100 p-1">
      <motion.img
        src="/imgTyB.png" // Replace with your actual vector file name
        alt="तूर्यनाद 25 Logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-2 w-48 sm:w-64 md:w-72"
      />
    </div>
  );
}
