import DataTable from '../components/DataTable';

export default function Customers({ isDark }){
  return(
    <div className="space-y-4">
      <h2 className={`text-[28px] font-light ${isDark ? 'text-white' : ''}`}>Customers</h2>
      <DataTable isDark={isDark} />
    </div>
  )
}