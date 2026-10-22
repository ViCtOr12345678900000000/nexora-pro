import { LineChart, Line, ResponsiveContainer } from 'recharts';

const stats = [
  { label: "Total Revenue", value: "$524,830", change: "+12.5%", spark: [{v:20},{v:50},{v:35},{v:80},{v:20},{v:120}], color: "#111" },
  { label: "Active Users", value: "18,429k", change: "+25.2%", spark: [{v:10},{v:30},{v:20},{v:50},{v:40},{v:70}], color: "#a78bfa" },
  { label: "Conversion Rate", value: "9.4%", change: "+3.6%", spark: [{v:50},{v:30},{v:60},{v:40},{v:70},{v:55}], color: "#fb923c" },
  { label: "Churn Rate", value: "2.1%", change: "-0.4%", down: true, spark: [{v:80},{v:60},{v:70},{v:30},{v:40},{v:20}], color: "#f43f5e" },
]

export default function Stats(){
  return(
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map(s => (
        <div key={s.label} className="bg-white border border-[#efece6] rounded-2xl p-4 hover:border-[#e8e5e0] transition-colors group shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          <div className="flex justify-between items-start">
            <p className="text-[11px] tracking-wide text-black/40 uppercase">{s.label}</p>
            <span className={`text-[11px] px-2 py-0.5 rounded-full border ${s.down? 'bg-red-50 text-red-600 border-red-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>{s.change}</span>
          </div>
          <p className="text-[38px] font-extralight tracking-tight mt-2 text-[#111] group-hover:tracking-normal transition-all">{s.value}</p>
          <div className="h-[130px] w-full mt-2 opacity-60 group-hover:opacity-100">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={s.spark}>
                <Line dataKey="v" type={'monotone'} stroke={s.color} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  )
}