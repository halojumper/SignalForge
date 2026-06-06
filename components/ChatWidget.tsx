'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const QUICK_REPLIES = [
  'What services do you offer?',
  'How It Works',
  'Pricing info',
];

const CANNED: Record<string, string> = {
  'What services do you offer?':
    "Great question! SignalForge offers six core services:\n\n• Marketing Automation — intelligent workflows that nurture leads and drive conversions on autopilot\n• SMS Marketing — direct, high-open-rate messaging to reach your audience instantly\n• Social Media Campaigns — strategy and execution across the platforms that matter most to your business\n• Ad Creative Design — scroll-stopping creative built for paid social and digital advertising\n• Website Design & Build — fast, modern websites designed to convert visitors into customers\n• Event Marketing — end-to-end support for virtual and in-person events that generate real pipeline\n\nWant to dive deeper into any of these?",
  'How It Works':
    "Here's how we typically work with clients:\n\n1. Discovery — we start with a conversation to understand your goals, audience, and current marketing stack\n2. Strategy — we map out a tailored plan across the channels and services that fit your business\n3. Execution — our team builds, launches, and manages your campaigns and automation workflows\n4. Optimize — we track results, report on performance, and continuously refine to improve ROI\n\nIt's a hands-on, collaborative process from day one. Ready to get started?",
  'Pricing info':
    "Depending on the scope of the engagement, our pricing is structured to fit businesses at different stages of growth — whether you're looking for a focused one-time project or an ongoing retainer partnership. We don't believe in one-size-fits-all packages, so we take the time to understand your needs before recommending the right investment level.\n\nWould you like to schedule a quick call with our team to talk through options?",
};

