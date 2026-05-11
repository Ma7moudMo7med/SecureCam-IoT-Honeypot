"use client";

import React, { useState, useEffect } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Save, RefreshCw, AlertTriangle, Shield, Globe, Zap, Network as NetworkIcon, Share2, Loader2, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5025';

export default function NetworkPage() {
  const [config, setConfig] = useState({
    ipAddress: "192.168.1.108",
    subnetMask: "255.255.255.0",
    gateway: "192.168.1.1",
    primaryDns: "8.8.8.8",
    secondaryDns: "8.8.4.4",
    httpPort: 80,
    rtspPort: 554,
    onvifPort: 8000,
    dhcpEnabled: false
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/camera/network/config`);
        setConfig(response.data);
      } catch (error) {
        console.error("Failed to fetch network config:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchConfig();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus('idle');
    
    // Simulate honeypot logging and API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
        // In a real honeypot, we might actually post this to log attacker input
        // await axios.post(`${API_URL}/api/camera/network/config`, config);
        setSaveStatus('success');
        setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
        setSaveStatus('error');
    } finally {
        setIsSaving(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  if (isLoading) {
    return (
      <div className="flex flex-col h-screen bg-background">
        <TopBar title="Network Settings" />
        <div className="flex-1 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      </div>
    );
  }

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
                            <button 
                                onClick={() => handleChange('dhcpEnabled', !config.dhcpEnabled)}
                                className={`w-12 h-6 rounded-full relative transition-all ${config.dhcpEnabled ? 'bg-primary' : 'bg-white/10'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${config.dhcpEnabled ? 'left-7' : 'left-1'}`}></div>
                            </button>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">IP Address</label>
                            <input 
                                type="text" 
                                value={config.ipAddress} 
                                onChange={(e) => handleChange('ipAddress', e.target.value)}
                                className="input-field w-full text-sm" 
                                disabled={config.dhcpEnabled}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Subnet Mask</label>
                            <input 
                                type="text" 
                                value={config.subnetMask} 
                                onChange={(e) => handleChange('subnetMask', e.target.value)}
                                className="input-field w-full text-sm" 
                                disabled={config.dhcpEnabled}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Default Gateway</label>
                            <input 
                                type="text" 
                                value={config.gateway} 
                                onChange={(e) => handleChange('gateway', e.target.value)}
                                className="input-field w-full text-sm" 
                                disabled={config.dhcpEnabled}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">MAC Address</label>
                            <input type="text" value="BC:AD:28:44:91:FA" className="input-field w-full text-sm bg-white/5 opacity-50 cursor-not-allowed" readOnly />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Primary DNS</label>
                            <input 
                                type="text" 
                                value={config.primaryDns} 
                                onChange={(e) => handleChange('primaryDns', e.target.value)}
                                className="input-field w-full text-sm" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Secondary DNS</label>
                            <input 
                                type="text" 
                                value={config.secondaryDns} 
                                onChange={(e) => handleChange('secondaryDns', e.target.value)}
                                className="input-field w-full text-sm" 
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                        <button 
                            onClick={handleSave}
                            disabled={isSaving}
                            className="btn-primary min-w-[160px]"
                        >
                            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            {isSaving ? 'Saving...' : 'Save Configuration'}
                        </button>
                        
                        {saveStatus === 'success' && (
                            <div className="flex items-center gap-2 text-primary animate-in fade-in slide-in-from-left-2">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase">Settings Applied</span>
                            </div>
                        )}

                        <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-gray-400 hover:text-white transition-all text-sm ml-auto">
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
                            <select className="input-field w-full text-sm" defaultValue="DynDNS" disabled><option>DynDNS</option></select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Server Address</label>
                            <input type="text" value="members.dyndns.org" className="input-field w-full text-sm" readOnly />
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
                            { label: 'HTTP Port', key: 'httpPort', desc: 'Web management interface' },
                            { label: 'RTSP Port', key: 'rtspPort', desc: 'Real-time stream protocol' },
                            { label: 'SDK Port', key: 'onvifPort', desc: 'Device management SDK' },
                        ].map((port, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors group">
                                <div>
                                    <p className="text-xs font-bold text-gray-300">{port.label}</p>
                                    <p className="text-[10px] text-gray-500">{port.desc}</p>
                                </div>
                                <input 
                                    type="number" 
                                    value={(config as any)[port.key]} 
                                    onChange={(e) => handleChange(port.key, parseInt(e.target.value))}
                                    className="w-20 bg-input border border-border rounded px-2 py-1 text-xs text-center text-primary font-bold group-hover:border-primary transition-colors focus:outline-none" 
                                />
                            </div>
                        ))}
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 opacity-50">
                            <div>
                                <p className="text-xs font-bold text-gray-300">HTTPS Port</p>
                                <p className="text-[10px] text-gray-500">Secure web interface (Disabled)</p>
                            </div>
                            <input type="text" value="443" className="w-20 bg-input border border-border rounded px-2 py-1 text-xs text-center text-gray-500 font-bold" readOnly />
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Security Warning</span>
                        </div>
                        <p className="text-[10px] text-red-200/60 leading-relaxed">
                            RTSP port {config.rtspPort} is currently exposed without authentication in <span className="font-bold">Compatibility Mode</span>. 
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
