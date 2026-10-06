import React from 'react';

interface MarqueeProps {
  text: string;
  reverse?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  text,
  reverse = false,
  className = '',
}) => {
  // Repeat string to ensure seamless loop
  const repeatedText = Array(6).fill(text).join(' ');

  return (
    <div className={`relative w-full overflow-hidden whitespace-nowrap py-4 border-y border-white/[0.06] bg-[#0c0e14]/50 select-none ${className}`}>
      {/* Subtle fade masks on left and right edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090a0d] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090a0d] to-transparent z-10" />

      <div
        className={`inline-block whitespace-nowrap font-display text-sm sm:text-base tracking-[0.25em] font-semibold uppercase text-neutral-400 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        <span className="mx-4">{repeatedText}</span>
      </div>
      <div
        className={`inline-block whitespace-nowrap font-display text-sm sm:text-base tracking-[0.25em] font-semibold uppercase text-neutral-400 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        aria-hidden="true"
      >
        <span className="mx-4">{repeatedText}</span>
      </div>
    </div>
  );
};

