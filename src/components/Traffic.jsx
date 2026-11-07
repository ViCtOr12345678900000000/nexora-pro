import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const trafficData = [
  { name: 'Direct', value: 45, color: '#111' },
  { name: 'Organic', value: 30, color: '#a78bfa' },
  { name: 'Social', value: 15, color: '#60a5fa' },
  { name: 'Referral', value: 10, color: '#a2f0bb' },
];

export default function Traffic({ isDark }) {
  return (
    <div className={`border rounded-2xl p-5 h-[340px] shadow-[0_2px_20px_rgba(0,0,0,0.04)] ${isDark ? 'bg-[#333333] border-white/10' : 'bg-white border-[#efece6]'}`}>
      <h3 className={`font-semibold text-[14px] ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>Traffic Source</h3>
      <div className="h-[180px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={trafficData} innerRadius={60} outerRadius={80} paddingAngle={4} dataKey="value" stroke="none" cornerRadius={6}>
              {trafficData.map((e, i) => <Cell key={i} fill={e.color === '#111' && isDark ? '#ffffff' : e.color} />)}
            </Pie>
            <Tooltip contentStyle={{ background: isDark ? '#333333' : '#fff', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #efece6', borderRadius: '12px', fontSize: '11px', color: isDark ? '#fff' : '#111' }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className={`text-[20px] font-extralight ${isDark ? 'text-white' : 'text-[#111]'}`}>225.4k</span>
          <span className={`text-[10px] ${isDark ? 'text-white/50' : 'text-black/40'}`}>Total Visitors</span>
        </div>
      </div>
      <div className="space-y-2.5 mt-2">
        {trafficData.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{background: item.color === '#111' && isDark ? '#fff' : item.color}}></div><span className={isDark ? 'text-white/70' : 'text-black/60'}>{item.name}</span></div>
            <span className={isDark ? 'text-white/90' : 'text-black/80'}>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}