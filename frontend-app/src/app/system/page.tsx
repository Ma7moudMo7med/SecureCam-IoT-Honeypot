"use client";

import React, { useState } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { 
  Info, 
  RefreshCw, 
  Database, 
  ShieldAlert, 
  Upload, 
  HardDrive, 
  Activity, 
  Lock,
  ChevronRight,
  Cpu,
  Monitor,
  Globe,
  Zap
} from 'lucide-react';

export default function SystemPage() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState(false);

  const handleUpdate = () => {
    setIsUpdating(true);
    setTimeout(() => {
        setUpdateError(true);
        setIsUpdating(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar title="System Information" />
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-12 gap-8">
            {/* Device Info Card */}
            <div className="col-span-12 xl:col-span-8 card">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Info className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Device Specification</h3>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Model: SC-PRO-2024-NEO</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-gray-400 hover:text-white transition-all">
                        <RefreshCw className="w-3 h-3" />
                        Refresh Status
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                    {[
                        { label: 'Device Name', value: 'SecureCam PRO - Main Gate', icon: Monitor },
                        { label: 'Serial Number', value: 'SN-98234-XJ-882', icon: Activity },
                        { label: 'Firmware Version', value: 'v2.4.1 Build 231124', icon: Cpu },
                        { label: 'Encoding Version', value: 'V5.0 build 231010', icon: Database },
                        { label: 'Web Version', value: 'V4.0.1 build 231115', icon: Globe },
                        { label: 'Plugin Version', value: 'V3.0.7.25', icon: Zap },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <item.icon className="w-4 h-4 text-gray-600" />
                                <span className="text-xs text-gray-400">{item.label}</span>
                            </div>
                            <span className="text-xs font-bold text-gray-200">{item.value}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-3 gap-6">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <Cpu className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-primary">23%</span>
                        </div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">CPU Load</p>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[23%]" />
                        </div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <Database className="w-4 h-4 text-blue-500" />
                            <span className="text-xs font-bold text-blue-500">1.2 GB</span>
                        </div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Memory Usage</p>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[45%]" />
                        </div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <HardDrive className="w-4 h-4 text-purple-500" />
                            <span className="text-xs font-bold text-purple-500">82%</span>
                        </div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Disk Storage</p>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-[82%]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Maintenance & Security */}
            <div className="col-span-12 xl:col-span-4 flex flex-col gap-8">
                <div className="card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                            <Upload className="w-4 h-4 text-green-500" />
                        </div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">System Update</h3>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl mb-6">
                        <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                            Upload firmware file (.bin) to update the device. Ensure stable power during the process.
                        </p>
                        <div className="border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors cursor-pointer group">
                            <Upload className="w-8 h-8 text-gray-600 group-hover:text-primary transition-colors" />
                            <p className="text-[10px] text-gray-500 font-bold uppercase">Click to select file</p>
                        </div>
                    </div>

                    <button 
                        onClick={handleUpdate}
                        disabled={isUpdating}
                        className="btn-primary w-full py-3 text-xs uppercase tracking-widest font-bold"
                    >
                        {isUpdating ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Start Firmware Update'}
                    </button>

                    {updateError && (
                        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                            <div className="flex items-center gap-2 mb-2 text-red-500">
                                <ShieldAlert className="w-4 h-4" />
                                <span className="text-[10px] font-bold uppercase">Kernel Error</span>
                            </div>
                            <p className="text-[10px] text-red-200/60 leading-relaxed font-mono">
                                update_failed: ERR_X892_BUFFER_OVERFLOW. 
                                Memory dump at /var/log/crash.log
                            </p>
                        </div>
                    )}
                </div>

                <div className="card">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                            <RefreshCw className="w-4 h-4 text-red-500" />
                        </div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Maintenance</h3>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-lg text-xs text-gray-300 hover:bg-white/10 hover:border-white/10 transition-all">
                            <span>Reboot Device</span>
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="w-full flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-lg text-xs text-gray-300 hover:bg-white/10 hover:border-white/10 transition-all">
                            <span>Factory Reset</span>
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="w-full flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-lg text-xs text-gray-300 hover:bg-white/10 hover:border-white/10 transition-all">
                            <span>Export Config</span>
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
