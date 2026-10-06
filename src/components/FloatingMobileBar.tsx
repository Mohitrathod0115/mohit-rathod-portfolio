import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const FloatingMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
      <div className="flex items-center justify-between p-2 rounded-full bg-[#0d1017]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80">
        <a
          href={`tel:${PORTFOLIO_DATA.contact.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-cyan-500/15 text-cyan-300 font-mono text-[11px] font-semibold uppercase tracking-wider"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>CALL</span>
        </a>

        <a
          href={PORTFOLIO_DATA.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 mx-1.5 rounded-full bg-emerald-500/15 text-emerald-300 font-mono text-[11px] font-semibold uppercase tracking-wider"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WHATSAPP</span>
        </a>

        <a
          href={`mailto:${PORTFOLIO_DATA.contact.email}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-white/[0.06] text-neutral-200 font-mono text-[11px] font-semibold uppercase tracking-wider"
        >
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span>EMAIL</span>
        </a>
      </div>
    </div>
  );
};

