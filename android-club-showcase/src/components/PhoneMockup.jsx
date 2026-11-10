import React, { useState } from 'react';
import { Wifi, BatteryMedium, Play, CheckCircle2, Terminal, Cpu, Flame, Smartphone, Layers } from 'lucide-react';

export default function PhoneMockup() {
  const [activeTab, setActiveTab] = useState('ide');
  const [codeOutput, setCodeOutput] = useState('Ready to execute...');
  const [isRunning, setIsRunning] = useState(false);

  const runSampleCode = () => {
    setIsRunning(true);
    setCodeOutput('Compiling Kotlin 2.0 with Jetpack Compose...');
    setTimeout(() => {
      setCodeOutput('✔ BUILD SUCCESSFUL in 840ms\n⚡ AndroidClub.join("VIT_Bhopal")\n🚀 Welcome to the Core Team!');
      setIsRunning(false);
    }, 900);
  };

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] mx-auto select-none">
      {/* Outer Glow & Ambient Light */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#3DDC84]/20 via-[#00F0FF]/15 to-[#FF7300]/10 rounded-[48px] blur-2xl opacity-70 -z-10 animate-pulse-glow" />

      {/* Cyber Brackets around device */}
      <div className="hidden sm:block absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#3DDC84]" />
      <div className="hidden sm:block absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#3DDC84]" />
      <div className="hidden sm:block absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#3DDC84]" />
      <div className="hidden sm:block absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#3DDC84]" />

      {/* Phone Hardware Chassis */}
      <div className="relative bg-[#0d0d14] rounded-[42px] p-3 sm:p-4 border-2 border-[#2b2b3d] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
        {/* Antenna bands */}
        <div className="absolute top-16 -left-[2px] w-[2px] h-6 bg-[#3DDC84]/40" />
        <div className="absolute top-36 -right-[2px] w-[2px] h-10 bg-[#3DDC84]/40" />

        {/* Inner Screen */}
        <div className="relative bg-[#07070B] rounded-[32px] overflow-hidden border border-[#232332] aspect-[9/18.5] flex flex-col justify-between">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[10px] font-mono text-[#888899] z-20">
            <span className="font-semibold text-white tracking-wide">13:37</span>
            {/* Camera Punchhole */}
            <div className="w-3.5 h-3.5 bg-black rounded-full border border-[#222] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#0e171b] rounded-full" />
            </div>
            <div className="flex items-center gap-1.5 text-white">
              <Wifi className="w-3 h-3 text-[#3DDC84]" />
              <span className="text-[9px]">5G</span>
              <BatteryMedium className="w-3.5 h-3.5 text-[#3DDC84]" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 px-4 py-2 flex flex-col justify-between overflow-hidden">
            {/* Android Club OS Header */}
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-[#232332]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3DDC84] rounded-full animate-ping" />
                  <span className="font-mono text-[9px] tracking-[1.5px] text-[#3DDC84] font-bold">
                    AC-OS • 2026.1
                  </span>
                </div>
                <span className="font-mono text-[8px] bg-[#1a1a28] text-[#888899] px-2 py-0.5 border border-[#323246]">
                  DEVICE_ONLINE
                </span>
              </div>

              {/* Sub Navigation Inside Mockup */}
              <div className="grid grid-cols-3 gap-1 my-3 bg-[#11111a] p-1 border border-[#222230]">
                <button
                  onClick={() => setActiveTab('ide')}
                  className={`py-1 text-[9px] font-mono font-bold transition-all ${
                    activeTab === 'ide' 
                      ? 'bg-[#3DDC84] text-[#0A090F]' 
                      : 'text-[#888899] hover:text-white'
                  }`}
                >
                  [01] KOTLIN
                </button>
                <button
                  onClick={() => setActiveTab('feed')}
                  className={`py-1 text-[9px] font-mono font-bold transition-all ${
                    activeTab === 'feed' 
                      ? 'bg-[#3DDC84] text-[#0A090F]' 
                      : 'text-[#888899] hover:text-white'
                  }`}
                >
                  [02] EVENT
                </button>
                <button
                  onClick={() => setActiveTab('stats')}
                  className={`py-1 text-[9px] font-mono font-bold transition-all ${
                    activeTab === 'stats' 
                      ? 'bg-[#3DDC84] text-[#0A090F]' 
                      : 'text-[#888899] hover:text-white'
                  }`}
                >
                  [03] RADAR
                </button>
              </div>
            </div>

            {/* Dynamic Tab Body */}
            <div className="flex-1 flex flex-col justify-center">
              {activeTab === 'ide' && (
                <div className="bg-[#0D0D16] border border-[#262638] p-3 text-left">
                  <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#232332]">
                    <span className="font-mono text-[8px] text-[#888899]">MainActivity.kt</span>
                    <span className="font-mono text-[8px] text-[#3DDC84]">Jetpack Compose</span>
                  </div>
                  <pre className="font-mono text-[9px] sm:text-[10px] text-[#a5d6a7] leading-relaxed overflow-x-hidden">
                    <code>
                      <span className="text-[#80cbc4]">@Composable</span>{'\n'}
                      <span className="text-[#c792ea]">fun</span> <span className="text-[#ffcb6b]">AndroidClubApp</span>() {'{'}{'\n'}
                      {'  '}<span className="text-[#82aaff]">Text</span>(<span className="text-[#c3e88d]">"Build Without Limits"</span>){'\n'}
                      {'  '}<span className="text-[#82aaff]">ClubCore</span>.<span className="text-[#ffcb6b]">recruit</span>(){'\n'}
                      {'}'}
                    </code>
                  </pre>

                  <div className="mt-3 pt-2 border-t border-[#232332]">
                    <div className="font-mono text-[8px] text-[#888899] mb-1">TERMINAL • COMPILE</div>
                    <div className="font-mono text-[8px] text-[#3DDC84] bg-black/60 p-1.5 border border-[#1b3a24] whitespace-pre-line min-h-[44px]">
                      {codeOutput}
                    </div>
                    <button
                      onClick={runSampleCode}
                      disabled={isRunning}
                      className="mt-2 w-full py-1.5 bg-[#3DDC84] hover:bg-[#36EA66] text-[#0A090F] font-mono text-[9px] font-bold tracking-[1px] flex items-center justify-center gap-1 transition-all"
                    >
                      <Play className="w-2.5 h-2.5 fill-current" />
                      {isRunning ? 'BUILDING...' : 'RUN COMPOSE CODE'}
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'feed' && (
                <div className="bg-[#0D0D16] border border-[#262638] p-3 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[8px] text-[#FF7300] font-bold flex items-center gap-1">
                      <Flame className="w-3 h-3 text-[#FF7300]" />
                      NEXT EVENT
                    </span>
                    <span className="font-mono text-[7px] bg-[#FF7300]/20 text-[#FF7300] px-1.5 py-0.5">
                      YET TO ANNOUNCE
                    </span>
                  </div>
                  <h4 className="font-grotesk text-[13px] font-bold text-white mb-1">
                    Upcoming Flagship Summit
                  </h4>
                  <p className="font-mono text-[8px] text-[#888899] mb-2 leading-relaxed">
                    Theme & registration timeline will be announced soon by the organizing committee.
                  </p>
                  <div className="bg-black/40 p-2 border border-[#232332] flex items-center justify-between text-[8px] font-mono text-[#F5F5F0]">
                    <span>STATUS: PLANNING</span>
                    <span className="text-[#FF7300]">STAY TUNED</span>
                  </div>
                </div>
              )}

              {activeTab === 'stats' && (
                <div className="bg-[#0D0D16] border border-[#262638] p-3 text-center flex flex-col items-center justify-center">
                  <div className="relative w-24 h-24 my-2 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-[#3DDC84]/20 animate-spin" />
                    <div className="absolute inset-2 rounded-full border border-dashed border-[#00F0FF]/30" />
                    <div className="absolute inset-5 rounded-full border border-[#FF7300]/20" />
                    <div className="w-3 h-3 bg-[#3DDC84] rounded-full shadow-[0_0_10px_#3DDC84]" />
                  </div>
                  <span className="font-mono text-[12px] font-bold text-[#3DDC84]">SYS.TELEMETRY</span>
                  <span className="font-mono text-[8px] text-[#888899]">3B+ ECOSYSTEM REACH • 14MS PING</span>
                </div>
              )}
            </div>

            {/* Bottom App Drawer Bar */}
            <div className="pt-2 border-t border-[#232332] flex items-center justify-between px-2 text-[#888899]">
              <span className="font-mono text-[8px] text-[#FF0055]">🔒 CORE RECRUITMENT: CLOSED</span>
              <span className="font-mono text-[8px]">VIT BHOPAL</span>
            </div>
          </div>

          {/* Android Gesture Bar */}
          <div className="py-2 flex justify-center">
            <div className="w-24 h-1 bg-[#333344] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

