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
  const [newName, setNewName] = useState("");
  const [newStatus, setNewStatus] = useState("Active");

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const removeUser = (id) => setUsers(users.filter(u => u.id!== id));

  const addUser = () => {
    if(!newName.trim()) return;
    const newUser = {
      id: Date.now(),
      name: newName,
      plan: 'Pro',
      status: newStatus, // NOW USES SELECTED STATUS
      spend: '$0'
    };
    setUsers([...users, newUser]);
    setNewName("");
  }

  return(
    <div className="lg:col-span-2 bg-[#15151d] border border-white/[0.06] rounded-2xl p-5 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 gap-3">
        <h3 className="font-semibold text-[14px]">Customers • {filtered.length}</h3>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search... try 'olivia'"
          className="h-8 px-3 bg-[#1e1e28] border border-white/10 rounded-full text-[12px] focus:outline-none w-[160px]"
        />
      </div>

      <div className="space-y-1 flex-1">
        {filtered.map(user => (
          <div key={user.id} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] group">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-white/10 grid place-items-center text-[10px]">{user.name.slice(0,2).toUpperCase()}</div>
              <div>
                <p className="text-[12px]">{user.name}</p>
                <p className="text-[10px] text-white/40">{user.plan} • {user.spend}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] px-2 py-1 rounded-full ${user.status==='Active'? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>{user.status}</span>
              <button onClick={() => removeUser(user.id)} className="opacity-0 group-hover:opacity-100 text-white/20 hover:text-red-400">✕</button>
            </div>
          </div>
        ))}
      </div>

      {/* NEW BLOCK - ADD WITH STATUS */}
      <div className="mt-4 pt-4 border-t border-white/[0.06] flex gap-2">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addUser()}
          placeholder="New customer name"
          className="flex-1 h-9 px-4 bg-[#1e1e28] border border-white/10 rounded-full text-[12px] focus:outline-none"
        />
        <select
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          className="h-9 px-3 bg-[#1e1e28] border border-white/10 rounded-full text-[12px] focus:outline-none"
        >
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
        </select>
        <button onClick={addUser} className="h-9 px-5 bg-[#2dd4bf] text-black text-[12px] font-semibold rounded-full hover:bg-[#22c0ad]">Add</button>
      </div>
    </div>
  )
}