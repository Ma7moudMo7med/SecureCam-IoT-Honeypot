"use client";

import React from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { PTZControl } from '@/components/dashboard/PTZControl';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { Maximize2, Camera, Video, Volume2, Settings } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar title="Live View" />
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-12 gap-8 h-full">
          {/* Main Video Section */}
          <div className="col-span-12 xl:col-span-9 flex flex-col gap-4">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-border shadow-2xl group">
              {/* Overlay: Top Info */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10 pointer-events-none">
                <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  <p className="text-white font-medium text-sm">Camera 01</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-white font-bold text-xs uppercase tracking-widest">Live</span>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 text-white font-mono text-[10px]">
                        2025-05-24  22:35:42
                    </div>
                </div>
              </div>

              {/* Placeholder Content (SURVEILLANCE IMAGE) */}
              <img 
                src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80&w=2000" 
                alt="Live Camera Feed"
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Scanlines Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

              {/* Overlay: Bottom Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 border border-primary/30 px-3 py-1.5 rounded text-primary text-[10px] font-bold">HD</div>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors"><Camera className="w-5 h-5" /></button>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors"><Video className="w-5 h-5" /></button>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors"><Volume2 className="w-5 h-5" /></button>
                </div>
                <div className="flex items-center gap-3">
                   <button className="p-2 text-gray-400 hover:text-white transition-colors"><Maximize2 className="w-5 h-5" /></button>
                </div>
              </div>
            </div>

            {/* Camera Info Strip */}
            <div className="grid grid-cols-4 gap-4">
                {[
                    { label: 'Status', value: 'Streaming', color: 'text-green-500' },
                    { label: 'Resolution', value: '1920x1080', color: 'text-gray-300' },
                    { label: 'Bitrate', value: '4.2 Mbps', color: 'text-gray-300' },
                    { label: 'Encoding', value: 'H.265+', color: 'text-gray-300' },
                ].map((stat, i) => (
                    <div key={i} className="card flex flex-col gap-1 py-3 px-4">
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{stat.label}</span>
                        <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                ))}
            </div>
          </div>

          {/* Sidebar Controls */}
          <div className="col-span-12 xl:col-span-3 flex flex-col gap-6">
            <PTZControl />
            <QuickActions />
            
            <div className="card flex-1">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Recent Logs</h3>
                    <Settings className="w-4 h-4 text-gray-500" />
                </div>
                <div className="space-y-4">
                    {[
                        { time: '22:35:10', event: 'Motion', detail: 'Zone 1' },
                        { time: '22:34:45', event: 'API', detail: 'Auth Success' },
                        { time: '22:33:12', event: 'System', detail: 'Service OK' },
                        { time: '22:31:05', event: 'PTZ', detail: 'Move Gate' },
                    ].map((log, i) => (
                        <div key={i} className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                            <div className="flex flex-col">
                                <span className="text-white font-medium">{log.event}</span>
                                <span className="text-gray-500 text-[10px]">{log.detail}</span>
                            </div>
                            <span className="text-gray-500 font-mono">{log.time}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
