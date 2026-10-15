import { LineChart, Line, ResponsiveContainer } from 'recharts';

const stats = [
  { label: "Total Revenue", value: "$124,830", change: "+12.5%", spark: [{v:20},{v:40},{v:35},{v:80},{v:60},{v:90}], color: "#2dd4bf" },
  { label: "Active Users", value: "8,429", change: "+8.2%", spark: [{v:10},{v:30},{v:20},{v:50},{v:40},{v:70}], color: "#a78bfa" },
  { label: "Conversion Rate", value: "3.4%", change: "+0.6%", spark: [{v:50},{v:30},{v:60},{v:40},{v:70},{v:55}], color: "#fb923c" },
  { label: "Churn Rate", value: "2.1%", change: "-0.4%", down: true, spark: [{v:80},{v:60},{v:70},{v:30},{v:40},{v:20}], color: "#f43f5e" },
]

export default function Stats(){
  return(
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map(s => (
        <div key={s.label} className="bg-[#15151d] border border-white/[0.06] rounded-2xl p-4 hover:border-white/10 transition-colors group">
          <div className="flex justify-between items-start">
            <p className="text-[11px] tracking-wide text-white/40 uppercase">{s.label}</p>
            <span className={`text-[11px] px-2 py-0.5 rounded-full ${s.down? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'}`}>{s.change}</span>
          </div>
          <p className="text-[28px] font-bold tracking-tight mt-2 group-hover:tracking-normal transition-all">{s.value}</p>
          <div className="h-[30px] w-full mt-2 opacity-60 group-hover:opacity-100">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={s.spark}>
                <Line dataKey="v" stroke={s.color} strokeWidth={2} dot={false} isAnimationActive={true} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  )
}