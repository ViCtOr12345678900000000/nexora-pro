import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const growthData = [
  { name: 'Mon', users: 200, target: 300 }, { name: 'Tue', users: 350, target: 320 },
  { name: 'Wed', users: 580, target: 400 }, { name: 'Thu', users: 500, target: 450 },
  { name: 'Fri', users: 400, target: 500 }, { name: 'Sat', users: 650, target: 550 },
  { name: 'Sun', users: 720, target: 600 },
];

export default function Growth() {
  return (
    <div className="bg-[#15151d] border border-white/[0.06] rounded-2xl p-5 h-[360px]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-[14px]">User Growth</h3>
          <p className="text-white/40 text-[11px] mt-1">vs target • ComposedChart</p>
        </div>
        <div className="text-right"><p className="text-[20px] font-bold">+842</p><p className="text-[11px] text-emerald-400">+12% above target</p></div>
      </div>
      <div className="h-[260px] w-full -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={growthData} barCategoryGap="40%">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} width={30} />
            <Tooltip contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '11px' }} />
            <Bar dataKey="users" fill="#2dd4bf" radius={[8, 8, 0, 0]} barSize={20} />
            <Line type="monotone" dataKey="target" stroke="#ffffff30" strokeDasharray="4 4" dot={false} strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}