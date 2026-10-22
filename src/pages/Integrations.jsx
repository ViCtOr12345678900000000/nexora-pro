import { useState } from 'react';
const apps = [
  {name:'Stripe', desc:'Payments', connected:true},
  {name:'Slack', desc:'Notifications', connected:false},
  {name:'Paystack', desc:'Payments NG', connected:true},
  {name:'Google Analytics', desc:'Analytics', connected:false}
];
export default function Integrations(){
  const [list,setList]=useState(apps);
  return(
    <div className="space-y-4">
      <h2 className="text-[28px] font-light">Integrations</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {list.map(a=>(
          <div key={a.name} className="bg-white border border-[#efece6] rounded-2xl p-4">
            <p className="font-medium text-[13px]">{a.name}</p>
            <p className="text-[11px] text-black/40">{a.desc}</p>
            <button onClick={()=>setList(list.map(x => x.name === a.name?{...x,connected:!x.connected}:x))} className={`mt-3 text-[11px] px-3 py-1.5 rounded-full border ${a.connected?'bg-[#111] text-white border-[#111]':'bg-white border-[#efece6]'}`}>{a.connected?'Connected':'Connect'}</button>
          </div>
        ))}
      </div>
    </div>
  )
}