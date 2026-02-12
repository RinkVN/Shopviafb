'use client';

import React, { useEffect, useMemo, useState } from 'react';

type TimeLeft = { d: number; h: number; m: number; s: number };

function getTimeLeft(targetMs: number): TimeLeft {
  const diff = Math.max(0, targetMs - Date.now());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

export default function CountdownInBoxes({ targetMs }: { targetMs: number }) {
  const [t, setT] = useState<TimeLeft>(() => getTimeLeft(targetMs));

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const items = [
    { label: 'NGÀY', value: t.d, digits: 2, delay: '0ms' },
    { label: 'GIỜ', value: t.h, digits: 2, delay: '50ms' },
    { label: 'PHÚT', value: t.m, digits: 2, delay: '100ms' },
    { label: 'GIÂY', value: t.s, digits: 2, delay: '150ms' },
  ];

  const formatValue = (value: number, digits: number) => value.toString().padStart(digits, '0');

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-1">
      <div className="flex items-center gap-1.5 md:gap-2">
        {items.map((item, index) => (
          <div key={item.label} className="flex items-center gap-1.5 md:gap-2">
            <div
              className="flex flex-col items-center animate-scale-in"
              style={{ animationDelay: item.delay } as React.CSSProperties}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-lg w-11 h-12 md:w-14 md:h-16 flex flex-col items-center justify-center border border-white/10 shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <span className="text-lg md:text-2xl font-bold text-white tabular-nums tracking-tight">
                    {formatValue(item.value, item.digits)}
                  </span>
                  <span className="text-[8px] md:text-[10px] text-yellow-400/90 font-medium tracking-widest mt-0.5">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>

            {index < items.length - 1 && (
              <div className="flex flex-col gap-1">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                <div
                  className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-yellow-400 animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
