import { FunnelChart, Funnel, LabelList, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { value: 100, name: 'Visits', fill: '#f3f0eb' },
  { value: 80, name: 'Sign Up', fill: '#e8e5e0' },
  { value: 50, name: 'Checkout', fill: '#2dd4bf' },
  { value: 30, name: 'Paid', fill: '#14b8a6' },
];

export default function Conversion(){
  return(
    <div className="bg-white border border-[#efece6] rounded-2xl p-5 h-[360px] shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      <h3 className="font-semibold text-[14px] text-[#1a1a1a] mb-4">Conversion Funnel</h3>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip contentStyle={{ background: '#fff', border: '1px solid #efece6', borderRadius: '12px' }}/>
            <Funnel data={data} dataKey="value" isAnimationActive>
              <LabelList position="right" fill="#00000060" stroke="none" dataKey="name" fontSize={11}/>
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}