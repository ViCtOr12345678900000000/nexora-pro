export default function Insights(){
  return(
    <div className="space-y-4">
      <h2 className="text-[28px] font-light">Insights</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white border border-[#efece6] rounded-2xl p-5">
          <p className="text-[13px] font-medium">💡 Top Insight</p>
          <p className="text-[12px] text-black/50 mt-2">Enterprise customers spend 3.4x more than Pro. Focus Campaigns on Enterprise.</p>
        </div>
        <div className="bg-white border border-[#efece6] rounded-2xl p-5">
          <p className="text-[13px] font-medium">⚠️ Churn Alert</p>
          <p className="text-[12px] text-black/50 mt-2">12 customers with Paused status - send re-engagement email.</p>
        </div>
        <div className="bg-white border border-[#efece6] rounded-2xl p-5"><p className="text-[13px] font-medium">📈 Growth</p>
        <p className="text-[12px] text-black/50 mt-2">Revenue up 12% this month. Best day was Wednesday.</p>
        </div>
      </div>
    </div>
  )
}