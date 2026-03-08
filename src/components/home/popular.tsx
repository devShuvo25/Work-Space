"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Compass, Code2, Globe, Layout, Star, ChevronLeft, ChevronRight, ArrowRight, MapPin } from "lucide-react"

import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const CATEGORIES = [
  { id: "explore", label: "All Jobs", icon: Compass },
  { id: "web", label: "Web Dev", icon: Code2 },
  { id: "wordpress", label: "WordPress", icon: Globe },
  { id: "custom", label: "Full Stack", icon: Layout },
]

const JOBS = [
  {
    id: 1,
    category: "web",
    talent: "Shuvo Mallik",
    role: "MERN Stack Developer",
    title: "Build a Scalable Real-Time Marketplace using Next.js & Socket.io",
    skills: ["React", "Node.js", "MongoDB"],
    rating: 5.0,
    price: 80,
    priceType: "hr",
    location: "Dhaka",
  },
  {
    id: 2,
    category: "wordpress",
    talent: "Rejaul",
    role: "WordPress Specialist",
    title: "Custom WooCommerce Theme Development for Luxury Brand",
    skills: ["PHP", "WooCommerce", "Elementor"],
    rating: 5.0,
    price: 1200,
    priceType: "fixed",
    location: "Remote",
  },
  {
    id: 3,
    category: "web",
    talent: "Towhidul",
    role: "Frontend Engineer",
    title: "Optimize Performance and SEO for Enterprise Dashboard",
    skills: ["TypeScript", "Tailwind", "Motion"],
    rating: 4.9,
    price: 45,
    priceType: "hr",
    location: "Global",
  },
]

export default function SimpleJobCarousel() {
  const [activeCategory, setActiveCategory] = useState("explore")
  const carouselRef = useRef<HTMLDivElement>(null)

  const filteredJobs = activeCategory === "explore" 
    ? JOBS 
    : JOBS.filter(job => job.category === activeCategory)

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header with Right-Aligned Controls */}
        <div className="flex flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
            Recommended for you
          </h2>
          
          <div className="flex items-center gap-6">
            <Button variant="link" className="hidden sm:flex text-slate-500 font-medium p-0 h-auto hover:text-[#1DBF73] transition-colors">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            
            {/* Divider for visual separation */}
            <div className="hidden sm:block h-6 w-[1px] bg-slate-200" />

            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => scroll("left")} className="rounded-full h-9 w-9">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => scroll("right")} className="rounded-full h-9 w-9">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Minimal Sidebar */}
          <nav className="w-full lg:w-56 shrink-0 flex lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat.id 
                    ? "bg-slate-900 text-white" 
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <cat.icon className="h-4 w-4" />
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Card Carousel */}
          <div 
            ref={carouselRef}
            className="flex-1 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="min-w-[300px] md:min-w-[350px] snap-start"
                >
                  <Card className="h-full border-slate-200 flex flex-col shadow-none hover:border-slate-300 hover:shadow-sm transition-all">
                    <CardHeader className="space-y-4">
                      <div className="flex justify-between items-start">
                        <Avatar className="h-10 w-10 border border-slate-100">
                          <AvatarFallback className="text-xs font-bold bg-slate-50">{job.talent[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-right">
                          <p className="text-lg font-bold">${job.price}<span className="text-xs font-normal text-slate-400">/{job.priceType}</span></p>
                          <div className="flex items-center gap-1 text-xs text-slate-500 justify-end">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {job.rating.toFixed(1)}
                          </div>
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold line-clamp-2 leading-snug">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1 text-xs">
                          <MapPin className="h-3 w-3" /> {job.location}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-1.5">
                        {job.skills.map(skill => (
                          <Badge key={skill} variant="secondary" className="text-[10px] font-medium px-2 py-0 bg-slate-100 text-slate-600 border-none">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Button className="w-full bg-[#1DBF73] hover:bg-[#19a463] text-white font-bold text-sm h-11 rounded-lg">
                        See more
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}