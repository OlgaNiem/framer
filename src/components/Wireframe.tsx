import React from 'react';
import { motion, useScroll} from "framer-motion"
import { useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll';


const Wireframe = () => {
  useEffect(() => {
    scroll.scrollToTop(); // Прокрутка к верху страницы при загрузке компонента
  }, []);

  const handleScroll = () => {
    scroll.scrollToBottom(); // Прокрутка к низу страницы при клике на элемент
  };
  return (
    <div className="flex flex-col min-h-screen">
      <motion.div className="bg-gray-700 flex gap-5 p-10 items-center justify-end text-white py-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <motion.div className="bg-gray-500 h-8 w-24" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
        <motion.div className="bg-gray-500 h-8 w-24" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
        <motion.div className="bg-gray-500 h-8 w-24" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
        <motion.div className="bg-gray-500 h-8 w-24" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
        <motion.div className="bg-gray-500 h-8 w-24" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
      </motion.div>
      <div className="flex flex-1">
        <div className="w-1/6 bg-gray-600 text-white">
          <div className="p-4">
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>

            <motion.div className="bg-red-500 h-8 mb-4 flex justify-center items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button onClick={handleScroll}>Scroll down</button>
            </motion.div>
          </div>
        </div>
        <div className="w-5/6 ">
          <div className="bg-gray-300 px-5 flex w-full m-auto justify-between center items-center">
            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"className="h-6 w-6"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <motion.path fillRule="evenodd" d="M10.707 3.293a1 1 0 010 1.414L6.414 9H16a1 1 0 010 2H6.414l4.293 4.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" clipRule="evenodd" />
            </motion.svg>

            <div className="bg-gray-400 w-1/2 mt-8 mb-20 h-80"></div>
      
            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <motion.path fillRule="evenodd" d="M9.293 16.707a1 1 0 01-1.414-1.414L12.586 10H4a1 1 0 010-2h8.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6z" clipRule="evenodd" />
            </motion.svg>

          </div>
          <div className="flex flex-wrap gap-2 justify-center items-center">
          {Array.from(Array(40)).map((_, index) => (
              <React.Fragment key={index}>
                <div className='flex flex-col mb-10 shadow'>
                    <div className={`bg-gray-400 mb-4 mt-10 h-40 w-60 m-2 ${index % 6 === 5 ? 'mb-2' : ''}`}></div>
                    <div className='flex w-full px-4 justify-between'>
                        <div className='h-12 w-12 rounded-full bg-gray-400'></div>
                        <div className='h-12 w-2/3 bg-gray-400'></div>
                    </div>
                    
                </div>
                {index % 6 === 5 && <div className="w-full border-b-8 border-gray-700"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wireframe;
