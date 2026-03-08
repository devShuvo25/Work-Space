"use client"

import React, { useState } from "react"
import { MessageCircle, X, Search, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* 2. The Inbox Modal */}
      {isOpen && (
        <div className="w-[380px] h-[500px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300 origin-bottom-right">
          {/* Modal Header */}
          <div className="p-4 border-b bg-white flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Messages</h3>
            <div className="flex gap-2">
               <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Search className="h-4 w-4" />
               </Button>
               <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <MoreHorizontal className="h-4 w-4" />
               </Button>
            </div>
          </div>

          {/* Inbox List (Example) */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {[1, 2, 3].map((i) => (
              <button 
                key={i} 
                className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-md transition-colors text-left group"
              >
                <div className="h-12 w-12 rounded-full bg-slate-100 border relative shrink-0">
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-[#1DBF73] border-2 border-white rounded-full" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-slate-900">Client Name {i}</span>
                    <span className="text-[10px] text-slate-400 font-medium">12:45 PM</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    Hey! Is the MERN project still on track for Monday?
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Modal Footer */}
          <div className="p-3 border-t bg-slate-50 text-center text-[10px] font-bold text-[#1DBF73] uppercase tracking-wider">
            View all in Dashboard
          </div>
        </div>
      )}

      {/* 1. The Trigger Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-14 w-14 rounded-full shadow-xl transition-all duration-300 border-none",
          isOpen ? "bg-slate-900 rotate-90" : "bg-[#1DBF73] hover:scale-110"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </Button>
    </div>
  )
}