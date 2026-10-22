import { useState } from 'react';
const initial = [
  {id:1,name:'Victor Chinedu', role:'Admin'}, 
  {id:2,name:'Olivia Chen', role:'Editor'}, 
  {id:3,name:'John Doe', role:'Viewer'}
];
export default function Team(){
  const [team,setTeam]=useState(initial);
  const [name,setName]=useState('');
  return(
    <div className="space-y-4">
      <h2 className="text-[28px] font-light">Team • {team.length}</h2>
      <div className="bg-white border border-[#efece6] rounded-2xl divide-y divide-[#f3f0eb]">
        {team.map(m=>(
          <div key={m.id} className="flex justify-between p-4"><div className="flex gap-3 items-center">
            <div className="w-8 h-8 rounded-full bg-[#f3f0eb] grid place-items-center text-[10px] font-bold">
              {m.name.slice(0,2)}
            </div>
            <div>
              <p className="text-[13px]">{m.name}</p>
              <p className="text-[11px] text-black/40">{m.role}</p>
            </div>
          </div>
          <button onClick={() => setTeam(team.filter(x => x.id !==m.id))} className="text-[11px] text-black/40 hover:text-red-500">
            Remove
          </button>
        </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input 
        value={name} 
        onChange={e=>setName(e.target.value)} 
        placeholder="Add teammate" 
        className="h-9 px-4 bg-white border border-[#efece6] rounded-full text-[12px] outline-none"/>
        <button 
        onClick={() => { 
          if(!name.trim())return; 
          setTeam([
          ...team,
          {id:Date.now(),
          name,role:'Editor'
          }
          ]); 
          setName('');}} 
          className="h-9 px-5 bg-[#111] text-white rounded-full text-[12px]">
          Invite
        </button>
      </div>
    </div>
  )
}