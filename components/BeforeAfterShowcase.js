'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BeforeAfterShowcase = () => {
  return (
    <div className="w-full bg-white py-8 px-4 relative">
      {/* Top navigation tabs */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-center space-x-8">
        <div className="text-gray-400 uppercase text-sm font-manrope tracking-widest">BEFORE</div>
        <div className="uppercase text-sm font-manrope tracking-widest relative">
          AFTER
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-700"></div>
        </div>
      </div>
      
      {/* Main content container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Room image */}
        <div className="relative w-full md:w-7/12 rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/api/placeholder/1000/600" 
            alt="Feng Shui bedroom with green view"
            width={1000}
            height={600}
            className="w-full h-full object-cover rounded-lg"
          />
          
          {/* Navigation arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        
        {/* Content section */}
        <div className="w-full md:w-5/12 flex flex-col justify-center">
          <div className="mb-12">
            <h2 className="text-xl font-marcellus text-gray-800 mb-4">Client's Challenge</h2>
            <p className="font-manrope text-gray-600 leading-relaxed">
              We would like a more minimal look with Feng Shui and natural elements that highlight our beautiful green view.
            </p>
          </div>
          
          <div className="mb-10">
            <h2 className="text-xl font-marcellus text-gray-800 mb-4">Result</h2>
            <p className="font-cormorant text-gray-600 mb-4 text-xl italic">
              "We got the relaxing dream home we always wanted. Wanda was fun to work with and paid attention to every single detail."
            </p>
            <p className="font-manrope text-gray-600 mb-4 tracking-wide">- Kris</p>
            
            {/* Star rating */}
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="text-amber-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </div>
          
          <div>
            <a href="#" className="inline-block uppercase font-manrope text-amber-700 font-medium tracking-[0.2em] border-b border-amber-700 pb-1">
              VIEW MORE DETAILS
            </a>
          </div>
        </div>
      </div>
      
      {/* Chat bubble icon in bottom right */}
      <div className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      
      {/* Brain icon in bottom left corner */}
      <div className="fixed bottom-6 left-6 w-10 h-10">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <circle cx="18" cy="18" r="18" fill="white" stroke="#E5E7EB" />
          <path d="M18 10 C14 10, 11 13, 11 17 C11 21, 14 24, 18 24 C22 24, 25 21, 25 17 C25 13, 22 10, 18 10" stroke="#FF00FF" fill="none" strokeWidth="2" />
          <path d="M18 10 C22 10, 25 13, 25 17 C25 21, 22 24, 18 24" stroke="#00FFFF" fill="none" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default BeforeAfterShowcase;