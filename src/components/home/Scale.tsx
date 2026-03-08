"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Globe2, Users2, Zap, ShieldCheck } from "lucide-react"

// Shadcn Components
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const BENTO_DATA = [
  {
    title: "Global Reach",
    value: "160+",
    label: "Countries represented",
    icon: Globe2,
    className: "lg:col-span-2 lg:row-span-2 bg-slate-900 text-white",
    iconColor: "text-[#1DBF73]"
  },
  {
    title: "Expertise",
    value: "800+",
    label: "Categories of skill",
    icon: Zap,
    className: "bg-white text-slate-900 border-slate-100",
    iconColor: "text-orange-500"
  },
  {
    title: "Verified",
    value: "100%",
    label: "Identity & Skill checks",
    icon: ShieldCheck,
    className: "bg-[#1DBF73] text-white",
    iconColor: "text-white"
  },
  {
    title: "Community",
    value: "2M+",
    label: "Active Freelancers",
    icon: Users2,
    className: "lg:col-span-2 bg-slate-50 text-slate-900 border-slate-100",
    iconColor: "text-[#FF5B5B]"
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100 } 
  }
}

export default function ScaleBento() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 max-w-xl">
          <Badge className="bg-[#1DBF73]/10 text-[#1DBF73] hover:bg-[#1DBF73]/20 border-none mb-4">
            Our Network
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Built for the <span className="text-[#1DBF73]">new era</span> of work.
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[180px]"
        >
          {BENTO_DATA.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`${item.className} rounded-[2rem] p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group`}
            >
              {/* Decorative Glow for Hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-md ${item.iconColor}`}>
                  <item.icon size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                  {item.title}
                </span>
              </div>

              <div>
                <h3 className="text-4xl font-black tracking-tighter mb-1">
                  {item.value}
                </h3>
                <p className="text-sm font-medium opacity-70">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}