export default function ChatWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(() => 
    typeof window !== 'undefined' && !!sessionStorage.getItem('sfChatDismissed')
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-open after 5s, respect session dismissal
  useEffect(() => {
    if (sessionStorage.getItem('sfChatDismissed')) return;
    const t = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const closeCard = () => {
    setIsVisible(false);
    setIsClosed(true);
    sessionStorage.setItem('sfChatDismissed', 'true');
  };

  const reopenCard = () => {
    setIsVisible(true);
    setIsClosed(false);
    sessionStorage.removeItem('sfChatDismissed');
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    const next: Message[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(next);
    setInput('');

    // Canned responses for pills
    if (CANNED[trimmed]) {
      setMessages([...next, { role: 'assistant', content: CANNED[trimmed] }]);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages([...next, {
        role: 'assistant',
        content: "I'm having trouble connecting right now. Please try again or reach out directly.",
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <>
      {/* Dock: bubble always + envelope after Aria closed */}
      {!isVisible && (
        <div className="sf-dock">
          {isClosed && (
            <a href="/contact" className="sf-dock-btn sf-envelope" aria-label="Contact SignalForge" title="Contact us">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          )}
          <button className="sf-dock-btn sf-bubble" onClick={reopenCard} aria-label="Open Aria chat assistant">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
        </div>
      )}

      {/* ── Aria card ── */}
      {isVisible && (
        <div className="sf-chat-card" role="dialog" aria-label="Aria — SignalForge AI Assistant">

          {/* Dismiss X — visible on hover */}
          <button className="sf-dismiss" onClick={closeCard} aria-label="Close chat">
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>

          {/* Header with coral-pink gradient */}
          <div className="sf-header">
            <div className="sf-avatar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <div className="sf-name">Aria</div>
              <div className="sf-label">AI-Powered Assistant</div>
            </div>
          </div>

          {/* Messages — scrollable */}
          <div className="sf-messages">
            <div className="sf-msg sf-msg--bot">
              <p>Hi there! I'm Aria, SignalForge's AI-Powered Assistant. Do you have any questions about our marketing automation services?</p>
              <p>I'm here to help — whether you want to learn about what we do, explore solutions for your business, or get in touch with our team.</p>
            </div>

            {messages.map((m, i) => (
              <div key={i} className={`sf-msg sf-msg--${m.role === 'user' ? 'user' : 'bot'}`}>
                {m.content.split('\n').map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            ))}

            {isLoading && (
              <div className="sf-msg sf-msg--bot">
                <span className="sf-typing"><span/><span/><span/></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-reply pills — hide once conversation starts */}
          {!hasMessages && (
            <div className="sf-pills">
              {QUICK_REPLIES.map(q => (
                <button key={q} className="sf-pill" onClick={() => sendMessage(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="sf-input-row">
            <input
              className="sf-input"
              type="text"
              placeholder="Ask a question"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              disabled={isLoading}
            />
            <button
              className="sf-send"
              onClick={() => sendMessage(input)}
              disabled={isLoading || !input.trim()}
              aria-label="Send"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>

          {/* Disclaimer */}
          <div className="sf-disclaimer">
            By chatting with the AI-powered Assistant, you consent to the chat being transcribed and stored by SignalForge to improve our service.
          </div>
        </div>
      )}

      <style jsx>{`
        /* ── Bottom-right dock ── */
        .sf-dock {
          position: fixed;
          bottom: 28px;
          right: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 9999;
          animation: sfSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .sf-dock-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a1a1a 0%, #7a2e0a 50%, #e8521a 100%);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 4px 18px rgba(232,82,26,0.4);
          transition: transform 0.15s, box-shadow 0.15s;
          text-decoration: none;
          flex-shrink: 0;
        }
        .sf-dock-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 24px rgba(232,82,26,0.55);
        }

        /* ── Card ── */
        .sf-chat-card {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 340px;
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          z-index: 9999;
          overflow: hidden;
          animation: sfSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        @keyframes sfSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Dismiss — hidden until card hovered */
        .sf-dismiss {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(0,0,0,0.25);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s, background 0.15s, transform 0.15s;
        }
        .sf-chat-card:hover .sf-dismiss {
          opacity: 1;
          pointer-events: auto;
        }
        .sf-dismiss:hover {
          background: rgba(0,0,0,0.45);
          transform: scale(1.1);
        }

        /* Header — charcoal to orange gradient */
        .sf-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 16px 14px 40px;
          background: linear-gradient(135deg, #1a1a1a 0%, #7a2e0a 50%, #e8521a 100%);
          border-bottom: none;
        }
        .sf-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }
        .sf-name {
          font-weight: 700;
          font-size: 15px;
          color: #fff;
          line-height: 1.2;
        }
        .sf-label {
          font-size: 12px;
          color: rgba(255,255,255,0.82);
          margin-top: 1px;
        }

        /* Messages — scrollable */
        .sf-messages {
          padding: 14px 16px 8px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 240px;
          overflow-y: auto;
          scroll-behavior: smooth;
        }
        .sf-messages::-webkit-scrollbar { width: 4px; }
        .sf-messages::-webkit-scrollbar-track { background: transparent; }
        .sf-messages::-webkit-scrollbar-thumb { background: #e0e0e0; border-radius: 4px; }
        .sf-msg p {
          margin: 0 0 4px;
          font-size: 14px;
          line-height: 1.55;
          color: #222;
        }
        .sf-msg p:empty { display: none; }
        .sf-msg p:last-child { margin-bottom: 0; }
        .sf-msg--user {
          align-self: flex-end;
          background: #e8521a;
          padding: 9px 13px;
          border-radius: 12px 12px 3px 12px;
          max-width: 85%;
        }
        .sf-msg--user p { color: #fff; }
        .sf-msg--bot {
          align-self: flex-start;
          max-width: 100%;
        }

        /* Typing dots */
        .sf-typing {
          display: inline-flex;
          gap: 4px;
          align-items: center;
          padding: 4px 0;
        }
        .sf-typing span {
          width: 6px; height: 6px;
          background: #bbb;
          border-radius: 50%;
          animation: sfBounce 1.2s infinite;
        }
        .sf-typing span:nth-child(2) { animation-delay: 0.2s; }
        .sf-typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes sfBounce {
          0%,60%,100% { transform: translateY(0); }
          30%          { transform: translateY(-5px); }
        }

        /* Pills */
        .sf-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          padding: 4px 16px 12px;
        }
        .sf-pill {
          background: #e8521a;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 6px 13px;
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
          white-space: nowrap;
        }
        .sf-pill:hover {
          background: #c94415;
          transform: translateY(-1px);
        }

        /* Input */
        .sf-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-top: 1px solid #f0f0f0;
        }
        .sf-input {
          flex: 1;
          border: 1.5px solid #e0e0e0;
          border-radius: 8px;
          padding: 8px 11px;
          font-size: 13.5px;
          outline: none;
          background: #fafafa;
          transition: border-color 0.15s;
        }
        .sf-input:focus {
          border-color: #e8521a;
          background: #fff;
        }
        .sf-input::placeholder { color: #aaa; }
        .sf-send {
          background: #e8521a;
          border: none;
          border-radius: 8px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .sf-send:hover:not(:disabled) { background: #c94415; }
        .sf-send:disabled { opacity: 0.4; cursor: not-allowed; }

        /* Disclaimer */
        .sf-disclaimer {
          padding: 8px 14px 12px;
          font-size: 10.5px;
          color: #999;
          line-height: 1.5;
        }

        /* Mobile */
        @media (max-width: 480px) {
          .sf-chat-card {
            bottom: 0;
            right: 0;
            width: 100vw;
            border-radius: 16px 16px 0 0;
          }
          .sf-dock {
            bottom: 16px;
            right: 16px;
          }
        }
      `}</style>
    </>
  );
}
