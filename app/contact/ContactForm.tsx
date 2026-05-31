'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [fields, setFields] = useState({firstName:'',lastName:'',email:'',phone:'',company:'',service:'',message:'',consent:false});
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<'idle'|'sending'|'done'>('idle');

  function set(k: string, v: string | boolean) { setFields(f=>({...f,[k]:v})); }

  function validate() {
    const e: Record<string,string> = {};
    if (!fields.firstName.trim()) e.firstName = 'Please enter your first name.';
    if (!fields.lastName.trim())  e.lastName  = 'Please enter your last name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Please enter a valid email address.';
    if (!fields.service) e.service = 'Please select a service.';
    if (fields.message.trim().length < 6) e.message = 'Please enter a message.';
    if (!fields.consent) e.consent = 'You must agree to be contacted.';
    return e;
  }

  function submit() {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus('sending');
    setTimeout(() => setStatus('done'), 1400);
  }

  function reset() { setFields({firstName:'',lastName:'',email:'',phone:'',company:'',service:'',message:'',consent:false}); setErrors({}); setStatus('idle'); }

  const inp: React.CSSProperties = {padding:'11px 14px',border:'1.5px solid rgba(0,0,0,0.12)',borderRadius:10,fontFamily:'DM Sans,sans-serif',fontSize:'0.92rem',color:'var(--text)',background:'var(--cream)',outline:'none',width:'100%'};
  const lbl: React.CSSProperties = {fontSize:'0.82rem',fontWeight:600,color:'var(--text-light)',fontFamily:'Syne,sans-serif',display:'block',marginBottom:6};
  const err: React.CSSProperties = {fontSize:'0.78rem',color:'#e53e3e',marginTop:4,display:'block'};

  if (status === 'done') return (
    <div style={{background:'var(--white)',borderRadius:24,padding:'40px 36px',boxShadow:'0 8px 40px rgba(180,80,30,0.08)',border:'1px solid rgba(0,0,0,0.06)',textAlign:'center'}}>
      <div style={{fontSize:'3rem',marginBottom:16}}>🎉</div>
      <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'1.4rem',color:'var(--text)',marginBottom:10}}>Message Received!</h3>
      <p style={{color:'var(--warm-gray)',lineHeight:1.7,marginBottom:24}}>Thanks for reaching out. We'll be in touch within one business day to discuss how we can help your business grow.</p>
      <button className="btn btn-primary" onClick={reset}>Send Another Message</button>
    </div>
  );

  return (
    <div style={{background:'var(--white)',borderRadius:24,padding:'40px 36px',boxShadow:'0 8px 40px rgba(180,80,30,0.08)',border:'1px solid rgba(0,0,0,0.06)'}}>
      <div style={{marginBottom:28}}>
        <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'1.35rem',fontWeight:800,color:'var(--text)',marginBottom:6}}>Send Us a Message</h3>
        <p style={{fontSize:'0.9rem',color:'var(--warm-gray)'}}>Fill out the form and we'll be in touch within one business day.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:18}}>
        <div><label style={lbl}>First Name <span style={{color:'var(--coral)'}}>*</span></label><input style={{...inp,borderColor:errors.firstName?'#e53e3e':undefined}} value={fields.firstName} onChange={e=>set('firstName',e.target.value)} placeholder="Jane"/>{errors.firstName&&<span style={err}>{errors.firstName}</span>}</div>
        <div><label style={lbl}>Last Name <span style={{color:'var(--coral)'}}>*</span></label><input style={{...inp,borderColor:errors.lastName?'#e53e3e':undefined}} value={fields.lastName} onChange={e=>set('lastName',e.target.value)} placeholder="Smith"/>{errors.lastName&&<span style={err}>{errors.lastName}</span>}</div>
      </div>
      <div style={{marginBottom:18}}><label style={lbl}>Email Address <span style={{color:'var(--coral)'}}>*</span></label><input type="email" style={{...inp,borderColor:errors.email?'#e53e3e':undefined}} value={fields.email} onChange={e=>set('email',e.target.value)} placeholder="jane@yourcompany.com"/>{errors.email&&<span style={err}>{errors.email}</span>}</div>
      <div style={{marginBottom:18}}><label style={lbl}>Phone Number</label><input type="tel" style={inp} value={fields.phone} onChange={e=>set('phone',e.target.value)} placeholder="(617) 555-0100"/></div>
      <div style={{marginBottom:18}}><label style={lbl}>Company / Business Name</label><input style={inp} value={fields.company} onChange={e=>set('company',e.target.value)} placeholder="Acme Corp"/></div>
      <div style={{marginBottom:18}}>
        <label style={lbl}>Service Interest <span style={{color:'var(--coral)'}}>*</span></label>
        <div style={{position:'relative'}}>
          <select style={{...inp,appearance:'none',paddingRight:36,cursor:'pointer',borderColor:errors.service?'#e53e3e':undefined}} value={fields.service} onChange={e=>set('service',e.target.value)}>
            <option value="">— Select a service —</option>
            {['Marketing Automation','SMS Marketing','Social Media Campaigns','Ad Creative Design','Website Design & Build','Event Marketing','Multiple / Not Sure Yet'].map(o=><option key={o}>{o}</option>)}
          </select>
          <span style={{position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',fontSize:'0.75rem',color:'var(--warm-gray)',pointerEvents:'none'}}>▾</span>
        </div>
        {errors.service&&<span style={err}>{errors.service}</span>}
      </div>
      <div style={{marginBottom:18}}><label style={lbl}>Message <span style={{color:'var(--coral)'}}>*</span></label><textarea style={{...inp,resize:'vertical',minHeight:110,borderColor:errors.message?'#e53e3e':undefined}} value={fields.message} onChange={e=>set('message',e.target.value)} rows={4} placeholder="Tell us about your business and what you're looking to accomplish..."/>{errors.message&&<span style={err}>{errors.message}</span>}</div>
      <div style={{marginBottom:22}}>
        <label style={{display:'flex',alignItems:'flex-start',gap:10,cursor:'pointer',fontSize:'0.83rem',color:'var(--warm-gray)',lineHeight:1.5}}>
          <div style={{width:18,height:18,flexShrink:0,border:`2px solid ${errors.consent?'#e53e3e':'rgba(0,0,0,0.2)'}`,borderRadius:5,background:fields.consent?'var(--coral)':'var(--cream)',display:'flex',alignItems:'center',justifyContent:'center',marginTop:2,cursor:'pointer'}} onClick={()=>set('consent',!fields.consent)}>
            {fields.consent&&<span style={{fontSize:'0.7rem',color:'white',fontWeight:800}}>✓</span>}
          </div>
          <span onClick={()=>set('consent',!fields.consent)}>I agree to be contacted by SignalForge regarding my inquiry. View our <a href="#" style={{color:'var(--coral)'}}>Privacy Policy</a>.</span>
        </label>
        {errors.consent&&<span style={err}>{errors.consent}</span>}
      </div>
      <button className="btn btn-primary" style={{width:'100%',justifyContent:'center',padding:14,fontSize:'1rem',borderRadius:12,opacity:status==='sending'?0.7:1}} onClick={submit} disabled={status==='sending'}>
        {status==='sending' ? 'Sending…' : 'Send Message'}
      </button>
    </div>
  );
}
