import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initialUsers = [
  { id: 1, name: 'Olivia Chen', plan: 'Pro', status: 'Active', spend: '$2,400' },
  { id: 2, name: 'John Doe', plan: 'Enterprise', status: 'Active', spend: '$8,100' },
  { id: 3, name: 'Sarah Kim', plan: 'Basic', status: 'Paused', spend: '$1,400' },
  { id: 4, name: 'Mike Park', plan: 'Pro', status: 'Active', spend: '$1,200' },
];

export default function DataTable({ isDark }){
  const [users, setUsers] = useLocalStorage('customers', initialUsers);
  const [search, setSearch] = useState("");
  const [newStatus, setNewStatus] = useState("Active");
  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));
  
  const removeUser = (id) =>{
   const confirmed = window.confirm("Are you sure you want to remove?")
   if (confirmed) setUsers(users.filter(u => u.id !== id))
  }
  const handleStatus = (id) => {
    setUsers(users.map(u => {
      if (u.id !== id) return u;
      const next = u.status === "Active" ? "Paused" : "Active";
      return { ...u, status: next };
    }));
  }
  const [newName, setNewName] = useState("");
  const [newPlan, setNewPlan] = useState("Pro");
  const [newSpend, setNewSpend] = useState("");
  const [error, setError] = useState('');
  
  const addUser = () => {
    if(!newName.trim()) return;
    const amount = Number(newSpend)
    if (!amount || amount < 1200){ setError('Amount must be greater than $1,200'); return }
    setUsers([...users, { id: Date.now(), name: newName, plan: newPlan, status: newStatus, spend: `$${amount.toLocaleString()}` }]);
    setNewName(""); setNewSpend(""); setError('');
  }

  const inputCls = `h-9 px-4 border rounded-full text-[12px] focus:outline-none ${isDark ? 'bg-[#3d3d3d] border-white/10 text-white placeholder:text-white/40' : 'bg-[#f7f5f2] border-[#efece6]'}`;
  const selectCls = `h-9 px-3 border rounded-full text-[12px] ${isDark ? 'bg-[#3d3d3d] border-white/10 text-white' : 'bg-[#f7f5f2] border-[#efece6]'}`;

  return(
    <div className={`lg:col-span-2 border rounded-2xl p-5 flex flex-col h-[520px] max-h-[520px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] ${isDark ? 'bg-[#171717] border-white/10' : 'bg-white border-[#efece6]'}`}>
      <div className="flex justify-between items-center mb-4 gap-3">
        <h3 className={`font-semibold text-[14px] ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>Customers • {filtered.length}</h3>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search... try 'olivia'" className={`h-8 px-3 border rounded-full text-[12px] focus:outline-none w-[160px] ${isDark ? 'bg-[#3d3d3d] border-white/10 text-white placeholder:text-white/40' : 'bg-[#f7f5f2] border-[#efece6] placeholder:text-[#b5b0a9]'}`} />
      </div>
      <div className="space-y-1 flex-1 min-h-0 overflow-y-auto pr-1">
        {filtered.map(user => (
          <div key={user.id} className={`flex items-center justify-between p-2.5 rounded-xl group ${isDark ? 'hover:bg-[#3d3d3d]' : 'hover:bg-[#f3e1bf]'}`}>
            <div className="flex gap-3 items-center">
              <div className={`w-8 h-8 rounded-full border grid place-items-center text-[10px] ${isDark ? 'bg-[#3d3d3d] border-white/10 text-white' : 'bg-[#f3f0eb] border-[#efece6] text-[#1a1a1a]'}`}>{user.name.slice(0,2).toUpperCase()}</div>
              <div>
                <p className={`text-[12px] ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>{user.name}</p>
                <p className={`text-[10px] ${isDark ? 'text-white/50' : 'text-black/40'}`}>{user.plan} • {user.spend}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => handleStatus(user.id)} className={`text-[10px] px-2 py-1 rounded-full border cursor-pointer ${user.status==='Active'? isDark ? 'bg-emerald-900/40 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-700 border-emerald-200' : isDark ? 'bg-amber-900/40 text-amber-300 border-amber-800' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>{user.status}</button>
              <button onClick={() => removeUser(user.id)} className={`opacity-50 group-hover:opacity-100 hover:text-red-500 ${isDark ? 'text-white/60' : 'text-black/50'}`}>✕</button>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p className={`text-[11px] text-center py-8 ${isDark ? 'text-white/40' : 'text-black/30'}`}>No results found</p>}
      <div className={`mt-4 pt-4 border-t flex flex-col gap-2 ${isDark ? 'border-white/10' : 'border-[#f3f0eb]'}`}>
        <div className="flex gap-2">
          <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="New customer name" className={`flex-1 ${inputCls}`} />
          <select value={newPlan} onChange={(e) => setNewPlan(e.target.value)} className={selectCls}><option value="Basic">Basic</option><option value="Pro">Pro</option><option value="Enterprise">Enterprise</option></select>
        </div>
        <div className="flex gap-2">
          <input type="number" value={newSpend} onChange={(e) => setNewSpend(e.target.value)} placeholder="Amount - min $1,200" min={1200} className={`flex-1 ${inputCls}`} />
          <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} className={selectCls}><option value="Active">Active</option><option value="Paused">Paused</option></select>
          <button onClick={addUser} className="h-9 px-5 bg-[#111] text-white text-[12px] font-semibold rounded-full">Add</button>
        </div>
        {error && <p className="text-[11px] text-red-500">{error}</p>}
      </div>
    </div>
  )
}