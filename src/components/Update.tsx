import React from 'react';
import { motion } from 'framer-motion';

const Wireframe = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        className="bg-gray-700 flex gap-5 p-10 items-center justify-end text-white py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-gray-500 h-8 w-24"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>
        <motion.div
          className="bg-gray-500 h-8 w-24"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>
        <motion.div
          className="bg-gray-500 h-8 w-24"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>
        <motion.div
          className="bg-gray-500 h-8 w-24"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>
        <motion.div
          className="bg-gray-500 h-8 w-24"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>
      </motion.div>
      <div className="flex flex-1">
        <div className="w-1/6 bg-gray-600 text-white">
          <div className="p-4">
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
          </div>
        </div>
        <div className="w-5/6 ">
          <div className="bg-gray-300 px-5 flex w-full m-auto justify-between center items-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.path
                fillRule="evenodd"
                d="M10.707 3.293a1 1 0 010 1.414L6.414 9H16a1 1 0 010 2H6.414l4.293 4.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </motion.svg>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Wireframe;
