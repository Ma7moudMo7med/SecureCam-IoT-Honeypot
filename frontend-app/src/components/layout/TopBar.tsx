"use client";

import React from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

export function TopBar({ title }: { title: string }) {
  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-8 sticky top-0 z-10">
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-0.5">
          <span>Home</span>
          <span>&gt;</span>
          <span className="text-gray-400">{title}</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">CPU</span>
            <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[23%]" />
            </div>
            <span className="text-[10px] text-primary font-bold">23%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Network</span>
            <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[78%]" />
            </div>
            <span className="text-[10px] text-primary font-bold">78%</span>
          </div>
        </div>

        <div className="flex items-center gap-4 border-l border-border pl-8">
          <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-background"></div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-1.5 rounded-md transition-colors">
            <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
              <User className="w-4 h-4 text-gray-300" />
            </div>
            <span className="text-sm font-medium text-gray-300">admin</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
