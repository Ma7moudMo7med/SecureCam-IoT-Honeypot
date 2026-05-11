"use client";

import React from 'react';
import { 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus,
  Maximize,
  Circle
} from 'lucide-react';

export function PTZControl() {
  return (
    <div className="card">
      <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">PTZ Control</h3>
      
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-36 h-36 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
          <div className="absolute top-1 cursor-pointer hover:text-primary transition-colors">
            <ChevronUp className="w-6 h-6 text-gray-400" />
          </div>
          <div className="absolute bottom-1 cursor-pointer hover:text-primary transition-colors">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
          <div className="absolute left-1 cursor-pointer hover:text-primary transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-400" />
          </div>
          <div className="absolute right-1 cursor-pointer hover:text-primary transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
          
          <div className="w-16 h-16 bg-white/10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-primary group transition-all">
            <Circle className="w-6 h-6 text-gray-400 group-hover:text-black" />
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center justify-between text-[10px] text-gray-500 font-bold uppercase">
              <span>Zoom</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Minus className="w-4 h-4 text-gray-400" />
              </button>
              <div className="flex-1 h-1 bg-white/10 rounded-full relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-lg"></div>
              </div>
              <button className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Plus className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full">
            <p className="text-[10px] text-gray-500 font-bold uppercase mb-2">Preset</p>
            <div className="flex gap-2">
                <select className="flex-1 bg-input border border-border rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-primary appearance-none">
                    <option>Select preset</option>
                    <option>Gate View</option>
                    <option>Parking Lot</option>
                    <option>Main Entry</option>
                </select>
                <button className="bg-white/5 border border-white/10 px-3 py-2 rounded-md text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all">Set</button>
                <button className="bg-primary/20 border border-primary/30 px-3 py-2 rounded-md text-xs text-primary hover:bg-primary/30 transition-all">Go</button>
            </div>
        </div>
      </div>
    </div>
  );
}
