import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-l from-[#004E50] to-[#009E96]">
      {/* 🔹 Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#003638]">Let’s Connect</h2>
        <div className="h-[3px] w-24 bg-gradient-to-r from-[#009E96] to-[#00E5E0] rounded-full mx-auto mt-3"></div>
        <p className="text-[#fff] mt-4 text-base max-w-lg mx-auto">
          I’d love to collaborate, discuss new ideas, or help you bring your vision to life.
          Reach out through any of the platforms below!
        </p>
      </div>

      {/* 🔹 Contact Info Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 mb-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-md w-64"
        >
          <FaEnvelope className="text-3xl text-[#00A5B0] mb-2" />
          <a
            href="mailto:srushtipatil@gmail.com"
            className="text-lg font-medium text-[#003638] hover:text-[#009E96] transition"
          >
            srushtipatil@gmail.com
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-md w-64"
        >
          <FaPhoneAlt className="text-3xl text-[#00A5B0] mb-2" />
          <a
            href="tel:+919876543210"
            className="text-lg font-medium text-[#003638] hover:text-[#009E96] transition"
          >
            +91 98765 43210
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-md w-64"
        >
          <FaLocationDot className="text-3xl text-[#00A5B0] mb-2" />
          <p className="text-lg font-medium text-[#003638]">Pune, Maharashtra</p>
        </motion.div>
      </div>

      {/* 🔹 Social Links */}
      <div className="flex justify-center gap-8">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#004E50] text-3xl hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#004E50] text-3xl hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://behance.net"
          target="_blank"
          rel="noreferrer"
          className="text-[#004E50] text-3xl hover:scale-110 transition-transform"
        >
          <FaBehance />
        </a>
      </div>

      {/* 🔹 Footer Text */}
      <p className="text-center text-[#003638]/70 mt-10">
        Let’s create something amazing together 💫
      </p>
    </section>
  );
};

export default Contact;
