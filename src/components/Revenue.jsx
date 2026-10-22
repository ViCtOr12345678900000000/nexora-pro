import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Brush } from 'recharts';

const data = [
  { name: 'Jan', revenue: 30 }, { name: 'Feb', revenue: 45 }, { name: 'Mar', revenue: 35 },
  { name: 'Apr', revenue: 200 }, { name: 'May', revenue: 20 }, { name: 'Jun', revenue: 80 },
  { name: 'Jul', revenue: 60 }, { name: 'Aug', revenue: 50 }, { name: 'Sep', revenue: 99 },
  { name: 'Oct', revenue: 90 }, { name: 'Nov', revenue: 75 }, { name: 'Dec', revenue: 155 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active ||!payload?.length) return null;
  return (
    <div className="bg-white border border-[#efece6] text-black text-[11px] px-3 py-2 rounded-full shadow-xl">
      <span className="text-black/40">{label}</span> <span className="font-bold ml-2">${payload[0].value}k</span>
    </div>
  );
};

export default function Revenue() {
  return (
    <div className="bg-white border border-[#efece6] rounded-2xl p-5 h-[400px] shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-semibold text-[14px] text-[#1a1a1a]">Revenue Over Time</h3>
          <p className="text-black/40 text-[11px] mt-1">Drag below to zoom • Pro version</p>
        </div>
        <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">● Live</span>
      </div>
      <div className="h-[310px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="proRevWhite" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#111" stopOpacity={0.15}/>
                <stop offset="100%" stopColor="#111" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f0eb" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(0,0,0,0.3)', fontSize: 10 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(0,0,0,0.3)', fontSize: 10 }} width={30} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="revenue" stroke="#111" strokeWidth={2.5} fill="url(#proRevWhite)" dot={false} activeDot={{ r: 5, strokeWidth: 0 }} />
            <Brush dataKey="name" height={20} stroke="#111" fill="#f7f5f2" travellerWidth={0} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}