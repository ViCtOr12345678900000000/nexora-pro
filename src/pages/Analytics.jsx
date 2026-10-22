import { useState } from 'react';
import Revenue from '../components/Revenue';
import Growth from '../components/Growth';
import Performance from '../components/Performance';

const filters = ['7 Days','30 Days','90 Days','Year'];
export default function Analytics(){
  const [range,setRange]=useState('30 Days');
  return(
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-[28px] font-light">Analytics</h2>
        <div className="flex gap-1 bg-[#f3f0eb] rounded-full p-1">
          {filters.map(f=><button key={f} onClick={()=>setRange(f)} className={`px-4 py-1.5 rounded-full text-[12px] ${range===f?'bg-white shadow-sm border border-[#e8e5e0]':'text-black/50'}`}>{f}</button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2"><Revenue/></div>
        <div className="lg:col-span-1"><Performance/></div>
      </div>
      <Growth/>
    </div>
  )
}