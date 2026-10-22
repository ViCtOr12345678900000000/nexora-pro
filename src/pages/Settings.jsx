import { useState } from 'react';
export default function Settings(){
  const [name,setName]=useState('Victor Chinedu');
  const [email,setEmail]=useState('victor@nexora.io');
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
        <div className="flex gap-2 pt-2">
          <button onClick={() => alert('Saved ' + name)} className="h-9 px-6 bg-[#111] text-white rounded-full text-[12px]">Save Changes</button>
          <button className="h-9 px-6 bg-white border border-[#efece6] rounded-full text-[12px]">Cancel</button>
        </div>
      </div>
    </div>
  )
}