import SideImage from "../components/SideImage";
import { Link } from "react-router-dom";
export default function ResetPassword2(){
    return(
        <div className=" lg:flex lg:px-0 px-4 gap-20">
        <div className="lg:ps-56 py-32">
        <div>
                <p className=" text-5xl font-bold">
        Reset Password
        </p>
        <p className=" mt-3 text-lg ">Type in your new password</p>
                </div>
                <div className="  mt-10">
                <input type="text" placeholder="New Password" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                <input type="text" placeholder="Confirm Password" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
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