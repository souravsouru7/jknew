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
import Footer from '@/components/Footer';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const { scrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const bannerData = [
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      heading: "Creating Timeless",
      subHeading: "Interior Spaces",
      description: "We transform ordinary spaces into extraordinary experiences."
    },
    {
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      heading: "Modern Living",
      subHeading: "Refined Elegance",
      description: "Discover the perfect balance of comfort and sophistication."
    },
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
      heading: "Luxury Design",
      subHeading: "Crafted For You",
      description: "Bespoke interior solutions tailored to your lifestyle."
    }
  ];

  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      <section ref={heroRef} className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        {isMounted && (
          <>
            {bannerData.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  scale: currentSlide === index ? 1 : 1.1
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ y }}
                className="absolute inset-0 z-[1]"
              >
                <Image
                  src={slide.image}
                  alt="JK Interiors"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              </motion.div>
            ))}
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
          className="relative text-center text-white z-[3] px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-[-2rem] sm:mt-0"
        >
          <motion.h1 
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-dm-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal mb-6 sm:mb-8 leading-[1.1] sm:leading-tight"
          >
            {bannerData[currentSlide].heading} <br className="block" />
            <span className="text-[#A89078] inline-block sm:block mt-2">{bannerData[currentSlide].subHeading}</span>
          </motion.h1>
          
          <motion.p
            key={`p-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-montserrat text-lg sm:text-xl mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto font-light leading-relaxed tracking-wide px-4 sm:px-0"
          >
            {bannerData[currentSlide].description}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch px-6 sm:px-0 max-w-md mx-auto sm:max-w-none">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-[#8B7355] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-[#6B563D] transition-all duration-300 text-base sm:text-lg font-medium tracking-wide"
            >
              View Our Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-white/10 transition-all duration-300 text-base sm:text-lg font-medium tracking-wide"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[3] flex gap-3 px-4">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 touch-manipulation ${
                currentSlide === index ? 'bg-white w-10' : 'bg-white/50 w-3'
              }`}
            />
          ))}
        </div>
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

        {/* VR Services Section */}
        <section className="section-padding bg-gray-50 py-16 sm:py-24">
          <div className="container-width px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="font-montserrat text-sm tracking-[0.2em] uppercase text-[#A89078] mb-4 block font-medium">
                Virtual Reality
              </span>
              <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#8B7355] mb-6">
                Experience Your Space in VR
              </h2>
              <p className="text-body text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Step into your future home before it's built. Our VR technology brings your design to life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac"
                  alt="VR Interior Design Experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                  <h3 className="text-white text-xl sm:text-2xl font-dm-serif">Virtual Walkthrough</h3>
                </div>
              </motion.div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: "🏠",
                    title: "Virtual Home Tour",
                    description: "Walk through your designed space in true-to-scale virtual reality."
                  },
                  {
                    icon: "🎨",
                    title: "Real-time Design Changes",
                    description: "Experiment with different colors, materials, and layouts instantly in VR."
                  },
                  {
                    icon: "📐",
                    title: "Accurate Visualization",
                    description: "Experience precise spatial relationships and true-to-life dimensions."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <h4 className="text-xl font-dm-serif text-[#8B7355] mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#8B7355] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-[#6B563D] transition-all duration-300 text-base sm:text-lg font-medium tracking-wide shadow-lg hover:shadow-xl"
              >
                Schedule a VR Demo
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Other sections with viewport-based animations */}
        <InteriorDesignBanner />
        <BeforeAfterShowcase />
        <FeaturedProjects />
        <Testimonials />
        <ConsultationBanner />
        <Footer />
      </motion.div>
    </main>
  );
}
