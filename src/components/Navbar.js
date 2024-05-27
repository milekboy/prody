// import { VscBellDot } from "react-icons/vsc";
// import { IoIosArrowDown } from "react-icons/io";

export default function Navbar(props){
return(
    <div className="flex border-b-2 w-full h-24 gap-5  p-5">
          <div className="w-[30%]">
          <p className="text-xl font-semibold">{props.head}</p>
          <p className="text-sm tracking-wide text-zinc-400">{props.summary}<br/> {props.cont}</p>
          </div>
          <input type="text" placeholder="Search here" className=" h-12 w-[30%] z-0  placeholder:z-30  border-2 rounded-lg border-zinc-400 ps-3 "/>
          {/* <VscBellDot className="mt-2 text-red-400 cursor-pointer" size={30}/> */}
          <div className="w-[2px] h-full bg-black"></div>
          <div className="w-14 h-14 rounded-full border">
         <img alt="" src='http://137.184.176.134:81/Images/John.png' className="w-full h-full cursor-pointer rounded-full"/>
        </div>
          <div>
            <p className="text-xl font-semibold">Lekan Okeowo</p>
            <p>Super Admin</p>
          </div>
          {/* <IoIosArrowDown className="mt-4 cursor-pointer" /> */}
        </div>
)
}