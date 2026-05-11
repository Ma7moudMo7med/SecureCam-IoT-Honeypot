"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Video, 
  PlayCircle, 
  Bell, 
  HardDrive, 
  Network, 
  Settings, 
  ShieldCheck, 
  Monitor,
  Database,
  Cpu
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Video, label: 'Live View', href: '/dashboard' },
  { icon: PlayCircle, label: 'Playback', href: '/playback' },
  { icon: Bell, label: 'Events', href: '/events' },
  { icon: Monitor, label: 'Devices', href: '/devices' },
  { icon: Network, label: 'Network', href: '/network' },
  { icon: Database, label: 'Storage', href: '/storage' },
  { icon: Cpu, label: 'System', href: '/system' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-sidebar border-r border-border flex flex-col fixed left-0 top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <ShieldCheck className="text-black w-7 h-7" />
        </div>
        <div>
          <h1 className="text-white font-bold text-lg leading-tight">SecureCam</h1>
          <p className="text-primary text-[10px] font-bold tracking-widest uppercase">PRO / NEO</p>
        </div>
      </div>

      <div className="mt-4 px-4">
        <div className="bg-white/5 rounded-lg p-3 flex items-center gap-3 border border-white/10">
          <div className="relative">
            <Video className="w-5 h-5 text-primary" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-sidebar animate-pulse"></div>
          </div>
          <div>
            <p className="text-xs font-medium text-white">Camera 01</p>
            <p className="text-[10px] text-green-500 font-medium">Online</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 mt-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "sidebar-item",
                isActive && "sidebar-item-active"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-gray-400")} />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border flex items-center gap-3">
        <div className="flex gap-4 px-2">
            <Bell className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white" />
            <ShieldCheck className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white" />
            <Settings className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
}
