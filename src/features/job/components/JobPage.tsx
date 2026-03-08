"use client";

import React from "react";
import {
  Clock,
  Zap,
  TrendingUp,
  Briefcase,
  ArrowRight,
  Eye,
  CheckCircle2,
  Sparkles,
  Pause,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import JobFilterHeader from "./JobFilterHeader";
import JobCard from "./JobCard";

const JOBS_DATA = [
  {
    id: 1,
    title: "MERN Stack Developer for Fintech Dashboard",
    description:
      "Looking for an expert to build a real-time analytics dashboard using Next.js, Node, and Socket.io. Must have experience with high-performance MongoDB schemas.",
    budget: "$2,500",
    type: "Fixed Price",
    posted: "2h ago",
    tags: ["React", "Socket.io", "Express"],
  },
  {
    id: 2,
    title: "Full Stack Developer - Document Management System",
    description:
      "Need help building a DMS with Prisma and PostgreSQL. Focus on document versioning and secure role-based access control.",
    budget: "$80/hr",
    type: "Hourly",
    posted: "5h ago",
    tags: ["Prisma", "PostgreSQL", "Next.js"],
  },
  {
    id: 3,
    title: "WordPress Specialist for Luxury Brand",
    description:
      "Custom WooCommerce theme development with a focus on animations and glassmorphism design trends.",
    budget: "$1,200",
    type: "Fixed Price",
    posted: "8h ago",
    tags: ["PHP", "WooCommerce", "Tailwind"],
  },
];

export default function JobPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Global Slim Banner */}
      <div className="w-full bg-slate-900 py-2.5 px-4 text-center border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <div className="hidden sm:flex h-5 w-5 items-center justify-center rounded-full bg-[#1DBF73]/20">
            <Sparkles className="h-3 w-3 text-[#1DBF73]" />
          </div>
          <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.15em]">
            Skill Match:{" "}
            <span className="text-white">12 New MERN Projects</span> match your
            profile today
          </p>
          <button className="text-[10px] font-black text-[#1DBF73] hover:text-white transition-colors ml-2 underline underline-offset-4 decoration-2">
            VIEW ALL
          </button>
        </div>
      </div>

      <JobFilterHeader />

      <main className="max-w-7xl mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* --- Left Side: All Jobs --- */}
          <div className="flex-1 space-y-6">
            {/* --- NEW: Image-Inspired Promo Banner --- */}
            <div className="relative overflow-hidden bg-[#14532d] rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-center group">
              <div className="z-10 space-y-4 max-w-md">
                <span className="text-sm font-medium opacity-90">
                  Get hired faster
                </span>
                <h2 className="text-3xl font-bold leading-tight">
                  Boosted Proposals first place winners see up to 2X increase in
                  hires
                </h2>
                <Button className="bg-white text-[#14532d] hover:bg-slate-100 rounded-full font-bold px-6">
                  Learn how
                </Button>
              </div>

              {/* Visual Stack Element */}
              <div className="relative mt-8 md:mt-0 w-48 h-32 hidden sm:block">
                <div className="absolute top-4 left-4 w-full h-full bg-white/10 rounded-xl border border-white/10" />
                <div className="absolute top-2 left-2 w-full h-full bg-white/20 rounded-xl border border-white/20" />
                <div className="absolute top-0 left-0 w-full h-full bg-white rounded-xl shadow-2xl p-4 flex flex-col gap-2">
                  <div className="flex justify-end">
                    <Badge className="bg-blue-600 hover:bg-blue-600 text-[9px] uppercase font-black">
                      Boosted
                    </Badge>
                  </div>
                  <div className="h-1.5 w-3/4 bg-slate-100 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-slate-100 rounded-full" />
                  <div className="h-1.5 w-2/3 bg-slate-100 rounded-full" />
                </div>
              </div>

              {/* Progress/Pagination Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <Pause className="h-3 w-3 opacity-50 cursor-pointer" />
                <div className="flex gap-1.5">
                  <div className="h-1 w-12 bg-white rounded-full" />
                  <div className="h-1 w-12 bg-white/30 rounded-full" />
                  <div className="h-1 w-12 bg-white/30 rounded-full" />
                </div>
              </div>
            </div>

            {/* Header for Job Feed */}
            <div className="flex items-center justify-between px-1">
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Recommended Jobs
                </h1>
                <p className="text-sm text-slate-500">
                  Based on your expertise in MERN Stack
                </p>
              </div>
              <div className="flex items-center bg-white border border-slate-200 rounded-full px-3 py-1 gap-2 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1DBF73] animate-pulse" />
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">
                  {JOBS_DATA.length} New Postings
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {JOBS_DATA.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>

          {/* --- Right Side: Sidebar --- */}
          <aside className="w-full lg:w-[320px] space-y-6 lg:sticky lg:top-36">
            {/* Profile Health Card */}
            <Card className="border-slate-200 shadow-sm overflow-hidden bg-white rounded-2xl">
              <CardContent className="p-5">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <Avatar className="h-12 w-12 ring-2 ring-slate-50">
                      <AvatarImage src="https://github.com/shuvo-mallik.png" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#1DBF73] fill-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">
                      Shuvo Mallik
                    </h2>
                    <p className="text-[10px] text-[#1DBF73] font-black uppercase tracking-wider">
                      Top Rated
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-slate-400">Score</span>
                    <span className="text-[#1DBF73]">85%</span>
                  </div>
                  <Progress value={85} className="h-1.5 bg-slate-100" />
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden">
              <div className="px-5 py-4 bg-slate-50/50 border-b border-slate-100">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                  <TrendingUp className="h-3 w-3 text-blue-500" /> Stats
                </h3>
              </div>
              <div className="divide-y divide-slate-50">
                <div className="flex justify-between items-center p-5">
                  <span className="text-[11px] font-bold text-slate-500">
                    Active Proposals
                  </span>
                  <span className="text-sm font-black text-slate-900 underline decoration-[#1DBF73] decoration-2 underline-offset-4">
                    12
                  </span>
                </div>
                <div className="flex justify-between items-center p-5">
                  <span className="text-[11px] font-bold text-slate-500">
                    Available Connects
                  </span>
                  <span className="text-sm font-black text-slate-900">48</span>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
