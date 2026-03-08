"use client"

import React from "react"
import { 
  Zap, 
  Users, 
  Rocket, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Hire Quickly",
    desc: "Hire in under 48 hours. Scale up or down with no strings attached. Flexible engagements from hourly to full-time."
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "The Top 3%",
    desc: "Every applicant is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate."
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Leading the Future",
    desc: "Our network embraces advanced and specialized skills including blockchain, AI, and cloud architecture."
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "A Level Above",
    desc: "Every freelancer embodies the highest levels of integrity, professionalism, and proactive communication."
  }
]

const expertCards = [
  {
    name: "Mihaela Maciuca",
    role: "Project Manager",
    expertise: "Project Management",
    prevAt: "COGNIZANT",
    img: "https://i.pravatar.cc/150?u=mihaela",
    className: "z-30 top-0 right-0"
  },
  {
    name: "Jacqueline Churchwell",
    role: "Strategy Consultant",
    expertise: "Management Consulting",
    prevAt: "BAIN & COMPANY",
    img: "https://i.pravatar.cc/150?u=jacqueline",
    className: "z-20 top-24 left-0"
  },
  {
    name: "Stephen Lindauer",
    role: "React Developer",
    expertise: "Engineering",
    prevAt: "META",
    img: "https://i.pravatar.cc/150?u=stephen",
    className: "z-10 bottom-0 right-12"
  }
]

export default function WhyChooseRedesign() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* --- Left Content Column (7 Cols) --- */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] border-none bg-primary/10 text-primary">
                Why Choose Our Platform
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground leading-[0.95]">
                Build Amazing Teams, <br />
                <span className="text-destructive ">On Demand.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Quickly assemble the world-class teams you need, exactly when you need them, without the overhead of traditional hiring.
              </p>
            </div>

            {/* Feature Grid with Vertical Alignment */}
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
              {features.map((feature, i) => (
                <div key={i} className="group space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black tracking-tight text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="h-14 px-10 rounded-md bg-destructive text-primary-foreground font-black text-base shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              Find Your Talent Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* --- Right Visual Column (5 Cols) --- */}
          <div className="hidden lg:block lg:col-span-5 relative h-[700px] w-full mt-12 lg:mt-0">
            {expertCards.map((card, i) => (
              <Card 
                key={i} 
                className={`absolute w-[280px] bg-card border-border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden hover:scale-105 hover:z-50 transition-all duration-500 cursor-default ${card.className}`}
              >
                <div className="h-48 w-full bg-muted overflow-hidden">
                   <img 
                    src={card.img} 
                    alt={card.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-black text-base text-foreground leading-none">{card.name}</h4>
                    <div className="flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 fill-blue-500/10" />
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                        Verified in <span className="text-primary">{card.expertise}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.15em] mb-1">Previously At</p>
                    <p className="text-sm font-black tracking-tighter  opacity-80 text-foreground">
                      {card.prevAt}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Background Aesthetic Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  )
}