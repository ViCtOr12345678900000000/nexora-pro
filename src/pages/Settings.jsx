import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Settings(){
  const [name,setName]=useLocalStorage('settings-name', 'Victor Chinedu');
  const [email,setEmail]=useLocalStorage('settings-email', 'victor@nexora.io');
  const [saved,setSaved]=useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return(
    <div className="space-y-4 max-w-[600px]">
      <h2 className="text-[28px] font-light">Settings</h2>
      <div className="bg-white border border-[#efece6] rounded-2xl p-5 space-y-4">
        <div>
          <label className="text-[11px] text-black/40">Full Name</label>
          <input value={name} 
          onChange={e => setName(e.target.value)} 
          className="mt-1 w-full h-9 px-4 bg-[#f7f5f2] border border-[#efece6] rounded-full text-[13px] outline-none" />
        </div>
        <div>
          <label className="text-[11px] text-black/40">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full h-9 px-4 bg-[#f7f5f2] border border-[#efece6] rounded-full text-[13px] outline-none" />
        </div>
        <div className="flex gap-2 pt-2 items-center">
          <button onClick={handleSave} className="h-9 px-6 bg-[#111] text-white rounded-full text-[12px]">Save Changes</button>
          <button onClick={() => { setName('Victor Chinedu'); setEmail('victor@nexora.io'); }} className="h-9 px-6 bg-white border border-[#efece6] rounded-full text-[12px]">Cancel</button>
          {saved && <p className="text-[11px] text-emerald-600">Saved ✓</p>}
        </div>
      </div>
    </div>
  )
}