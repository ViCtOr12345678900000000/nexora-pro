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

export default function App(){
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return(
    <div className="flex min-h-screen bg-[#0a0a0f] text-white">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <main className="p-4 lg:p-6 space-y-4">
          <Stats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <Revenue/>
              <Activity />
            </div>
            <div className="space-y-4">
              <Traffic />
              <Growth />
            </div>
          </div>

          {/* MAP MASTERY ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
            <TopProducts />
            <div className="lg:col-span-2">
              <DataTable />
            </div>
          </div>

          {/* NEW RECHARTS ROW - 3 ADVANCED CHARTS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
            <Conversion />
            <Performance />
            <Goal />
          </div>

        </main>
      </div>
    </div>
  )
}