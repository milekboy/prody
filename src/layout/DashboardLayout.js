import {  Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
export default function DashboardLayout(){
    return(
        <div className="flex h-screen bg-white w-full">
   {<div className="hidden lg:block"><Sidebar /></div> }
    {/* Main Content */}
    <div
          className='w-full overflow-hidden relative no-scrollbar overflow-y-auto'
        >
          <Outlet />
        </div>
   </div>
    )
}