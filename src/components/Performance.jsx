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
    <div className="bg-[#15151d] border border-white/[0.06] rounded-2xl p-5 h-[360px]">
      <h3 className="font-semibold text-[14px] mb-4">Team Performance</h3>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.06)"/>
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff40', fontSize: 11 }}/>
            <Radar dataKey="A" stroke="#2dd4bf" fill="#2dd4bf" fillOpacity={0.3}/>
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}