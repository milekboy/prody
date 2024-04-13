
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { BiNotepad } from "react-icons/bi";
import { FaSimCard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiGrid41 } from "react-icons/ci";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";

import { SidebarItem } from "../components/Sidebar";

import Overview from "../components/Overview";
import Productive from "../components/Productive";
import Agents from "../components/Agents";
import Resources from "../components/Resources";
export default function Dashboard(){ 
  const [toggle, setToggle]= useState(1)
 
  function updateToggle(id){
      setToggle(id)
  }
    return(
      <div className="flex">
           <div className="w-auto">
          <Sidebar>
        <SidebarItem  text='Menu' />
        <SidebarItem  onClick={()=>updateToggle(1)} icon={<CiGrid41 size={20}/>}  text='Overview' />
        <SidebarItem  onClick={()=>updateToggle(2)} icon={< FaSimCard size={20}/>}  text='Productive Units'  />
        <SidebarItem  onClick={()=>updateToggle(3)} icon={< CgProfile size={20}/>}  text='Agents' />
        <SidebarItem onClick={()=>updateToggle(4)} icon={<BiNotepad  size={20}/>} text='Resources' />
        <SidebarItem  text='General' />
       
        <SidebarItem icon={<IoSettingsOutline  size={20}/>} text='Settings' />
        <SidebarItem icon={< MdOutlineLogin  size={20}/>} text='Log out' />
      </Sidebar>
           </div>
           <div className={toggle === 1 ? "w-full block": "hidden"}>
         <Overview/>
           </div>
           {/* toggle2 */}
           <div className={toggle === 2 ? "w-full block": "hidden"}>
         <Productive/>
           </div>
           <div className={toggle === 3 ? "w-full block": "hidden"}>
         <Agents/>
           </div>
           <div className={toggle === 4 ? "w-full block": "hidden"}>
         <Resources/>
           </div>
           </div>
    )
}