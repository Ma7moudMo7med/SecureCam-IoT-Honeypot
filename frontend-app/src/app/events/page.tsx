"use client";

import React, { useState } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Search, Calendar, Filter, ChevronRight, Play, Download, Trash2, ChevronLeft, MoreVertical } from 'lucide-react';

const mockEvents = [
  { id: 1, time: '2025-05-24 22:31:12', type: 'Motion Detection', camera: 'Camera 01', desc: 'Motion detected in area 1', color: 'text-green-500', icon: '🟢' },
  { id: 2, time: '2025-05-24 22:18:45', type: 'Line Crossing', camera: 'Camera 01', desc: 'Line crossing detected', color: 'text-yellow-500', icon: '🟡' },
  { id: 3, time: '2025-05-24 21:47:03', type: 'Intrusion', camera: 'Camera 01', desc: 'Intrusion detected in area 3', color: 'text-red-500', icon: '🔴' },
  { id: 4, time: '2025-05-24 21:33:21', type: 'Scene Change', camera: 'Camera 01', desc: 'Scene changed', color: 'text-blue-500', icon: '🔵' },
  { id: 5, time: '2025-05-24 21:12:09', type: 'Video Loss', camera: 'Camera 01', desc: 'Video connection lost', color: 'text-gray-500', icon: '⚪' },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar title="Events" />
      
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Filters Header */}
        <div className="card mb-8">
            <div className="grid grid-cols-12 gap-6 items-end">
                <div className="col-span-12 md:col-span-3">
                    <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-2">Event Type</label>
                    <select className="input-field w-full text-sm">
                        <option>All Types</option>
                        <option>Motion Detection</option>
                        <option>Line Crossing</option>
                        <option>Intrusion</option>
                    </select>
                </div>
                <div className="col-span-12 md:col-span-3">
                    <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-2">Start Time</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input type="text" value="2025-05-24 00:00:00" className="input-field w-full pl-10 text-sm" readOnly />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-3">
                    <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-2">End Time</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input type="text" value="2025-05-24 23:59:59" className="input-field w-full pl-10 text-sm" readOnly />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-3">
                    <button className="btn-primary w-full h-[42px] uppercase tracking-widest text-xs font-bold">
                        <Search className="w-4 h-4" />
                        Search
                    </button>
                </div>
            </div>
        </div>

        {/* Events Table */}
        <div className="card flex-1 overflow-hidden flex flex-col p-0">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5 border-b border-border">
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Time</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Event Type</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Camera</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Description</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Preview</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {mockEvents.map((event) => (
                            <tr key={event.id} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4 text-xs font-mono text-gray-400">{event.time}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-xs font-bold ${event.color}`}>{event.type}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-xs text-gray-300">{event.camera}</td>
                                <td className="px-6 py-4 text-xs text-gray-400">{event.desc}</td>
                                <td className="px-6 py-4">
                                    <div className="relative w-24 h-14 bg-black rounded border border-border overflow-hidden group/thumb cursor-pointer">
                                        <img src={`https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80&w=200&h=120&sig=${event.id}`} alt="Preview" className="w-full h-full object-cover opacity-50 group-hover/thumb:opacity-100 transition-opacity" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                                            <Play className="w-6 h-6 text-primary fill-primary/20" />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-primary/10 rounded transition-colors" title="Play back">
                                            <Play className="w-4 h-4 text-primary" />
                                        </button>
                                        <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Download">
                                            <Download className="w-4 h-4 text-gray-400" />
                                        </button>
                                        <button className="p-2 hover:bg-red-500/10 rounded transition-colors" title="Delete">
                                            <Trash2 className="w-4 h-4 text-red-500/70" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="p-6 border-t border-border flex items-center justify-between">
                <span className="text-xs text-gray-500">Total 1,284 events found</span>
                <div className="flex items-center gap-2">
                    <button className="p-2 bg-white/5 border border-white/10 rounded-md text-gray-500 hover:text-white disabled:opacity-30" disabled><ChevronLeft className="w-4 h-4" /></button>
                    {[1, 2, 3, '...', 129].map((p, i) => (
                        <button key={i} className={`w-8 h-8 rounded-md text-xs font-bold transition-all ${p === 1 ? 'bg-primary text-black' : 'hover:bg-white/10 text-gray-500 hover:text-white'}`}>
                            {p}
                        </button>
                    ))}
                    <button className="p-2 bg-white/5 border border-white/10 rounded-md text-gray-500 hover:text-white"><ChevronRight className="w-4 h-4" /></button>
                    
                    <div className="ml-4 flex items-center gap-2">
                        <select className="bg-input border border-border rounded-md px-2 py-1.5 text-[10px] text-gray-400 focus:outline-none">
                            <option>10 / page</option>
                            <option>20 / page</option>
                            <option>50 / page</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
