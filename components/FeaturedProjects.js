'use client';
import Image from "next/image";
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Modern Minimalist Haven",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    description: "A contemporary approach to minimal living"
  },
  {
    title: "Luxury Penthouse Suite",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    description: "Sophisticated urban living at its finest"
  },
  {
    title: "Boutique Office Space",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    description: "Creative workspace design for modern professionals"
  },
  {
    title: "Coastal Villa Retreat",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    description: "Seaside luxury with natural elements"
  },
  
  {
    title: "Urban Loft Design",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    description: "Industrial chic meets modern comfort"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-montserrat text-sm tracking-[0.2em] uppercase text-[#A89078] mb-4 block font-medium">
            Our Portfolio
          </span>
          <h2 className="heading-serif text-4xl md:text-6xl text-[#8B7355] mb-6">
            Featured Projects
          </h2>
          <p className="text-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most inspiring transformations and innovative designs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm font-montserrat tracking-wider uppercase block mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-dm-serif mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-light">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
