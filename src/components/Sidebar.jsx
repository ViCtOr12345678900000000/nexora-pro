// components/Sidebar.jsx
import { useState } from 'react';

export default function Sidebar({ isOpen, setIsOpen }) {
  const [active, setActive] = useState('Dashboard');

  const sections = {
    MENU: ['Dashboard','Analytics','Customers','Orders','Products','Invoices'],
    GROWTH: ['Campaigns','Insights'],
    ACCOUNT: ['Team','Integrations','Settings']
  };

  return (
    <>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 z-30 lg:hidden" />
      )}

      <aside className={`
        fixed lg:sticky top-0 left-0 z-40 h-screen
        bg-[#404055] border-r border-white/5 flex flex-col shrink-0
        transition-all duration-300 ease-in-out
        ${isOpen? 'w- translate-x-0' : 'w- -translate-x-full lg:w-0 lg:overflow-hidden lg:border-0'}
      `}>
        {/* THIS IS THE FIX - scrollable middle */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden min-w- [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
          {/* Logo */}
          <div className="p-5 flex items-center justify-between sticky top-0 bg-[#404055]  z-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center text-black font-bold">⬢</div>
              <div>
                <p className="font-bold leading-none text-">Nexora</p>
                <p className="text- text-emerald-200/40 mt-0.5">SaaS Platform</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="lg:hidden w-7 h-7 rounded-full bg-white/5 grid place-items-center">✕</button>
          </div>

          <nav className="mt-2 px-2 pb-6">
            {Object.entries(sections).map(([label, items]) => (
              <div key={label} className="mb-6">
                <p className="px-3 text- tracking-[0.15em] text-white/30 mb-2 font-medium">{label}</p>
                <div className="space-y-0.5">
                  {items.map(name => {
                    const isActive = active === name;
                    return (
                      <button
                        key={name}
                        onClick={() => setActive(name)}
                        className={`w-full text-left px-3 py-2.5 text- rounded-md flex items-center gap-3 transition-all
                          ${isActive
                          ? 'bg-[#1e2d2d] text-white border-l-2 border-teal-400'
                            : 'text-white/60 hover:text-white hover:bg-white/5 border-l-2 border-transparent'}`}
                      >
                        <span className="opacity-70">⟢</span> {name}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer stays pinned - does NOT scroll */}
        <div className="min-w- p-3 border-t border-white/5 bg-[#111115]">
          <div className="flex items-center justify-between bg-[#1a1a20]/50 rounded-lg p-2">
            <div className="flex items-center gap-2.5">
              <img src="https://i.pravatar.cc/100?img=12" className="w-8 h-8 rounded-full" />
              <div className="leading-tight">
                <p className="text- font-medium">Alex Morgan</p>
                <p className="text- text-white/40">Admin • alex@nexora.io</p>
              </div>
            </div>
            
          </div>
        </div>
      </aside>
    </>
  );
}