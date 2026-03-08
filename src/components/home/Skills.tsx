"use client"

import React from "react"
import { Plus, Minus } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const SKILL_DATA = [
  {
    category: "Web Development",
    skills: [
      "Web Design", "Web Development", "Angular", "JavaScript", "CSS", 
      "Web Scraping", "PHP", "Backbone.js", "Vue.js", "Laravel", "Meteor",
      "CodeIgniter", "CakePHP", "MEAN Stack", "Ruby on Rails", "Node.js", 
      "API", "Django", "TypeScript", "Next.js", "Yii"
    ]
  },
  {
    category: "Mobile Development",
    skills: ["iOS", "Android", "React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"]
  },
  {
    category: "DevOps & Cloud Computing",
    skills: ["AWS", "Docker", "Kubernetes", "Azure", "CI/CD", "Terraform", "Google Cloud"]
  },
  {
    category: "Data Science & AI",
    skills: ["Machine Learning", "Python", "R", "NLP", "Computer Vision", "TensorFlow", "PyTorch"]
  },
  {
    category: "UX/UI Designers",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Interaction Design", "Wireframing"]
  },
  {
    category: "Database & Big Data",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Hadoop", "Spark", "SQL Server"]
  }
]

export default function SkillsetSection() {
  return (
    // Reduced vertical padding for mobile (py-12) vs desktop (py-24)
    <section className="py-12 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header - Tighter margins for mobile */}
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground">
            Discover Our Expert Skillsets
          </h2>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="bg-card border border-border rounded-md overflow-hidden">
          {/* FIX: 'type="single"' ensures the literal type matches Radix expectations.
              Layout: 1 column on mobile, 2 columns on desktop.
          */}
          <Accordion 
            className="w-full grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-collapse"
          >
            {SKILL_DATA.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-border last:border-0"
              >
                {/* Mobile: Smaller padding (py-4) and text (text-sm) */}
                <AccordionTrigger className="px-6 md:px-8 py-4 md:py-6 hover:no-underline group hover:bg-secondary/50 transition-all">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm md:text-base font-bold text-foreground group-data-[state=open]:text-primary transition-colors text-left">
                      {item.category}
                    </span>
                    <div className="relative h-4 w-4 md:h-5 md:w-5 shrink-0">
                      <Plus className="absolute inset-0 h-full w-full text-muted-foreground group-data-[state=open]:opacity-0 transition-opacity" />
                      <Minus className="absolute inset-0 h-full w-full text-primary opacity-0 group-data-[state=open]:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 md:px-8 pb-6 md:pb-8">
                  {/* Skill List: 2 columns to keep height short */}
                  <div className="grid grid-cols-2 gap-y-2 md:gap-y-3 gap-x-4">
                    {item.skills.map((skill) => (
                      <div 
                        key={skill} 
                        className="text-[11px] md:text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors flex items-center gap-2 group/skill"
                      >
                        <div className="h-1 w-1 bg-border rounded-full group-hover/skill:bg-primary transition-colors" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Action Footer - Condensed spacing */}
        <div className="mt-10 md:mt-16 text-center space-y-5">
          <p className="text-sm md:text-muted-foreground font-medium italic">
            Top talent is in high demand.
          </p>
          <Button 
            size="lg" 
            className="bg-[#1DBF74] hover:bg-[#19a463] text-white px-8 md:px-10 h-12 md:h-14 rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all shadow-lg"
          >
            Start Hiring
          </Button>
        </div>
      </div>
    </section>
  )
}