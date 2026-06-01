'use client';
import { useEffect, useState } from 'react';

const cards = [
  { icon: '📧', title: 'Email Open Rate',   val: '38.4%', label: 'vs. 21% industry avg' },
  { icon: '📱', title: 'SMS Click-Through', val: '22%',   label: 'Last 30-day campaign' },
  { icon: '🎯', title: 'Lead Conversions',  val: '+3.1×', label: 'Automated vs. manual' },
  { icon: '💰', title: 'Revenue Recovered', val: '$40K',  label: 'Cart automation, Q1' },
];

const ORBIT_ANGLES = [45, 135, 225, 315];
const ORBIT_RADIUS = 154;

function getOrbitPos(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

type Phase = 'stacked' | 'fanning' | 'orbiting';

export default function MetricCards() {
  const [phase, setPhase] = useState<Phase>('stacked');
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const fanTimer   = setTimeout(() => setPhase('fanning'),  2000);
    const orbitTimer = setTimeout(() => setPhase('orbiting'), 2800);
    return () => { clearTimeout(fanTimer); clearTimeout(orbitTimer); };
  }, []);

  useEffect(() => {
    if (phase !== 'orbiting') return;
    let frame: number;
    let start: number | null = null;
    const SPEED = 0.025;
    function tick(ts: number) {
      if (!start) start = ts;
      setAngle((ts - start) * SPEED);
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  const SIZE = 380, CENTER = SIZE / 2, CARD_W = 148, CARD_H = 100;

  return (
    <div style={{ position:'relative', width:SIZE, height:SIZE, flexShrink:0 }}>

      {/* Central logo */}
      <div style={{ position:'absolute', left:CENTER, top:CENTER, transform:'translate(-50%,-50%)', width:64, height:64, background:'var(--coral)', borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 8px 32px rgba(232,85,42,0.35)', zIndex:10 }}>
        <svg viewBox="0 0 24 24" style={{ width:32, height:32, fill:'white' }}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>

      {/* Orbit ring */}
      <div style={{ position:'absolute', left:CENTER, top:CENTER, width:ORBIT_RADIUS*2, height:ORBIT_RADIUS*2, transform:'translate(-50%,-50%)', borderRadius:'50%', border:'1.5px dashed rgba(232,85,42,0.18)', opacity:phase==='orbiting'?1:0, transition:'opacity 0.6s ease 0.4s', pointerEvents:'none' }} />

      {/* Cards */}
      {cards.map((card, i) => {
        const baseAngle = ORBIT_ANGLES[i];
        let tx = 0, ty = 0, opacity = 1, scale = 1, zIndex = 4 - i, transitionStyle = '';

        if (phase === 'stacked') {
          tx = i * 3; ty = i * 3;
          opacity = i === 0 ? 1 : 0;
          scale = 1 - i * 0.04;
          transitionStyle = 'none';
        } else if (phase === 'fanning') {
          const pos = getOrbitPos(baseAngle, ORBIT_RADIUS);
          tx = pos.x; ty = pos.y; zIndex = 4;
          transitionStyle = `transform 0.8s cubic-bezier(0.34,1.56,0.64,1) ${i*0.07}s, opacity 0.4s ease ${i*0.07}s`;
        } else {
          const pos = getOrbitPos(baseAngle + angle, ORBIT_RADIUS);
          tx = pos.x; ty = pos.y; zIndex = 4;
          transitionStyle = 'none';
        }

        return (
          <div key={i} style={{ position:'absolute', left:CENTER, top:CENTER, width:CARD_W, height:CARD_H, marginLeft:-CARD_W/2, marginTop:-CARD_H/2, background:'var(--white)', border:'1px solid rgba(232,85,42,0.13)', borderRadius:16, boxShadow:'0 6px 24px rgba(180,80,30,0.10)', padding:'14px 16px', zIndex, opacity, transform:`translate(${tx}px,${ty}px) scale(${scale})`, transition:transitionStyle, pointerEvents:'none' }}>
            <div style={{ fontSize:'1.2rem', marginBottom:4 }}>{card.icon}</div>
            <div style={{ fontFamily:'Syne,sans-serif', fontSize:'0.72rem', fontWeight:700, color:'var(--text)', marginBottom:2 }}>{card.title}</div>
            <div style={{ fontSize:'1.25rem', fontWeight:800, fontFamily:'Syne,sans-serif', color:'var(--coral)', lineHeight:1 }}>{card.val}</div>
            <div style={{ fontSize:'0.62rem', color:'var(--mid-gray)', marginTop:3, lineHeight:1.3 }}>{card.label}</div>
          </div>
        );
      })}
    </div>
  );
}
