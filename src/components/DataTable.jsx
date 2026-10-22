import { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'Olivia Chen', plan: 'Pro', status: 'Active', spend: '$2,400' },
  { id: 2, name: 'John Doe', plan: 'Enterprise', status: 'Active', spend: '$8,100' },
  { id: 3, name: 'Sarah Kim', plan: 'Basic', status: 'Paused', spend: '$400' },
  { id: 4, name: 'Mike Park', plan: 'Pro', status: 'Active', spend: '$1,200' },
];

export default function DataTable(){
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [newStatus, setNewStatus] = useState("Active");
  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));
  
  const removeUser = (id) =>{
   const confirmed = window.confirm("Are you sure you want to remove")
   if (confirmed) setUsers(users.filter(u => u.id !== id))
  }
  const [newName, setNewName] = useState("");
  const addUser = () => {
    if(!newName.trim()) return;
    setUsers([...users, { id: Date.now(), name: newName, plan: 'Pro', status: newStatus, spend: '$0' }]);
    setNewName("");
  }

  return(
    <div className="lg:col-span-2 bg-white border border-[#efece6] rounded-2xl p-5 flex flex-col h-full shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      <div className="flex justify-between items-center mb-4 gap-3">
        <h3 className="font-semibold text-[14px] text-[#1a1a1a]">Customers • {filtered.length}</h3>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search... try 'olivia'" className="h-8 px-3 bg-[#f7f5f2] border border-[#efece6] rounded-full text-[12px] focus:outline-none w-[160px] placeholder:text-[#b5b0a9]" />
      </div>

      <div className="space-y-1 flex-1">
        {filtered.map(user => (
          <div key={user.id} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f7f5f2] group">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-[#f3f0eb] border border-[#efece6] grid place-items-center text-[10px] text-[#1a1a1a]">{user.name.slice(0,2).toUpperCase()}</div>
              <div>
                <p className="text-[12px] text-[#1a1a1a]">{user.name}</p>
                <p className="text-[10px] text-black/40">{user.plan} • {user.spend}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] px-2 py-1 rounded-full border ${user.status==='Active'? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>{user.status}</span>
              <button onClick={() => removeUser(user.id)} className="opacity-0 group-hover:opacity-100 text-black/20 hover:text-red-500">✕</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-[#f3f0eb] flex gap-2">
        <input value={newName} onChange={(e) => setNewName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addUser()} placeholder="New customer name" className="flex-1 h-9 px-4 bg-[#f7f5f2] border border-[#efece6] rounded-full text-[12px] focus:outline-none placeholder:text-[#b5b0a9]" />
        <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} className="h-9 px-3 bg-[#f7f5f2] border border-[#efece6] rounded-full text-[12px] focus:outline-none text-[#1a1a1a]">
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
        </select>
        <button onClick={addUser} className="h-9 px-5 bg-[#111] text-white text-[12px] font-semibold rounded-full hover:bg-black">Add</button>
      </div>
    </div>
  )
}