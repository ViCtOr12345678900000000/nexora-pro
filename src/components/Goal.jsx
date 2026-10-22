import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
const data = [{ name: 'Goal', value: 78, fill: '#111' }];
export default function Goal(){
  return(
    <div className="bg-white border border-[#efece6] rounded-2xl p-5 h-[360px] grid place-items-center relative shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      <h3 className="absolute top-5 left-5 font-semibold text-[14px] text-[#1a1a1a]">Monthly Goal</h3>
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart innerRadius="70%" outerRadius="100%" data={data} startAngle={90} endAngle={-270}>
            <RadialBar dataKey="value" cornerRadius={10} background={{ fill: '#f3f0eb' }}/>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute"><p className="text-[32px] font-bold text-[#111]">78%</p><p className="text-[11px] text-black/40 text-center">Completed</p></div>
    </div>
  )
}