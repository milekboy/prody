import SideImage from "../components/SideImage";
import { Link } from "react-router-dom";
export default function Otp(){
    return(
 <div className=" lg:flex lg:px-0 px-4 gap-20">
    <div className="lg:ps-56 py-32">
    <div>
            <p className=" text-5xl font-bold">
      OTP Verification
    </p>
    <p className=" mt-3 text-lg ">A code has been sent to *******9772</p>
            </div>
            <div className="flex gap-2 lg:gap-4 mt-10">
                        <input
             
              className="w-14 lg:w-16 h-16 border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-[#FFC107] focus:shadow-md focus:text-gray-700 text-gray-400 transition"
            />
              <input
             
             className="w-14 lg:w-16 h-16 border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-[#FFC107] focus:shadow-md focus:text-gray-700 text-gray-400 transition"
            />
              <input
            
            className="w-14 lg:w-16 h-16 border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-[#FFC107] focus:shadow-md focus:text-gray-700 text-gray-400 transition"
            />
              <input
            
            className="w-14 lg:w-16 h-16 border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-[#FFC107] focus:shadow-md focus:text-gray-700 text-gray-400 transition"
            />
              <input
            
            className="w-14 lg:w-16 h-16 border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-[#FFC107] focus:shadow-md focus:text-gray-700 text-gray-400 transition"
            />
              <input
              className="w-14 lg:w-16 h-16 border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-[#FFC107] focus:shadow-md focus:text-gray-700 text-gray-400 transition"
            />
                        </div>
    <button className="bg-[#FFC107] text-white lg:w-[462px] w-full h-[74px] border-2 border-black text-2xl mt-14 rounded-xl">Continue</button>
     
     <Link to="user-login"> 
         <button className="bg-[#162D3A] text-white lg:w-[462px] w-full h-[74px] border-2 border-black text-2xl mt-4 rounded-xl">Back to Login</button>
         </Link>
         <div className=' justify-center gap-4 mt-4 items-center flex lg:w-[462px]'>
             <p className="font-semibold">Terms and conditions</p>
              <p className='font-bold mb-2 text-sm'>.</p>
             <p>Privacy policy</p>
             </div>
    </div>
    <div>
        <SideImage/>
    </div>
 </div>
    )
}