"use client"

import React from "react"
import { 
  Quote, 
  ArrowUpRight,
  PlayCircle,
  CheckCircle2,
  Users2,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function SuccessStory() {
  return (
    <section className=" bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[0.9] lg:leading-[0.85]">
              Real Results. <br />
              <span className="text-destructive">Global Scale.</span>
            </h2>
          </div>
          <Button variant="outline" className="rounded-full px-8 font-bold border-border hover:bg-secondary">
            View all stories <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* --- Main Success Card --- */}
        <Card className="border-none bg-card rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5">
          <div className="grid lg:grid-cols-12">
            
            {/* Left Narrative (7 Columns) */}
            <div className="lg:col-span-7 p-8 md:p-16 space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <Quote className="h-5 w-5 text-primary fill-primary/10" />
                </div>
                <span className="text-sm font-black tracking-widest uppercase text-muted-foreground">Featured Transformation</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground leading-tight">
                We scaled our development team from 2 to 15 in under a month without sacrificing code quality.
              </h3>

              {/* Data Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-10 border-y border-border">
                <div className="space-y-1">
                  <p className="text-3xl font-black text-primary">45%</p>
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.15em]">Cost Efficiency</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-black text-primary">3.2x</p>
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.15em]">Faster Delivery</p>
                </div>
                <div className="hidden md:block space-y-1">
                  <p className="text-3xl font-black text-primary">98%</p>
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.15em]">Retention Rate</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-full bg-secondary border-4 border-background overflow-hidden shadow-sm">
                   <Image 
                    fill 
                    src="https://i.pravatar.cc/150?u=ceo" 
                    alt="Nuraz Zamal - CEO" 
                    className="object-cover" 
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-sm font-black text-foreground">Nuraz Zamal</p>
                  <p className="text-xs font-bold text-muted-foreground">CEO at iMS Systems</p>
                </div>
              </div>
            </div>

            {/* Right Visual (5 Columns) */}
            {/* Image of a modern software development team collaborating in a bright office space */}
            <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-full bg-slate-900 overflow-hidden group">
              <Image 
                fill
                priority
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqgY2_5VP5xxOOipe8y_DGKLJgjAar7loJg&s" 
                alt="Working Team Collaboration" 
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
              
              {/* Floating Verified Badge */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6 rounded-2xl shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="h-4 w-4 text-primary fill-primary/10" />
                       <span className="text-[10px] font-black text-white uppercase tracking-widest">Verified Case Study</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-white/90">
                        <Users2 className="h-4 w-4 text-white/60" />
                        <span className="text-xs font-bold">Team: 15+ MERN Developers</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90">
                        <Calendar className="h-4 w-4 text-white/60" />
                        <span className="text-xs font-bold">24 Months</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Play Trigger Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button className="h-20 w-20 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group/btn">
                  <PlayCircle className="h-10 w-10 fill-current group-hover/btn:text-white" />
                </button>
              </div>
            </div>

          </div>
        </Card>

        {/* --- Trust Logos --- */}
        <div className="mt-16 flex flex-wrap justify-between items-center gap-10 grayscale opacity-40 hover:opacity-100 transition-opacity">
           {['Badhon Soft', 'iMS Systems', 'Programming Hero', 'KUET', 'Dhaka Tech'].map((logo) => (
             <span key={logo} className="text-xl font-black tracking-tighter">{logo}</span>
           ))}
        </div>

      </div>
    </section>
  )
}