
import RevenueCards from "../components/RevenueCards";
import Navbar from "./Navbar";
import AgentList from "./AgentList";
export default function Agents(){
    return(
        <  div>
               <Navbar head='Hello Lekan' summary='Have a nice day'/>
        <p className="ps-5 mt-4 text-xl text-orange-300 font-bold">Agents</p>
        <div className="p-5">
        <div className="flex gap-5">
            <RevenueCards style1="bg-[#c2ebc2] text-[#008400] p-1.5 rounded-2xl text-sm" style2=" text-[#008400] tracking-tighter font-bold" head='Agent' amount='84' diff='+#118.28 ' percent='12.8%'/>
            <RevenueCards style1="bg-[#eb4040] text-white p-1.5 rounded-2xl text-sm" style2=" text-[#eb4040] tracking-tighter font-bold"  head='Subscription' amount='#984.28' diff='-18.28 ' percent='3.1%'/>
            <RevenueCards style1="bg-[#c2ebc2] text-[#008400] p-1.5 rounded-2xl text-sm" style2=" text-[#008400] tracking-tighter font-bold" head='Resources' amount='406' diff='+33.3 ' percent='12.8'/>
            <RevenueCards style1="bg-[#eb4040] text-white p-1.5 rounded-2xl text-sm" style2=" text-[#eb4040] tracking-tighter font-bold" head='Disbursement' amount='102' diff='-19.27 ' percent='2.1%'/>
        </div>
        </div>
    
        <AgentList/>
       </div>
    
    )
}