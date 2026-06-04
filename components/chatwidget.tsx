Yes — I'll build it with session-level persistence built in from the start. The message history will live in React state so it survives the widget being opened and closed during the same visit.
Here's the complete components/ChatWidget.tsx:
tsx'use client';
import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const initialMessage: Message = {
  role: 'assistant',
  content: 'Hi! I am the SignalForge assistant. Ask me anything about our services, how we work, or how we can help your business grow.',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMessage: Message = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div style={{position:'fixed',bottom:88,right:24,width:340,maxHeight:480,background:'var(--white)',borderRadius:20,boxShadow:'0 8px 40px rgba(0,0,0,0.18)',display:'flex',flexDirection:'column',zIndex:999,overflow:'hidden',border:'1px solid rgba(0,0,0,0.08)'}}>
          {/* Header */}
          <div style={{background:'linear-gradient(135deg,var(--coral),#d44420)',padding:'16px 18px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:36,height:36,background:'rgba(255,255,255,0.2)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div>
                <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.9rem',color:'white'}}>SignalForge Assistant</div>
                <div style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.75)'}}>Typically replies instantly</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{background:'none',border:'none',cursor:'pointer',color:'white',fontSize:'1.2rem',lineHeight:1,padding:4}}>✕</button>
          </div>

          {/* Messages */}
          <div style={{flex:1,overflowY:'auto',padding:'16px',display:'flex',flexDirection:'column',gap:12}}>
            {messages.map((m, i) => (
              <div key={i} style={{display:'flex',justifyContent:m.role === 'user' ? 'flex-end' : 'flex-start'}}>
                <div style={{
                  maxWidth:'82%',
                  padding:'10px 14px',
                  borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: m.role === 'user' ? 'var(--coral)' : 'var(--sand)',
                  color: m.role === 'user' ? 'white' : 'var(--text)',
                  fontSize:'0.88rem',
                  lineHeight:1.6,
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{background:'var(--sand)',borderRadius:'16px 16px 16px 4px',padding:'10px 16px',display:'flex',gap:4,alignItems:'center'}}>
                  <span style={{width:6,height:6,background:'var(--coral)',borderRadius:'50%',animation:'bounce 1s infinite'}}/>
                  <span style={{width:6,height:6,background:'var(--coral)',borderRadius:'50%',animation:'bounce 1s infinite 0.2s'}}/>
                  <span style={{width:6,height:6,background:'var(--coral)',borderRadius:'50%',animation:'bounce 1s infinite 0.4s'}}/>
                </div>
              </div>
            )}
            <div ref={bottomRef}/>
          </div>

          {/* Input */}
          <div style={{padding:'12px 16px',borderTop:'1px solid rgba(0,0,0,0.06)',display:'flex',gap:8,alignItems:'center'}}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask me anything..."
              style={{flex:1,padding:'9px 14px',borderRadius:10,border:'1px solid rgba(0,0,0,0.12)',fontSize:'0.88rem',fontFamily:'inherit',outline:'none'}}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              style={{width:36,height:36,background:'var(--coral)',border:'none',borderRadius:10,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',opacity:!input.trim() || loading ? 0.5 : 1,flexShrink:0}}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{position:'fixed',bottom:24,right:24,width:56,height:56,background:'linear-gradient(135deg,var(--coral),#d44420)',border:'none',borderRadius:'50%',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 20px rgba(232,85,42,0.4)',zIndex:999,transition:'transform 0.2s'}}
        aria-label="Open chat"
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </>
  );
}