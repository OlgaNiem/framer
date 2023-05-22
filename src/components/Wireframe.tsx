import React from 'react';
import { motion, useScroll} from "framer-motion"
import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll';

const menuItemVariants = {
  initial: {
      opacity: 0
  },
  animate: {
      opacity: 1
  }
};

const Wireframe = () => {
  const [showScrollButton, setShowScrollButton] = useState (false)
  console.log(showScrollButton)
  
  const handleScrollToBottom = () => {
    scroll.scrollToBottom(); 
  };
  const handleScrollToTop = () => {
    scroll.scrollToTop(); 
  };
  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const bottomOffset = 200; 
        console.log(scrollPosition, documentHeight - bottomOffset)
      if (scrollPosition >= documentHeight - bottomOffset) {
        
        setShowScrollButton(true);
      } else {
        
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollButton]);


  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <motion.div initial="initial" animate="animate" 
      transition={{
        staggerChildren: 0.25,
        delayChildren: 2 //kan också adderas
      }}
      className="bg-gray-700 flex gap-5 p-10 items-center justify-end text-white py-4">
      <motion.div  variants= {menuItemVariants} className="bg-gray-500 h-8 w-24" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
      <motion.div  variants= {menuItemVariants} className="bg-gray-500 h-8 w-24" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
      <motion.div  variants= {menuItemVariants} className="bg-gray-500 h-8 w-24" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
      <motion.div  variants= {menuItemVariants} className="bg-gray-500 h-8 w-24" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
      <motion.div  variants= {menuItemVariants} className="bg-gray-500 h-8 w-24" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
      </motion.div>
      <div className="flex flex-1">
        <div className="w-1/6 bg-gray-600 text-white relative">
          <motion.div className="p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className="bg-gray-700 h-8 mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.div>

            <motion.div className="bg-red-700 h-8 mb-4 flex justify-center items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button onClick={handleScrollToBottom}>Scroll down</button>
            </motion.div>
            
            {showScrollButton && (
              <motion.div className="bg-yellow-500 h-8 mb-4 flex justify-center items-center absolute bottom-0 left-4 right-4 " whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button onClick={handleScrollToTop}>Scroll Up</button>
              </motion.div>
            )}

          </motion.div>
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
              <motion.div className='flex flex-col mb-10 shadow'
              initial={{
                  opacity: 0,
                  y: '2rem'
              }} 
              whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                      duration: 1
                  }
              }}
              >
                  <div className={`bg-gray-400 mb-4 mt-10 h-40 w-60 m-2 ${index % 6 === 5 ? 'mb-2' : ''}`}></div>
                  <div className='flex w-full px-4 justify-between'>
                      <div className='h-12 w-12 rounded-full bg-gray-400'></div>
                      <div className='h-12 w-2/3 bg-gray-400'></div>
                  </div>
                  
              </motion.div>
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
