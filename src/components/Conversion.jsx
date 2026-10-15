import { FunnelChart, Funnel, LabelList, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { value: 100, name: 'Visits', fill: '#15151d' },
  { value: 80, name: 'Sign Up', fill: '#1e1e28' },
  { value: 50, name: 'Checkout', fill: '#2dd4bf' },
  { value: 30, name: 'Paid', fill: '#14b8a6' },
];

export default function Conversion(){
  return(
    <div className="bg-[#15151d] border border-white/[0.06] rounded-2xl p-5 h-[360px]">
      <h3 className="font-semibold text-[14px] mb-4">Conversion Funnel</h3>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid #ffffff10', borderRadius: '12px' }}/>
            <Funnel data={data} dataKey="value" isAnimationActive>
              <LabelList position="right" fill="#ffffff60" stroke="none" dataKey="name" fontSize={11}/>
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}