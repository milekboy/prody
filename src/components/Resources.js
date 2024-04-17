import RevenueCards from "../components/RevenueCards";
import { FaLongArrowAltRight } from "react-icons/fa";
import Navbar from "./Navbar";
import SeedingCard from "./SeedingCard";
export default function Resources(){
  
    return(
        <  div className="h-screen">
             <Navbar head='Hello Lekan' summary='Today is a good day to make a difference'/>
        <p className="ps-5 mt-4 text-xl text-orange-300 font-bold">Resources</p>
        <div className="p-5">
        <div className="flex gap-5">
            <RevenueCards style1="bg-[#c2ebc2] text-[#008400] p-1.5 rounded-2xl text-sm" style2=" text-[#008400] tracking-tighter font-bold" head='Revenue' amount='#984.28' diff='+#118.28 ' percent='12.8%'/>
            <RevenueCards style1="bg-[#eb4040] text-white p-1.5 rounded-2xl text-sm" style2=" text-[#eb4040] tracking-tighter font-bold"  head='Subscription' amount='169' diff='-18.28 ' percent='3.1%'/>
            <RevenueCards style1="bg-[#c2ebc2] text-[#008400] p-1.5 rounded-2xl text-sm" style2=" text-[#008400] tracking-tighter font-bold" head='Agents' amount='406' diff='+33.3 ' percent='12.8'/>
            <RevenueCards style1="bg-[#eb4040] text-white p-1.5 rounded-2xl text-sm" style2=" text-[#eb4040] tracking-tighter font-bold" head='Disbursement' amount='102' diff='-19.27 ' percent='2.1%'/>
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