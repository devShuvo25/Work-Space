"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Quote, Play, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    name: "Kayla Brand",
    role: "Founder",
    content: "The quality of talent here is unmatched. It's our go-to for scaling.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    brand: "NETFLIX",
  },
  {
    name: "Tim Walker",
    role: "Product Manager",
    content: "A game changer for our delivery speed and technical execution.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    brand: "amazon",
  },
  {
    name: "Sarah Chen",
    role: "Design Lead",
    content: "Exceptional UI/UX talent available at the click of a button.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    brand: "Google",
  }
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 260, damping: 20 } 
  }
}

export default function TrustSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Dot Tile - Top Right */}
      <div className="absolute top-10 right-10 opacity-20 hidden md:block">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-[#FF5B5B] rounded-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Trusted by <span className="text-[#1DBF73]">global</span> leaders
            </motion.h2>
            <p className="text-slate-500 mt-4 text-lg">
              Real stories from real companies scaling with our talent.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-[#1DBF73] font-bold cursor-pointer group"
          >
            See all stories 
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="group relative border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white border-none">
                <CardContent className="p-8">
                  {/* Top Row: Avatar & Brand */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14 border-4 border-slate-50 shadow-sm">
                        <AvatarImage src={item.image} alt={item.name} className="object-cover" />
                        <AvatarFallback className="bg-slate-100 text-slate-600 font-bold">{item.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 leading-none mb-1">{item.name}</h4>
                        <p className="text-xs text-[#1DBF73] font-bold uppercase tracking-wider">{item.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative min-h-[80px]">
                    <Quote className="absolute -top-3 -left-4 text-slate-50 h-10 w-10 -z-0" />
                    <p className="text-slate-600 text-base leading-relaxed relative z-10 italic font-medium">
                      {item.content}
                    </p>
                  </div>

                  {/* Footer: Brand & Action */}
                  <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-sm font-black text-slate-300 group-hover:text-slate-900 transition-colors tracking-tighter uppercase">
                      {item.brand}
                    </span>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-[11px] font-extrabold text-[#1DBF73] cursor-pointer"
                    >
                      <div className="p-2 bg-[#1DBF73] rounded-full shadow-lg shadow-[#1DBF73]/20">
                        <Play size={10} className="fill-white text-white" />
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}