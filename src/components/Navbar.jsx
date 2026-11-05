import { useState } from 'react';
import Settings from '../pages/Settings'

export default function Navbar({ isOpen, setIsOpen }){
  const [showSettings, setShowSettings] = useState(false);
  const [search, setSearch] = useState('')

    const userName = localStorage.getItem('settings-name')
    ? JSON.parse(localStorage.getItem('settings-name'))
    : 'Victor Chinedu';


  return(
    <>
    <header className="h-16 w-full px-4 lg:px-8 flex items-center justify-between bg-white border-b border-[#efece6] sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} className="w-9 h-9 rounded-full bg-[#f7f5f2] border border-[#efece6] grid place-items-center text-[#1a1a1a]">
          <span>{isOpen? 'x' : '≡'}</span>
        </button>
        <div>
          <h1 className="text-[#111] font-bold leading-none tracking-tight uppercase">Dashboard</h1>
          <p className="text-[7px]  lg:text-sm text-black/50 font-light">Welcome back, {userName} - here's what's happening today</p>
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-3">
        <div className="relative hidden md:block">
          <span className="absolute left-3 top-1 text-[17px] text-black/40">⌕</span>
          <input 
          value={search}
          onChange={(e)=> handleSearch(e.target.value)}
          className="w-[300px] h-8 border border-[#efece6] rounded-full placeholder:text-black/30 focus:outline-none bg-[#f7f5f2] text-[12px] pl-8 pr-3" type="text" placeholder="Search customers, order, analytics" />
        </div>
        <button className="w-8 h-8 rounded-full bg-[#f7f5f2] border border-[#efece6] grid place-items-center relative">🔔 
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 text-[8px] text-white font-bold rounded-full grid place-items-center">16</span>
        </button>
        <button onClick={() => setShowSettings(true)} className="w-8 h-8 rounded-full bg-[#f7f5f2] border border-[#efece6] grid place-items-center relative">⚙️</button>
        <div className="hidden lg:flex items-center gap-2 rounded-full px-2 py-1">
            <span className="text-emerald-700 px-2 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-[10px]">React 18</span>
            <span className="text-[9px] text-black/50">Portfolio • v2.4.0</span>
        </div>
        <button className="h-8 px-3.5 bg-white border border-[#efece6] rounded-full text-[12px] font-medium flex items-center gap-1.5 text-[#1a1a1a]">↓ Export</button>
      </div>
    </header>

    {/* Sliding Settings panel */}
    {showSettings && (
      <div className="fixed inset-0 z-50 flex justify-end">
        <div onClick={() => setShowSettings(false)} className="absolute inset-0 bg-black/30" />
        <div className="relative w-full max-w-[400px] bg-white h-full overflow-y-auto shadow-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Settings</h2>
            <button onClick={() => setShowSettings(false)} className="w-8 h-8 rounded-full bg-[#f7f5f2] border border-[#efece6] grid place-items-center">✕</button>
          </div>
          <Settings />
        </div>
      </div>
    )}
    </>
  )
}