'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black bg-opacity-80 shadow-md backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white hover:text-indigo-500 transition duration-300">
            Kavan's Life
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="#content" className="hover:text-indigo-500 transition duration-300">
                Read More
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="mt-28 flex justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            The Birth of a <span className="text-[#254d1f]">Guitarist</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-400">
            How Childhood Choices Ignite Lifelong Passions
          </p>
        </motion.div>
      </header>

      {/* Content Section */}
      <main
  id="content"
  className="py-16 w-[60%] mx-auto  flex flex-col items-center justify-center px-6 md:px-20"
>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg md:text-xl leading-relaxed mb-6">
           </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
          
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
           </p>
          <p className="text-lg md:text-xl leading-relaxed">
          </p>
        </motion.div>
      </main>

      {/* Footer */}
 
    </div>
  );
};

export default Page;
