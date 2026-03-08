"use client"

import React from "react"
import { 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Settings, 
  ExternalLink,
  Award,
  ChevronDown,
  Briefcase,
  FileText,
  LayoutGrid,
  Target
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function JobSidebar() {
  return (
    <aside className="w-full lg:w-[320px] space-y-5 lg:sticky lg:top-24 pb-20 lg:pb-0">
      
      {/* 1. Profile Health & Identity */}
      <Card className="border-slate-200 shadow-sm overflow-hidden bg-white rounded-md">
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-5">
             <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-14 w-14 ring-2 ring-slate-50">
                    <AvatarImage src="https://github.com/shuvo-mallik.png" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#1DBF73] fill-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Shuvo Mallik</h2>
                  <div className="flex items-center gap-1.5">
                    <Award className="h-3 w-3 text-[#1DBF73]" />
                    <p className="text-[10px] text-[#1DBF73] font-black uppercase tracking-wider">
                      Top Rated Plus
                    </p>
                  </div>
                </div>
             </div>
             <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                <Settings className="h-4 w-4" />
             </Button>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Profile Completeness</span>
                <p className="text-xs font-bold text-slate-700">Almost there!</p>
              </div>
              <span className="text-[#1DBF73] font-black text-sm">85%</span>
            </div>
            <Progress value={85} className="h-2 bg-slate-100" />
            <button className="text-[11px] font-bold text-blue-600 hover:underline flex items-center gap-1">
              Add portfolio to reach 100% <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* 2. Collapsible Menu Sections */}
      <Card className="border-slate-200 shadow-sm bg-white rounded-md overflow-hidden">
        <div className="divide-y divide-slate-100">
          
          {/* Proposals Dropdown */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-slate-50 transition-colors group">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-slate-400 group-hover:text-[#1DBF73]" />
                <span className="text-[13px] font-bold text-slate-700">Proposals</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-600  transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pb-4 space-y-2">
              <div className="pl-7 space-y-3 pt-1">
                <div className="flex justify-between text-[12px]">
                  <span className="text-slate-500">Active Proposals</span>
                  <span className="font-bold text-slate-900">12</span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span className="text-slate-500">Submitted</span>
                  <span className="font-bold text-slate-900">4</span>
                </div>
                <button className="text-[11px] font-bold text-[#1DBF73] hover:underline">View all proposals</button>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Project Catalog Dropdown */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-slate-50 transition-colors group">
              <div className="flex items-center gap-3">
                <LayoutGrid className="h-4 w-4 text-slate-400 group-hover:text-[#1DBF73]" />
                <span className="text-[13px] font-bold text-slate-700">Project Catalog</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-600 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pb-4">
              <div className="pl-7 pt-1 space-y-2">
                <p className="text-[11px] text-slate-500 ">No active projects in catalog.</p>
                <button className="text-[11px] font-bold text-[#1DBF73] hover:underline">+ Create a project</button>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Preferences Dropdown */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-slate-50 transition-colors group">
              <div className="flex items-center gap-3">
                <Target className="h-4 w-4 text-slate-400 group-hover:text-[#1DBF73]" />
                <span className="text-[13px] font-bold text-slate-700">Preferences</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-600  transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pb-4 space-y-3">
              <div className="pl-7 pt-1 space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Availability</span>
                  <p className="text-[12px] font-medium text-slate-700">As Needed - Open to Offers</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Job Types</span>
                  <p className="text-[12px] font-medium text-slate-700">Fixed & Hourly</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

        </div>
      </Card>

      {/* 3. Connects & Earnings Quick Look */}
      <Card className="border-slate-200 shadow-sm bg-white rounded-md overflow-hidden">
        <div className="divide-y divide-slate-50">
          <div className="flex justify-between items-center p-4">
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold text-slate-500">Available Connects</span>
              <p className="text-[10px] text-slate-400">Refills in 4 days</p>
            </div>
            <div className="text-right">
                <span className="text-sm font-black text-slate-900 block">48</span>
                <button className="text-[10px] font-bold text-[#1DBF73] hover:underline">Buy More</button>
            </div>
          </div>
        </div>
      </Card>

      {/* 4. Verification Checklist */}
      <Card className="border-slate-200 shadow-sm bg-slate-900 rounded-md overflow-hidden p-5 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/10 rounded-lg">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="text-xs font-bold">Verification</h4>
            <p className="text-[10px] text-slate-400">Increase trust by 40%</p>
          </div>
        </div>
        <Button className="w-full bg-[#1DBF73] hover:bg-[#19a463] text-white font-bold text-[11px] h-9 rounded-xl">
          Verify Identity
        </Button>
      </Card>

    </aside>
  )
}