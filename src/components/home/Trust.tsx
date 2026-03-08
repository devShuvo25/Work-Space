"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Quote, Play, ArrowRight, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const TESTIMONIALS = [
  {
    name: "Kayla Brand",
    role: "Founder",
    content: "The quality of talent here is unmatched. It's our go-to for scaling engineering teams rapidly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    brand: "NETFLIX",
  },
  {
    name: "Tim Walker",
    role: "Product Manager",
    content: "A total game changer for our delivery speed. We launched our MVP three weeks ahead of schedule.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    brand: "amazon",
  },
  {
    name: "Sarah Chen",
    role: "Design Lead",
    content: "Exceptional UI/UX talent available at the click of a button. The vetting process is clearly world-class.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    brand: "Google",
  }
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
}

export default function TrustSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <Badge className="bg-primary/10 text-primary border-none font-black px-4 py-1 rounded-full text-[10px] uppercase tracking-widest">
              Success Stories
            </Badge>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-[0.9]"
            >
              Trusted by <br />
              <span className="text-destructive ">Global Leaders.</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg font-medium max-w-lg">
              Real stories from companies that scaled their vision using our elite talent network.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-wider group"
          >
            See all stories 
            <ArrowRight className="h-5 w-5 transition-transform" />
          </motion.button>
        </div>

        {/* --- Testimonial Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full group bg-card border-border hover:border-primary/40 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-[2rem] overflow-hidden flex flex-col">
                <CardContent className="p-10 flex flex-col h-full">
                  
                  {/* Avatar & Info */}
                  <div className="flex items-center gap-4 mb-8">
                    <Avatar className="h-14 w-14 border-2 border-primary/20 p-1 bg-background">
                      <AvatarImage src={item.image} alt={item.name} className="rounded-full object-cover" />
                      <AvatarFallback className="bg-secondary text-secondary-foreground font-black">{item.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-0.5">
                      <h4 className="text-base font-black text-foreground leading-none">{item.name}</h4>
                      <div className="flex items-center gap-1.5">
                         <CheckCircle2 className="h-3 w-3 text-blue-500 fill-blue-500/10" />
                         <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{item.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content with Decorative Quote */}
                  <div className="relative flex-grow">
                    <Quote className="absolute -top-4 -left-4 text-primary/5 h-12 w-12 -z-0" />
                    <p className="text-foreground/80 text-lg leading-relaxed relative z-10 font-medium ">
                      {item.content}
                    </p>
                  </div>

                  {/* Footer Action & Brand */}
                  <div className="mt-10 pt-8 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-black text-muted-foreground group-hover:text-foreground transition-colors tracking-[0.2em] uppercase">
                      {item.brand}
                    </span>
                    
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="h-10 w-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20 cursor-pointer"
                    >
                      <Play size={14} className="fill-primary-foreground text-primary-foreground ml-0.5" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Trust Bar --- */}
        <div className="mt-20 pt-12 border-t border-border flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-30 grayscale">
            {['MICROSOFT', 'AIRBNB', 'SHOPIFY', 'COINBASE', 'SLACK'].map((brand) => (
              <span key={brand} className="text-xl font-black tracking-tighter">{brand}</span>
            ))}
        </div>
      </div>
    </section>
  )
}