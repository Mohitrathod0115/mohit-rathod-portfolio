import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Send, CheckCircle2, Mail, MessageSquare, User, Phone, MessageCircle, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate dispatch
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 bg-[#090a0d] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading, Direct Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
                <span className="w-2 h-[1px] bg-cyan-400" />
                <span>13 / CONTACT & COLLABORATION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white leading-tight">
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                  SOMETHING.
                </span>
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                Have an idea, project, opportunity or simply want to connect? Reach out directly via call, WhatsApp, or email.
              </p>
            </div>

            {/* Direct Connect Quick Action Cards */}
            <div className="space-y-3 font-mono text-xs">
              {/* Phone Card */}
              <div className="p-4 rounded-sm bg-white/[0.02] border border-white/10 hover:border-cyan-400/40 transition-colors flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest">MOBILE NUMBER</div>
                    <a
                      href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                      className="text-white hover:text-cyan-300 font-semibold tracking-wider transition-colors"
                    >
                      {PORTFOLIO_DATA.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    title="Copy Phone"
                    className="p-2 rounded-xs bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                    className="px-3 py-1.5 rounded-xs bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-[11px] tracking-wider uppercase transition-colors"
                  >
                    CALL
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-sm bg-white/[0.02] border border-white/10 hover:border-cyan-400/40 transition-colors flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 truncate">
                  <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest">EMAIL ADDRESS</div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                      className="text-white hover:text-cyan-300 font-semibold tracking-wider transition-colors truncate block"
                    >
                      {PORTFOLIO_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-xs bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                    className="px-3 py-1.5 rounded-xs bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-semibold text-[11px] tracking-wider uppercase transition-colors"
                  >
                    EMAIL
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-sm bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 transition-colors flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest">WHATSAPP DIRECT</div>
                    <span className="text-white font-semibold tracking-wider">
                      Quick Instant Chat
                    </span>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xs bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-[11px] tracking-wider uppercase transition-colors"
                >
                  CHAT
                </a>
              </div>
            </div>

            {/* Social / Community Links */}
            <div className="pt-6 border-t border-white/[0.08] space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                PROFILES & NETWORKS
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                {PORTFOLIO_DATA.socialLinks
                  .filter((s) => s.name === 'GitHub' || s.name === 'LinkedIn' || s.name === 'Instagram')
                  .map((social) => (
                    social.placeholder ? (
                      <div
                        key={social.name}
                        className="p-3 rounded-sm bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between"
                      >
                        <span className="font-display text-xs font-bold uppercase text-white mb-1">
                          {social.name}
                        </span>
                        <span className="text-[10px] text-neutral-500 tracking-widest">
                          {social.label}
                        </span>
                      </div>
                    ) : (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-sm bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
                      >
                        <span className="font-display text-xs font-bold uppercase text-white mb-1">
                          {social.name}
                        </span>
                        <span className="text-[10px] text-neutral-500 tracking-widest">
                          {social.label}
                        </span>
                      </a>
                    )
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-sm bg-white/[0.02] border border-white/10 relative">
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-6">
              SEND DIRECT MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 bg-[#0c0e14] border border-white/10 rounded-sm text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-cyan-400 transition-colors"
                  />
                  <User className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3.5 bg-[#0c0e14] border border-white/10 rounded-sm text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-cyan-400 transition-colors"
                  />
                  <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your idea, feedback, or opportunity..."
                    className="w-full px-4 py-3.5 bg-[#0c0e14] border border-white/10 rounded-sm text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-cyan-400 transition-colors resize-none"
                  />
                  <MessageSquare className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                </div>
              </div>

              <button
                type="submit"
                data-cursor="SUBMIT"
                className="w-full py-4 px-6 rounded-sm bg-cyan-400 hover:bg-cyan-300 text-[#090a0d] font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>MESSAGE DISPATCHED SUCCESSFULLY!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
