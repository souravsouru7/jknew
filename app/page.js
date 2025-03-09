'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import { VideoPlayer } from '@/components/VideoPlayer';
import InteriorDesignBanner from '@/components/InteriorDesignBanner';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import FeaturedProjects from '@/components/FeaturedProjects';
import Testimonials from '@/components/Testimonials';
import ConsultationBanner from '@/components/ConsultationBanner';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef(null);
  const { scrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen">
      <section ref={heroRef} className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        {isMounted && (
          <>
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ y }}
              className="absolute inset-0 z-[1]"
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="JK Interiors - Luxury Interior Design"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black z-[2]" 
            />
          </>
        )}

        <motion.div 
          style={{ opacity }}
          className="relative text-center text-white z-[3] px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="font-dm-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal mb-4 sm:mb-6 leading-tight">
            Creating Timeless <br className="hidden sm:block" />
            <span className="text-[#A89078] inline sm:block">Interior Spaces</span>
          </h1>
          
          <p className="font-montserrat text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto font-light leading-relaxed tracking-wide px-4 sm:px-0">
            We transform ordinary spaces into extraordinary experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-[#8B7355] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#6B563D] transition-all duration-300 text-sm sm:text-base"
            >
              View Our Projects
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#A89078] hover:border-[#A89078] transition-all duration-300 text-sm sm:text-base"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </section>

      <motion.div
        initial={false}
        className="contents"
      >
        {/* How it Works Section */}
        <section className="section-padding bg-white section-border">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="font-montserrat text-sm tracking-[0.2em] uppercase text-[#A89078] mb-4 block font-medium">
                Our Process
              </span>
              <h2 className="heading-serif text-4xl md:text-6xl text-[#8B7355] mb-6">
                How it Works
              </h2>
              <p className="text-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Experience our streamlined approach to creating your perfect space
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-3 gap-12 mb-24">
              {[
                {
                  step: '01',
                  title: 'Share Your Vision',
                  description: "Tell us about your space, style preferences, and budget. We'll carefully understand your needs and lifestyle."
                },
                {
                  step: '02',
                  title: 'Get Custom Designs',
                  description: "Our expert designers create personalized concepts that perfectly align with your vision and requirements."
                },
                {
                  step: '03',
                  title: 'Transform Your Space',
                  description: "Watch as we bring your chosen design to life with meticulous attention to detail and premium execution."
                }
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-8 group hover:bg-gray-50 rounded-2xl transition-all duration-300"
                >
                  <span className="heading-serif text-8xl text-[#A89078]/10 block mb-6 group-hover:text-[#A89078]/20 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="heading-serif text-2xl md:text-3xl text-[#8B7355] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-body text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Video Section with improved spacing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <VideoPlayer />
            </motion.div>
          </div>
        </section>

        {/* Other sections with viewport-based animations */}
        <InteriorDesignBanner />
        <BeforeAfterShowcase />
        <FeaturedProjects />
        <Testimonials />
        <ConsultationBanner />
      </motion.div>
    </main>
  );
}
