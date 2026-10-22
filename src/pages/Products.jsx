import { useState } from 'react';
import TopProducts from '../components/TopProducts';
const initial = [
  {id:1,name:'Nexora Pro', price:'$99', stock:120, sales:89},
  {id:2,name:'Basic Plan', price:'$29', stock:400, sales:42},
  {id:3,name:'Enterprise', price:'$299', stock:50, sales:65},
];
export default function Products(){
  const [products,setProducts]=useState(initial);
  const [search,setSearch]=useState('');
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  // Put logic INSIDE a function
  const removeProduct = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      setProducts(products.filter(x => x.id !== id));
    }
  }

  return(
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-[28px] font-light">Products</h2>
        <input value={search} 
        onChange={e=>setSearch(e.target.value)}
        placeholder="Search products" 
       className="h-9 px-4 bg-white border border-[#efece6] rounded-full text-[12px] outline-none"/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {filtered.map(p=>(
            <div key={p.id} className="bg-white border border-[#efece6] rounded-2xl p-4">
              <p className="font-medium text-[14px]">{p.name}</p>
              <p className="text-[11px] text-black/40 mt-1">{p.price} • {p.stock} in stock</p>
              <div className="mt-3 h-1.5 bg-[#f3f0eb] rounded-full"><div className="h-full bg-[#111] rounded-full" style={{width:`${p.sales}%`}}></div></div>
              <div className="flex gap-2 mt-3">
                <button onClick={() => removeProduct(p.id)} className="text-[11px] px-3 py-1 rounded-full border border-[#efece6]">Delete</button></div>
            </div>
          ))}
        </div>
        <TopProducts/>
      </div>
    </div>
  )
}