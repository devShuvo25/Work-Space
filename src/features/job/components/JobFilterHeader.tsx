"use client"

import React, { useState } from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { 
  Search, 
  SlidersHorizontal, 
  ChevronDown, 
  X,
  DollarSign,
  LayoutGrid,
  Clock,
  History
} from "lucide-react"

const CATEGORIES = ["All", "MERN Stack", "Next.js", "WordPress", "UI/UX", "SEO", "Video Editing"]
const POSTED_TIMES = ["Anytime", "Past 24 Hours", "Past Week", "Past Month"]
const BUDGET_RANGES = ["Any Budget", "Under $500", "$500 - $2k", "$2k - $5k", "$5k+"]

export default function JobFilterHeader() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [postedTime, setPostedTime] = useState("Anytime")
  const [budget, setBudget] = useState("Any Budget")
  const [searchQuery, setSearchQuery] = useState("")

  const clearAllFilters = () => {
    setActiveCategory("All")
    setPostedTime("Anytime")
    setBudget("Any Budget")
    setSearchQuery("")
  }

  const hasActiveFilters = activeCategory !== "All" || postedTime !== "Anytime" || budget !== "Any Budget"

  return (
    <nav className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          
          {/* --- Search Area --- */}
          <div className="relative flex-1 w-full">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="h-4 w-4" />
            </div>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for your next big project..." 
              className="w-full h-12 pl-11 pr-11 bg-slate-50 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#1DBF73]/20 transition-all"
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            
            {/* 1. Category Filter */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none hover:bg-slate-50 transition-colors">
                <LayoutGrid className="h-4 w-4 text-slate-400" />
                <span className="truncate max-w-[80px]">{activeCategory}</span>
                <ChevronDown className="h-3 w-3 opacity-50" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content align="end" sideOffset={8} className="z-[100] min-w-[200px] rounded-xl border border-slate-100 bg-white p-1 shadow-xl animate-in fade-in zoom-in-95">
                  <DropdownMenu.RadioGroup value={activeCategory} onValueChange={setActiveCategory}>
                    {CATEGORIES.map((cat) => (
                      <DropdownMenu.RadioItem key={cat} value={cat} className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-xs font-medium text-slate-600 outline-none hover:bg-[#1DBF73]/5 hover:text-[#1DBF73]">
                        {cat}
                      </DropdownMenu.RadioItem>
                    ))}
                  </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            {/* 2. Posted Time Filter */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none hover:bg-slate-50 transition-colors">
                <History className="h-4 w-4 text-slate-400" />
                <span className="truncate max-w-[80px]">{postedTime}</span>
                <ChevronDown className="h-3 w-3 opacity-50" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content align="end" sideOffset={8} className="z-[100] min-w-[180px] rounded-xl border border-slate-100 bg-white p-1 shadow-xl">
                  <DropdownMenu.RadioGroup value={postedTime} onValueChange={setPostedTime}>
                    {POSTED_TIMES.map((time) => (
                      <DropdownMenu.RadioItem key={time} value={time} className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-xs font-medium text-slate-600 outline-none hover:bg-slate-50">
                        {time}
                      </DropdownMenu.RadioItem>
                    ))}
                  </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            {/* 3. Budget Filter */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none hover:bg-slate-50 transition-colors">
                <DollarSign className="h-4 w-4 text-slate-400" />
                <span className="truncate max-w-[80px]">{budget}</span>
                <ChevronDown className="h-3 w-3 opacity-50" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content align="end" sideOffset={8} className="z-[100] min-w-[180px] rounded-xl border border-slate-100 bg-white p-1 shadow-xl">
                  <DropdownMenu.RadioGroup value={budget} onValueChange={setBudget}>
                    {BUDGET_RANGES.map((range) => (
                      <DropdownMenu.RadioItem key={range} value={range} className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-xs font-medium text-slate-600 outline-none hover:bg-slate-50">
                        {range}
                      </DropdownMenu.RadioItem>
                    ))}
                  </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors outline-none">
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* --- Active Filters Breadcrumbs --- */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-1">Active:</span>
            
            {activeCategory !== "All" && (
              <BadgeItem label={activeCategory} onClear={() => setActiveCategory("All")} />
            )}
            {postedTime !== "Anytime" && (
              <BadgeItem label={postedTime} onClear={() => setPostedTime("Anytime")} />
            )}
            {budget !== "Any Budget" && (
              <BadgeItem label={budget} onClear={() => setBudget("Any Budget")} />
            )}

            <button 
              onClick={clearAllFilters}
              className="text-[10px] font-black text-red-500 hover:text-red-600 uppercase tracking-tighter ml-2"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

// Sub-component for clean filter badges
function BadgeItem({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#1DBF73]/20 bg-[#1DBF73]/5 px-3 py-1 text-[11px] font-bold text-[#1DBF73]">
      {label}
      <button onClick={onClear} className="hover:text-[#19a463]">
        <X className="h-3 w-3" />
      </button>
    </div>
  )
}