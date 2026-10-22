const products = [
  { name: 'Nexora Pro', sales: 8900, total: 10000, color: '#111' },
  { name: 'Basic Plan', sales: 4200, total: 10000, color: '#60a5fa' },
  { name: 'Enterprise', sales: 6500, total: 10000, color: '#a78bfa' },
  { name: 'Add-ons', sales: 3100, total: 10000, color: '#f472b6' },
];

export default function TopProducts(){
  return(
    <div className="lg:col-span-1 bg-white border border-[#efece6] rounded-2xl p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      <h3 className="font-semibold text-[14px] text-[#1a1a1a] mb-5">Top Products</h3>
      <div className="space-y-4">
        {products.map((p) => {
          const percent = (p.sales / p.total) * 100;
          return(
            <div key={p.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-[12px] text-[#1a1a1a]">{p.name}</span>
                <span className="text-[11px] text-black/40">{percent}%</span>
              </div>
              <div className="h-1.5 w-full bg-[#f3f0eb] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700" style={{ width: `${percent}%`, background: p.color }}></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}