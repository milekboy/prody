
import RevenueCards from "../components/RevenueCards";
import { VscBellDot } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import SeedingCard from "./SeedingCard";
export default function Resources(){
  
    return(
        <  div className="h-screen">
        <div className="flex border-b-2 h-24 gap-5  p-5">
          <div className="w-[30%]">
          <p className="text-xl font-semibold">Hello Lekan</p>
          <p className="text-sm tracking-wide text-zinc-400">Today is a good day to make a difference</p>
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
        <p className="ps-5 mt-4 text-xl text-orange-300 font-bold">Resources</p>
        <div className="p-5">
        <div className="flex gap-5">
            <RevenueCards style1="bg-[#c2ebc2] text-[#008400] rounded-2xl text-xs px-1 pt-1" style2=" text-[#008400] tracking-tighter font-bold" head='Revenue' amount='#984.28' diff='+#118.28 ' percent='12.8%'/>
            <RevenueCards style1="bg-[#eb4040] text-white rounded-2xl text-xs px-1 pt-1" style2=" text-[#eb4040] tracking-tighter font-bold"  head='Subscription' amount='169' diff='-18.28 ' percent='3.1%'/>
            <RevenueCards style1="bg-[#c2ebc2] text-[#008400] rounded-2xl text-xs px-1 pt-1" style2=" text-[#008400] tracking-tighter font-bold" head='Agents' amount='406' diff='+33.3 ' percent='12.8'/>
            <RevenueCards style1="bg-[#eb4040] text-white rounded-2xl text-xs px-1 pt-1" style2=" text-[#eb4040] tracking-tighter font-bold" head='Disbursement' amount='102' diff='-19.27 ' percent='2.1%'/>
        </div>
        </div>
        <div className="p-5">
            <div className="flex gap-5">
                <div className="flex gap-2 text-orange-300 text-lg font-bold">
                < p>Seeding</p> <div className="mt-1"><FaLongArrowAltRight /></div>
                </div>
              <SeedingCard/>
              <SeedingCard/>
              <SeedingCard/>
              <SeedingCard/>
            </div>
        </div>
      </div>
    
    )
}