"use client"

import React, { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import { CheckCircle2, Play, X } from "lucide-react"
import Image from "next/image"

const FEATURES = [
  {
    title: "Stick to your budget",
    description: "Find the right service for every price point. No hourly rates, just project-based pricing.",
  },
  {
    title: "Get quality work done quickly",
    description: "Hand your project over to a talented freelancer in minutes, get long-lasting results.",
  },
  {
    title: "Pay when you're happy",
    description: "Upfront quotes mean no surprises. Payments only get released when you approve.",
  },
  {
    title: "Count on 24/7 support",
    description: "Our round-the-clock support team is available to help anytime, anywhere.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
}

export default function ValueProps() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 bg-[#F1F3F4] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* --- Left: Value Points --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-12 leading-[1.1]"
            >
              A whole world of freelance <br /> 
              talent at your <span className="text-[#FF5B5B] italic">fingertips</span>
            </motion.h2>

            <div className="space-y-6">
              {FEATURES.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex gap-5 p-4 rounded-xl transition-colors hover:bg-white hover:shadow-md group"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="h-7 w-7 text-slate-400 transition-colors group-hover:text-[#1DBF73] shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1DBF73] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mt-2 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- Right: Video/Visual Asset --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video bg-black group"
          >
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-[#1DBF73] transition-all"
                    >
                      <Play className="h-10 w-10 text-white fill-current ml-1" />
                    </motion.div>
                  </div>

                  {/* Thumbnail Image */}
                  <Image 
                    fill
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" 
                    alt="Success Story Video" 
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                </motion.div>
              ) : (
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full bg-black"
                >
                  {/* Video Element */}
                  <video 
                    autoPlay 
                    controls 
                    className="w-full h-full object-contain"
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Close button to go back to thumbnail */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
                    className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}