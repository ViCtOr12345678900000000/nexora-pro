import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
const data = [{ name: 'Goal', value: 78, fill: '#2dd4bf' }];
export default function Goal(){
  return(
    <div className="bg-[#15151d] border border-white/[0.06] rounded-2xl p-5 h-[360px] grid place-items-center relative">
      <h3 className="absolute top-5 left-5 font-semibold text-[14px]">Monthly Goal</h3>
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart innerRadius="70%" outerRadius="100%" data={data} startAngle={90} endAngle={-270}>
            <RadialBar dataKey="value" cornerRadius={10} background={{ fill: '#ffffff08' }}/>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute"><p className="text-[32px] font-bold">78%</p><p className="text-[11px] text-white/40 text-center">Completed</p></div>
    </div>
  )
}