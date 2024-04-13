import RevenueCards from "../components/RevenueCards";
import SubscriberProfile from "../components/SubscriberProfile";
import ProgressBar from "../components/ProgressBar";
import { VscBellDot } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
export default function Overview(){
    return(
        <  div>
        <div className="flex border-b-2 h-24 gap-5  p-5">
          <div className="w-[30%]">
          <p className="text-xl font-semibold">Dashboard</p>
          <p className="text-sm tracking-wide text-zinc-400">Get summary of your weekly online <br/> transactions here.</p>
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
        <div className="p-5">
        <div className="flex gap-5">
            <RevenueCards style1="bg-[#c2ebc2] text-[#008400] rounded-2xl text-xs px-1 pt-1" style2=" text-[#008400] tracking-tighter font-bold" head='Revenue' amount='#984.28' diff='+#118.28 ' percent='12.8%'/>
            <RevenueCards style1="bg-[#eb4040] text-white rounded-2xl text-xs px-1 pt-1" style2=" text-[#eb4040] tracking-tighter font-bold"  head='Subscription' amount='169' diff='-18.28 ' percent='3.1%'/>
            <RevenueCards style1="bg-[#c2ebc2] text-[#008400] rounded-2xl text-xs px-1 pt-1" style2=" text-[#008400] tracking-tighter font-bold" head='Agents' amount='406' diff='+33.3 ' percent='12.8'/>
            <RevenueCards style1="bg-[#eb4040] text-white rounded-2xl text-xs px-1 pt-1" style2=" text-[#eb4040] tracking-tighter font-bold" head='Disbursement' amount='102' diff='-19.27 ' percent='2.1%'/>
        </div>
        </div>
       <div className="flex mt-10 px-5">
           <div className="w-[60%] ">
              <p className="text-xl font-semibold">
                New Subscription
              </p>
              <div className="flex gap-4 mt-4">
                <div>
                  <div className="w-20 h-20 rounded-full flex justify-center border-dashed cursor-pointer border-2 border-yellow-300">
                      <p className="text-yellow-300 text-4xl mt-2">+</p>
                </div>
                <p className="mt-2 text-center">Add</p>
                </div>
               <SubscriberProfile path='Images/John.png' name='John'/>
               <SubscriberProfile path='Images/Collins.png' name='Collins'/>
               <SubscriberProfile path='Images/Funke.png' name='Funke'/>
               <SubscriberProfile path='Images/Henry.png' name='Henry'/>
               <SubscriberProfile path='Images/Mary.png' name='Mary'/>
              </div>
           </div>
           <div className="w-[40%]">
              <p className="text-xl font-semibold">
                Outcome Statistic
              </p>
              <ProgressBar style1='bg-orange-400 flex justify-center items-center w-[52%] h-full text-xs font-bold ' percent='52%' sub='Subscription' img={"Images/Subscription@3x.png"}/>
              <ProgressBar style1='bg-green-400 flex justify-center items-center w-[21%] h-full text-xs font-bold ' img='Images/Total Sales@3x.png' percent='21%' sub='Sales'/>
              <ProgressBar style1='bg-blue-400 flex justify-center items-center w-[74%] h-full text-xs font-bold ' percent='74%' sub='Revenue' img='Images/Get Revenue@3x.png'/>
           </div>
       </div>
       <div className="flex gap-2 mt-10 pb-28">
        <div className="w-[60%]">
         <div className="h-80 w-full rounded-2xl p-8 shadow-xl ms-2">
          <p className="text-lg">Chats</p>
          <div className=" mt-4 flex gap-4">
              <img className="w-20 h-20" src='Images/John.png'/>
              <div className="w-[70%]">
                <p className="font-bold text-lg">Victor Sunday</p>
                <p className="mt-2 font-semibold text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem est, tincidunt at placerat ultricies, vehicula in erat. Donec vitae ante mollis, pretium augue vel, feugiat risus.</p>
              </div>
              <p className="text-yellow-500 font-bold">
                Sat 27
              </p>
          </div>
          <div className=" mt-4 flex gap-4">
              <img className="w-20 h-20" src='Images/Collins.png'/>
              <div className="w-[70%]">
                <p className="font-bold text-lg">Anita Collins</p>
                <p className="mt-2 font-semibold text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem est, tincidunt at placerat ultricies, vehicula in erat. Donec vitae ante mollis, pretium augue vel, feugiat risus.</p>
              </div>
              <p className="text-yellow-500 font-bold">
                Sat 27
              </p>
          </div>
         </div>
        </div>
        <div className="w-[40%]">
          <div >
            <img className="" src="Images/flag.png"/>
          </div>
        </div>
       </div>
     </div>
    )
}