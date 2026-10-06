import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Send, CheckCircle2, Mail, MessageSquare, User } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate clean dispatch with mailto option & clean state
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mohit.rathod@example.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative w-full py-32 bg-[#090a0d] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Context & Social Placeholders */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
                <span className="w-2 h-[1px] bg-cyan-400" />
                <span>13 / CONTACT & COLLABORATION</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight uppercase text-white leading-tight">
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  SOMETHING.
                </span>
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
                Have an idea, project, opportunity or simply want to connect? Let's talk.
              </p>
            </div>

            {/* Social / Community Links with Honest Placeholders */}
            <div className="pt-6 border-t border-white/[0.08] space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                COMMUNITY & NETWORKS
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.socialLinks.map((social) => (
                  <div
                    key={social.name}
                    className="p-3.5 rounded-sm bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/40 transition-colors flex items-center justify-between"
                  >
                    <span className="font-display text-xs font-bold uppercase text-white">
                      {social.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-xs bg-white/[0.04] text-neutral-400 font-mono text-[10px] tracking-widest border border-white/10">
                      {social.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect Quick Action */}
            <div className="p-4 rounded-sm bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between">
              <div className="font-mono text-xs text-neutral-300 flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>mohit.rathod@example.com</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest hover:text-cyan-300"
              >
                {copiedEmail ? 'COPIED!' : 'COPY EMAIL'}
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-sm bg-white/[0.02] border border-white/10 relative">
            <h3 className="font-display text-xl font-bold uppercase text-white mb-6">
              SEND DIRECT MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-[#0c0e14] border border-white/10 rounded-sm text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-cyan-400 transition-colors"
                  />
                  <User className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 bg-[#0c0e14] border border-white/10 rounded-sm text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-cyan-400 transition-colors"
                  />
                  <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your idea, feedback, or opportunity..."
                    className="w-full px-4 py-3 bg-[#0c0e14] border border-white/10 rounded-sm text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-cyan-400 transition-colors resize-none"
                  />
                  <MessageSquare className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                </div>
              </div>

              <button
                type="submit"
                data-cursor="SUBMIT"
                className="w-full py-3.5 px-6 rounded-sm bg-cyan-400 hover:bg-cyan-300 text-[#090a0d] font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
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
