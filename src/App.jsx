import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import Revenue from "./components/Revenue";
import Activity from "./components/Activity";
import Traffic from "./components/Traffic";
import Growth from "./components/Growth";
import TopProducts from "./components/TopProducts";
import DataTable from "./components/DataTable";
import Conversion from "./components/Conversion";
import Performance from "./components/Performance";
import Goal from "./components/Goal";

import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Invoices from "./pages/Invoices";
import Campaigns from "./pages/Campaigns";
import Insights from "./pages/Insights";
import Team from "./pages/Team";
import Integrations from "./pages/Integrations";
import Settings from "./pages/Settings";

function DashboardPage({isDark}){
  return(
    <div className="space-y-4">
      <Stats isDark={isDark} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4"><Revenue isDark={isDark} /><Activity isDark={isDark} /></div>
        <div className="space-y-4"><Traffic /><Growth /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
        <TopProducts />
        <div className="lg:col-span-2"><DataTable isDark={isDark}  /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
        <Conversion /><Performance /><Goal />
      </div>
    </div>
  )
}

export default function App(){
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');
  const [isDark, setIsDark] = useState(false)

  const renderPage = () => {
    switch(activePage){
      case 'Analytics': return <Analytics isDark={isDark}/>;
      case 'Customers': return <Customers isDark={isDark}/>;
      case 'Orders': return <Orders/>;
      case 'Products': return <Products/>;
      case 'Invoices': return <Invoices/>;
      case 'Campaigns': return <Campaigns/>;
      case 'Insights': return <Insights/>;
      case 'Team': return <Team isDark={isDark}/>;
      case 'Integrations': return <Integrations/>;
      case 'Settings': return <Settings/>;
      default: return <DashboardPage isDark={isDark}/>;
    }
  }

  return(
    <>
    {/* This flips ALL your white cards to dark when isDark is true */}
    <style>{`
      .dark { color-scheme: dark; }
      .dark .bg-white { background-color: #1a1a1a !important; }
      .dark .bg-\\[\\#f7f5f2\\] { background-color: #242424 !important; }
      .dark .bg-\\[\\#f9f8f6\\] { background-color: #121212 !important; }
      .dark .border-\\[\\#efece6\\] { border-color: #2e2e2e !important; }
      .dark .text-\\[\\#1a1a1a\\] { color: #f5f5f5 !important; }
      .dark .text-\\[\\#111\\] { color: #ffffff !important; }
      .dark .text-black\\/50 { color: rgba(255,255,255,0.6) !important; }
      .dark .text-black\\/40 { color: rgba(255,255,255,0.45) !important; }
      .dark .text-black\\/30 { color: rgba(255,255,255,0.35) !important; }
      .dark .placeholder\\:text-black\\/30::placeholder { color: rgba(255,255,255,0.35) !important; }
    `}</style>

    <div className={`flex min-h-screen ${isDark ? 'dark bg-[#121212] text-white' : 'bg-[#f9f8f6] text-[#1a1a1a]'}`}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} activePage={activePage} setActivePage={setActivePage} isDark={isDark} />      <div className="flex-1 flex flex-col min-w-0">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isDark={isDark} setIsDark={setIsDark} />
        <main className="p-4 lg:p-6 space-y-4">
          {renderPage()}
        </main>
      </div>
    </div>
    </>
  )
}