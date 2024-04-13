import {  createContext, useState,  useContext } from "react"
const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  
  return (
  
    <aside  className={`h-full    ${
        expanded ? "w-60" : "w-16"
      }`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
         <div   className={`flex gap-4 overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}>
                 <img className="h-10 " src="Images/Group_751@3x.png" alt="" />
             <p className="text-[#FFC107] font-bold text-lg">PRODILE</p>
         </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? 'y' : 'u'}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
   
  )
}

export function SidebarItem({ icon, text, toggle,   alert, onClick }) {
  const { expanded } = useContext(SidebarContext)
 
  return (
    <li 
   
    onClick={onClick}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group hover:bg-amber-200
        ${
         toggle
            ? "bg-amber-500 text-white"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-amber-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}