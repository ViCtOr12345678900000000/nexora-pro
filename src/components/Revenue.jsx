import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Brush } from 'recharts';

const data = [
  { name: 'Jan', revenue: 30 }, { name: 'Feb', revenue: 45 }, { name: 'Mar', revenue: 35 },
  { name: 'Apr', revenue: 200 }, { name: 'May', revenue: 20 }, { name: 'Jun', revenue: 80 },
  { name: 'Jul', revenue: 60 }, { name: 'Aug', revenue: 50 }, { name: 'Sep', revenue: 99 },
  { name: 'Oct', revenue: 90 }, { name: 'Nov', revenue: 75 }, { name: 'Dec', revenue: 155 },
];

const CustomTooltip = ({ active, payload, label, isDark }) => {
  if (!active ||!payload?.length) return null;
  return (
    <div className={`text-[11px] px-3 py-2 rounded-full shadow-xl border ${isDark ? 'bg-[#333333] border-white/10 text-white' : 'bg-white border-[#efece6] text-black'}`}>
      <span className={isDark ? 'text-white/50' : 'text-black/40'}>{label}</span> <span className="font-bold ml-2">${payload[0].value}k</span>
    </div>
  );
};

export default function Revenue({ isDark }) {
  return (
    <div className={`border rounded-2xl p-5 h-[400px] shadow-[0_2px_20px_rgba(0,0,0,0.04)] ${isDark ? 'bg-[#171717] border-white/10' : 'bg-white border-[#efece6]'}`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className={`font-semibold text-[14px] ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>Revenue Over Time</h3>
          <p className={`text-[11px] mt-1 ${isDark ? 'text-white/50' : 'text-black/40'}`}>Drag below to zoom • Pro version</p>
        </div>
        <span className={`text-[10px] border px-3 py-1 rounded-full ${isDark ? 'bg-emerald-900/40 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>● Live</span>
      </div>
      <div className="h-[310px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="proRevWhite" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={isDark ? '#ffffff' : '#111'} stopOpacity={0.15}/>
                <stop offset="100%" stopColor={isDark ? '#ffffff' : '#111'} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? 'rgba(255,255,255,0.1)' : '#f3f0eb'} vertical={false} />
            <XAxis dataKey="name" axisLine={true} tickLine={false} tick={{ fill: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.3)', fontSize: 10 }} />
            <YAxis axisLine={true} tickLine={false} tick={{ fill: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.3)', fontSize: 10 }} width={30} />
            <Tooltip content={<CustomTooltip isDark={isDark} />} />
            <Area type="monotone" dataKey="revenue" stroke={isDark ? '#ffffff' : '#111'} strokeWidth={.5} fill="url(#proRevWhite)" dot={false} activeDot={{ r: 2, strokeWidth: 0 }} />
            <Brush dataKey="name" height={20} stroke='#111' fill={isDark ? '#3d3d3d' : '#f7f5f2'} travellerWidth={5} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}