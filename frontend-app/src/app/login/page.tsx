"use client";

import React, { useState } from 'react';
import { ShieldCheck, User, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (username === 'admin' && password === '12345') {
      router.push('/dashboard');
    } else {
      setError('Invalid credentials. Access attempt logged.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background decoration (blur circles) */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
      
      {/* Scanning effect background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      <div className="w-full max-w-md px-8 relative z-10">
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <ShieldCheck className="text-primary w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">SecureCam <span className="text-primary">PRO</span></h1>
          <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest font-bold">Surveillance Management System</p>
        </div>

        <div className="bg-card/50 backdrop-blur-xl border border-border p-10 rounded-3xl shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter administrator username"
                  className="w-full bg-input/50 border border-border rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter access code"
                  className="w-full bg-input/50 border border-border rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="hidden" />
                    <div className="w-4 h-4 rounded border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-sm opacity-0 group-hover:opacity-20"></div>
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-gray-300">Remember this device</span>
                </label>
                <a href="#" className="text-xs text-primary/70 hover:text-primary transition-colors">Forgot key?</a>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs animate-shake">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-hover text-black font-bold py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Initialize Session'
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center gap-4 text-center">
            <p className="text-[10px] text-gray-600 font-medium max-w-[280px]">
              Access to this terminal is restricted to authorized personnel. 
              Unauthorized attempts are logged and reported to the system administrator.
            </p>
            <div className="flex items-center gap-2 opacity-30">
                <ShieldCheck className="w-3 h-3 text-gray-500" />
                <span className="text-[8px] text-gray-500 uppercase tracking-[0.2em]">AES-256 Encrypted Session</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">Firmware v2.4.1 Build 231124</p>
        </div>
      </div>
    </div>
  );
}
