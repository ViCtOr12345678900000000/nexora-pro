import { useState } from 'react';

const data = [
    { id: 1, photo: 'OC', heading: 'New customer signup', client: 'Olivia Chen', info: 'olivia@example.com', detail: 'Pro-plan', timestamp: '2min ago', state: 'Completed'},
    { id: 2, photo: 'JD', heading: 'Payment received', client: 'John Doe', info: 'john@example.com', detail: 'Enterprise', timestamp: '15min ago', state: 'Paid'},
    { id: 3, photo: 'SK', heading: 'Subscription renewed', client: 'Sarah Kim', info: 'sarah@example.com', detail: 'Basic', timestamp: '1h ago', state: 'Renewed'},
    { id: 4, photo: 'MP', heading: 'New customer signup', client: 'Mike Park', info: 'mike@example.com', detail: 'Pro-plan', timestamp: '2h ago', state: 'Completed'},
    { id: 5, photo: 'AL', heading: 'Support ticket resolved', client: 'Alex Lee', info: 'Login issue', detail: 'Priority', timestamp: '3h ago', state: 'Resolved'},
];

function getStateColor(state) {
  if (state === 'Completed') return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
  if (state === 'Paid') return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
  if (state === 'Resolved') return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
  return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
}

export default function Activity(){
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');

    const filtered = data.filter(a => {
      const matchFilter = filter === 'All' || a.state === filter;
      const matchSearch = a.client.toLowerCase().includes(search.toLowerCase()) || a.heading.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });

    return(
        <div className="bg-[#15151d] border border-white/[0.06] rounded-2xl p-5">
            <header className="flex flex-col gap-3 mb-5">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[14px]">Recent Activity • {filtered.length}</h3>
                <span className="text-[11px] text-white/40">Live updates</span>
              </div>

              {/* PRO Filters */}
              <div className="flex items-center gap-2">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search activity..."
                  className="h-8 bg-white/[0.04] border border-white/10 rounded-full px-3 text-[11px] placeholder:text-white/20 focus:outline-none focus:border-teal-400/30 w-[80px]  md:w-[180px] lg:w-[250px]"
                />
                <div className="flex gap-1.5">
                  {['All', 'Completed', 'Paid', 'Renewed'].map(f => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`text-[10px] px-3 py-1.5 rounded-full border transition-all ${filter === f? 'bg-white text-black border-white' : 'bg-white/[0.04] text-white/40 border-white/10 hover:text-white'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </header>

            <div className="space-y-2">
              {filtered.map((a) => (
                <div key={a.id} className="group flex items-center justify-between gap-3 p-2.5 -mx-2 rounded-xl hover:bg-white/[0.04] transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-[11px] font-medium flex-shrink-0 group-hover:scale-105 transition-transform">
                      {a.photo}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium truncate group-hover:text-white transition-colors">{a.heading}</p>
                      <p className="text-[11px] text-white/40 truncate">{a.client} • {a.detail}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className={`text-[10px] px-2.5 py-1 rounded-full border ${getStateColor(a.state)}`}>
                      {a.state}
                    </span>
                    <span className="text-[10px] text-white/30">{a.timestamp}</span>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="text-[11px] text-white/30 text-center py-8">No results found</p>
              )}
            </div>
        </div>
    )
}