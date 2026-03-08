"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

// Assets
import imageBanner from "../../assets/faizur-rehman-pHPzdEHN6Os-unsplash.jpg"

// --- Configuration & Data ---
const POPULAR_TAGS = ['UI Design', 'Web Design', 'Logo Design', 'NFT Art']
const TRUSTED_LOGOS = ['facebook', 'amazon', 'NETFLIX', 'PayPal']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const FloatingGraphics = () => (
  <>
    <div className="absolute top-10 right-10 hidden lg:block z-20">
      <div className="grid grid-cols-2 gap-1 rotate-12 opacity-50">
        <div className="w-4 h-4 bg-[#FFB300] rounded-sm" />
        <div className="w-4 h-4 bg-[#FF5B5B] rounded-tr-full" />
        <div className="w-4 h-4 bg-[#1DBF73] rounded-bl-full" />
        <div className="w-4 h-4 bg-[#FF5B5B] rounded-sm" />
      </div>
    </div>
    <div className="absolute inset-0 z-10 opacity-[0.05] bg-[radial-gradient(#FF5B5B_1px,transparent_1px)] [background-size:24px_24px]" />
  </>
)

export default function WorkMarketplaceHero() {
  return (
    // Reduced height from 90vh to 70vh on mobile
    <section className="relative w-full min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- Background Layer --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageBanner}
          alt="WorkNova Background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 z-1 bg-black/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 z-2 bg-[radial-gradient(circle,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      <FloatingGraphics />

      {/* --- Centered Content Area --- */}
      <div className="container mx-auto px-6 relative z-30 flex justify-center py-10 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          // Reduced space-y on mobile
          className="max-w-4xl w-full flex flex-col items-center text-center space-y-6 md:space-y-10"
        >
          {/* Headline: Adjusted text sizes */}
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold leading-tight text-white drop-shadow-lg">
            Join the world&apos;s <br className="hidden sm:block" />
            work <span className="text-[#FF5B5B]">marketplace</span>
          </motion.h1>

          {/* Centered Search Bar */}
          <motion.div variants={itemVariants} className="w-full max-w-3xl">
            <div className="flex flex-col md:flex-row items-center bg-white border border-slate-200 rounded-xl shadow-2xl p-1.5 md:p-2 gap-2 transition-all focus-within:ring-4 focus-within:ring-[#1DBF73]/30">
              <div className="flex flex-1 items-center w-full px-3 md:px-4">
                <Search className="h-5 w-5 md:h-6 md:w-6 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search for any service..."
                  className="w-full px-2 md:px-4 py-2.5 md:py-3 outline-none text-slate-900 bg-transparent text-base md:text-xl"
                />
              </div>
              <Button 
                className="bg-[#1DBF73] hover:bg-[#19a463] text-white px-8 md:px-12 h-12 md:h-14 rounded-lg text-lg md:text-xl font-bold transition-all w-full md:w-auto"
                nativeButton={true}
              >
                Search
              </Button>
            </div>
            
            {/* Centered Tags: Hidden on very small screens or reduced size */}
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm md:text-base">
              <span className="font-bold text-white">Popular:</span>
              {POPULAR_TAGS.map((tag) => (
                <button key={tag} className="text-slate-300 hover:text-[#1DBF73] transition-colors underline-offset-4 hover:underline">
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Centered Social Proof: Tighter margins */}
          <motion.div variants={itemVariants} className="pt-4 md:pt-8 w-full">
            <div className="flex flex-col items-center space-y-3 mb-6 md:mb-8">
               <div className="h-px w-16 md:w-24 bg-[#FF5B5B]/50" />
               <p className="text-[10px] md:text-sm font-black text-slate-300 uppercase tracking-[0.3em] md:tracking-[0.4em]">
                 Trusted by 100,000+ Teams
               </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-50 transition-all hover:opacity-100">
              {TRUSTED_LOGOS.map((logo) => (
                <span key={logo} className="text-xl md:text-4xl font-black tracking-tighter cursor-default text-white">
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-20 md:h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  )
}