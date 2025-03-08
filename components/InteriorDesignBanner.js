'use client';
import React from 'react';
import { motion } from 'framer-motion';

const InteriorDesignBanner = () => {
  return (
    <div className="w-full bg-white py-20 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-gray-800 mb-3 font-dm-serif"
        >
          Work Online With The Finest Interior Designers
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-16 font-montserrat"
        >
          Get award-winning personalized online interior design help
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            {
              icon: "M5 10V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4 M12 12v4 M4 10h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10z",
              title: "Up to 45% off at +350 furniture stores"
            },
            {
              icon: "M12 2v8 M12 18v4 M12 12a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z M8 12a4 4 0 0 0 4 4v-8a4 4 0 0 0-4 4z M16 12a4 4 0 0 1-4 4v-8a4 4 0 0 1 4-4z",
              title: "Concepts from multiple top designers"
            },
            {
              icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
              title: "One-on-one interior design consultation"
            },
            {
              icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
              title: "3D model of your space"
            },
            {
              icon: "M2 2h20v20H2z M7 7h.01 M7 12h.01 M7 17h.01 M12 7h.01 M12 12h.01 M12 17h.01 M17 7h.01 M17 12h.01 M17 17h.01",
              title: "Color palette & floor plan"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center group"
            >
              <motion.div 
                className="text-[#8B7355] mb-4 transform-gpu"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
              </motion.div>
              <h3 className="text-sm font-medium text-center font-montserrat group-hover:text-[#8B7355] transition-colors duration-300">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-8 bg-gray-100 mt-16"
      />
    </div>
  );
};

export default InteriorDesignBanner;