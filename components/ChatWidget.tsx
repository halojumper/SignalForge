'use client';

import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactModal from '@/components/ContactModal';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Callback collection states
type CallbackStep = 'none' | 'ask_name' | 'ask_contact' | 'ask_time' | 'done';

interface CallbackData {
  name: string;
  contact: string; // phone or email
  time: string;
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

// Detect if a message contains a phone number or email address
function detectContactInfo(text: string): boolean {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const phoneRegex = /(\+?1[\s.-]?)?(\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/;
  return emailRegex.test(text) || phoneRegex.test(text);
}

// Detect if a message is requesting a callback / to be contacted
function detectCallbackIntent(text: string): boolean {
  const lower = text.toLowerCase();
  const triggers = [
    'call me', 'call us', 'give me a call', 'reach me', 'reach out',
    'contact me', 'get in touch', 'speak with someone', 'talk to someone',
    'speak to a person', 'talk to a real', 'human', 'someone call',
    'have someone', 'email me', 'send me an email', 'follow up',
  ];
  return triggers.some(t => lower.includes(t));
}

export default function ChatWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isClosed, setIsClosed] = useState(() =>
    typeof window !== 'undefined' && !!sessionStorage.getItem('sfChatDismissed')
  );
  const [cookieConsented, setCookieConsented] = useState(() =>
    typeof window !== 'undefined' && !!localStorage.getItem('sf_cookie_consent')
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Callback collection state
  const [callbackStep, setCallbackStep] = useState<CallbackStep>('none');
  const [callbackData, setCallbackData] = useState<CallbackData>({ name: '', contact: '', time: '' });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Watch for cookie consent being set
  useEffect(() => {
    if (!cookieConsented) {
      const interval = setInterval(() => {
        if (localStorage.getItem('sf_cookie_consent')) {
          setCookieConsented(true);
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, [cookieConsented]);

  // Auto-open after 5s only once cookie consent is given
  useEffect(() => {
    if (sessionStorage.getItem('sfChatDismissed')) return;
    if (!cookieConsented) return;
    const t = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(t);
  }, [cookieConsented]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addBotMessage = (content: string) => {
    setMessages(prev => [...prev, { role: 'assistant', content }]);
  };

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

  // Fire the EmailJS callback notification
  const sendCallbackEmail = async (data: CallbackData, chatHistory: Message[]) => {
    const historyText = chatHistory
      .map(m => `${m.role === 'user' ? 'Visitor' : 'Aria'}: ${m.content}`)
      .join('\n\n');

    await emailjs.send(
      'service_gky9cvq',
      'template_yvq59vr',
      {
        from_name: data.name,
        from_email: data.contact.includes('@') ? data.contact : 'via-chat@signalforge.marketing',
        company: 'Requested via Aria chat',
        phone: data.contact.includes('@') ? 'See contact field' : data.contact,
        message: [
          `*** CALLBACK REQUEST FROM ARIA CHAT ***`,
          `Name: ${data.name}`,
          `Contact: ${data.contact}`,
          `Best time to reach: ${data.time}`,
          ``,
          `--- Chat transcript ---`,
          historyText,
        ].join('\n'),
      },
      '7p4O9_DB_4qMMLH1A'
    );
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput('');

    // ── Callback collection flow ──
    if (callbackStep === 'ask_name') {
      const name = trimmed;
      setCallbackData(prev => ({ ...prev, name }));
      setCallbackStep('ask_contact');
      addBotMessage(`Nice to meet you, ${name}! What's the best phone number or email address to reach you?`);
      return;
    }

    if (callbackStep === 'ask_contact') {
      const contact = trimmed;
      setCallbackData(prev => ({ ...prev, contact }));
      setCallbackStep('ask_time');
      addBotMessage("Perfect. What's the best time to reach you — morning, afternoon, or a specific time window?");
      return;
    }

    if (callbackStep === 'ask_time') {
      const time = trimmed;
      const finalData = { ...callbackData, time };
      setCallbackData(finalData);
      setCallbackStep('done');

      addBotMessage("You're all set! I've passed your info to the SignalForge team and someone will be in touch with you soon. Is there anything else I can help you with in the meantime?");

      // Fire the email — silently, no user-facing error if it fails
      try {
        await sendCallbackEmail(finalData, next);
      } catch {
        // Email failed silently — the user already got the confirmation message
      }
      return;
    }

    // ── Detect callback intent in free-form messages ──
    if (callbackStep === 'none' && (detectCallbackIntent(trimmed) || detectContactInfo(trimmed))) {
      setCallbackStep('ask_name');
      // If they already dropped a phone/email, capture it and skip that step
      if (detectContactInfo(trimmed)) {
        setCallbackData(prev => ({ ...prev, contact: trimmed }));
        setCallbackStep('ask_time');
        addBotMessage("Happy to have someone reach out! I just need a couple of quick details. What's your name?");
        // Override: go back to ask_name first so we have their name
        setCallbackData({ name: '', contact: trimmed, time: '' });
        setCallbackStep('ask_name');
        addBotMessage("Happy to have someone reach out to you! What's your name?");
      } else {
        addBotMessage("Absolutely! Let me grab a few quick details so our team can reach out. What's your name?");
      }
      return;
    }

    // ── Canned pill responses ──
    if (CANNED[trimmed]) {
      setMessages([...next, { role: 'assistant', content: CANNED[trimmed] }]);
      return;
    }

    // ── Live AI response ──
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
        content: "I'm having trouble connecting right now. Please try again or reach out directly at hello@signalforge.marketing.",
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const hasMessages = messages.length > 0;
  const mobileBottom = cookieConsented ? '16px' : '80px';
  const desktopBottom = '28px';

  // Placeholder hint changes based on callback step
  const inputPlaceholder =
    callbackStep === 'ask_name' ? 'Your full name...' :
    callbackStep === 'ask_contact' ? 'Phone number or email...' :
    callbackStep === 'ask_time' ? 'e.g. Weekday mornings, after 3pm...' :
    'Ask a question';

  return (
    <>
      {/* Dock */}
      {!isVisible && (
        <div className="sf-dock">
          {isClosed && (
            <button className="sf-dock-btn sf-envelope" onClick={() => setShowModal(true)} aria-label="Contact SignalForge" title="Get in touch">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </button>
          )}
          <button className="sf-dock-btn sf-bubble" onClick={reopenCard} aria-label="Open Aria chat assistant">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
        </div>
      )}

      {/* Aria card */}
      {isVisible && (
        <div className="sf-chat-card" role="dialog" aria-label="Aria — SignalForge AI Assistant">

          <button className="sf-dismiss" onClick={closeCard} aria-label="Close chat">
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>

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

          {!hasMessages && (
            <div className="sf-pills">
              {QUICK_REPLIES.map(q => (
                <button key={q} className="sf-pill" onClick={() => sendMessage(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="sf-input-row">
            <input
              className="sf-input"
              type="text"
              placeholder={inputPlaceholder}
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

          <div className="sf-disclaimer">
            By chatting with the AI-powered Assistant, you consent to the chat being transcribed and stored by SignalForge to improve our service.
          </div>
        </div>
      )}

      <style jsx>{`
        .sf-dock {
          position: fixed;
          bottom: ${desktopBottom};
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
        .sf-chat-card {
          position: fixed;
          bottom: ${desktopBottom};
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
        .sf-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 16px 14px 40px;
          background: linear-gradient(135deg, #1a1a1a 0%, #7a2e0a 50%, #e8521a 100%);
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
        .sf-name { font-weight: 700; font-size: 15px; color: #fff; line-height: 1.2; }
        .sf-label { font-size: 12px; color: rgba(255,255,255,0.82); margin-top: 1px; }
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
        .sf-msg p { margin: 0 0 4px; font-size: 14px; line-height: 1.55; color: #222; }
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
        .sf-msg--bot { align-self: flex-start; max-width: 100%; }
        .sf-typing { display: inline-flex; gap: 4px; align-items: center; padding: 4px 0; }
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
        .sf-pills { display: flex; flex-wrap: wrap; gap: 7px; padding: 4px 16px 12px; }
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
        .sf-pill:hover { background: #c94415; transform: translateY(-1px); }
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
        .sf-input:focus { border-color: #e8521a; background: #fff; }
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
        .sf-disclaimer { padding: 8px 14px 12px; font-size: 10.5px; color: #999; line-height: 1.5; }
        @media (max-width: 480px) {
          .sf-chat-card { bottom: 0; right: 0; width: 100vw; border-radius: 16px 16px 0 0; }
          .sf-dock { bottom: ${mobileBottom}; right: 16px; }
        }
      `}</style>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  );
}
