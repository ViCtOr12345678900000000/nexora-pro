export default function Navbar({ isOpen, setIsOpen }){
  return(
    <header className="h-16 w-full px-4 lg:px-8 flex items-center justify-between bg-[#252547] border-b border-white/5 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} className="w-9 h-9 rounded-full bg-[#1a1a20] border border-white/10 grid place-items-center" title={isOpen? "Close sidebar" : "Open sidebar"}>
          <span className="text- hover:cursor-pointer">{isOpen? 'x' : '≡'}</span>
        </button>

        <div>
          <h1 className="text- lg:text- font-bold leading-none tracking-tight">Dashboard</h1>
          <p className=" text-[7px] lg:text-sm text-white/60">Welcome back, Alex - here's what's happening today</p>
        </div>
      </div>

{/*for the serch side */}
      <div className="flex items-center gap-2 lg:gap-3">
        <div className="relative hidden md:block">
        <span className="absolute left-3 top-0.5 text-[20px] hover:cursor-pointer">⌕</span>
        <input className="w-[300] h-8 border border-white/10 rounded-full placeholder:text-white/30 focus:outline-none bg-[#2e2e3f] p-4 text-[12px] pl-8 pr-3" type="text" placeholder="Search customers, order, analytics" />
        </div>

        
        <button className="w-8 h-8 rounded-full  bg-[#1a1a20] border border-white/10 grid place-items-center relative hover:cursor-pointer">🔔 
        <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 text-[8px]  font-bold rounded-full grid place-items-center">16
            </span>
        </button>
         

        <button className="w-8 h-8 rounded-full bg-[#1a1a20] border-white/10 grid place-items-center relative hover:cursor-pointer">⚙️</button>
        
        <div className="hidden lg:flex items-center gap-2 rounded-full px-2 py-1">
            <span className="text-emerald-400 px-2 py-2 rounded-full bg-emerald-500/20 text-[10px]" >React 18 </span>
            <span className=" text-[9px] text-white/50">Portfolio • v2.4.0</span>
        </div>

        <button className="h-8 px-3.5 bg-[#1a1a20] border border-white/10 rounded-full text-[12px] font-medium flex items-center gap-1.5 hover:cursor-pointer">
          <span>↓</span> Export
        </button>

      </div>
    </header>
  )
}