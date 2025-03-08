'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { VideoPlayer } from '@/components/VideoPlayer';
import InteriorDesignBanner from '@/components/InteriorDesignBanner';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import FeaturedProjects from '@/components/FeaturedProjects';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {isMounted ? (
          <AnimatePresence mode="wait">
            <motion.div 
              key="hero-image"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
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
              key="hero-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[2]" 
            />
          </AnimatePresence>
        ) : null}
        <motion.div 
          style={{ opacity }}
          className="relative text-center text-white z-[3] px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-montserrat text-sm md:text-base uppercase tracking-[0.3em] mb-4 block font-light"
            >
              Welcome to JK Interiors
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-dm-serif text-6xl md:text-8xl font-normal mb-6 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Creating Timeless
              </motion.span>{" "}
              <br />
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[#A89078]"
              >
                Interior Spaces
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-montserrat text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
            >
              We transform ordinary spaces into extraordinary experiences, bringing your vision to life with exceptional craftsmanship and innovative design.
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-[#8B7355] text-white px-8 py-4 rounded-lg hover:bg-[#6B563D] transition-all duration-300 relative overflow-hidden"
            >
              <motion.span 
                className="relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                View Our Projects
              </motion.span>
              <div className="absolute inset-0 bg-[#6B563D] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:border-[#A89078] transition-all duration-300 relative overflow-hidden"
            >
              <motion.span 
                className="relative z-10 group-hover:text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                Get in Touch
              </motion.span>
              <div className="absolute inset-0 bg-[#A89078] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

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

      {/* Interior Design Banner Section */}
      <InteriorDesignBanner />

      {/* Before After Showcase Section */}
      <BeforeAfterShowcase />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}
