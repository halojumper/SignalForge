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
  'Not Sure Yet',
];

export default function ContactForm() {
  const [fields, setFields] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '',
    services: [] as string[], message: '', consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  function set(k: string, v: string | boolean) { setFields(f => ({ ...f, [k]: v })); }

  function toggleService(s: string) {
    setFields(f => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s]
    }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!fields.firstName.trim()) e.firstName = 'Please enter your first name.';
    if (!fields.lastName.trim())  e.lastName  = 'Please enter your last name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Please enter a valid email address.';
    if (fields.services.length === 0) e.services = 'Please select at least one service.';
    if (fields.message.trim().length < 6) e.message = 'Please enter a message.';
    if (!fields.consent) e.consent = 'You must agree to be contacted.';
    return e;
  }

  async function submit() {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus('sending');

    try {
      await emailjs.send(
        'service_gky9cvq',
        'template_yvq59vr',
        {
          subject: 'Contact Form Submission',
          from_name: `${fields.firstName} ${fields.lastName}`,
          from_email: fields.email,
          phone: fields.phone || 'Not provided',
          company: fields.company || 'Not provided',
          message: `SERVICE INTEREST: ${fields.services.join(', ')}\n\nMESSAGE:\n${fields.message}`,
        },
        '7p4O9_DB_4qMMLH1A'
      );
      setStatus('done');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  }

  function reset() {
    setFields({ firstName: '', lastName: '', email: '', phone: '', company: '', services: [], message: '', consent: false });
    setErrors({});
    setStatus('idle');
  }

  const inp: React.CSSProperties = { padding: '11px 14px', border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: 10, fontFamily: 'DM Sans,sans-serif', fontSize: '0.92rem', color: 'var(--text)', background: 'var(--cream)', outline: 'none', width: '100%' };
  const lbl: React.CSSProperties = { fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-light)', fontFamily: 'Syne,sans-serif', display: 'block', marginBottom: 6 };
  const errStyle: React.CSSProperties = { fontSize: '0.78rem', color: '#e53e3e', marginTop: 4, display: 'block' };

  if (status === 'done') return (
    <div id="contact-form" style={{ background: 'var(--white)', borderRadius: 24, padding: '40px 36px', boxShadow: '0 8px 40px rgba(180,80,30,0.08)', border: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
      {/* SVG check circle — no emoji rendering inconsistency */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="#e8521a" fillOpacity="0.10"/>
          <circle cx="32" cy="32" r="24" fill="#e8521a" fillOpacity="0.15"/>
          <circle cx="32" cy="32" r="16" fill="#e8521a"/>
          <polyline points="23,32 29,38 41,26" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.4rem', color: 'var(--text)', marginBottom: 10 }}>Message Received!</h3>
      <p style={{ color: 'var(--warm-gray)', lineHeight: 1.7, marginBottom: 24 }}>Thanks for reaching out. We'll be in touch within one business day.</p>
      <button className="btn btn-primary" onClick={reset}>Send Another Message</button>
    </div>
  );

  if (status === 'error') return (
    <div style={{ background: 'var(--white)', borderRadius: 24, padding: '40px 36px', boxShadow: '0 8px 40px rgba(180,80,30,0.08)', border: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="#e53e3e" fillOpacity="0.10"/>
          <circle cx="32" cy="32" r="24" fill="#e53e3e" fillOpacity="0.15"/>
          <circle cx="32" cy="32" r="16" fill="#e53e3e"/>
          <line x1="26" y1="26" x2="38" y2="38" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
          <line x1="38" y1="26" x2="26" y2="38" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
        </svg>
      </div>
      <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.4rem', color: 'var(--text)', marginBottom: 10 }}>Something Went Wrong</h3>
      <p style={{ color: 'var(--warm-gray)', lineHeight: 1.7, marginBottom: 24 }}>Please try again or email us directly at <a href="mailto:hello@signalforge.marketing" style={{ color: 'var(--coral)' }}>hello@signalforge.marketing</a></p>
      <button className="btn btn-primary" onClick={reset}>Try Again</button>
    </div>
  );

  return (
    <div style={{ background: 'var(--white)', borderRadius: 24, padding: '40px 36px', boxShadow: '0 8px 40px rgba(180,80,30,0.08)', border: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>Send Us a Message</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--warm-gray)' }}>Fill out the form and we'll be in touch within one business day.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
        <div><label style={lbl}>First Name <span style={{ color: 'var(--coral)' }}>*</span></label><input style={{ ...inp, borderColor: errors.firstName ? '#e53e3e' : undefined }} value={fields.firstName} onChange={e => set('firstName', e.target.value)} placeholder="Jane" />{errors.firstName && <span style={errStyle}>{errors.firstName}</span>}</div>
        <div><label style={lbl}>Last Name <span style={{ color: 'var(--coral)' }}>*</span></label><input style={{ ...inp, borderColor: errors.lastName ? '#e53e3e' : undefined }} value={fields.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Smith" />{errors.lastName && <span style={errStyle}>{errors.lastName}</span>}</div>
      </div>
      <div style={{ marginBottom: 18 }}><label style={lbl}>Email Address <span style={{ color: 'var(--coral)' }}>*</span></label><input type="email" style={{ ...inp, borderColor: errors.email ? '#e53e3e' : undefined }} value={fields.email} onChange={e => set('email', e.target.value)} placeholder="jane@yourcompany.com" />{errors.email && <span style={errStyle}>{errors.email}</span>}</div>
      <div style={{ marginBottom: 18 }}><label style={lbl}>Phone Number</label><input type="tel" style={inp} value={fields.phone} onChange={e => set('phone', e.target.value)} placeholder="(617) 555-0100" /></div>
      <div style={{ marginBottom: 18 }}><label style={lbl}>Company / Business Name</label><input style={inp} value={fields.company} onChange={e => set('company', e.target.value)} placeholder="Acme Corp" /></div>

      {/* Service Interest — toggle chips */}
      <div style={{ marginBottom: 18 }}>
        <label style={lbl}>
          Service Interest <span style={{ color: 'var(--coral)' }}>*</span>
          <span style={{ fontWeight: 400, color: 'var(--warm-gray)', marginLeft: 6 }}>(select all that apply)</span>
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {SERVICES.map(s => {
            const selected = fields.services.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                style={{
                  padding: '7px 14px',
                  borderRadius: 50,
                  border: `1.5px solid ${selected ? 'var(--coral)' : 'rgba(0,0,0,0.15)'}`,
                  background: selected ? 'var(--coral)' : 'var(--cream)',
                  color: selected ? '#fff' : 'var(--text)',
                  fontSize: '0.84rem',
                  fontWeight: selected ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  fontFamily: 'DM Sans,sans-serif',
                }}
              >
                {selected && <span style={{ marginRight: 5, fontSize: '0.75rem' }}>✓</span>}
                {s}
              </button>
            );
          })}
        </div>
        {errors.services && <span style={errStyle}>{errors.services}</span>}
      </div>

      <div style={{ marginBottom: 18 }}><label style={lbl}>Message <span style={{ color: 'var(--coral)' }}>*</span></label><textarea style={{ ...inp, resize: 'vertical', minHeight: 110, borderColor: errors.message ? '#e53e3e' : undefined }} value={fields.message} onChange={e => set('message', e.target.value)} rows={4} placeholder="Tell us about your business and what you're looking to accomplish..." />{errors.message && <span style={errStyle}>{errors.message}</span>}</div>
      <div style={{ marginBottom: 22 }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontSize: '0.83rem', color: 'var(--warm-gray)', lineHeight: 1.5 }}>
          <div style={{ width: 18, height: 18, flexShrink: 0, border: `2px solid ${errors.consent ? '#e53e3e' : 'rgba(0,0,0,0.2)'}`, borderRadius: 5, background: fields.consent ? 'var(--coral)' : 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2, cursor: 'pointer' }} onClick={() => set('consent', !fields.consent)}>
            {fields.consent && <span style={{ fontSize: '0.7rem', color: 'white', fontWeight: 800 }}>✓</span>}
          </div>
          <span onClick={() => set('consent', !fields.consent)}>I agree to be contacted by SignalForge regarding my inquiry. View our <a href="#" style={{ color: 'var(--coral)' }}>Privacy Policy</a>.</span>
        </label>
        {errors.consent && <span style={errStyle}>{errors.consent}</span>}
      </div>
      <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 14, fontSize: '1rem', borderRadius: 12, opacity: status === 'sending' ? 0.7 : 1 }} onClick={submit} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </div>
  );
}
