'use client';
import { useState } from 'react';

export default function ReferralForm() {
  const [fields, setFields] = useState({
    yourName:'', yourEmail:'', yourCompany:'',
    refName:'', refEmail:'', refPhone:'', refBusiness:'', refService:'', notes:''
  });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<'idle'|'sending'|'done'>('idle');

  function set(k: string, v: string) { setFields(f=>({...f,[k]:v})); }

  function validate() {
    const e: Record<string,string> = {};
    if (!fields.yourName.trim()) e.yourName = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.yourEmail)) e.yourEmail = 'Please enter a valid email.';
    if (!fields.refName.trim()) e.refName = 'Please enter the referral\'s name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.refEmail)) e.refEmail = 'Please enter the referral\'s email.';
    if (!fields.refBusiness.trim()) e.refBusiness = 'Please enter the business name.';
    return e;
  }

  function submit() {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus('sending');
    setTimeout(() => setStatus('done'), 1400);
  }

  function reset() {
    setFields({yourName:'',yourEmail:'',yourCompany:'',refName:'',refEmail:'',refPhone:'',refBusiness:'',refService:'',notes:''});
    setErrors({});
    setStatus('idle');
  }

  const inp: React.CSSProperties = {padding:'11px 14px',border:'1.5px solid rgba(0,0,0,0.12)',borderRadius:10,fontFamily:'DM Sans,sans-serif',fontSize:'0.92rem',color:'var(--text)',background:'var(--cream)',outline:'none',width:'100%'};
  const lbl: React.CSSProperties = {fontSize:'0.82rem',fontWeight:600,color:'var(--text-light)',fontFamily:'Syne,sans-serif',display:'block',marginBottom:6};
  const err: React.CSSProperties = {fontSize:'0.78rem',color:'#e53e3e',marginTop:4,display:'block'};
  const grp: React.CSSProperties = {marginBottom:18};

  if (status === 'done') return (
    <div style={{background:'var(--white)',borderRadius:24,padding:'40px 36px',boxShadow:'0 8px 40px rgba(180,80,30,0.08)',border:'1px solid rgba(0,0,0,0.06)',textAlign:'center'}}>
      <div style={{fontSize:'3rem',marginBottom:16}}>🎉</div>
      <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'1.4rem',color:'var(--text)',marginBottom:10}}>Referral Submitted!</h3>
      <p style={{color:'var(--warm-gray)',lineHeight:1.7,marginBottom:24}}>Thanks for the introduction. We'll reach out to your referral within one business day and keep you updated on progress.</p>
      <button className="btn btn-primary" onClick={reset}>Submit Another Referral</button>
    </div>
  );

  return (
    <div style={{background:'var(--white)',borderRadius:24,padding:'36px 32px',boxShadow:'0 8px 40px rgba(180,80,30,0.08)',border:'1px solid rgba(0,0,0,0.06)'}}>
      <div style={{marginBottom:28}}>
        <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'1.25rem',fontWeight:800,color:'var(--text)',marginBottom:6}}>Submit a Referral</h3>
        <p style={{fontSize:'0.88rem',color:'var(--warm-gray)'}}>Tell us about yourself and who you're referring.</p>
      </div>

      <div style={{background:'var(--sand)',borderRadius:12,padding:'16px 18px',marginBottom:24}}>
        <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.78rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--coral)',marginBottom:14}}>Your Information</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <div style={grp}>
            <label style={lbl}>Your Name <span style={{color:'var(--coral)'}}>*</span></label>
            <input style={{...inp,borderColor:errors.yourName?'#e53e3e':undefined}} value={fields.yourName} onChange={e=>set('yourName',e.target.value)} placeholder="Jane Smith"/>
            {errors.yourName&&<span style={err}>{errors.yourName}</span>}
          </div>
          <div style={grp}>
            <label style={lbl}>Your Email <span style={{color:'var(--coral)'}}>*</span></label>
            <input type="email" style={{...inp,borderColor:errors.yourEmail?'#e53e3e':undefined}} value={fields.yourEmail} onChange={e=>set('yourEmail',e.target.value)} placeholder="jane@agency.com"/>
            {errors.yourEmail&&<span style={err}>{errors.yourEmail}</span>}
          </div>
        </div>
        <div style={grp}>
          <label style={lbl}>Your Company / Agency</label>
          <input style={inp} value={fields.yourCompany} onChange={e=>set('yourCompany',e.target.value)} placeholder="Acme Marketing Agency"/>
        </div>
      </div>

      <div style={{background:'var(--sand)',borderRadius:12,padding:'16px 18px',marginBottom:24}}>
        <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.78rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--coral)',marginBottom:14}}>Referral Information</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <div style={grp}>
            <label style={lbl}>Their Name <span style={{color:'var(--coral)'}}>*</span></label>
            <input style={{...inp,borderColor:errors.refName?'#e53e3e':undefined}} value={fields.refName} onChange={e=>set('refName',e.target.value)} placeholder="John Doe"/>
            {errors.refName&&<span style={err}>{errors.refName}</span>}
          </div>
          <div style={grp}>
            <label style={lbl}>Their Email <span style={{color:'var(--coral)'}}>*</span></label>
            <input type="email" style={{...inp,borderColor:errors.refEmail?'#e53e3e':undefined}} value={fields.refEmail} onChange={e=>set('refEmail',e.target.value)} placeholder="john@business.com"/>
            {errors.refEmail&&<span style={err}>{errors.refEmail}</span>}
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <div style={grp}>
            <label style={lbl}>Their Phone</label>
            <input type="tel" style={inp} value={fields.refPhone} onChange={e=>set('refPhone',e.target.value)} placeholder="(617) 555-0100"/>
          </div>
          <div style={grp}>
            <label style={lbl}>Their Business Name <span style={{color:'var(--coral)'}}>*</span></label>
            <input style={{...inp,borderColor:errors.refBusiness?'#e53e3e':undefined}} value={fields.refBusiness} onChange={e=>set('refBusiness',e.target.value)} placeholder="Acme Corp"/>
            {errors.refBusiness&&<span style={err}>{errors.refBusiness}</span>}
          </div>
        </div>
        <div style={grp}>
          <label style={lbl}>Service They Need</label>
          <div style={{position:'relative'}}>
            <select style={{...inp,appearance:'none',paddingRight:36,cursor:'pointer'}} value={fields.refService} onChange={e=>set('refService',e.target.value)}>
              <option value="">— Select if known —</option>
              <option>Marketing Automation</option>
              <option>SMS Marketing</option>
              <option>Social Media Campaigns</option>
              <option>Ad Creative Design</option>
              <option>Website Design & Build</option>
              <option>Event Marketing</option>
              <option>Not Sure / Multiple</option>
            </select>
            <span style={{position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',fontSize:'0.75rem',color:'var(--warm-gray)',pointerEvents:'none'}}>▾</span>
          </div>
        </div>
        <div style={grp}>
          <label style={lbl}>Additional Notes</label>
          <textarea style={{...inp,resize:'vertical',minHeight:80}} value={fields.notes} onChange={e=>set('notes',e.target.value)} placeholder="Anything else we should know about this referral..."/>
        </div>
      </div>

      <button className="btn btn-primary" style={{width:'100%',justifyContent:'center',padding:14,fontSize:'1rem',borderRadius:12,opacity:status==='sending'?0.7:1}} onClick={submit} disabled={status==='sending'}>
        {status==='sending' ? 'Submitting…' : 'Submit Referral →'}
      </button>
    </div>
  );
}