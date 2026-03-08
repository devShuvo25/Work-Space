"use client"

import React from "react"
import { 
  Clock, 
  Zap, 
  Eye, 
  CheckCircle2, 
  Star, 
  MapPin, 
  ThumbsDown, 
  Heart 
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface JobProps {
  job: {
    id: number | string
    title: string
    description: string
    budget: string
    type: string
    posted: string
    tags: string[]
    // New fields based on reference image
    experienceLevel?: string
    clientVerified?: boolean
    clientRating?: number
    clientSpent?: string
    clientLocation?: string
    proposalsCount?: string
  }
}

export default function JobCard({ job }: JobProps) {
  return (
    <Card className="group bg-white border-slate-200 hover:border-[#1DBF73]/20 hover:bg-gray-50 transition-all duration-300 rounded-md overflow-hidden">
      <CardHeader className="space-y-3 pb-3">
        {/* Top Row: Meta info and Actions */}
        <div className="flex flex-row items-start justify-between space-y-0">
          <div className="space-y-1">
            <span className="text-[12px] text-slate-500">
              Posted {job.posted}
            </span>
            <CardTitle className="text-xl font-medium text-[#14a800] group-hover:underline cursor-pointer transition-all leading-snug">
              {job.title}
            </CardTitle>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full h-9 w-9 text-slate-400 hover:text-red-500 border-slate-200">
              <ThumbsDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-9 w-9 text-slate-400 hover:text-[#14a800] border-slate-200">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Pricing & Level Row */}
        <div className="flex items-center gap-2 text-[13px] text-slate-600">
          <span className="font-medium">{job.type}</span>
          <span>•</span>
          <span>{job.experienceLevel || "Entry level"}</span>
          <span>•</span>
          <span>Est. Budget: {job.budget}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <div className="relative">
          <p className="text-[14px] text-slate-700 leading-relaxed line-clamp-3">
            {job.description}
          </p>
          <button className="text-[#14a800] font-bold text-sm hover:underline mt-1">more</button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-slate-100 text-slate-600 font-medium px-3 py-1 rounded-full border-none hover:bg-slate-200 cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Client Stats Row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-slate-500">
          <div className="flex items-center gap-1 text-blue-600 font-medium">
            <CheckCircle2 className="h-4 w-4 fill-blue-600 text-white" />
            <span>Payment verified</span>
          </div>
          
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < (job.clientRating || 5) ? 'fill-orange-400 text-orange-400' : 'text-slate-300'}`} />
            ))}
          </div>

          <span className="font-medium text-slate-700">{job.clientSpent || "$700+"} spent</span>
          
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            <span>{job.clientLocation || "USA"}</span>
          </div>
        </div>

        {/* Proposals Info */}
        <div className="text-[13px] text-slate-600">
          Proposals: <span className="font-medium text-slate-900">{job.proposalsCount || "20 to 50"}</span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-slate-100 pt-4 bg-slate-50/20">
        <div className="flex items-center gap-4">
           {/* Additional meta can go here */}
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-destructive font-bold hover:bg-[#14a800]/5">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
          <Button className="rounded-full bg-primary hover:bg-[#118a00] px-6 font-bold">
            Quick Apply
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}