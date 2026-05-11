"use client";

import React from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { 
  Calendar as CalendarIcon, 
  Search, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  FastForward,
  Camera,
  Download,
  Scissors,
  Maximize2
} from 'lucide-react';

export default function PlaybackPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar title="Playback" />
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-12 gap-8 h-full">
            {/* Sidebar Search */}
            <div className="col-span-12 xl:col-span-3 flex flex-col gap-6">
                <div className="card">
                    <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Search Parameters</h3>
                    
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Camera</label>
                            <select className="input-field w-full text-sm">
                                <option>Camera 01</option>
                                <option>Camera 02</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Date</label>
                            <div className="bg-white/5 border border-border rounded-xl p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold text-white">May 2025</span>
                                    <div className="flex gap-2">
                                        <button className="text-gray-500 hover:text-white">&lt;</button>
                                        <button className="text-gray-500 hover:text-white">&gt;</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                                        <span key={d} className="text-[8px] text-gray-600 font-bold uppercase">{d}</span>
                                    ))}
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center">
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <button 
                                            key={i} 
                                            className={`text-[10px] py-1.5 rounded-md transition-all ${
                                                i + 1 === 24 ? 'bg-primary text-black font-bold' : 'text-gray-400 hover:bg-white/10'
                                            }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Stream Type</label>
                            <select className="input-field w-full text-sm">
                                <option>Main Stream</option>
                                <option>Sub Stream</option>
                            </select>
                        </div>

                        <button className="btn-primary w-full mt-4 uppercase tracking-widest text-xs font-bold">
                            <Search className="w-4 h-4" />
                            Search Records
                        </button>
                    </div>
                </div>

                <div className="card flex-1">
                    <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">File List</h3>
                    <div className="space-y-3">
                         {[
                            { time: '22:10:00 - 22:35:00', type: 'Continuous' },
                            { time: '21:45:12 - 21:50:30', type: 'Event' },
                            { time: '20:30:00 - 21:00:00', type: 'Manual' },
                         ].map((item, i) => (
                            <div key={i} className="p-3 bg-white/5 border border-white/5 rounded-lg hover:border-primary/30 transition-all cursor-pointer group">
                                <p className="text-[10px] font-bold text-gray-300 group-hover:text-primary">{item.time}</p>
                                <p className="text-[8px] text-gray-500 uppercase tracking-widest">{item.type}</p>
                            </div>
                         ))}
                    </div>
                </div>
            </div>

            {/* Main Playback Area */}
            <div className="col-span-12 xl:col-span-9 flex flex-col gap-4">
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-border shadow-2xl group">
                    <img 
                        src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80&w=2000" 
                        alt="Playback feed"
                        className="w-full h-full object-cover opacity-60 grayscale"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary/40 backdrop-blur-md cursor-pointer hover:scale-110 transition-transform">
                            <Pause className="w-8 h-8 text-primary fill-primary" />
                        </div>
                    </div>
                    
                    <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 text-white font-mono text-sm">
                        2025-05-24  22:10:35
                    </div>

                    {/* Bottom Controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button className="p-2 text-gray-400 hover:text-white"><SkipBack className="w-5 h-5" /></button>
                                <button className="p-2 text-gray-400 hover:text-white"><Pause className="w-6 h-6 fill-white" /></button>
                                <button className="p-2 text-gray-400 hover:text-white"><SkipForward className="w-5 h-5" /></button>
                                <button className="p-2 text-gray-400 hover:text-white ml-4 flex items-center gap-1">
                                    <FastForward className="w-5 h-5" />
                                    <span className="text-[10px] font-bold">1x</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="p-2 text-gray-400 hover:text-white"><Camera className="w-5 h-5" /></button>
                                <button className="p-2 text-gray-400 hover:text-white"><Scissors className="w-5 h-5" /></button>
                                <button className="p-2 text-gray-400 hover:text-white"><Download className="w-5 h-5" /></button>
                                <button className="p-2 text-gray-400 hover:text-white border-l border-white/10 ml-2"><Maximize2 className="w-5 h-5" /></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="card flex-1 flex flex-col p-6">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Playback Timeline</span>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-[8px] text-gray-500 uppercase">Continuous</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-[8px] text-gray-500 uppercase">Event</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-[8px] text-gray-500 uppercase">Manual</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative bg-white/5 rounded border border-white/5 overflow-hidden min-h-[100px]">
                        {/* Time Markers */}
                        <div className="absolute top-0 left-0 right-0 h-4 flex justify-between px-4 border-b border-white/5 items-center">
                            {['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'].map(t => (
                                <span key={t} className="text-[8px] text-gray-600 font-mono">{t}</span>
                            ))}
                        </div>

                        {/* Timeline Rails */}
                        <div className="absolute inset-x-0 top-6 bottom-4 flex flex-col justify-center gap-2 px-4">
                            <div className="h-6 w-full bg-white/5 rounded relative overflow-hidden">
                                <div className="absolute left-[20%] right-[10%] h-full bg-green-500/30 border-x border-green-500/50"></div>
                                <div className="absolute left-[45%] w-[2%] h-full bg-red-500"></div>
                                <div className="absolute left-[80%] w-[5%] h-full bg-blue-500/50"></div>
                            </div>
                        </div>

                        {/* Playhead */}
                        <div className="absolute top-0 bottom-0 left-[72%] w-0.5 bg-primary shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
