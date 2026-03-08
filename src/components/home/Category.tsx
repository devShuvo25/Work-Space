"use client"

import React from "react"
import { 
  Code2, 
  PenTool, 
  BarChart4, 
  PieChart, 
  Settings2, 
  Box, 
  TrendingUp,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Developers",
    desc: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies."
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Designers",
    desc: "Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators and animators."
  },
  {
    icon: <BarChart4 className="h-6 w-6" />,
    title: "Marketing Experts",
    desc: "Experts in digital marketing, growth marketing, content creation, brand strategy execution, and more."
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Management Consultants",
    desc: "Finance experts, business strategists, M&A consultants, and financial modelers with deep market expertise."
  },
  {
    icon: <Settings2 className="h-6 w-6" />,
    title: "Project Managers",
    desc: "Digital and technical project managers, scrum masters, and more with expertise in numerous PM tools."
  },
  {
    icon: <Box className="h-6 w-6" />,
    title: "Product Managers",
    desc: "Digital product managers and scrum owners with expertise in industries like banking, healthcare, and more."
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Sales Experts",
    desc: "Lead generation experts, SDRs, sales reps, and customer success managers to drive your revenue."
  }
]

export default function CategorySection() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground">
            Hire for any scope
          </h2>
          <p className="text-muted-foreground">
            Connect with the top 3% of freelance talent worldwide.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-border rounded-md overflow-hidden bg-card shadow-sm">
          {categories.map((item, i) => (
            <div 
              key={i} 
              className="p-10 border-r border-b border-border hover:bg-destructive/50 transition-colors group cursor-pointer"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                 <div className="text-primary group-hover:text-primary-foreground">
                    {item.icon}
                 </div>
              </div>
              <h3 className="text-xl font-black mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* "More Skills" Call-to-Action Box */}
          <div className="p-10 flex flex-col justify-center bg-secondary/20">
             <h3 className="text-xl font-black mb-3 text-foreground">
               Plus Thousands More Skills
             </h3>
             <p className="text-sm text-muted-foreground mb-6">
               Whatever skill or specialization your business requires, we have the top talent to meet your needs.
             </p>
             <Button variant="link" className="p-0 text-primary font-bold h-auto self-start hover:no-underline">
               Browse all categories <ArrowRight className="ml-2 h-4 w-4" />
             </Button>
          </div>
        </div>
      </div>
    </section>
  )
}