import { useState } from 'react';
const camps = [
  {id:1,name:'Summer Sale', budget:'$5,000', clicks:'12.4k', state:'Active'}, 
  {id:2,name:'Black Friday', budget:'$12,000', clicks:'45k', state:'Paused'}, 
  {id:3,name:'Retargeting', budget:'$2,000', clicks:'8.1k', state:'Active'}
];
export default function Campaigns(){
  const [list,setList]=useState(camps);
  return(
    <div className="space-y-4">
      <h2 className="text-[28px] font-light">Campaigns • {list.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {list.map(c=>(
          <div key={c.id} className="bg-white border border-[#efece6] rounded-2xl p-5">
            <div className="flex justify-between">
              <p className="font-medium">{c.name}</p>
              <span className={`text-[10px] px-2 py-1 rounded-full border ${c.state==='Active'?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-amber-50 text-amber-700 border-amber-200'}`}>{c.state}</span>
            </div>
            <p className="text-[11px] text-black/40 mt-2">{c.budget} • {c.clicks} clicks</p>
            <button onClick={() => setList(list.map(x=> x.id === c.id ? {...x, state:x.state==='Active' ? 'Paused':'Active'}:x))} className="mt-3 text-[11px] px-3 py-1.5 rounded-full bg-[#111] text-white">Toggle</button>
          </div>
        ))}
      </div>
    </div>
  )
}