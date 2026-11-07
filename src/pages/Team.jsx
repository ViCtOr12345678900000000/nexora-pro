import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initial = [
  {id:1,name:'Victor Chinedu', role:'Admin'}, 
  {id:2,name:'Olivia Chen', role:'Editor'}, 
  {id:3,name:'John Doe', role:'Viewer'}
];

export default function Team({ isDark }){
  const [team,setTeam]=useLocalStorage('team', initial);  const [pendingRemove, setPendingRemove] = useState(null);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('Admin');
  const addUser = () =>{
    if(!newName.trim()) return; 
    setTeam([...team, { id: Date.now(), name: newName, role: newRole }]);
    setNewName(''); setNewRole('Admin');
  }
  const confirmRemove = (id) => { setTeam(team.filter(x => x.id !== id)); setPendingRemove(null); };

  return(
    <div className="space-y-4">
      <h2 className={`text-[28px] font-light ${isDark ? 'text-white' : ''}`}>Team • {team.length}</h2>
      <div className={`border rounded-2xl divide-y overflow-hidden ${isDark ? 'bg-[#333333] border-white/10 divide-white/10' : 'bg-white border-[#efece6] divide-[#f3f0eb]'}`}>
        {team.map(m=>(
          <div key={m.id} className="relative overflow-hidden">
            <div className="flex justify-between p-4 items-center">
              <div className="flex gap-3 items-center">
                <div className={`w-8 h-8 rounded-full grid place-items-center text-[10px] font-bold ${isDark ? 'bg-[#3d3d3d] text-white' : 'bg-[#f3f0eb]'}`}>{m.name.slice(0,2)}</div>
                <div>
                  <p className={`text-[13px] ${isDark ? 'text-white' : ''}`}>{m.name}</p>
                  <p className={`text-[11px] ${isDark ? 'text-white/50' : 'text-black/40'}`}>{m.role}</p>
                </div>
              </div>
              <button onClick={() => setPendingRemove(m.id)} className={`text-[11px] hover:text-red-500 ${isDark ? 'text-white/50' : 'text-black/40'}`}>Remove</button>
            </div>
            <div className={`absolute inset-0 flex items-center justify-between px-4 transition-transform duration-300 ease-out ${isDark ? 'bg-red-950/90' : 'bg-red-50'} ${pendingRemove === m.id ? 'translate-x-0' : 'translate-x-full'}`}>
              <p className={`text-[12px] ${isDark ? 'text-red-300' : 'text-red-700'}`}>Remove {m.name}?</p>
              <div className="flex gap-2">
                <button onClick={() => setPendingRemove(null)} className={`text-[11px] px-3 py-1.5 rounded-full border ${isDark ? 'bg-[#3d3d3d] border-white/10 text-white/70' : 'bg-white border-[#efece6] text-black/60'}`}>Cancel</button>
                <button onClick={() => confirmRemove(m.id)} className="text-[11px] px-3 py-1.5 rounded-full bg-red-500 text-white font-medium">Confirm Remove</button>
              </div>
            </div>
          </div>
        ))}
        {team.length === 0 && <p className={`text-[11px] text-center py-8 ${isDark ? 'text-white/40' : 'text-black/30'}`}>No team members yet</p>}
      </div>
      <div className="flex gap-2">
        <input value={newName} onChange={e=>setNewName(e.target.value)} placeholder="Add teammate" className={`h-9 px-4 border rounded-full text-[12px] outline-none ${isDark ? 'bg-[#333333] border-white/10 text-white placeholder:text-white/40' : 'bg-white border-[#efece6]'}`}/>
        <select value={newRole} onChange={e => setNewRole(e.target.value)} className={`h-9 px-3 border rounded-full text-[12px] ${isDark ? 'bg-[#333333] border-white/10 text-white' : 'bg-white border-[#efece6]'}`}><option value="Admin">Admin</option><option value="Editor">Editor</option><option value="Viewer">Viewer</option></select>
        <button onClick={addUser} className="h-9 px-5 bg-[#111] text-white rounded-full text-[12px]">Add</button>
      </div>
    </div>
  )
}