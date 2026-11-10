import React from 'react';

export default function SectionHeader({ tag, title, subtitle, align = 'left', accentColor = '#3DDC84' }) {
  const isCentered = align === 'center';

  return (
    <div className={`flex flex-col gap-3 md:gap-4 w-full ${isCentered ? 'items-center text-center' : 'items-start text-left'}`}>
      {tag && (
        <div className="inline-flex items-center gap-2">
          <span 
            className="w-2 h-2 shrink-0 animate-blink"
            style={{ backgroundColor: accentColor }}
            aria-hidden="true"
          />
          <span 
            className="font-mono text-[10px] md:text-[12px] font-bold tracking-[2px] uppercase"
            style={{ color: accentColor }}
          >
            {tag}
          </span>
        </div>
      )}

      {title && (
        <h2 className="font-grotesk text-[28px] sm:text-[36px] md:text-[52px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.08] whitespace-pre-line max-w-[850px]">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="font-mono text-[11px] sm:text-[13px] md:text-[14px] text-[#888899] tracking-[0.5px] leading-[1.65] max-w-[680px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

