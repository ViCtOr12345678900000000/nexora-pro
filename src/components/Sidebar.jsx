import { User } from "lucide-react"
import { Settings, LayoutDashboard, ChartNoAxesCombined, Rocket, Receipt, Users, Ellipsis, Puzzle, MessageCircle } from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen, activePage, setActivePage }) {
  const userName = localStorage.getItem('settings-name')
    ? JSON.parse(localStorage.getItem('settings-name'))
    : 'Victor Chinedu';

  const userMail = localStorage.getItem('settings-email')
    ? JSON.parse(localStorage.getItem('settings-email'))
    : 'victor@nexora.org'

  const sections = {
    MENU: [
      { name: 'Dashboard', icon: LayoutDashboard },
      { name: 'Analytics', icon: ChartNoAxesCombined },
      { name: 'Customers', icon: Users },
      { name: 'Orders', icon: MessageCircle },
      { name: 'Products', icon: LayoutDashboard },
      { name: 'Invoices', icon: Receipt },
    ],
    GROWTH: [
      { name: 'Campaigns', icon: Rocket },
      { name: 'Insights', icon: Ellipsis },
    ],
    ACCOUNT: [
      { name: 'Team', icon: Users },
      { name: 'Integrations', icon: Puzzle },
      { name: 'Settings', icon: Settings },
    ]
  };

  const handleClick = (name) => {
    setActivePage(name);
    // Only close on mobile — on desktop keep sidebar open
    if (window.innerWidth < 1024) setIsOpen(false);
  };

  return (
    <>
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/20 z-30 lg:hidden" />}
      <aside className={`fixed lg:sticky top-0 left-0 z-40 h-screen bg-white border-r border-[#efece6] flex flex-col shrink-0 transition-all duration-300 ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:w-0 lg:overflow-hidden lg:border-0'}`}>
        <div className="flex-1 overflow-y-auto min-w-[220px]">
          <div className="p-5 flex items-center gap-3 sticky top-0 bg-white z-10">
            <div className="w-8 h-8 rounded-full bg-[#111] grid place-items-center text-white font-bold">⬢</div>
            <div><p className="font-bold text-[#111]">Nexora</p><p className="text-[10px] text-black/40">SaaS Platform</p></div>
          </div>
          <nav className="mt-2 px-2 pb-6">
            {Object.entries(sections).map(([label, items]) => (
              <div key={label} className="mb-6">
                <p className="px-3 text-[10px] tracking-widest uppercase text-black/30 mb-2">{label}</p>
                <div className="space-y-0.5">
                  {items.map(({ name, icon: Icon }) => (
                    <button key={name} onClick={() => handleClick(name)} className={`w-full text-left px-3 py-2.5 text-[13px] rounded-lg flex gap-3 items-center ${activePage === name ? 'bg-[#111] text-white' : 'text-black/60 hover:bg-[#f7f5f2] hover:text-black'}`}>
                      <Icon size={16} /> {name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
        <div className="p-3 border-t border-[#f3f0eb] bg-[#fbfaf8] min-w-[220px]">
          <div className="flex items-center gap-2.5 bg-white border border-[#efece6] rounded-lg p-2">
            <div className="w-8 h-8 rounded-full bg-[#f3f0eb] grid place-items-center text-[10px] font-bold"><User size={15} /></div>
            <div className="leading-tight overflow-hidden">
              <p className="uppercase text-[11px] font-medium truncate">{userName}</p>
              <p className="text-[11px] font-medium truncate text-black/50">{userMail}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}