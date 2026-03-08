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
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- Background Layer --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageBanner}
          alt="WorkNova Background"
          fill
          priority
          className="object-cover object-center transition-transform duration-1000"
          quality={100}
        />
        
        {/* Centered Shadow Overlay: Darker in the middle, fading out to edges */}
        <div className="absolute inset-0 z-1 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 z-2 bg-[radial-gradient(circle,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      <FloatingGraphics />

      {/* --- Centered Content Area --- */}
      <div className="container mx-auto px-6 relative z-30 flex justify-center py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full flex flex-col items-center text-center space-y-10"
        >
          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight text-white drop-shadow-lg">
            Join the world&apos;s <br />
            work <span className="text-[#FF5B5B]">marketplace</span>
          </motion.h1>

          {/* Centered Search Bar */}
          <motion.div variants={itemVariants} className="w-full max-w-3xl">
            <div className="flex flex-col md:flex-row items-center bg-white border border-slate-200 rounded-xl shadow-2xl p-2 gap-2 transition-all focus-within:ring-4 focus-within:ring-[#1DBF73]/30">
              <div className="flex flex-1 items-center w-full px-4">
                <Search className="h-6 w-6 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search for any service..."
                  className="w-full px-4 py-3 outline-none text-slate-900 bg-transparent text-lg md:text-xl"
                />
              </div>
              <Button 
                className="bg-[#1DBF73] hover:bg-[#19a463] text-white px-12 h-14 rounded-lg text-xl font-bold transition-all hover:scale-[1.02] active:scale-95 w-full md:w-auto"
                nativeButton={true}
              >
                Search
              </Button>
            </div>
            
            {/* Centered Tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-base">
              <span className="font-bold text-white">Popular:</span>
              {POPULAR_TAGS.map((tag) => (
                <button key={tag} className="text-slate-200 hover:text-[#1DBF73] transition-colors underline-offset-4 hover:underline">
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Centered Social Proof */}
          <motion.div variants={itemVariants} className="pt-8 w-full">
            <div className="flex flex-col items-center space-y-4 mb-8">
               <div className="h-px w-24 bg-[#FF5B5B]/50" />
               <p className="text-sm font-black text-slate-300 uppercase tracking-[0.4em]">
                 Trusted by 100,000+ Teams
               </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-50  transition-all hover:opacity-100">
              {TRUSTED_LOGOS.map((logo) => (
                <span key={logo} className="text-2xl md:text-4xl font-black tracking-tighter cursor-default text-white">
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  )
}