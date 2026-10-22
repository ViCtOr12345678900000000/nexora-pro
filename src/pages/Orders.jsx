import { useState } from 'react';
const orders = [
  {id:'#1023', customer:'Olivia Chen', amount:'$240', state:'Paid', date:'2min ago'},
  {id:'#1022', customer:'John Doe', amount:'$890', state:'Pending', date:'15min ago'},
  {id:'#1021', customer:'Sarah Kim', amount:'$120', state:'Completed', date:'1h ago'},
  {id:'#1020', customer:'Mike Park', amount:'$450', state:'Shipped', date:'3h ago'},
  {id:'#1019', customer:'Alex Lee', amount:'$60', state:'Failed', date:'5h ago'},
];
function getStateColor(s){
  if(s==='Paid') return 'bg-blue-50 text-blue-700 border-blue-200';
  if(s==='Completed') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  if(s==='Shipped') return 'bg-violet-50 text-violet-700 border-violet-200';
  if(s==='Failed') return 'bg-red-50 text-red-700 border-red-200';
  return 'bg-amber-50 text-amber-700 border-amber-200';
}
export default function Orders(){
  const [search,setSearch]=useState('');
  const [filter,setFilter]=useState('All');
  const filtered = orders.filter(o=>{
    const mFilter = filter==='All'||o.state===filter;
    const mSearch = o.customer.toLowerCase().includes(search.toLowerCase())||o.id.toLowerCase().includes(search.toLowerCase());
    return mFilter && mSearch;
  });
  return(
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-[28px] font-light">Orders • {filtered.length}</h2>
        <input 
        value={search} 
        onChange={e=>setSearch(e.target.value)} 
        placeholder="Search order, customer" 
        className="h-9 px-4 bg-white border border-[#efece6] rounded-full text-[12px] w-[220px] outline-none"/>
      </div>
      <div className="flex gap-1">
        {['All','Paid','Pending','Completed','Shipped','Failed'].map(f=>
        <button key={f} 
        onClick={()=>setFilter(f)} 
        className={`px-3 py-1.5 rounded-full text-[11px] border ${filter===f?'bg-[#111] text-white border-[#111]':'bg-white border-[#efece6] text-black/50'}`}>
          {f}
        </button>)}
      </div>
      <div className="bg-white border border-[#efece6] rounded-2xl overflow-hidden">
        {filtered.map(o=>(
          <div key={o.id} className="flex justify-between items-center p-4 border-b border-[#f3f0eb] last:border-0 hover:bg-[#fbfaf8]">
            <div>
              <p className="text-[13px] font-medium">{o.id} • {o.customer}</p>
              <p className="text-[11px] text-black/40">{o.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[13px] font-bold">{o.amount}</p>
              <span className={`text-[10px] px-2.5 py-1 rounded-full border ${getStateColor(o.state)}`}>
                {o.state}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}