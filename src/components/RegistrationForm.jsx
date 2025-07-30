import { useState } from "react";
import { motion } from "framer-motion";
import FloatingInput from "./FloatingInput";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    competitions: [],
  });

  const competitionsList = [
    "नुक्कड़ नाटक",
    "परिधानिका",
    "खिचड़ी",
    "चक्रव्यूह",
    "कवि सम्मेलन",
    "छात्र संसद",
    "छायाचिर्तन",
    "सृजन",
    "अभिव्यक्ति नृत्य",
    "अभिव्यक्ति मंच",
    "अभिव्यक्ति गायन",
    "लेखन",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompetitionChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updated = checked
        ? [...prev.competitions, value]
        : prev.competitions.filter((item) => item !== value);
      return { ...prev, competitions: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted (frontend only)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center px-4 gap-24">
      
      {/* LEFT: Image (no bg, no card) */}
    <motion.div
  className="hidden md:block"
  animate={{ rotate: [0, 90, -90,0] }}
  transition={{
    duration: 16, // total cycle duration
    ease: "easeInOut",
    repeat: Infinity,
  }}
>
  <img
    src="/imgLogoXL.png"
    alt="Vector Illustration"
    className="w-[400px] h-auto object-contain"
  />
</motion.div>
      {/* RIGHT: Form (inside card) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white max-w-xl w-full rounded-xl shadow-lg p-6 sm:p-10"
      >
        <form onSubmit={handleSubmit} className="text-lg">
          {/* Name */}
          <div className="mb-5">
            <FloatingInput
              label="नाम"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <FloatingInput
              label="ईमेल"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="mb-5">
            <FloatingInput
              label="फ़ोन नंबर"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* College */}
          <div className="mb-6">
            <FloatingInput
              label="कॉलेज / विश्वविद्यालय"
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
            />
          </div>

          {/* Competitions */}
          <div className="mb-8">
            <label className="block font-bold text-gray-700 mb-4 text-base sm:text-lg">
              प्रतियोगिताएँ चुनें
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {competitionsList.map((comp, index) => (
                <label
                  key={index}
                  className="flex items-start space-x-2 text-gray-800 text-base"
                >
                  <input
                    type="checkbox"
                    value={comp}
                    checked={formData.competitions.includes(comp)}
                    onChange={handleCompetitionChange}
                    className="mt-1 accent-blue-600"
                  />
                  <span>{comp}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition text-base"
          >
            सबमिट करें
          </button>
        </form>
      </motion.div>
    </div>
  );
}
