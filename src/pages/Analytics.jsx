import { useState } from 'react';
import Revenue from '../components/Revenue';
import Growth from '../components/Growth';
import Performance from '../components/Performance';

const filters = ['7 Days','30 Days','90 Days','Year'];
export default function Analytics({ isDark }){
  const [range,setRange]=useState('30 Days');
  return(
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className={`text-[28px] font-light ${isDark ? 'text-white' : ''}`}>Analytics</h2>
        <div className={`flex  rounded-full  ${isDark ? 'bg-[#3d3d3d]' : 'bg-[#f3f0eb]'}`}>
          {filters.map(f=><button key={f} onClick={()=>setRange(f)} className={`px-4 py-1.5 rounded-full text-[12px] ${range===f ? isDark ? 'bg-[#333333] shadow-sm border border-white/10 text-white' : 'bg-white shadow-sm border border-[#e8e5e0]' : isDark ? 'text-white/60' : 'text-black/50'}`}>{f}</button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2"><Revenue isDark={isDark}/></div>
        <div className="lg:col-span-1"><Performance isDark={isDark}/></div>
      </div>
      <Growth isDark={isDark}/>
    </div>
  )
}