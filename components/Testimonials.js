'use client';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Priya Reddy",
    role: "Homeowner - Banjara Hills",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    text: "JK Interiors transformed our Banjara Hills villa into a perfect blend of modern luxury and traditional elements. Their attention to detail and understanding of our cultural preferences was impressive.",
  },
  {
    name: "Arun Kumar",
    role: "CEO - Tech Park, HITEC City",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "Working with JK Interiors for our HITEC City office was a fantastic experience. They created a space that reflects our company's innovative spirit while maintaining functionality.",
  },
  {
    name: "Dr. Meera Sharma",
    role: "Resident - Jubilee Hills",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5",
    text: "The team's expertise in combining contemporary design with Indian aesthetics is remarkable. Our home in Jubilee Hills has become a talking point among our friends and family.",
  }
];

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 0, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const cardVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const imageVariants = {
  hover: { 
    scale: 1.1,
    transition: { duration: 0.3 }
  }
};

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="font-montserrat text-sm tracking-[0.2em] uppercase text-[#A89078] mb-2 sm:mb-4 block font-medium">
            Testimonials
          </span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#8B7355] mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-body text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Hear from our satisfied clients across Hyderabad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl transition-all"
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="relative w-16 h-16 rounded-full overflow-hidden"
                  variants={imageVariants}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="ml-4">
                  <motion.h3 
                    className="font-dm-serif text-xl text-[#8B7355]"
                    whileHover={{ scale: 1.05 }}
                  >
                    {testimonial.name}
                  </motion.h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
              <motion.div 
                className="mt-6 flex justify-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                {[...Array(5)].map((_, index) => (
                  <motion.svg
                    key={index}
                    className="w-5 h-5 text-[#A89078]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
