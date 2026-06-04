import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import MetricCards from '@/components/MetricCards';

export const metadata: Metadata = { title: 'Home' };

const ServicesIllustration = () => (
  <svg viewBox="0 0 80 70" width="72" height="63" style={{display:'block'}}>
    <rect x="8" y="10" width="64" height="48" rx="5" fill="#fdf0e8"/>
    <rect x="8" y="10" width="64" height="13" rx="5" fill="#e8552a"/>
    <circle cx="17" cy="16.5" r="2" fill="rgba(255,255,255,0.7)"/>
    <circle cx="23" cy="16.5" r="2" fill="rgba(255,255,255,0.7)"/>
    <circle cx="29" cy="16.5" r="2" fill="rgba(255,255,255,0.7)"/>
    <rect x="18" y="44" width="8" height="12" rx="2" fill="#e8552a"/>
    <rect x="30" y="36" width="8" height="20" rx="2" fill="#f5a623"/>
    <rect x="42" y="29" width="8" height="27" rx="2" fill="#e8552a" opacity="0.6"/>
    <rect x="54" y="22" width="8" height="34" rx="2" fill="#fbbf47"/>
    <polyline points="22,44 34,36 46,29 58,22" fill="none" stroke="#c9460f" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HowItWorksIllustration = () => (
  <svg viewBox="0 0 80 70" width="72" height="63" style={{display:'block'}}>
    <circle cx="22" cy="22" r="12" fill="#e8552a"/>
    <text x="22" y="22" textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="white" fontFamily="sans-serif" fontWeight="bold">1</text>
    <line x1="34" y1="22" x2="44" y2="22" stroke="#e8552a" strokeWidth="2" strokeLinecap="round"/>
    <polygon points="44,19 50,22 44,25" fill="#e8552a"/>
    <circle cx="58" cy="22" r="12" fill="#f5a623"/>
    <text x="58" y="22" textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="white" fontFamily="sans-serif" fontWeight="bold">2</text>
    <line x1="58" y1="34" x2="58" y2="44" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
    <polygon points="55,44 58,50 61,44" fill="#f5a623"/>
    <circle cx="58" cy="56" r="12" fill="#c9460f"/>
    <text x="58" y="56" textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="white" fontFamily="sans-serif" fontWeight="bold">3</text>
    <line x1="46" y1="56" x2="36" y2="56" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <polygon points="36,53 30,56 36,59" fill="#fbbf47"/>
    <circle cx="22" cy="56" r="12" fill="#fbbf47"/>
    <text x="22" y="56" textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="white" fontFamily="sans-serif" fontWeight="bold">4</text>
  </svg>
);

const ResultsIllustration = () => (
  <svg viewBox="0 0 80 70" width="72" height="63" style={{display:'block'}}>
    <path d="M26 8 h28 v24 a14 14 0 0 1 -28 0 Z" fill="#f5a623"/>
    <path d="M26 16 h-8 a7 7 0 0 0 8 12" fill="none" stroke="#fbbf47" strokeWidth="3" strokeLinecap="round"/>
    <path d="M54 16 h8 a7 7 0 0 1 -8 12" fill="none" stroke="#fbbf47" strokeWidth="3" strokeLinecap="round"/>
    <rect x="34" y="44" width="12" height="8" rx="1" fill="#e8552a"/>
    <rect x="28" y="52" width="24" height="5" rx="2.5" fill="#e8552a"/>
    <path d="M40 14 l2 6 h6 l-5 3.5 2 6 -5 -3.5 -5 3.5 2 -6 -5 -3.5 h6 Z" fill="white"/>
  </svg>
);

const InsightsIllustration = () => (
  <svg viewBox="0 0 80 70" width="72" height="63" style={{display:'block'}}>
    <circle cx="40" cy="28" r="16" fill="#fbbf47"/>
    <circle cx="34" cy="22" r="3" fill="rgba(255,255,255,0.4)"/>
    <rect x="34" y="42" width="12" height="4" rx="1" fill="#e8552a"/>
    <rect x="35" y="46" width="10" height="3" rx="1" fill="#e8552a" opacity="0.7"/>
    <rect x="36" y="49" width="8" height="3" rx="1" fill="#e8552a" opacity="0.4"/>
    <line x1="40" y1="6" x2="40" y2="2" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <line x1="56" y1="12" x2="59" y2="9" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <line x1="62" y1="28" x2="66" y2="28" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="12" x2="21" y2="9" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18" y1="28" x2="14" y2="28" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <line x1="20" y1="60" x2="60" y2="60" stroke="#e8552a" strokeWidth="2" strokeLinecap="round"/>
    <line x1="25" y1="65" x2="55" y2="65" stroke="#e8552a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const ContactIllustration = () => (
  <svg viewBox="0 0 80 70" width="72" height="63" style={{display:'block'}}>
    <rect x="10" y="22" width="60" height="40" rx="5" fill="#e8552a"/>
    <path d="M10 27 L40 47 L70 27" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="10" y1="62" x2="28" y2="44" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="70" y1="62" x2="52" y2="44" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <rect x="28" y="4" width="24" height="14" rx="5" fill="#fbbf47"/>
    <polygon points="33,18 40,24 47,18" fill="#fbbf47"/>
    <line x1="32" y1="10" x2="48" y2="10" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="32" y1="14" x2="44" y2="14" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);