import {  createContext, useState} from "react"
import {  useNavigate } from "react-router-dom";
import UseShowLocation from "../hooks/UseShowLocation";
const SidebarContext = createContext()

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  const navigate = useNavigate();
  const { isActive } = UseShowLocation();
  return (
  
    <aside  className={`h-full     ${
        expanded ? "w-60" : "w-20"
      }`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center relative">
         <div   className={`flex gap-4 overflow-hidden transition-all duration-700 ${
              expanded ? "w-32" : "w-16"
            }`}>
                 <img className="h-10 " src="http://137.184.176.134:81/assets//icons/Group_751@3x.png" alt="" />
             <p className="text-[#FFC107] font-bold text-lg">PRODILE</p>
         </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-orange-400 hover:bg-gray-100 right-0 absolute"
          >
            {expanded ?  '<' :'>'}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex mt-8 ms-2 flex-col gap-y-5 px-3">
            <li className="w-full font-bold text-lg tracking-widest ">
            {expanded ?  'MENU' :''}
            </li>
            <li
             onClick={() => navigate("/dashboard/overview")}
            className={`w-full text-gray-400   p-2 font-bold cursor-pointer rounded-xl ${isActive('/dashboard/overview') ? 'text-white   bg-[#FFC107] ': ''} `}>
            {expanded ?  'Overview' :''}
            </li>
            <li
             onClick={() => navigate("/dashboard/productive")}
             className={`text-gray-400  w-full p-2 font-bold rounded-xl cursor-pointer hover:text-white hover:bg-[#FFC107] ${isActive('/dashboard/productive') ? 'text-white   bg-[#FFC107] ': ''}`}>
            {expanded ?  'Productive Units' :''}
            </li>
            <li
             onClick={() => navigate("/dashboard/agents")}
            className={`text-gray-400  w-full p-2 font-bold rounded-xl cursor-pointer hover:text-white hover:bg-[#FFC107] ${isActive('/dashboard/agents') ? 'text-white   bg-[#FFC107] ': ''}`}>
            {expanded ?  'Agents' :''}
            </li>
            <li
             onClick={() => navigate("/dashboard/resources")}
            className={`text-gray-400  w-full p-2 font-bold rounded-xl cursor-pointer hover:text-white hover:bg-[#FFC107] ${isActive('/dashboard/resources') ? 'text-white   bg-[#FFC107] ': ''}`}>
            {expanded ?  'Resources' :''}
            </li>
            <li className="w-full font-bold text-lg tracking-widest">
            {expanded ?  'General' :''}
            </li>
            <li className="text-gray-400  w-full p-2 font-bold rounded-xl cursor-pointer hover:text-white hover:bg-[#FFC107]">
            {expanded ?  'Settings' :''}
            </li>
            <li
             onClick={() => navigate("/user-login")}
            className="text-gray-400  w-full p-2 font-bold rounded-xl cursor-pointer hover:text-white hover:bg-[#FFC107]">
            {expanded ?  'Log out' :''}
            </li>
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
   
  )
}

