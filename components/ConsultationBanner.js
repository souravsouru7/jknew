'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ConsultationBanner() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-xl rounded-2xl overflow-hidden"
      >
        {/* Image Section */}
        <div className="lg:w-3/5 relative h-[300px] sm:h-[400px] lg:h-auto">
          <Image 
            src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6"
            alt="Luxury interior design consultation"
            fill
            className="w-full h-full object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>
        
        {/* Text Section */}
        <div className="lg:w-2/5 bg-white p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-dm-serif text-[#8B7355] mb-3 sm:mb-4">
              Think you can't afford beautiful interior design?
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-dm-serif text-[#8B7355] mb-6 sm:mb-8">
              Think again.
            </h3>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#A89078] hover:bg-[#8B7355] text-white font-montserrat py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition duration-300 w-full max-w-md uppercase tracking-wider text-sm sm:text-base"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
