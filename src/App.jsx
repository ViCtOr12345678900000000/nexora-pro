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

function DashboardPage(){
  return(
    <div className="space-y-4">
      <Stats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4"><Revenue/><Activity /></div>
        <div className="space-y-4"><Traffic /><Growth /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
        <TopProducts />
        <div className="lg:col-span-2"><DataTable /></div>
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

  const renderPage = () => {
    switch(activePage){
      case 'Analytics': return <Analytics/>;
      case 'Customers': return <Customers/>;
      case 'Orders': return <Orders/>;
      case 'Products': return <Products/>;
      case 'Invoices': return <Invoices/>;
      case 'Campaigns': return <Campaigns/>;
      case 'Insights': return <Insights/>;
      case 'Team': return <Team/>;
      case 'Integrations': return <Integrations/>;
      case 'Settings': return <Settings/>;
      default: return <DashboardPage/>;
    }
  }

  return(
    <div className="flex min-h-screen bg-[#f9f8f6] text-[#1a1a1a]">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="p-4 lg:p-6 space-y-4">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}