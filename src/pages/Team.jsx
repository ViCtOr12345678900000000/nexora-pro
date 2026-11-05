import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initial = [
  {id:1,name:'Victor Chinedu', role:'Admin'}, 
  {id:2,name:'Olivia Chen', role:'Editor'}, 
  {id:3,name:'John Doe', role:'Viewer'}
];

export default function Team(){
  const [team,setTeam]=useLocalStorage('team', initial);  const [pendingRemove, setPendingRemove] = useState(null);

  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('Admin');

  const addUser = () =>{
    if(!newName.trim()) return; 

    setTeam([...team, {
      id: Date.now(),
      name: newName,
      role: newRole
    }]);

    setNewName('');
    setNewRole('Admin');
  }

  const confirmRemove = (id) => {
    setTeam(team.filter(x => x.id !== id));
    setPendingRemove(null);
  };

  return(
    <div className="space-y-4">
      <h2 className="text-[28px] font-light">Team • {team.length}</h2>
      <div className="bg-white border border-[#efece6] rounded-2xl divide-y divide-[#f3f0eb] overflow-hidden">
        {team.map(m=>(
          <div key={m.id} className="relative overflow-hidden">
            <div className="flex justify-between p-4 items-center">
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-[#f3f0eb] grid place-items-center text-[10px] font-bold">
                  {m.name.slice(0,2)}
                </div>
                <div>
                  <p className="text-[13px]">{m.name}</p>
                  <p className="text-[11px] text-black/40">{m.role}</p>
                </div>
              </div>
              <button onClick={() => setPendingRemove(m.id)} className="text-[11px] text-black/40 hover:text-red-500">
                Remove
              </button>
            </div>

            <div className={`absolute inset-0 bg-red-50 flex items-center justify-between px-4 transition-transform duration-300 ease-out ${pendingRemove === m.id ? 'translate-x-0' : 'translate-x-full'}`}>
              <p className="text-[12px] text-red-700">Remove {m.name}?</p>
              <div className="flex gap-2">
                <button onClick={() => setPendingRemove(null)} className="text-[11px] px-3 py-1.5 rounded-full bg-white border border-[#efece6] text-black/60">
                  Cancel
                </button>
                <button onClick={() => confirmRemove(m.id)} className="text-[11px] px-3 py-1.5 rounded-full bg-red-500 text-white font-medium">
                  Confirm Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {team.length === 0 && (
          <p className="text-[11px] text-black/30 text-center py-8">No team members yet</p>
        )}
      </div>

      <div className="flex gap-2">
        <input 
        value={newName} 
        onChange={e=>setNewName(e.target.value)} 
        placeholder="Add teammate" 
        className="h-9 px-4 bg-white border border-[#efece6] rounded-full text-[12px] outline-none"/>
        <select value={newRole} onChange={e => setNewRole(e.target.value)} className="h-9 px-3 bg-white border border-[#efece6] rounded-full text-[12px]">
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
        <button 
         onClick={addUser} 
          className="h-9 px-5 bg-[#111] text-white rounded-full text-[12px]">
          Add
        </button>
      </div>
    </div>
  )
}