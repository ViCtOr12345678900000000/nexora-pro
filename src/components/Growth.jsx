import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const growthData = [
  { name: 'Mon', users: 200, target: 300 }, { name: 'Tue', users: 350, target: 320 },
  { name: 'Wed', users: 580, target: 400 }, { name: 'Thu', users: 500, target: 450 },
  { name: 'Fri', users: 400, target: 500 }, { name: 'Sat', users: 650, target: 550 },
  { name: 'Sun', users: 720, target: 600 },
];

export default function Growth() {
  return (
    <div className="bg-white border border-[#efece6] rounded-2xl p-5 h-[360px] md:h-[540px] shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-[14px] text-[#1a1a1a]">User Growth</h3>
          <p className="text-black/40 text-[11px] mt-1">vs target • ComposedChart</p>
        </div>
        <div className="text-right"><p className="text-[20px] font-bold text-[#111]">+22,842</p><p className="text-[11px] text-emerald-600">+12% above target</p></div>
      </div>
      <div className="h-[260px] md:h-[380px]  w-full -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={growthData} barCategoryGap="40%">
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f0eb" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(0,0,0,0.3)', fontSize: 10 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(0,0,0,0.3)', fontSize: 10 }} width={30} />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #efece6', borderRadius: '12px', fontSize: '11px' }} />
            <Bar dataKey="users" fill="#111" radius={[8, 8, 0, 0]} barSize={20} />
            <Line type="monotone" dataKey="target" stroke="#00000020" strokeDasharray="4 4" dot={false} strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}