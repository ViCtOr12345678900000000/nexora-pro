import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initialData = [
    { id: 1, photo: 'OC', heading: 'New customer signup', client: 'Olivia Chen', info: 'olivia@example.com', detail: 'Pro-plan', timestamp: '2min ago', state: 'Completed'},
    { id: 2, photo: 'JD', heading: 'Payment received', client: 'John Doe', info: 'john@example.com', detail: 'Enterprise', timestamp: '15min ago', state: 'Paid'},
    { id: 3, photo: 'SK', heading: 'Subscription renewed', client: 'Sarah Kim', info: 'sarah@example.com', detail: 'Basic', timestamp: '1h ago', state: 'Renewed'},
    { id: 4, photo: 'MP', heading: 'New customer signup', client: 'Mike Park', info: 'mike@example.com', detail: 'Pro-plan', timestamp: '2h ago', state: 'Completed'},
    { id: 5, photo: 'AL', heading: 'Support ticket resolved', client: 'Alex Lee', info: 'Login issue', detail: 'Priority', timestamp: '3h ago', state: 'Resolved'},
    { id: 6, photo: 'VC', heading: 'Subscription renewed', client: 'Victor Chinedu', info: 'victor@gmail.com', detail: 'Pro-plan', timestamp: '2min ago', state: 'Renewed'},
];

function getStateColor(state, isDark) {
  if (state === 'Completed') return isDark ? 'bg-emerald-900/40 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-700 border-emerald-200';
  if (state === 'Paid') return isDark ? 'bg-blue-900/40 text-blue-300 border-blue-800' : 'bg-blue-50 text-blue-700 border-blue-200';
  if (state === 'Resolved') return isDark ? 'bg-violet-900/40 text-violet-300 border-violet-800' : 'bg-violet-50 text-violet-700 border-violet-200';
  return isDark ? 'bg-amber-900/40 text-amber-300 border-amber-800' : 'bg-amber-50 text-amber-700 border-amber-200';
}

export default function Activity({ isDark }){
    const [activities, setActivities] = useLocalStorage('Activity', initialData);
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');

    const handleState = (id) => {
      setActivities(activities.map(a => {
        if (a.id !== id) return a;
        const next = a.state === "Completed" ? "Paid" : a.state === "Paid" ? "Renewed" : a.state === "Renewed" ? "Resolved" : "Completed";
        return { ...a, state: next };
      }));
    };

    const filtered = activities.filter(a => {
      const matchFilter = filter === 'All' || a.state === filter;
      const matchSearch = a.client.toLowerCase().includes(search.toLowerCase()) || a.heading.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });

    return(
        <div className={`border rounded-2xl p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] ${isDark ? 'bg-[#171717] border-white/10' : 'bg-white border-[#efece6]'}`}>
            <header className="flex flex-col gap-3 mb-5">
              <div className="flex justify-between items-center">
                <h3 className={`font-semibold text-[14px] ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>Recent Activity • {filtered.length}</h3>
                <span className={`text-[11px] rounded-full border p-1.5 ${isDark ? 'bg-emerald-900/40 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-700'}`}>Live updates •</span>
              </div>
              <div className="flex items-center gap-2">
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className={`h-8 border rounded-full px-3 text-[11px] focus:outline-none focus:border-black/20 w-[80px] md:w-[180px] lg:w-[250px] ${isDark ? 'bg-[#3d3d3d] border-white/10 text-white placeholder:text-white/40' : 'bg-[#f7f5f2] border-[#efece6] placeholder:text-[#b5b0a9]'}`} />
                <div className="flex gap-1.5">
                  {['All', 'Completed', 'Paid', 'Renewed'].map(f => (
                    <button key={f} onClick={() => setFilter(f)} className={`text-[10px] px-3 py-1.5 rounded-full border transition-all ${filter === f? 'bg-[#111] text-white border-[#111]' : isDark ? 'bg-[#3d3d3d] text-white/60 border-white/10 hover:text-white' : 'bg-[#f7f5f2] text-black/40 border-[#efece6] hover:text-black'}`}>{f}</button>
                  ))}
                </div>
              </div>
            </header>
            <div className="space-y-2">
              {filtered.map((a) => (
                <div key={a.id} className={`group flex items-center justify-between gap-3 p-2.5 -mx-2 rounded-xl transition-colors cursor-pointer ${isDark ? 'hover:bg-[#3d3d3d]' : 'hover:bg-[#f3e1bf]'}`}>
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-full border flex items-center justify-center text-[11px] font-medium flex-shrink-0 group-hover:scale-105 transition-transform ${isDark ? 'bg-[#3d3d3d] border-white/10 text-white' : 'bg-[#f3f0eb] border-[#efece6] text-[#1a1a1a]'}`}>{a.photo}</div>
                    <div className="min-w-0">
                      <p className={`text-[12px] font-medium truncate ${isDark ? 'text-white' : 'text-[#1a1a1a] group-hover:text-black'}`}>{a.heading}</p>
                      <p className={`text-[11px] truncate ${isDark ? 'text-white/50' : 'text-black/40'}`}>{a.client} • {a.detail}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <button onClick={() => handleState(a.id)} className={`text-[10px] px-2.5 py-1 rounded-full border cursor-pointer ${getStateColor(a.state, isDark)}`}>{a.state}</button>
                    <span className={`text-[10px] ${isDark ? 'text-white/40' : 'text-black/30'}`}>{a.timestamp}</span>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && <p className={`text-[11px] text-center py-8 ${isDark ? 'text-white/40' : 'text-black/30'}`}>No results found</p>}
            </div>
        </div>
    )
}