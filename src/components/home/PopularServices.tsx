"use client"

import React, { useRef } from "react"
import { motion, Variants } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const SERVICES = [
  {
    title: "Voice Over",
    description: "Share your message",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800", 
    color: "bg-orange-500/10"
  },
  {
    title: "WordPress",
    description: "Customize your site",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
    color: "bg-green-500/10"
  },
  {
    title: "Video Editing",
    description: "Capture your audience",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800",
    color: "bg-blue-500/10"
  },
  {
    title: "SEO",
    description: "Unlock growth online",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800",
    color: "bg-purple-500/10"
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 } 
  }
}

export default function PopularServices() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Dots */}
      <div className="absolute top-10 right-10 opacity-20 hidden md:block">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-[#FF5B5B] rounded-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              <span className="text-[#FF5B5B]">Popular</span> professional <br /> services
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex items-start gap-3"
            >
              <div className="mt-1.5 text-[#FF5B5B]">
                <ArrowRight className="h-5 w-5 rotate-45" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">The best for every budget</p>
                <p className="text-slate-500 mt-1">
                  Find high-quality services at every price point.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm bg-white"
            >
              <ChevronLeft className="h-6 w-6 text-slate-600" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm bg-white"
            >
              <ChevronRight className="h-6 w-6 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-0 snap-center lg:snap-align-none relative group cursor-pointer h-[350px] rounded-xl overflow-hidden shadow-md transition-all"
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <div className={`absolute inset-0 ${service.color}`} />
                <Image 
                  src={service.image} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt={service.title} 
                />
              </div>

              <div className="relative z-20 p-6 h-full flex flex-col text-white text-left">
                <p className="text-sm font-medium opacity-90 mb-1">{service.description}</p>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                
                <div className="mt-auto self-end opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                   <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                      <ArrowRight className="h-5 w-5" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}