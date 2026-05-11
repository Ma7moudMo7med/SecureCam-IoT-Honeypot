"use client";

import React, { useState } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Save, RefreshCw, AlertTriangle, Shield, Globe, Zap, Network as NetworkIcon, Share2 } from 'lucide-react';

export default function NetworkPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar title="Network Settings" />
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-12 gap-8">
            {/* Left Column: IP Configuration */}
            <div className="col-span-12 xl:col-span-7 flex flex-col gap-8">
                <div className="card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <NetworkIcon className="w-4 h-4 text-blue-500" />
                        </div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">TCP/IP Configuration</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2 flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 mb-4">
                            <div>
                                <p className="text-xs font-bold text-white">DHCP Mode</p>
                                <p className="text-[10px] text-gray-500">Enable automatic IP address assignment</p>
                            </div>
                            <div className="w-12 h-6 bg-white/10 rounded-full relative cursor-pointer group">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-gray-500 rounded-full transition-all group-hover:bg-gray-400"></div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">IP Address</label>
                            <input type="text" value="192.168.1.108" className="input-field w-full text-sm" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Subnet Mask</label>
                            <input type="text" value="255.255.255.0" className="input-field w-full text-sm" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Default Gateway</label>
                            <input type="text" value="192.168.1.1" className="input-field w-full text-sm" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">MAC Address</label>
                            <input type="text" value="BC:AD:28:44:91:FA" className="input-field w-full text-sm bg-white/5" readOnly />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Primary DNS</label>
                            <input type="text" value="8.8.8.8" className="input-field w-full text-sm" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Secondary DNS</label>
                            <input type="text" value="8.8.4.4" className="input-field w-full text-sm" />
                        </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <button className="btn-primary">
                            <Save className="w-4 h-4" />
                            Save Configuration
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-gray-400 hover:text-white transition-all text-sm">
                            <RefreshCw className="w-4 h-4" />
                            Reset Defaults
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                            <Globe className="w-4 h-4 text-amber-500" />
                        </div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">DDNS Settings</h3>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl mb-6">
                        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        <p className="text-[10px] text-amber-200/70 leading-relaxed">
                            DDNS is currently active. Remote access is enabled via <span className="text-amber-500 font-bold">cam-gate-01.dvrdns.org</span>. 
                            Ensure port forwarding is correctly configured on your router.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 opacity-50 pointer-events-none">
                         <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">DDNS Type</label>
                            <select className="input-field w-full text-sm"><option>DynDNS</option></select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Server Address</label>
                            <input type="text" value="members.dyndns.org" className="input-field w-full text-sm" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Ports & Services */}
            <div className="col-span-12 xl:col-span-5 flex flex-col gap-8">
                <div className="card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                            <Share2 className="w-4 h-4 text-purple-500" />
                        </div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Port Configuration</h3>
                    </div>

                    <div className="space-y-4">
                        {[
                            { label: 'HTTP Port', value: '80', desc: 'Web management interface' },
                            { label: 'RTSP Port', value: '554', desc: 'Real-time stream protocol' },
                            { label: 'HTTPS Port', value: '443', desc: 'Secure web interface' },
                            { label: 'SDK Port', value: '8000', desc: 'Device management SDK' },
                            { label: 'ONVIF Port', value: '8080', desc: 'Open network video interface' },
                        ].map((port, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors group">
                                <div>
                                    <p className="text-xs font-bold text-gray-300">{port.label}</p>
                                    <p className="text-[10px] text-gray-500">{port.desc}</p>
                                </div>
                                <input type="text" value={port.value} className="w-16 bg-input border border-border rounded px-2 py-1 text-xs text-center text-primary font-bold group-hover:border-primary transition-colors" />
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Security Warning</span>
                        </div>
                        <p className="text-[10px] text-red-200/60 leading-relaxed">
                            RTSP port 554 is currently exposed without authentication in <span className="font-bold">Compatibility Mode</span>. 
                            This may allow unauthorized viewing of live streams.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                            <Zap className="w-4 h-4 text-green-500" />
                        </div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Cloud Service (P2P)</h3>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/20">
                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-xs font-bold text-white">SecureCloud Pro</p>
                                <p className="text-[10px] text-primary font-medium uppercase">Connected & Active</p>
                            </div>
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
                            <RefreshCw className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
