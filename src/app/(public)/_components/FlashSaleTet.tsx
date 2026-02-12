import Image from 'next/image';
import CountdownInBoxes from '@/components/layout/CountdownInBoxes';

import SparkleIcon from '../assets/icons/sparkle.svg';
import Items from './Items';


export default function FlashSaleTet() {
  const targetMs = new Date('2026-03-12T00:00:00').getTime();
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-[rgba(198,50,40)] via-[rgba(255,54,0)] 
  to-[rgba(220,38,38)] py-8 md:py-10 rounded-2xl"
    >
      <Items />
      <div className="relative z-10 px-4">
        <div className="text-center mb-4">
          <div className="mb-4 rounded-xl border-2 border-[rgba(255,191,0,0.5)] p-3 mx-auto max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white px-4 py-2">
              <span>🧧</span>
              <span className="drop-shadow-[0_0_10px_rgba(255,191,0,0.5)]">FLASH SALE TẾT</span>
              <span>🧧</span>
            </h1>
          </div>
          <div className="w-full flex justify-center">
            <div className="inline-flex items-center gap-2 text-lg font-semibold text-[#ffc000]">
              <Image src={SparkleIcon} alt="Sparkle" width={20} height={20} className="shrink-0" />
              <span>Xuân Bính Ngọ 2026 - Giảm sốc đến 50%+</span>
              <Image src={SparkleIcon} alt="Sparkle" width={20} height={20} className="shrink-0" />
            </div>
          </div>
        </div>
        {/* Countdown Timer */}
        <div className="mb-4 flex flex-col items-center justify-center gap-2">
          <span className="text-black font-medium text-white">Kết thúc sau</span>
          <CountdownInBoxes targetMs={targetMs} />
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <div
            className="flex items-center gap-1.5 text-white text-xs md:text-sm bg-[rgba(255,191,0,0.2)] 
        border border-[rgba(255,191,0,0.3)] rounded-full px-3 py-1.5 hover:bg-[rgba(255,191,0,0.3)] transition-all 
        hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-flame w-4 h-4 text-[rgba(255,191,0,0.8)]"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
            <span>1000+ Đã bán</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-white text-xs md:text-sm bg-[rgba(255,191,0,0.2)] border border-[rgba(255,191,0,0.3)] rounded-full px-3 py-1.5 hover:bg-[rgba(255,191,0,0.3)] transition-all hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star w-4 h-4 text-[rgba(255,191,0,0.8)] fill-[rgba(255,191,0,0.8)]"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
            <span>4.9/5 Đánh giá</span>
          </div>

          <div className="flex items-center gap-1.5 text-white text-xs md:text-sm bg-[rgba(255,191,0,0.2)] border border-[rgba(255,191,0,0.3)] rounded-full px-3 py-1.5 hover:bg-[rgba(255,191,0,0.3)] transition-all hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield-check w-4 h-4 text-[rgba(255,191,0,0.8)]"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Chính hãng</span>
          </div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-300 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-300 blur-3xl" />
      </div>
    </section>
  );
}
