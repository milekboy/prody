import { useState } from "react";
import RevenueCards from "../components/RevenueCards";
import { VscBellDot } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TbSwitch2 } from "react-icons/tb";
import UserList from "./UserList";
export default function Productive(){
    const [dropDown1,  setDropDown1]= useState(true)
    const [dropDown2,  setDropDown2]= useState(true)
   function toggleDropDown(){
    setDropDown1(!dropDown1)
   }
   function toggleDropDown2(){
    setDropDown2(!dropDown2)
   }
    return(
        <  div>
        <div className="flex border-b-2 h-24 gap-5  p-5">
          <div className="w-[30%]">
          <p className="text-xl font-semibold">Hello Lekan</p>
          <p className="text-sm tracking-wide text-zinc-400">Have a nice day</p>
          </div>
          <input type="text" placeholder="Search here" className=" h-12 w-[30%] z-0  placeholder:z-30  border-2 rounded-lg border-zinc-400 ps-3 "/>
          <VscBellDot className="mt-2" size={30}/>
          <div className="w-1 h-full bg-black"></div>
          <CgProfile className="mt-2" size={30}/>
          <div>
            <p className="text-xl font-semibold">Lekan Okeowo</p>
            <p>Super Admin</p>
          </div>
          <IoIosArrowDown className="mt-4" />
        </div>
        <p className="ps-5 mt-4 text-xl text-orange-300 font-bold">User Dashboard</p>
        <div className="p-5">
        <div className="flex gap-5">
            <RevenueCards style1="bg-[#c2ebc2] text-[#008400] rounded-2xl text-xs px-1 pt-1" style2=" text-[#008400] tracking-tighter font-bold" head='Revenue' amount='#984.28' diff='+#118.28 ' percent='12.8%'/>
            <RevenueCards style1="bg-[#eb4040] text-white rounded-2xl text-xs px-1 pt-1" style2=" text-[#eb4040] tracking-tighter font-bold"  head='Subscription' amount='169' diff='-18.28 ' percent='3.1%'/>
            <RevenueCards style1="bg-[#c2ebc2] text-[#008400] rounded-2xl text-xs px-1 pt-1" style2=" text-[#008400] tracking-tighter font-bold" head='Agents' amount='406' diff='+33.3 ' percent='12.8'/>
            <RevenueCards style1="bg-[#eb4040] text-white rounded-2xl text-xs px-1 pt-1" style2=" text-[#eb4040] tracking-tighter font-bold" head='Disbursement' amount='102' diff='-19.27 ' percent='2.1%'/>
        </div>
        </div>
      <div className="ps-5 flex gap-8">
      <input type="text" placeholder="Search here" className=" h-12 w-[30%] z-0  placeholder:z-30  border-2 rounded-lg border-zinc-400 ps-3 "/>
      <button  className="bg-[#FFC107] text-white lg:w-52 h-12 w-full text-lg  font-bold rounded-md">Add productive unit +</button>
     <div className="w-[10%]">
      <div onClick={toggleDropDown} className="flex gap-1 cursor-pointer font-bold">
       <p> Sort by</p>  <IoIosArrowDown className="mt-1" />
      </div>
      <div className={dropDown1?"rounded border-gray-300 bg-yellow-400 p-4 absolute w-400px] text-black hidden" :"rounded border-gray-300 bg-yellow-400 p-4 absolute w-400px] text-black"}>
        <p className="cursor-pointer ">
            Name
        </p>
        <p className="cursor-pointer mt-1">
          Entity
        </p>
        <p className="cursor-pointer mt-1">
           Industry
        </p>
        <p className="cursor-pointer mt-1">
          Location
        </p>
        <p className="cursor-pointer mt-1">
            Agent
        </p>
      </div>
      </div>
      <div className="w-[15%]">
      <div onClick={toggleDropDown2} className="flex gap-1 cursor-pointer font-bold ">
       <p> Saved Search</p>  <IoIosArrowDown className="mt-1" />
      </div>
      <div className={dropDown2?"rounded border-gray-300 bg-yellow-400 p-4 absolute w-400px] text-black hidden" :"rounded border-gray-300 bg-yellow-400 p-4 absolute w-400px] text-black"}>
        <p className="cursor-pointer ">
            Name
        </p>
        <p className="cursor-pointer mt-1">
          Entity
        </p>
        <p className="cursor-pointer mt-1">
           Industry
        </p>
        <p className="cursor-pointer mt-1">
          Location
        </p>
        <p className="cursor-pointer mt-1">
            Agent
        </p>
      </div>
      </div>
      <TbSwitch2 size={30}/>
      </div>
      <UserList/>
       </div>
    
    )
}