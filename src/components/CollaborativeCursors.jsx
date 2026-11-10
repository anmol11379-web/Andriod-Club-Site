import React, { useState, useEffect } from 'react';

// Android Club interactive domain tracks collaborative cursors
const ANDROID_CURSORS = [
  {
    id: 'fullstack',
    label: 'FULL STACK',
    domain: 'SDC CELL',
    status: 'Deploying real-time event portal & GraphQL API',
    color: '#00F0FF', // Cyber Cyan
    textColor: '#0A090F',
    animationClass: 'animate-cursor-fullstack',
    initialPos: { x: '15%', y: '24%' }
  },
  {
    id: 'android',
    label: 'ANDROID DEV',
    domain: 'MOBILE CORE',
    status: 'Hot reloading Jetpack Compose 1.7 UI',
    color: '#3DDC84', // Android Green
    textColor: '#0A090F',
    animationClass: 'animate-cursor-android',
    initialPos: { x: '24%', y: '64%' }
  },
  {
    id: 'ml',
    label: 'MACHINE LEARNING',
    domain: 'EDGE AI R&D',
    status: 'Quantizing on-device TensorFlow Lite model',
    color: '#BF00FF', // Electric Violet
    textColor: '#FFFFFF',
    animationClass: 'animate-cursor-ml',
    initialPos: { x: '76%', y: '60%' }
  },
  {
    id: 'uiux',
    label: 'UI/UX DESIGN',
    domain: 'DESIGN SYSTEM',
    status: 'Synchronizing Material You M3 tokens in Figma',
    color: '#FFD600', // Pixel Yellow
    textColor: '#0A090F',
    animationClass: 'animate-cursor-uiux',
    initialPos: { x: '52%', y: '16%' }
  },
  {
    id: 'cloud',
    label: 'CLOUD & IOT',
    domain: 'EMBEDDED BLE',
    status: 'Streaming ESP32 telemetry sensor packets',
    color: '#36EA66', // Neon Emerald
    textColor: '#0A090F',
    animationClass: 'animate-cursor-cloud',
    initialPos: { x: '66%', y: '78%' }
  }
];

export default function CollaborativeCursors() {
  const [activeSpeechId, setActiveSpeechId] = useState(null);
  const [showCursors, setShowCursors] = useState(true);

  // Close popup if clicking anywhere outside
  useEffect(() => {
    if (!activeSpeechId) return;
    const handleOutsideClick = () => setActiveSpeechId(null);
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [activeSpeechId]);

  if (!showCursors) return null;

  return (
    <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-20">
      {/* Cursors Container */}
      {ANDROID_CURSORS.map((cursor) => (
        <div
          key={cursor.id}
          className={`absolute pointer-events-auto cursor-pointer group ${cursor.animationClass}`}
          style={{
            left: cursor.initialPos.x,
            top: cursor.initialPos.y,
          }}
          onClick={(e) => {
            e.stopPropagation();
            setActiveSpeechId(prev => (prev === cursor.id ? null : cursor.id));
          }}
          title={`Click to view ${cursor.label} activity`}
        >
          {/* Cursor Pointer Arrow */}
          <div className="relative">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] filter"
            >
              <path
                d="M3 3l7.5 17.5 3.5-7.5 7.5-3.5L3 3z"
                fill={cursor.color}
                stroke="#0A090F"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>

            {/* Tag Box / Heading: Domain name in bold monospace */}
            <div
              className="absolute left-4 top-3.5 px-2 py-0.5 font-mono text-[9px] font-bold tracking-[1px] uppercase shadow-[0_2px_8px_rgba(0,0,0,0.7)] flex items-center gap-1.5 border border-black/40 select-none whitespace-nowrap group-hover:scale-105 hover:brightness-110 transition-all cursor-pointer"
              style={{
                backgroundColor: cursor.color,
                color: cursor.textColor,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveSpeechId(prev => (prev === cursor.id ? null : cursor.id));
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black/80 animate-ping" />
              <span>{cursor.label}</span>
            </div>

            {/* Description Tooltip / Status Message - appears only when user clicks cursor heading */}
            {activeSpeechId === cursor.id && (
              <div
                className="absolute left-4 top-10 bg-[#111118]/95 border border-[#323246] p-2.5 text-left shadow-2xl backdrop-blur-md rounded-none w-48 sm:w-56 animate-fadeIn z-30"
                style={{ borderLeftColor: cursor.color, borderLeftWidth: '3px' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between font-mono text-[8px] text-[#888899] mb-1">
                  <span className="text-white font-bold">{cursor.domain}</span>
                  <div className="flex items-center gap-1.5">
                    <span style={{ color: cursor.color }}>● ACTIVE</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSpeechId(null);
                      }}
                      className="text-[#888899] hover:text-white ml-1 text-[10px] leading-none cursor-pointer"
                      title="Close"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <div className="font-mono text-[10px] text-[#F5F5F0] leading-snug">
                  "{cursor.status}"
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Co-Presence Status Pill in Bottom Right of Hero */}
      <div className="absolute bottom-3 right-4 sm:right-8 pointer-events-auto">
        <button
          onClick={() => setShowCursors(!showCursors)}
          className="flex items-center gap-2 px-3 py-1 bg-[#14141E]/90 hover:bg-[#1a1a28] border border-[#232332] text-[10px] font-mono text-[#888899] hover:text-[#3DDC84] transition-all cursor-pointer"
          title="Toggle collaborative tracks cursors"
        >
          <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse" />
          <span>{ANDROID_CURSORS.length} LIVE TRACKS</span>
        </button>
      </div>
    </div>
  );
}
