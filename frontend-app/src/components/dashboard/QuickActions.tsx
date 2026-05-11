"use client";

import React from 'react';
import { Camera, Video, Mic, Lightbulb } from 'lucide-react';

export function QuickActions() {
  const actions = [
    { icon: Camera, label: 'Snapshot', sub: 'Talk' },
    { icon: Video, label: 'Record', sub: 'Talk', active: true },
    { icon: Mic, label: 'Talk', sub: 'Light' },
  ];

  return (
    <div className="card">
      <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Quick Actions</h3>
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action, i) => (
          <button 
            key={i}
            className={`flex flex-col items-center justify-center gap-2 p-3 rounded-lg border transition-all ${
              action.active 
                ? 'bg-red-500/10 border-red-500/50 text-red-500' 
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <action.icon className="w-5 h-5" />
            <div className="text-center">
                <p className="text-[10px] font-bold uppercase">{action.label}</p>
                <p className="text-[8px] text-gray-500">{action.sub}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
