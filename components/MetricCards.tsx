'use client';
import { useEffect, useState, useRef } from 'react';

const cards = [
  { icon: '📧', title: 'Email Open Rate',   val: '38.4%', label: 'vs. 21% industry avg' },
  { icon: '📱', title: 'SMS Click-Through', val: '22%',   label: 'Last 30-day campaign' },
  { icon: '🎯', title: 'Lead Conversions',  val: '+3.1×', label: 'Automated vs. manual' },
  { icon: '💰', title: 'Revenue Recovered', val: '$40K',  label: 'Cart automation, Q1' },
];

const ORBIT_ANGLES = [315, 45, 225, 135];
const ORBIT_RADIUS = 172;
const BASE_SIZE = 430;

function getOrbitPos(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

type Phase = 'stacked' | 'fanning' | 'orbiting';

export default function MetricCards() {
  const [phase, setPhase] = useState<Phase>('stacked');
  const [angle, setAngle] = useState(0);
  const [scale, setScale] = useState(1);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateScale() {
      if (!wrapRef.current) return;
      const available = wrapRef.current.parentElement?.clientWidth ?? BASE_SIZE;
      setScale(Math.min(1, available / BASE_SIZE));
    }
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    const fanTimer   = setTimeout(() => setPhase('fanning'),  1000);
    const orbitTimer = setTimeout(() => setPhase('orbiting'), 1900);
    return () => { clearTimeout(fanTimer); clearTimeout(orbitTimer); };
  }, []);

  useEffect(() => {
    if (phase !== 'orbiting') return;
    let frame: number;
    let start: number | null = null;
    const SPEED = 0.022;
    function tick(ts: number) {
      if (!start) start = ts;
      setAngle((ts - start) * SPEED);
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  const SIZE = BASE_SIZE;
  const CENTER = SIZE / 2;
  const CARD_W = 164;
  const CARD_H = 112;
  const LOGO_SIZE = 76;

  return (
    <div ref={wrapRef} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        position: 'relative',
        width: SIZE,
        height: SIZE,
        flexShrink: 0,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        marginTop: scale < 1 ? `${(SIZE * scale - SIZE) / 2}px` : 0,
        marginBottom: scale < 1 ? `${(SIZE * scale - SIZE) / 2}px` : 0,
      }}>

        {/* Logo */}
        <div style={{ position: 'absolute', left: CENTER, top: CENTER, transform: 'translate(-50%, -50%)', width: LOGO_SIZE, height: LOGO_SIZE, background: 'var(--coral)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 40px rgba(232,85,42,0.38)', zIndex: 1 }}>
          <svg viewBox="0 0 24 24" style={{ width: 38, height: 38, fill: 'white' }}>
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>

        {/* Orbit ring */}
        <div style={{ position: 'absolute', left: CENTER, top: CENTER, width: ORBIT_RADIUS * 2, height: ORBIT_RADIUS * 2, transform: 'translate(-50%, -50%)', borderRadius: '50%', border: '1.5px dashed rgba(232,85,42,0.2)', opacity: phase === 'orbiting' ? 1 : 0, transition: 'opacity 0.8s ease 0.2s', pointerEvents: 'none', zIndex: 2 }} />

        {/* Cards */}
        {cards.map((card, i) => {
          const baseAngle = ORBIT_ANGLES[i];
          let tx = 0, ty = 0, opacity = 1, cardScale = 1, zIndex = 6 - i, transition = '';

          if (phase === 'stacked') {
            tx = i * 4; ty = i * 4;
            opacity = i === 0 ? 1 : 0;
            cardScale = 1 - i * 0.03;
            zIndex = 6 - i;
            transition = 'none';
          } else if (phase === 'fanning') {
            const pos = getOrbitPos(baseAngle, ORBIT_RADIUS);
            tx = pos.x; ty = pos.y;
            opacity = 1; cardScale = 1; zIndex = 5;
            transition = `transform 0.75s cubic-bezier(0.34,1.45,0.64,1) ${i * 0.055}s, opacity 0.3s ease ${i * 0.055}s`;
          } else {
            const pos = getOrbitPos(baseAngle + angle, ORBIT_RADIUS);
            tx = pos.x; ty = pos.y;
            opacity = 1; cardScale = 1; zIndex = 5;
            transition = 'none';
          }

          return (
            <div key={i} style={{
              position: 'absolute',
              left: CENTER, top: CENTER,
              width: CARD_W, height: CARD_H,
              marginLeft: -CARD_W / 2,
              marginTop: -CARD_H / 2,
              background: 'var(--white)',
              border: '1px solid rgba(232,85,42,0.14)',
              borderRadius: 18,
              boxShadow: '0 8px 28px rgba(180,80,30,0.11)',
              padding: '16px 18px',
              zIndex, opacity,
              transform: `translate(${tx}px, ${ty}px) scale(${cardScale})`,
              transition,
              pointerEvents: 'none',
            }}>
              <div style={{ fontSize: '1.3rem', marginBottom: 5 }}>{card.icon}</div>
              <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.76rem', fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>{card.title}</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, fontFamily: 'Syne,sans-serif', color: 'var(--coral)', lineHeight: 1 }}>{card.val}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--mid-gray)', marginTop: 4, lineHeight: 1.3 }}>{card.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
