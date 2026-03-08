"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { CheckCircle2, Play } from "lucide-react"
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

// Variants for the container to orchestrate children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// Variants for individual list items
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
}

export default function ValueProps() {
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
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 leading-[1.15]"
            >
              A whole world of freelance <br /> 
              talent at your <span className="text-[#1DBF73]">fingertips</span>
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

          {/* --- Right: Interactive Visual Asset --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] aspect-video bg-slate-900 group cursor-pointer"
          >
            {/* Animated Play Button Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
               <motion.div 
                 whileHover={{ scale: 1.15 }}
                 whileTap={{ scale: 0.95 }}
                 className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-all group-hover:bg-[#1DBF73]/90 group-hover:border-transparent"
               >
                  <Play className="h-10 w-10 text-white fill-current ml-1" />
               </motion.div>
            </div>

            {/* Background Image with Zoom Effect */}
            <Image 
              fill
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" 
              alt="Team collaborating" 
              className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}