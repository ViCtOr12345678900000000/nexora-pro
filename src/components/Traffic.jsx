import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const trafficData = [
  { name: 'Direct', value: 45, color: '#2dd4bf' },
  { name: 'Organic', value: 30, color: '#a78bfa' },
  { name: 'Social', value: 15, color: '#60a5fa' },
  { name: 'Referral', value: 10, color: '#2a2a35' },
];

export default function Traffic() {
  return (
    <div className="bg-[#15151d] border border-white/[0.06] rounded-2xl p-5 h-[340px]">
      <h3 className="font-semibold text-[14px]">Traffic Source</h3>
      <div className="h-[180px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={trafficData} innerRadius={60} outerRadius={80} paddingAngle={4} dataKey="value" stroke="none" cornerRadius={6} isAnimationActive={true} animationDuration={1000}>
              {trafficData.map((e, i) => <Cell key={i} fill={e.color} />)}
            </Pie>
            <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '11px' }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[20px] font-bold">125.4k</span>
          <span className="text-[10px] text-white/40">Total Visitors</span>
        </div>
      </div>
      <div className="space-y-2.5 mt-2">
        {trafficData.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{background: item.color}}></div><span className="text-white/60">{item.name}</span></div>
            <span className="text-white/80">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}