import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
const data = [
  { subject: 'Sales', A: 120, fullMark: 150 },
  { subject: 'Marketing', A: 98, fullMark: 150 },
  { subject: 'Dev', A: 86, fullMark: 150 },
  { subject: 'Support', A: 99, fullMark: 150 },
  { subject: 'UX', A: 85, fullMark: 150 },
  { subject: 'Growth', A: 65, fullMark: 150 },
];
export default function Performance(){
  return(
    <div className="bg-white border border-[#efece6] rounded-2xl p-5 h-[360px] shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      <h3 className="font-semibold text-[14px] text-[#1a1a1a] mb-4">Team Performance</h3>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#f3f0eb"/>
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#00000040', fontSize: 11 }}/>
            <Radar dataKey="A" stroke="#111" fill="#111" fillOpacity={0.1}/>
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}