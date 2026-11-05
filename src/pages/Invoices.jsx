import { useState } from 'react';

const initialData = [
  {id:'INV-001', client:'Olivia Chen', total:'$2,400', state:'Paid'},
  {id:'INV-002', client:'John Doe', total:'$8,100', state:'Pending'},
  {id:'INV-003', client:'Sarah Kim', total:'$400', state:'Overdue'},
];

function getStateColor(s){ 
  return s==='Paid' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : s === 'Overdue' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-amber-50 text-amber-700 border-amber-200'; 
}

export default function Invoices(){
  const [invoices, setInvoices] = useState(initialData);
  const [search, setSearch] = useState('');

  // NEW: click state to cycle it
  const handleState = (id) => {
    setInvoices(invoices.map(i => {
      if (i.id !== id) return i;
      const next =
        i.state === "Paid" ? "Pending"
        : i.state === "Pending" ? "Overdue"
        : "Paid";
      return { ...i, state: next };
    }));
  };

  const filtered = invoices.filter(i => i.client.toLowerCase().includes(search.toLowerCase()));

  return(
    <div className="space-y-4">
      <div className="flex justify-between"><h2 className="text-[28px] font-light">Invoices • {filtered.length}</h2>
      <input 
      value={search} 
      onChange={e => setSearch(e.target.value)} 
      placeholder="Search" className="h-9 px-4 bg-white border border-[#efece6] rounded-full text-[12px] outline-none"/>
      </div>
      <div className="bg-white border border-[#efece6] rounded-2xl divide-y divide-[#f3f0eb]">
        {filtered.map(i=>(
          <div key={i.id} className="flex justify-between p-4">
            <p className="text-[13px]">{i.id} • {i.client}</p>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-[13px]">{i.total}</p>
              <button onClick={() => handleState(i.id)} className={`text-[10px] px-2.5 py-1 rounded-full border cursor-pointer ${getStateColor(i.state)}`}>{i.state}</button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-[11px] text-black/30 text-center py-8">No results found</p>
        )}
      </div>
    </div>
  )
}