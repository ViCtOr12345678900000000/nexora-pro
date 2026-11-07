import { useState } from 'react';
import Settings from '../pages/Settings'
import { Bell, SettingsIcon, Sun, Moon } from 'lucide-react';

export default function Navbar({ isOpen, setIsOpen, isDark, setIsDark }){
  const [showSettings, setShowSettings] = useState(false);
  const [search, setSearch] = useState('')

  const userName = localStorage.getItem('settings-name')
  ? JSON.parse(localStorage.getItem('settings-name'))
  : 'Victor Chinedu';

  // Reusable button style - dark or light
  const iconBtn = `w-8 h-8 rounded-full grid place-items-center relative ${isDark ? 'bg-[#2a2a2a] border border-white/10 text-white' : 'bg-[#f7f5f2] border border-[#efece6]'}`;

  return(
    <>
    <header className={`h-16 w-full px-4 lg:px-8 flex items-center justify-between sticky top-0 z-20 ${isDark ? 'bg-[#1a1a1a] border-b border-white/10' : 'bg-white border-b border-[#efece6]'}`}>
      <div className="flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} className={`w-9 h-9 rounded-full grid place-items-center ${isDark ? 'bg-[#2a2a2a] border border-white/10 text-white' : 'bg-[#f7f5f2] border border-[#efece6] text-[#1a1a1a]'}`}>
          <span>{isOpen? 'x' : '≡'}</span>
        </button>
        <div>
          <h1 className={`font-bold leading-none tracking-tight uppercase ${isDark ? 'text-white' : 'text-[#111]'}`}>Dashboard</h1>
          <p className={`text-[7px] lg:text-sm font-light ${isDark ? 'text-white/60' : 'text-black/50'}`}>Welcome back, {userName} - here's what's happening today</p>
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-3">
        <div className="relative hidden md:block">
          <span className={`absolute left-3 top-1 text-[17px] ${isDark ? 'text-white/40' : 'text-black/40'}`}>⌕</span>
          <input
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          className={`w-[300px] h-8 border rounded-full placeholder:text-black/30 focus:outline-none text-[12px] pl-8 pr-3 ${isDark ? 'bg-[#2a2a2a] border-white/10 text-white placeholder:text-white/30' : 'bg-[#f7f5f2] border-[#efece6]'}`}
          type="text" placeholder="Search customers, order, analytics" />
        </div>
        <button className={iconBtn}><Bell size={20} />
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 text-[8px] text-white font-bold rounded-full grid place-items-center">16</span>
        </button>
        <button onClick={() => setShowSettings(true)} className={iconBtn}><SettingsIcon size={20} /></button>
        <button onClick={() => setIsDark(prev => !prev)} className={iconBtn}> {isDark ? <Sun size={20} /> : <Moon size={20} />} </button>
        <div className="hidden lg:flex items-center gap-2 rounded-full px-2 py-1">
            <span className={`px-2 py-2 rounded-full border text-[10px] ${isDark ? 'text-emerald-300 bg-emerald-900/30 border-emerald-800' : 'text-emerald-700 bg-emerald-50 border-emerald-200'}`}>React 18</span>
            <span className={`text-[9px] ${isDark ? 'text-white/50' : 'text-black/50'}`}>Dashboard • v2.4.0</span>
        </div>
      </div>
    </header>

    {/* Sliding Settings panel */}
    {showSettings && (
      <div className="fixed inset-0 z-50 flex justify-end">
        <div onClick={() => setShowSettings(false)} className="absolute inset-0 bg-black/30" />
        <div className={`relative w-full max-w-[400px] h-full overflow-y-auto shadow-xl p-5 ${isDark ? 'bg-[#1a1a1a] text-white' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Settings</h2>
            <button onClick={() => setShowSettings(false)} className={`w-8 text-red-400 h-8 rounded-full grid place-items-center ${isDark ? 'bg-[#2a2a2a] border border-white/10' : 'bg-[#f7f5f2] border border-[#efece6]'}`}>✕</button>
          </div>
          <Settings />
        </div>
      </div>
    )}
    </>
  )
}