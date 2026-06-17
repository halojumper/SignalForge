'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICES = [
  'Marketing Automation',
  'SMS Marketing',
  'Social Media Campaigns',
  'Ad Creative Design',
  'Website Design & Build',
  'Event Marketing',
];

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming','Washington D.C.',
];

interface Props {
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  email: string;
  company: string;
  city: string;
  state: string;
  services: string[];
}

const EMPTY: FormData = {
  firstName: '', lastName: '', title: '', phone: '', email: '',
  company: '', city: '', state: '', services: [],
};

export default function ContactModal({ onClose }: Props) {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const set = (field: keyof FormData, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const toggleService = (s: string) =>
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter(x => x !== s)
        : [...prev.services, s],
    }));

  const required = ['firstName','lastName','phone','email','company','state'];
  const isValid = required.every(f => (form[f as keyof FormData] as string).trim() !== '');

  const handleSubmit = async () => {
    if (!isValid || status === 'sending') return;
    setStatus('sending');
    try {
      await emailjs.send(
        'service_gky9cvq',
        'template_yvq59vr',
        {
          from_name: `${form.firstName} ${form.lastName}`,
          from_email: form.email,
          company: form.company,
          phone: form.phone,
          message: [
            form.title ? `Title: ${form.title}` : null,
            `State: ${form.state}`,
            `Services: ${form.services.length > 0 ? form.services.join(', ') : 'Not specified'}`,
          ].filter(Boolean).join('\n'),
        },
        '7p4O9_DB_4qMMLH1A'
      );
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <div className="cm-overlay" onClick={onClose} aria-hidden="true" />

      <div className="cm-modal" role="dialog" aria-modal="true" aria-label="Contact SignalForge">
        {/* Close */}
        <button className="cm-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="1" y1="1" x2="17" y2="17"/>
            <line x1="17" y1="1" x2="1" y2="17"/>
          </svg>
        </button>

        {status === 'success' ? (
          <div className="cm-success">
            <div className="cm-success-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2>You're all set!</h2>
            <p>Thanks for reaching out. A member of the SignalForge team will be in touch with you shortly.</p>
            <button className="cm-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="cm-heading">
              <h2>Let's get in touch</h2>
              <p>Please tell us a bit about yourself</p>
            </div>

            <div className="cm-form">
              {/* Name row */}
              <div className="cm-row">
                <div className="cm-field">
                  <input
                    className="cm-input"
                    placeholder="First Name *"
                    value={form.firstName}
                    onChange={e => set('firstName', e.target.value)}
                  />
                </div>
                <div className="cm-field">
                  <input
                    className="cm-input"
                    placeholder="Last Name *"
                    value={form.lastName}
                    onChange={e => set('lastName', e.target.value)}
                  />
                </div>
              </div>

              <input className="cm-input" placeholder="Title" value={form.title} onChange={e => set('title', e.target.value)} />
              <input className="cm-input" placeholder="Phone *" type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} />
              <input className="cm-input" placeholder="Email *" type="email" value={form.email} onChange={e => set('email', e.target.value)} />
              <input className="cm-input" placeholder="Company Name *" value={form.company} onChange={e => set('company', e.target.value)} />
              <input className="cm-input" placeholder="City" value={form.city} onChange={e => set('city', e.target.value)} />

              {/* State */}
              <div className="cm-select-wrap">
                <select className="cm-select" value={form.state} onChange={e => set('state', e.target.value)}>
                  <option value="">State / Province...</option>
                  {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <svg className="cm-select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
              </div>


              {/* Services checkboxes */}
              <div className="cm-services-label">How can we help you?</div>
              <div className="cm-services">
                {SERVICES.map(s => (
                  <label key={s} className={`cm-service-chip ${form.services.includes(s) ? 'cm-service-chip--on' : ''}`}>
                    <input
                      type="checkbox"
                      checked={form.services.includes(s)}
                      onChange={() => toggleService(s)}
                      style={{ display: 'none' }}
                    />
                    {s}
                  </label>
                ))}
              </div>

              {status === 'error' && (
                <div className="cm-error">Something went wrong. Please try again or email us directly at hello@signalforge.marketing</div>
              )}

              <button
                className={`cm-btn ${!isValid || status === 'sending' ? 'cm-btn--disabled' : ''}`}
                onClick={handleSubmit}
                disabled={!isValid || status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Submit →'}
              </button>

              <p className="cm-legal">
                By clicking Submit, you agree to allow SignalForge to store and process your personal information to respond to your inquiry.
              </p>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        /* Overlay */
        .cm-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 40, 55, 0.88);
          z-index: 10000;
          animation: cmFade 0.25s ease both;
        }
        @keyframes cmFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Modal */
        .cm-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(780px, 92vw);
          max-height: 88vh;
          background: #fff;
          border-radius: 16px;
          z-index: 10001;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: cmSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        @keyframes cmSlide {
          from { opacity: 0; transform: translate(-50%, -47%); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }

        /* Close button */
        .cm-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: #fff;
          z-index: 10;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.15s;
        }
        .cm-close:hover { background: rgba(255,255,255,0.15); }

        /* Heading band */
        .cm-heading {
          background: linear-gradient(135deg, #1a1a1a 0%, #7a2e0a 50%, #e8521a 100%);
          padding: 36px 40px 28px;
          flex-shrink: 0;
        }
        .cm-heading h2 {
          color: #fff;
          font-size: 28px;
          font-weight: 300;
          margin: 0 0 8px;
          letter-spacing: -0.3px;
        }
        .cm-heading p {
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          margin: 0;
        }

        /* Form body — scrollable */
        .cm-form {
          padding: 28px 40px 32px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .cm-form::-webkit-scrollbar { width: 8px; }
        .cm-form::-webkit-scrollbar-track { background: #f0f0f0; border-radius: 4px; }
        .cm-form::-webkit-scrollbar-thumb { background: #e8521a; border-radius: 4px; }
        .cm-form::-webkit-scrollbar-thumb:hover { background: #c94415; }

        /* Side-by-side row */
        .cm-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .cm-field { display: flex; flex-direction: column; }

        /* Inputs */
        .cm-input {
          border: 1px solid #d8d8d8;
          border-radius: 8px;
          padding: 13px 16px;
          font-size: 14px;
          outline: none;
          background: #fff;
          color: #111;
          transition: border-color 0.15s;
          width: 100%;
          box-sizing: border-box;
        }
        .cm-input:focus { border-color: #e8521a; }
        .cm-input::placeholder { color: #aaa; }

        /* Select */
        .cm-select-wrap {
          position: relative;
        }
        .cm-select {
          width: 100%;
          border: 1px solid #d8d8d8;
          border-radius: 8px;
          padding: 13px 40px 13px 16px;
          font-size: 14px;
          outline: none;
          background: #fff;
          color: #111;
          appearance: none;
          cursor: pointer;
          transition: border-color 0.15s;
          box-sizing: border-box;
        }
        .cm-select:focus { border-color: #e8521a; }
        .cm-select-arrow {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #888;
        }

        /* Service chips */
        .cm-services-label {
          font-size: 13px;
          color: #666;
          margin-bottom: -4px;
        }
        .cm-services {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cm-service-chip {
          border: 1.5px solid #d8d8d8;
          border-radius: 50px;
          padding: 7px 16px;
          font-size: 13px;
          color: #444;
          cursor: pointer;
          transition: all 0.15s;
          user-select: none;
        }
        .cm-service-chip:hover {
          border-color: #e8521a;
          color: #e8521a;
        }
        .cm-service-chip--on {
          background: #e8521a;
          border-color: #e8521a;
          color: #fff;
        }

        /* Submit */
        .cm-btn {
          background: #e8521a;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          align-self: flex-start;
          transition: background 0.15s, transform 0.1s;
          margin-top: 4px;
        }
        .cm-btn:hover:not(:disabled) {
          background: #c94415;
          transform: translateY(-1px);
        }
        .cm-btn--disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        /* Error */
        .cm-error {
          background: #fff0ed;
          border: 1px solid #f5c0b0;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 13px;
          color: #c94415;
        }

        /* Legal */
        .cm-legal {
          font-size: 11px;
          color: #aaa;
          line-height: 1.5;
          margin: 0;
        }

        /* Success state */
        .cm-success {
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }
        .cm-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #e8521a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .cm-success h2 {
          font-size: 24px;
          font-weight: 600;
          color: #111;
          margin: 0;
        }
        .cm-success p {
          font-size: 15px;
          color: #555;
          max-width: 340px;
          line-height: 1.6;
          margin: 0;
        }

        /* Mobile */
        @media (max-width: 560px) {
          .cm-heading { padding: 28px 24px 20px; }
          .cm-heading h2 { font-size: 22px; }
          .cm-form { padding: 20px 24px 28px; }
          .cm-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
